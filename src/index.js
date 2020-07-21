import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import './index.scss'
import * as serviceWorker from './serviceWorker'
import Card from './components/card/card'

ReactDOM.render(
  <React.StrictMode>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Card />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
