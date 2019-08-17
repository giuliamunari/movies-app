import * as request from 'superagent'
import { baseUrl, apiKey, languageUrl } from '../constants'
import { errorAction } from './errorApi'

export const LOAD_MOVIES_SUCCESS = 'LOAD_MOVIES_SUCCESS'
export const LOAD_DOCUMENTARIES_SUCCESS = 'LOAD_DOCUMENTARIES_SUCCESS'
export const LOAD_FAMILY_SUCCESS = 'LOAD_FAMILY_SUCCESS'
export const LOAD_TV_SUCCESS = 'LOAD_TV_SUCCESS'

export function getDocumentaries() {
    const url = `${baseUrl}/discover/movie?api_key=${apiKey}&${languageUrl}&with_genres=99&sort_by=vote_average.desc&vote_count.gte=10`
    return async function (dispatch) {
        try {
            const response = await request(url)
            const { results } = response.body
            dispatch({
                type: LOAD_DOCUMENTARIES_SUCCESS,
                payload: { 4: { results, title: 'Documentaries', type: 'movie' } }
            })
        }
        catch (error) {
            dispatch(errorAction(error))
        }
    }
}

export function getFamily() {
    const url = `${baseUrl}/discover/movie?api_key=${apiKey}&${languageUrl}&with_genres=10751&sort_by=vote_average.desc&vote_count.gte=10`
    return async function (dispatch) {
        try {
            const response = await request(url)
            const { results } = response.body
            dispatch({
                type: LOAD_FAMILY_SUCCESS,
                payload: { 3: { results, title: 'Family', type: 'movie' } }
            })
        }
        catch (error) {
            dispatch(errorAction(error))
        }
    }
}

export function getPopularMovies() {
    const url = `${baseUrl}/movie/popular?api_key=${apiKey}&${languageUrl}`
    return async function (dispatch) {
        try {
            const response = await request(url)
            const { results } = response.body
            dispatch({
                type: LOAD_MOVIES_SUCCESS,
                payload: { 1: { results, title: 'Popular movies', type: 'movie' } }
            })
        }
        catch (error) {
            dispatch(errorAction(error))
        }
    }
}

export function getPopularTv() {
    const url = `${baseUrl}/tv/popular?api_key=${apiKey}&${languageUrl}`
    return async function (dispatch) {
        try {
            const response = await request(url)
            const { results } = response.body
            dispatch({
                type: LOAD_TV_SUCCESS,
                payload: { 2: { results, title: 'Popular series', type: 'tv' } }
            })
        }
        catch (error) {
            dispatch(errorAction(error))
        }
    }
}