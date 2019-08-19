import React, { Component } from 'react'
import SearchResult from './SearchResult';
import { connect } from 'react-redux'
import { search } from '../../actions/searchResults'
class SearchResultContainer extends Component {
    query = this.props.match.params.query
    componentDidMount() {
        this.props.search(this.query)
    }
    render() {
        return (
            <div className='container'>
                <h1>lalal</h1>
                <SearchResult />
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {

    }
}
export default connect(mapStateToProps, { search })(SearchResultContainer)