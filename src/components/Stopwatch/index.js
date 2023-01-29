import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {elapsedSeconds: 0}

  clearTimerInterval = () => {
    clearInterval(this.intervalId)
  }

  updateSetInterval = () => {
    this.setState(prevState => ({elapsedSeconds: prevState.elapsedSeconds + 1}))
  }

  onStartTimer = () => {
    this.intervalId = setInterval(this.updateSetInterval, 1000)
  }

  onStopTimer = () => {
    this.clearTimerInterval()
  }

  onResetTimer = () => {
    this.setState({elapsedSeconds: 0})
  }

  elapsedInSeconds = () => {
    const {elapsedSeconds} = this.state
    const minutes = Math.floor(elapsedSeconds / 60)
    const seconds = Math.floor(elapsedSeconds % 60)

    const stringfyMinute = minutes > 9 ? minutes : `0${minutes}`
    const stringfySeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringfyMinute}:${stringfySeconds}`
  }

  render() {
    // const {elapsedSeconds} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="stop-watch-container">
          <div className="timer-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              className="timer-img"
              alt="stopwatch"
            />
            <p className="timer-p">Timer</p>
          </div>
          <h1>{this.elapsedInSeconds()}</h1>
          <div className="controls-container">
            <button
              type="button"
              className="control-btn start-btn"
              onClick={this.onStartTimer}
            >
              Start
            </button>
            <button
              type="button"
              className="control-btn stop-btn "
              onClick={this.onStopTimer}
            >
              Stop
            </button>
            <button
              type="button"
              className="control-btn reset-btn "
              onClick={this.onResetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
