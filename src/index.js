import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import rootSaga from './sagas'
import rootReducer from './reducers'
import routes from './routes'

const initialState = window.__INITIAL_STATE__

// create saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(sagaMiddleware)
)

console.log('redux store', store)

// store.runSaga(rootSaga)
sagaMiddleware.run(rootSaga)

// check if its hmr.
if (module.hot) {
  // accept itself.
  module.hot.accept()
}

const App = () => (
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>
)

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
