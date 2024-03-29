[Preview Link](https://pacific-garden-33962.herokuapp.com/)\
movies-app is an application that presents a searchable list of categorised movies and plays videos.

## Table of content
* [API Prerequisites](#API-Prerequisites)
* [How to start](#How-to-start)
* [Technologies used for this project](#Technologies-used-for-this-project)
* [Known issues](#Known-issues)

## API Prerequisite
This project relies on from [The Movie Data Base API](https://www.themoviedb.org/) (version 3) to get movies data.

* To use the API you need to register and get an api_key [link](https://www.themoviedb.org/account/signup)
* Once you have the api_key, create a `.env` file in the application directory and add your api_key as `REACT_APP_MOVIES_API_KEY=<api_key>`

## How to start
To start working on this project you can download or clone this repository, after you can:

1. Run `npm install` on your terminal to install all the dependendencies
2. Run `npm start` to get a preview of the front end

## Technologies used for this project
* React with `create-react-app`
* `redux` and `react-redux` to set up a redux store and dispatch actions
* `react-router` and `react-router-dom` to use routes in react and have dom elements that work with them
* `superagent` to fetch data from the API 
* `redux-thunk` to dispatch actions for the redux store
* `react-leaf-carousel` to show carousels in homepage [Documentation](https://github.com/leaffm/react-infinite-carousel#readme).
* `vimond-replay` to load HLS videos with `shaka-player`[Documentation](https://github.com/vimond/replay)
* `shaka-player` to load HLS videos [Documentation](https://github.com/google/shaka-player)
* `mux.js` to improve the loading of HLS videos [Homepage](https://github.com/videojs/mux.js/)

## Known issues
* https://github.com/Astrid88/movies-app/issues/21
* https://github.com/Astrid88/movies-app/issues/20
