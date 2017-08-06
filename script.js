import React, { Component } from 'react'
import Radium from 'radium'

class MyComponent extends Component {
  static propTypes = {
    clickHandler: React.PropTypes.func.isRequired,
    text: React.PropTypes.string.isRequired
  }
constructor(props) {
    super(props)
  }
render() {
    return (
      <div style={styles.main}>
        <div>{this.props.text}</div>
        <button
          onClick={this.props.clickHandler}
          type="button"
          value="Do Stuff" />
      </div>
    )
  }
}
const styles = {
  main: { background: '#aaa' }
}
export default Radium(MyComponent)
