import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'

xit('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})
