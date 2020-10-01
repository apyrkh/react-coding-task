import { AppRouter } from '@app/AppRouter';
import React from 'react';
import './less/index.less';


const Component = () => {
  return (
    <AppRouter/>
  );
};

export const App = React.memo(Component);
