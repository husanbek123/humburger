import React from 'react'
import "./BurgerSide.scss"

export default function BurgerSide({side}) {

    if(side === "top") {
      return (
        <div className={`burger-side burger-${side}` }>
          <div className='sedanalar'>
            <div className='sedana'></div>
            <div className='sedana'></div>
            <div className='sedana'></div>
            <div className='sedana'></div>
            <div className='sedana'></div>
            <div className='sedana'></div>
            <div className='sedana'></div>
            <div className='sedana'></div>
            <div className='sedana'></div>
            <div className='sedana'></div>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className={`burger-side burger-${side}` }></div>
      )
    }
}
