
export const ERROR = 'ERROR'

export function errorAction(error) {
    const text = error.response ? error.response.body.status_message : 'resource not found'
    const status = error.status
    return {
        type: ERROR,
        payload: { error: { status, text } }
    }
}