/**
 * component rendering the search results
 */
import React, { Component } from 'react'
import SearchResult from './SearchResult';
import { connect } from 'react-redux'
import { search } from '../../actions/searchResults'
import Error from '../Error/Error'
import Loader from '../Loader/Loader';

class SearchResultContainer extends Component {
    componentDidMount() {
        this.loadResults()
    }
    componentDidUpdate() {
        this.loadResults()
    }
    loadResults = () => this.props.search(this.props.match.params.type, this.props.match.params.query)
    render() {
        return (
            <div className='container'>
                {!this.props.searchResults && <Loader />}
                {(this.props.searchResults && this.props.searchResults.total_results === 0) &&
                    <h1>No items found for {this.query}</h1>
                }
                {(this.props.searchResults && this.props.searchResults.total_results > 0) &&
                    <SearchResult data={this.props.searchResults.results} type={this.type} query={this.query} />
                }
                {this.props.error &&
                    <Error error={this.props.error} />
                }
            </div>
        )
    }
}
function mapStateToProps(state) {
    const { searchResults, error } = state.search
    return {
        searchResults, error
    }
}
export default connect(mapStateToProps, { search })(SearchResultContainer)