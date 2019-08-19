import React, { Component } from 'react'
import SearchBar from './SearchBar';
import { connect } from 'react-redux'

class SearchBarContainer extends Component {
    render() {
        return (
            <SearchBar />
        )
    }
}
function mapStateToProps (state) {
    return {

    }
}
export default connect(mapStateToProps)(SearchBarContainer)