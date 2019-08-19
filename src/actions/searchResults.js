import * as request from 'superagent'
import { baseUrl, apiKey, languageUrl } from '../constants'
import { errorAction } from './errorApi'

export const SEARCH_MEDIA_SUCCESS = 'SEARCH_MEDIA_SUCCESS'
export function search(type, query) {
    const url = `${baseUrl}/search/${type}?api_key=${apiKey}&${languageUrl}&query=${query}&include_adult=false`
    return async function (dispatch) {
        try {
            const response = await request(url)
            const searchResults = response.body
            dispatch({
                type: SEARCH_MEDIA_SUCCESS,
                payload: {searchResults}
            })
        }
        catch (error) {
            dispatch(errorAction(error))
        }
    }
}