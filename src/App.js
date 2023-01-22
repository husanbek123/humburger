import React, { Component } from 'react'
import "./App.scss"
import BurgerSide from './homework/Components/BurgerSides/BurgerSide'
import Button from './homework/Components/Button/Button'
import Humburger from './homework/Components/Humburger/Humburger'
import Ingridients from './homework/Components/Ingridients/Ingridients'

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      summary: 0.0,
      count: 0,
      ingridients: [],
      greensPrice: 0.1,
      tomatoPrice: 0.4,
      cheesePrice: 0.6,
      meetPrice: 1.2
    }
  }

  render() {

    const AddGreens = () => {
      let arr = this.state.ingridients
      arr.push("green")
      this.setState({
        ingridients: arr,
        summary: this.state.summary + this.state.greensPrice
      })
    }
    const AddTomato = () => {
      let arr = this.state.ingridients
      arr.push("tomato")
      this.setState({
        ingridients: arr,
        summary: this.state.summary + this.state.tomatoPrice
      })
    }
    const AddCheese = () => {
      let arr = this.state.ingridients
      arr.push("cheese")
      this.setState({
        ingridients: arr,
        summary: this.state.summary + this.state.cheesePrice
      })
      
    }
    const AddMeat = () => {
      let arr = this.state.ingridients
      arr.push("meat")
      this.setState({
        ingridients: arr,
        summary: this.state.summary + this.state.meetPrice
      })
    }

    const Hisoblash = () => {
      let hisoblangan = 0
      this.state.ingridients.map(item => {
        if(item === "green") {
          hisoblangan = hisoblangan + this.state.greensPrice 
        }
        else if(item === "tomato") {
          hisoblangan = hisoblangan + this.state.tomatoPrice
        }
        else if(item === "cheese") {
          hisoblangan = hisoblangan + this.state.cheesePrice
        }
        else if(item === "meat") {
          hisoblangan = hisoblangan + this.state.meetPrice
        }
      })
      this.setState({summary: hisoblangan})
    }

    const Remove = (itemName) => {
      let arr = this.state.ingridients
      let foundItem = arr.find(item => item === itemName);
      let index = arr.indexOf(foundItem)
      
      if(foundItem !== undefined) {
        let deleted = arr.splice(index, 1)
        this.setState({ingridients: arr})
        Hisoblash()
      }
    }

    
    return (
      <div className="App">
        <div id='sum'>Umumiy hisob: {this.state.summary.toFixed(1) + "$"} </div>
        <div className='burger-part'>
          <div className='burger-menu'>
            <div className='ingridient'>
              <h2>Ko'katlar <span>{this.state.greensPrice + "$"}</span></h2>
              <div className='ingridient-btns'>
                <Button action="Add" func={AddGreens} />
                <Button action="remove" ing="green"  func={() => Remove("green")} />
              </div>
            </div>
            <div className='ingridient'>
              <h2>Pomidor <span>{this.state.tomatoPrice + "$"}</span></h2>
              <div className='ingridient-btns'>
                <Button action="Add" func={AddTomato} />
                <Button action="remove" ing="tomato" func={() => Remove("tomato")} />
              </div>
            </div>
            <div className='ingridient'>
              <h2>Pishloq <span>{this.state.cheesePrice + "$"}</span></h2>
              <div className='ingridient-btns'>
                <Button action="Add" func={AddCheese} />
                <Button action="remove" ing="tomato" func={() => Remove("cheese")} />
              </div>
            </div>
            <div className='ingridient'>
              <h2>Go'sht <span>{this.state.meetPrice + "$"}</span></h2>
              <div className='ingridient-btns'>
                <Button action="Add" func={AddMeat} />
                <Button action="remove" ing="meat" func={() => Remove("meat")} />
              </div>
            </div>
          </div>
          <Humburger ings={this.state.ingridients} />
        </div>
      </div>
    )
  }
}


