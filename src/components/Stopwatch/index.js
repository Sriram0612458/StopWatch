import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {min: 0, sec: 0}

  clearintervel = () => clearInterval(this.timerId)

  StartButton = () => {
    this.timerId = setInterval(this.addingCountUp, 1000)
  }

  addingCountUp = () => {
    this.setState(prev => ({sec: prev.sec + 1}))
  }

  StopButton = () => {
    this.clearintervel()
  }

  resetButton = () => {
    this.clearintervel()
    this.setState({min: 0, sec: 0})
  }

  timerFunctinality = () => {
    const {min, sec} = this.state
    const totalSecs = min * 60 + sec
    const minutes = Math.floor(totalSecs / 60)
    const seconds = Math.floor(totalSecs % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`
    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    return (
      <div className="main-div">
        <div>
          <h1 className="heading">Stopwatch</h1>
          <div className="sub-div">
            <div className="sub">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p>Timer</p>
            </div>
            <h1 className="timer">{this.timerFunctinality()}</h1>
            <div>
              <button className="start-button" onClick={this.StartButton}>
                Start
              </button>
              <button className="stop-button" onClick={this.StopButton}>
                Stop
              </button>
              <button className="reset-button" onClick={this.resetButton}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
