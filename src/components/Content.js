import React from 'react'

class Content extends React.Component {
  sayHey () {
    alert(this.props.title)
  }
  render () {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>
          {this.props.body}
        </p>
        <button onClick={this.sayHey}>
          Click Me
        </button>
      </div>
    )
  }
}

export default Content
