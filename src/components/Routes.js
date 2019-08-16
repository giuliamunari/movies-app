import React from 'react'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import DashboardContainer from './Dashboard/DashboardContainer';

function Routes() {
  return (
    <div>
         <Route path="/" exact component={DashboardContainer} />
    </div>
  )
}

export default withRouter(connect()(Routes))