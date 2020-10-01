import { AppRoutes } from '@app/AppRoutes'
import { configureStore } from '@app/redux/store'
import React from 'react'
import { Provider } from 'react-redux'
import './less/index.less'

const Component = () => {
  const store = configureStore()

  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  )
}

export const App = React.memo(Component)
