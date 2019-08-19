import React, { Component } from 'react'
import SearchResult from './SearchResult';
import { connect } from 'react-redux'
import { search } from '../../actions/searchResults'
class SearchResultContainer extends Component {
    query = this.props.match.params.query
    type = this.props.match.params.type
    componentDidMount() {
        this.props.search(this.type, this.query)
    }
    render() {
        return (
            <div className='container'>
                {(this.props.searchResults && this.props.searchResults.total_results=== 0) && 
                    <h1>No items found for {this.query}</h1>
                }
                {(this.props.searchResults && this.props.searchResults.total_results> 0) && 
                <SearchResult data={this.props.searchResults.results} type={this.type} query={this.query}/>
                }
                
            </div>
        )
    }
}
function mapStateToProps(state) {
    const {searchResults, error} = state.search
    return {
        searchResults, error
    }
}
export default connect(mapStateToProps, { search })(SearchResultContainer)