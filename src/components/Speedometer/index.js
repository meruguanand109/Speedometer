import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}
  onAccelerate = () => {
    this.setState(prevState => {
      if (prevState.speed === 200) {
        return {speed: prevState.speed}
      } else {
        return {speed: prevState.speed + 10}
      }
    })
  }

  OnApplyBrake = () => {
    this.setState(prevState => {
      if (prevState.speed === 0) {
        return {speed: prevState.speed}
      } else {
        return {speed: prevState.speed - 10}
      }
    })
  }
  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="heading">Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h1 className="sub-head">
          Speed is {speed}mph
        </h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="button bg-blue" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button className="button" onClick={this.OnApplyBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
