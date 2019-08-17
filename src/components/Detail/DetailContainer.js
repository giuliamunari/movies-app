import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loader from '../Loader/Loader'

class DetailContainer extends Component {
    id = parseInt(this.props.match.params.id)
    componentDidMount() {
       
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
export default connect (mapStateToProps)(DetailContainer)