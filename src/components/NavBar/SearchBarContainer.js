import React, { Component } from 'react'
import SearchBar from './SearchBar';

class SearchBarContainer extends Component {
    state = { query: '' }
    onSubmit = (event) => {
        event.preventDefault()
    }
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <SearchBar
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                values={this.state.query}
                onClick={this.onClick} />
        )
    }
}

export default SearchBarContainer