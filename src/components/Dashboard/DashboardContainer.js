/**
 * component rendering a dashboard of movies and Tv shows categories
 */
import React, { Component } from 'react'
import Carousel from './Carousel'
import { connect } from 'react-redux'
import { getPopularMovies, getPopularTv, getFamily, getDocumentaries } from '../../actions/movieLists'
import Loader from '../Loader/Loader'
import Header from '../Header/Header'

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
                <Header />
                <div className='container'>
                    {!this.props.media && <Loader />}
                
                    {
                        // orders the categories of media and for each one renders a carousel or an error
                        this.props.media &&
                        Object.keys(this.props.media).sort().map((key) => { 
                            if (key !== 'error') return <Carousel 
                                key={key} 
                                data={this.props.media[key].results} 
                                title={this.props.media[key].title} 
                                type={this.props.media[key].type} />
                            return <p key='0'>{`${this.props.media[key].text}`}</p>
                        })
                    }
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return { media: state.lists }
}
export default connect(mapStateToProps, { getPopularMovies, getPopularTv, getFamily, getDocumentaries })(DashboardContainer)