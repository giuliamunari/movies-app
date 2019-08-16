import React, { Component } from 'react'
import Dashboard from './Dashboard';
import { connect } from 'react-redux'
import {getListMedia} from '../../actions/movieLists'

class DashboardContainer extends Component {
    componentDidMount(){
        this.props.getListMedia('movie', 'popular')
    }
    render() {
        return (
            <div>
                <Dashboard />
            </div>
        )
    }
}
function mapStateToProps(state){
    return {

    }
}
export default connect(mapStateToProps, {getListMedia})(DashboardContainer)