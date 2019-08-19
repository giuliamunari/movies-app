import {combineReducers} from 'redux'
import lists from './lists'
import media from './media'
import search from './search'

export default combineReducers ({
    lists,
    media,
    search
})