import * as request from 'superagent'
import { baseUrl, apiKey, languageUrl } from '../constants'
import { errorAction } from './errorApi'

export const LOAD_MEDIA_SUCCESS = 'LOAD_MEDIA_SUCCESS'
//https://api.themoviedb.org/3/find/{external_id}?api_key=<<api_key>>&language=en-US&external_source=imdb_id
//https://api.themoviedb.org/3/movie/343611?api_key={api_key}
export function getMedia(type, id) {
    const url = `${baseUrl}/${type}/${id}?api_key=${apiKey}&${languageUrl}`
    return async function (dispatch) {
        try {
            const response = await request(url)
            const media = response.body
            console.log(media, 'MEDIA')
            dispatch({
                type: LOAD_MEDIA_SUCCESS,
                payload: { media }
            })
        }
        catch (error) {
            console.log(error)
            dispatch(errorAction(error))
        }
    }
}