import {getConnection, sql, queries} from "../database";
import * as tf from '@tensorflow/tfjs';
import fetch from 'node-fetch';

export const getPalabras = async (req, res) => {
    try {
        const pool = await getConnection(); 
        const result = await pool.request().query(queries.getPalabras);
        res.send(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getPredict = async (req, res) => {
    const {Sum, Desc} = req.body;
    var modelo = null;
    var dict = new Map();
    const del_words = ['in', 'the', 'a','to', 'from', 'be', 'on', 'an', 'as', 'of', 'is', 'it', 'that', 'this', 'or', 'and', 'I', 'he', 'she', 'they', 'them', 'us'];

    (async () => {
        modelo = await tf.loadLayersModel("http://127.0.0.1:8080/model.json");
    })();

    async function doPredict() {
        try {
            const response = await fetch('http://localhost:5000/diccionario');
            const data = await response.json();
            for(var i = 0; i < data.length; i++){
                dict.set(data[i].Word, data[i].Token);
            }
            
            function processToken(text){
                var token = [];
                const array = text.match(/\w+/g);
                for(var i = 0; i < del_words.length; i++){
                    while (array.includes(del_words[i])){
                        const idx = array.indexOf(del_words[i]);
                        array.splice(idx,1);
                    }
                }
                for(var i = 0; i < array.length; i++){
                    if (!dict.has(array[i])){
                        dict.set(array[i], dict.size + 1);
                    }
                    token[i] = dict.get(array[i]);
                }
                return token;
            }
        
            function top_words(tokens, words){
                var valores = [];
                var conteos = [];
                for(var i = 0; i < tokens.length; i++){
                    if(valores.indexOf(tokens[i]) == -1){
                        valores.push(tokens[i]);
                        conteos.push(1);
                    } else {
                        conteos[valores.indexOf(tokens[i])]++;
                    }
                }
                var n_words = 0;
                if(tokens.length > words){
                    var aux = [];
                    if (conteos.length >= words){
                        n_words = words;
                    } else{
                        n_words = conteos.length;
                    }
                    for(var i = 0; i < n_words; i++){
                        const max_cont = Math.max(...conteos);
                        const max_index = conteos.indexOf(max_cont);
                        aux.push(valores[max_index]);
                        valores.splice(max_index, 1);
                        conteos.splice(max_index, 1);
                    }
                    tokens = aux;
                }
                if (tokens.length < words){
                    const dif = words - tokens.length
                    for(var i = 0; i < dif; i++){
                        tokens.push(0)
                    }
                    return tokens;
                } else{
                    return tokens;
                }
            }
            var sum_token = processToken(Sum);
            var desc_token = processToken(Desc);
            sum_token = top_words(sum_token, 5);
            desc_token = top_words(desc_token, 20);
            const predict_token = sum_token.concat(desc_token);
        
            var tensor = tf.tensor2d([predict_token]);
            var prediccion = modelo.predict(tensor).dataSync();
            prediccion = Math.round(prediccion);
            res.send({"prediccion":{prediccion}});
        } catch (error) {
            console.error(error);
        }
    }
    doPredict();
};

