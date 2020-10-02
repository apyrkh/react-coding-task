import reducers from '@app/redux/reducers'
import { ExtraArguments } from '@app/redux/StoreInterfaces'
import { applyMiddleware, createStore } from 'redux'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const isProduction = process.env.NODE_ENV === 'production'

export const configureStore = (extraArguments: ExtraArguments) => {
  const thinkMiddleware = thunkMiddleware.withExtraArgument(extraArguments)
  const middleware = isProduction ?
    applyMiddleware(thinkMiddleware) :
    applyMiddleware(thinkMiddleware, loggerMiddleware)

  return createStore(reducers, middleware)
}
