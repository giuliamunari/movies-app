import React from 'react'
import { Route } from 'react-router-dom'
import DashboardContainer from './Dashboard/DashboardContainer';
import DetailContainer from './Detail/DetailContainer';
import VideoPlayerContainer from './VideoPlayer/VideoPlayerContainer';
import SearchResultContainer from './SearchResult/SearchResultContainer';
import SearchBarContainer from './SearchBarContainer/SearchBarContainer';

export default function Routes() {
  return (
    <div className='mainContainer'>
      <Route path="" exact component={SearchBarContainer}/>
      <Route path="/" exact component={DashboardContainer} />
      <Route path='/:type/:query' exact component={SearchResultContainer} />
      <Route path='/detail/:type/:id' exact component={DetailContainer} />
      <Route path='/detail/:type/:id/player' exact component={VideoPlayerContainer} />
    </div>
  )
}