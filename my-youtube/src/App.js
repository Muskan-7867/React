import React from 'react'
import Body from './components/Body'
import Head from './components/Head'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
    <div>
     <Head />
     <Body />
    </div>
    </Provider>
  )
}

export default App