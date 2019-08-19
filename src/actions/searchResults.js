import * as request from 'superagent'
import { baseUrl, apiKey, languageUrl } from '../constants'

export const SEARCH_MEDIA_SUCCESS = 'SEARCH_MEDIA_SUCCESS'
export function search(query) {
    //http https://api.themoviedb.org/3/search/multi\?apiKey\=d33e3147fea38743d6c89fcd607646d5\&query\='old gun'
    const url = `${baseUrl}/search/multi?api_key=${apiKey}&${languageUrl}&query=${encodeURIComponent(query)}`
    console.log(url)
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
           console.log(error)
        }
    }
}