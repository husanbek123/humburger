import React, { Component } from 'react'


export default class Class_component extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      userId: 1,
      visible: true
    }
  }
  render() {
    const inc = () => {
      this.setState({count: this.state.count + 1})
    }
    const reset = () => {
      this.setState({count: 0, userId: 1})
    }
    const userId = () => {
      this.setState({userId: this.state.userId + 1})
    }

    const changeValue = () => {
      this.setState({visible: !this.state.visible})
    }

    const nimadir = () => {
      if(this.state.visible) {
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde distinctio omnis nam quis vel debitis cupiditate reprehenderit tempora magni? Sint molestias eaque perferendis mollitia obcaecati quibusdam sit quam inventore optio.</div>
      }
    }


    return (
      <>
        <div>
          <h1>Count: {this.state.count}</h1>
          <h1>User#{this.state.userId}</h1>
          <button onClick={inc}>increment</button>
          <button onClick={reset}>Reset</button>
          <button onClick={userId}>Switch User</button>
          <br />
          <button onClick={changeValue}>Change</button>
        </div>

        {
          // this.state.visible === true ? <div className='card'>Hello this is a Card</div> : null
          nimadir()
        }

        
      </>

    )

    // if(this.state.visible === true) {
    //   return (
    //     <div className='card'>Hello</div>
    //   )
    // }
  }
}

