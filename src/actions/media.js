/**
 * Action used to load a specific media 
 */

import * as request from 'superagent'
import { baseUrl, apiKey, languageUrl } from '../constants'
import { errorAction } from './errorApi'

export const LOAD_MEDIA_SUCCESS = 'LOAD_MEDIA_SUCCESS'
export function getMedia(type, id) {
    const url = `${baseUrl}/${type}/${id}?api_key=${apiKey}&${languageUrl}`
    return async function (dispatch) {
        try {
            const response = await request(url)
            const mediaItem = response.body
            dispatch({
                type: LOAD_MEDIA_SUCCESS,
                payload: {mediaItem}
            })
        }
        catch (error) {
            dispatch(errorAction(error))
        }
    }
}