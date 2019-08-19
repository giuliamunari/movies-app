/**
 * component rendering the details of a selected movie or tv show
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMedia } from '../../actions/media'
import Loader from '../Loader/Loader'
import Detail from './Detail';
import Error from '../Error/Error'

class DetailContainer extends Component {
    id = parseInt(this.props.match.params.id)
    type = this.props.match.params.type
    componentDidMount() {
        this.props.getMedia(this.type, this.id)
    }
    render() {
        return (
            <div className='container'>
                {this.props.error &&
                    <Error error={this.props.error} />
                }
                {(!this.props.mediaItem && !this.props.error) && <Loader />}
                {this.props.mediaItem && <Detail mediaItem={this.props.mediaItem} type={this.type}/>}
            </div>
        )
    }
}
function mapStateToProps(state) {
    const { mediaItem, error } = state.media
    return {
        mediaItem, error
    }
}
export default connect(mapStateToProps, { getMedia })(DetailContainer)