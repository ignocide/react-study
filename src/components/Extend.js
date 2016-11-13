import React from 'react'
import App from './App'
import Header from './Header'
import Content from './Content'

class Extend extends React.Component {
  render () {
    return (
      <div>
        <Header/>
        <Content/>
        <App/>
      </div>
    )
  }
}

export default Extend
