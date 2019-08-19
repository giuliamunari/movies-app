import React from 'react'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import DashboardContainer from './Dashboard/DashboardContainer';
import DetailContainer from './Detail/DetailContainer';
import VideoPlayerContainer from './VideoPlayer/VideoPlayerContainer';
import SearchResultContainer from './SearchResult/SearchResultContainer';

function Routes() {
  return (
    <div className='mainContainer'>
      <Route path="/" exact component={DashboardContainer} />
      <Route path='/search/:query' exact component={SearchResultContainer} />
      <Route path='/:type/:id' exact component={DetailContainer} />
      <Route path='/:type/:id/player' exact component={VideoPlayerContainer} />
    </div>
  )
}

export default withRouter(connect()(Routes))