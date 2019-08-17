import * as request from 'superagent'
import { baseUrl, apiKey } from '../constants'

//https://api.themoviedb.org/3/series/popular?api_key=d33e3147fea38743d6c89fcd607646d5&language=en-US

export const LOAD_MOVIES_SUCCESS = 'LOAD_MOVIES_SUCCESS'
export const LOAD_DOCUMENTARIES_SUCCESS = 'LOAD_DOCUMENTARIES_SUCCESS'
export const LOAD_FAMILY_SUCCESS = 'LOAD_FAMILY_SUCCESS'
export const LOAD_TV_SUCCESS = 'LOAD_TV_SUCCESS'
export const ERROR = 'ERROR'

function errorAction(error) {
    const text = error.response.body.status_message
    const status = error.status
    return {
        type: ERROR,
        payload: { error : { status, text } }
    }
}

export function getDocumentaries() {
    const url = `${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&with_genres=99&sort_by=vote_average.desc&vote_count.gte=10`
    return async function (dispatch) {
        try {
            const response = await request(url)
            const { results } = response.body
            dispatch({
                type: LOAD_DOCUMENTARIES_SUCCESS,
                payload: { 'Documentary': results }
            })
        }
        catch (error) {
            
            dispatch(errorAction(error))
        }
    }
}

export function getFamily() {
    const url = `${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&with_genres=10751&sort_by=vote_average.desc&vote_count.gte=10`
    return async function (dispatch) {
        try {
            const response = await request(url)
            const { results } = response.body
            dispatch({
                type: LOAD_FAMILY_SUCCESS,
                payload: { 'Family': results }
            })
        }
        catch (error) {
            console.log(error)
            dispatch(errorAction(error))
        }
    }
}

export function getPopularMovies() {
    const url = `${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&with_genres=10751&sort_by=vote_average.desc&vote_count.gte=10`
    return async function (dispatch) {
        try {
            const response = await request(url)
            const { results } = response.body
            dispatch({
                type: LOAD_MOVIES_SUCCESS,
                payload: { 'Popular movies': results }
            })
        }
        catch (error) {
            console.log(error)
            dispatch(errorAction(error))
        }
    }
}

export function getPopularTv() {
    const url = `${baseUrl}/discover/tv?api_key=${apiKey}&language=en-US&with_genres=10751&sort_by=vote_average.desc&vote_count.gte=10`
    return async function (dispatch) {
        try {
            const response = await request(url)
            const { results } = response.body
            dispatch({
                type: LOAD_TV_SUCCESS,
                payload: { 'Popular series': results }
            })
        }
        catch (error) {
            console.log(error)
            dispatch(errorAction(error))
        }
    }
}