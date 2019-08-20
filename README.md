This project is an application that collects movies and plays videos.

## Table of content
* [The API](#The-API)
* [How to start](#How-to-start)
* [Technologies used for this project](#Technologies-used-for-this-project)
* [Contributors](#Contributors)

## The API
This project uses content from [The Movie Data Base​ API](https://www.themoviedb.org/) version 3
API documentation:
Overview: [​https://www.themoviedb.org/documentation/api​]
Getting started: [​https://developers.themoviedb.org/3/getting-started/introduction​]
To use the API you need to register and get an ​api_key​ [https://www.themoviedb.org/account/signup]

## How to start
To start working on this project you can download or clone this repository, after you can:

1. Run `npm install` on your terminal to install all the dependendencies
2. Create in the app directory a .env file and add your api_key as `REACT_APP_MOVIES_API_KEY=<the api_key here>`
3. Run `npm start` to get a preview of the front end

## Technologies used for this project
1. React with `create-react-app`
2. `redux` and `react-redux` to set up a redux store and dispatch actions
3. `react-router` and `react-router-dom` to use routes in react and have dom elements that work with them
4. `superagent` to fetch data from the database 
5. `redux-thunk` to dispatch actions for the redux store
6. `react-leaf-carousel` to show carousels in homepage [Documentation](https://github.com/leaffm/react-infinite-carousel#readme).
7. `vimond-replay` to load HLS videos with `shaka-player`[Documentation](https://github.com/vimond/replay)
8. `shaka-player` to load HLS videos [Documentation](https://github.com/google/shaka-player)
9. `mux.js` to improve the loading of HLS videos [Homepage](https://github.com/videojs/mux.js/)
