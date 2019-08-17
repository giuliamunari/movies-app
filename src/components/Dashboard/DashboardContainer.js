import React, { Component } from 'react'
import Dashboard from './Dashboard';
import { connect } from 'react-redux'
import { getPopularMovies, getPopularTv, getFamily, getDocumentaries } from '../../actions/movieLists'

class DashboardContainer extends Component {
    componentDidMount() {
        this.props.getPopularMovies()
        this.props.getPopularTv()
        this.props.getFamily()
        this.props.getDocumentaries()
    }
    render() {
        return (
            <div>
                <Dashboard />
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        
    }
}
export default connect(mapStateToProps, { getPopularMovies, getPopularTv, getFamily, getDocumentaries })(DashboardContainer)