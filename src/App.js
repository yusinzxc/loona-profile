import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Main from './Main'
const App = () => {
  return(
    <React.Fragment>
    <Switch>
      <Route path='/home'>
        <Main />
      </Route>
    </Switch>
  </React.Fragment>
  )
}

export default App
