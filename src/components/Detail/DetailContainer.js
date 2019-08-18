import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMedia } from '../../actions/media'
import Loader from '../Loader/Loader'
import Detail from './Detail';

class DetailContainer extends Component {
    id = parseInt(this.props.match.params.id)
    type = this.props.match.params.type
    componentDidMount() {
        this.props.getMedia(this.type, this.id)
    }
    render() {
        console.log(this.sta)
        return (
            <div className='container'>
                {this.props.error &&
                    <div>
                        <h1>{this.props.error.status}</h1>
                        <h2>{this.props.error.text}</h2>
                    </div>
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