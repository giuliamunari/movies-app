import * as request from 'superagent'
import { baseUrl, apiKey } from '../constants'
//https://api.themoviedb.org/3/movie/popular?api_key=d33e3147fea38743d6c89fcd607646d5&language=en-US

export const LOAD_MOVIES_SUCCESS = 'LOAD_MOVIES_SUCCESS'

function loadMediaSuccess(movies) {
    return {
        type: LOAD_MOVIES_SUCCESS,
        payload: { movies }
    }
}

export function getListMedia(mediaType, category) {
    const url = `${baseUrl}/${mediaType}/${category}${apiKey}&language=en-US`
    return async function (dispatch) {
        try {
            const response = await request(url)
            const { results } = response.body
            dispatch(loadMediaSuccess(results))
        }
        catch (error) {
            console.log(error)
        }
    }

}