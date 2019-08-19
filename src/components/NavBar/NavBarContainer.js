import React, { Component } from 'react'
import SearchBarContainer from './SearchBarContainer';

export default class NavBarContainer extends Component {
    render() {
        return (
            <div className='navBar'>
                <div className='container'>
                    <SearchBarContainer />
                </div>
            </div>
        )
    }
}
