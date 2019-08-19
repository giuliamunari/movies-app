import React, { Component } from 'react'
import SearchBar from './SearchBar';
import {connect} from 'react-redux'
class SearchBarContainer extends Component {
    state = { type: 'movie', query: '', errorForm: '' }
    optionsMedia = ['movie', 'tv']

    onSubmit = (event) => {
        event.preventDefault()
        if (this.state.query !== '') {
            this.setState({ query: '', errorForm: '' })
            return this.loadResultPage(this.state.type, this.state.query)
        }
        else return this.setState({errorForm: 'You need to add some keywords' })
    }
    loadResultPage = (type, query) => {
        return this.props.history.push(`/${type}/${query}`)
    }
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <div>
                <SearchBar
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                    values={this.state.query}
                    onClick={this.onClick}
                    options={this.optionsMedia} />
                <p>{this.state.errorForm}</p>
            </div>
        )
    }
}

export default connect()(SearchBarContainer)