import React from 'react'
import Header from './Header'
import Content from './Content'

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Hello React</h1>
        <Header title={this.props.headerTitle} />
        <Content title={this.props.contentTitle} body={this.props.contentBody} />
      </div>
    )
  }
}

App.propTypes = {
  title: React.PropTypes.string,
  body: React.PropTypes.string.isRequired
}
export default App
