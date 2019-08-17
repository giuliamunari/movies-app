import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMedia } from '../../actions/media'
import Loader from '../Loader/Loader'

class DetailContainer extends Component {
    id = parseInt(this.props.match.params.id)
    type = this.props.match.params.type
    componentDidMount() {
        this.props.getMedia(this.type, this.id)
    }
    render() {
        return (
            <div className='container'>
                <h1>detail page</h1>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {

    }
}
export default connect(mapStateToProps, {getMedia})(DetailContainer)