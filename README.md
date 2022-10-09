# :zap:API-Matic:zap:

A code generator that creates a ready-to-use API, with integrated database connection, documentation and testing.

## Why ?
- This project was born to automatize the creation of API's for web apps, saving time, effort and bughunting.
- The aim is to provide a simple API REST to start any development project, that is easily scalable and configurable. 
- It's also an excelent way to study some aspects of the BackEnd, because I wanted to help those new developers that seek to understand how to create a connection to a database, create routes, handle HTTP status codes, write documentation, etc.

## Technologies
- The code it's generated thanks to [Plop](https://plopjs.com/), a JS module that creates code based on .hbs files that serve as templates.
- The output API it's developed on NodeJS, uses the Express framework, Sequelize as ORM, and connects to any database supported by Sequelize.
- You can find the final API output and it's README [here](https://github.com/Juancho997/api_template).

## How ?

### Windows Users (CMD)
- Open a terminal in the root directory, and execute the following commands

> npm install

> npm start

This will clone the templates to the root directory, open up a terminal prompt, and delete the templates once the project it's created.
The terminal prompt will ask for :
- Your name or github user (just to create the package.json and add that data),
- The name of the project,
- The database that you are going to use,
- The name of the two database models files that will be generated (the API it's configured to have a 1:m relationship, but you can change that anyway you want),
- The same names, but in plural (to address some routes and files names that require pluralization).



### MacOS/Linux Users
- Open a terminal in the root directory, and execute the following commands

> npm run clone

> plop

This will clone the templates to the root directory and open up a terminal prompt with the above format.

You can also use this set of commands if you want to keep the "templates" folder.

## That's it! Now you have and API that you can customize
It also comes with documentation and testing, based on swaggerUI and Vitest+Supertest.

## How to use the generated API?

- Follow the instructions in this [README](https://github.com/Juancho997/api_template/blob/master/README.md)


Have fun! :D
