import * as request from 'superagent'
import { baseUrl, apiKey, languageUrl } from '../constants'
import { errorAction } from './errorApi'

export const SEARCH_MEDIA_SUCCESS = 'SEARCH_MEDIA_SUCCESS'
export function getMedia(query) {
    //https://api.themoviedb.org/3/search/multi?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
    const url = `${baseUrl}/search/multi?api_key=${apiKey}&${languageUrl}&query=${query}`
    return async function (dispatch) {
        try {
            const response = await request(url)
            const mediaItem = response.body
            dispatch({
                type: SEARCH_MEDIA_SUCCESS,
                payload: {mediaItem}
            })
        }
        catch (error) {
            dispatch(errorAction(error))
        }
    }
}