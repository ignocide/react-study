import React from 'react'

class Expression extends React.Component {
  sayHey () {
    alert('hey hello')
  }

  render () {
    let word = 'world'

    let pStyle = {
      color: 'aqua',
      backgroundColor: 'black'
    }
    return (
      <div>
        <h1>Hello {word}!</h1>
        <button onClick={this.sayHey}>
          Click Me
        </button>
        <p style={pStyle}>
          {1 == 1 ? 'True' : 'False'}
        </p>
      </div>
    )
  }
}

export default Expression
