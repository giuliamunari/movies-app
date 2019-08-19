import React, { Component } from 'react'
import SearchBar from './SearchBar';

class SearchBarContainer extends Component {
    state = {  type: 'movie', query: '' }
    optionsMedia = ['movie', 'tv']
    navigate = () => {
        this.context.router.push(`/${this.state.type}/${this.state.query}`);
    }
    onSubmit = (event) => {
        event.preventDefault()
        this.setState({  type: '', query: '' })
        this.navigate(`/${this.state.type}/${this.state.query}`)
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
                onClick={this.onClick}
                options={this.optionsMedia} />
        )
    }
}

export default SearchBarContainer