import React, { Component } from 'react'
import BurgerSide from '../BurgerSides/BurgerSide'
import Ingridients from '../Ingridients/Ingridients'


export default class Humburger extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ingridients: props.ings
    }
  }
  render() {
    return (
      <div className='burger'>
        <BurgerSide side="top"  />
        <Ingridients arr={this.state.ingridients} />
        <BurgerSide side="bottom" />
      </div>
    )
  }
}
