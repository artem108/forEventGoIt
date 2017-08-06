import React from 'react'
import Radium from 'radium'

const MyComponent = props => (
  <div style={styles.main}>
    <div>{props.text}</div>
    <button
      onClick={props.clickHandler}
      type="button"
      value="Do Stuff" />
  </div>
)
MyComponent.propTypes = {
  clickHandler: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired
}
const styles = {
  main: { background: '#aaa' }
}
export default Radium(MyComponent)
