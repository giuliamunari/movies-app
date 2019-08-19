import React, { Component } from 'react'
import SearchResult from './SearchResult';
import { connect } from 'react-redux'

class SearchResultContainer extends Component {
    render() {
        return (
            <div className='container'>
                <SearchResult />
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {

    }
}
export default connect(mapStateToProps)(SearchResultContainer)