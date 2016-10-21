import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'

const rootElement = document.getElementById('root')

App.defaultProps = {
  headerTitle: 'Default header',
  contentTitle: 'Default contentTitle',
  contentBody: 'Default contentBody'
}

ReactDOM.render(<App />, rootElement)
