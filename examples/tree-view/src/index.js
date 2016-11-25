import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import generateTree from './generateTree'
import ConnectedNode from './containers/Node'

const tree = generateTree()
const store = createStore(reducer, tree)

render(
  <Provider store={store}>
    <ConnectedNode id={0}  />
  </Provider>,
  document.getElementById('root')
)
