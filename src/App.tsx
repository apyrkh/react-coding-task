import { AppRoutes } from '@app/AppRoutes'
import { AppContextProvider } from '@app/components/AppContextProvider'
import { configureStore } from '@app/redux/store'
import React from 'react'
import { Provider } from 'react-redux'
import './less/index.less'

const Component = () => {
  const store = configureStore()

  return (
    <Provider store={store}>
      <AppContextProvider>
        <AppRoutes />
      </AppContextProvider>
    </Provider>
  )
}

export const App = React.memo(Component)
