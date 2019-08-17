import React, { Component } from 'react'
import Carousel from './Carousel'
import { connect } from 'react-redux'
import { getPopularMovies, getPopularTv, getFamily, getDocumentaries } from '../../actions/movieLists'
import Loader from '../Loader/Loader'

class DashboardContainer extends Component {
    componentDidMount() {
        this.props.getPopularMovies()
        this.props.getPopularTv()
        this.props.getFamily()
        this.props.getDocumentaries()
    }
    render() {
        return (
            <div className='container'>
                <h1>Movies App</h1>
                {!this.props.media && <Loader />}
                {this.props.media &&
                    Object.keys(this.props.media).sort().map((key) => { 
                        if (key !== 'error') return <Carousel key={key} data={this.props.media[key].results} title={this.props.media[key].title} />
                        return <p key='0'>{`${this.props.media[key].text}`}</p>
                    })
                }
            </div>
        )
    }
}
function mapStateToProps(state) {
    return { media: state.lists }
}
export default connect(mapStateToProps, { getPopularMovies, getPopularTv, getFamily, getDocumentaries })(DashboardContainer)