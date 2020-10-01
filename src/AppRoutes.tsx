import { EventCreationPage } from '@app/pages/event/EventCreationPage'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Component = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/event/create" component={EventCreationPage} />
      </Switch>
    </BrowserRouter>
  )
}

export const AppRoutes = React.memo(Component)
