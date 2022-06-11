# Real Time Chat

A realtime chat project where the user choose a room to join and talk with all users in that room.

![preview](https://github.com/eddotbarbosa/real-time-chat/blob/master/gitassets/preview.png?raw=true)

## Table of contents
* [Features](#Features)
* [Technologies](#technologies)
* [Getting Started](#Getting-Started)
* [License](#License)

## Features
* choice a user name
* choice of rooms
* talk in an real time chat

## Technologies
* npm
* nodejs
* rectjs
* sass
* editorconfig
* eslint
* dotenv
* nodemon
* cors
* express
* body parser
* socket.io

## Getting Started
### installation:
```
git init
git clone https://github.com/eddotbarbosa/real-time-chat
```
/real-time-chat/frontend
```
npm install
```
/real-time-chat/backend
```
npm install
```
### configs:
/real-time-chat/backend/.env
```
PORT="project port number, if empty the default value will be set to 5000"
```
/real-time-chat/frontend/src/configs/socketConfig.js
```
export const socketUrl = 'set to the same port of your backend, the default value was set to http://localhost:5000/';
```
### running:
/real-time-chat/frontend
```
npm start
```
/real-time-chat/backend
```
npm run dev
```

## License
[MIT license.](https://github.com/eddotbarbosa/real-time-chat/blob/master/LICENSE.md)

