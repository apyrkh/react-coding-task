import EventCreationPage from '@app/pages/event/EventCreationPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react';


const Component = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/event/create" component={EventCreationPage}/>
      </Switch>
    </BrowserRouter>
  );
};

export const AppRouter = React.memo(Component);
