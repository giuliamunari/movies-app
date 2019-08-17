import React from 'react'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import DashboardContainer from './Dashboard/DashboardContainer';
import DetailContainer from './Detail/DetailContainer';

function Routes() {
  return (
    <div className='lalal'>
         <Route path="/" exact component={DashboardContainer} />
         <Route path='/:type/:id' exact component={DetailContainer} />
    </div>
  )
}

export default withRouter(connect()(Routes))