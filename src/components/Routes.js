import React from 'react'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import DashboardContainer from './Dashboard/DashboardContainer';
import DetailContainer from './Detail/DetailContainer';

function Routes() {
  return (
    <div>
         <Route path="/" exact component={DashboardContainer} />
         <Route path='/media/:id' exact component={DetailContainer} />
    </div>
  )
}

export default withRouter(connect()(Routes))