![GitHub Contributors](https://img.shields.io/github/contributors/chingu-voyages/v36-toucans-team-04?style=plastic)
![GitHub Language Count](https://img.shields.io/github/languages/count/chingu-voyages/v36-toucans-team-04?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/chingu-voyages/v36-toucans-team-04?style=plastic)

# User story effort prediction backend

Backend for a model based on user stories obtained from the Cemex Go app through JIRA, which allows predictions of the days of effort required by a task or project.

## Overview

The main purpose of this application is to be able to obtain a prediction of the effort in number of days necessary to fulfill different user stories. This, through a web application.
It looks forward to optimize the scheduling and estimation of times.

## Endpoints

| Key Feature                                              | Status           |
| -------------------------------------------------------- | ---------------- |
| /getUsersNoAdmin                                         | Complete         |
| /createUser                                              | Complete         |
| /postUserLogin                                           | Complete         |
| /getUserByID/:UsuarioID                                  | Complete         |
| /updateUserByID/:Correo/:Contrasena                      | Complete         |
| /updateUserByID/:Correo/:Contrasena                      | Complete         |
| /createRecord                                            | Complete         |
| /getRecordUser/:UsuarioID                                | Complete         |
| /diccionario                                             | Complete         |
| /prediccion                                              | Complete         |

## Running the Project

This project is the backend server of a React project that can be found in the following link:
> Live Link: https://github.com/elleveTEC/webapp

### Steps
1. Clone this repository.
> Live Link: https://github.com/elleveTEC/API

2. cd to the project folder.
```
    cd API
```
3. Install dependencies. 
```
    npm install
```
4. Run the app in port 5000.
```
    npm run dev
```

## Languages

- Javascript
- JSX

## Dependencies

- nodejs
- express
- TensorFlow
- mssql
