## Introduction
Healthera shares its amazing jokes to the world. This is the admin portal for managing all the jokes. It's a [React App](https://reactjs.org/) with [Redux](https://redux.js.org/), [Redux-Saga](https://github.com/redux-saga/redux-saga), [NodeJS](https://nodejs.org/en/), [Express](https://expressjs.com/), [JWT](https://jwt.io/), [Sequelize](http://docs.sequelizejs.com/) and [MySQL](https://www.mysql.com/). And with some utility helpers [Lodash](https://lodash.com/), [Axios](https://github.com/axios/axios) and [Jest](https://jestjs.io/) for testing the components.

## Features
* User based (Default cred is 'admin@healthera.com foozle')
* Automatic and filtered(search by words in a sentence) search for jokes saved
* Group jokes by using tags
* Auto-suggest for new tags
* CRUD for jokes

## How to Run
In the project directory, run
`npm install`
This will download all the required packages need to run the application.

## Frontend Configurations
Navigate to `src/config.js`

## Backend Configurations
Navigate to `config.js`. Change `prepare` to `true` for first time run.
This will initialize the DB with jokes. Set it back to `false` when initialization is complete. You can also change the `HTTP_SERVER_PORT` to desired port for the application.
 
## Database Configurations
Either create or edit the database names and user details. Default database name is `HEALTHERA_TEST`, and `healthera_admin` and `pa55word`are the user name and password respectively.

## Run 
`npm run start-app-prod` to build the project for production

## API routes

#### Documentation
`/healthera/api/docs`

#### Tags
`/healthera/api/v1/tags`

#### Jokes
`/healthera/api/v1/jokes`

#### Sessions
`/healthera/api/sessions`

#### Users
`/healthera/api/users`

## Technologies and Frameworks used
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Redux-Saga](https://github.com/redux-saga/redux-saga)
* [Webpack](https://webpack.js.org/)
* [Jest](https://jestjs.io/)
* [Enzyme](https://airbnb.io/enzyme/)
* [Lodash](https://lodash.com/)
* [NodeJS](https://nodejs.org/en/) 
* [Express](https://expressjs.com/)
* [JWT](https://jwt.io/)
* [Sequelize](http://docs.sequelizejs.com/)
* [MySQL](https://www.mysql.com/)

## Live Demo
[Healthera Joke](http://35.231.169.193:7001/) credentials `admin@healthera.com` `foozle`


## Backlog
##### Show confirmation popups or dialog
##### Complete Swagger docs
##### Implement UI for network unreachable
##### Implement UI loading for async requests

