import React from 'react'
import "./Ingridients.scss"

export default function Ingridients({arr}) {
    if(arr.length > 0) {
        return (
            <div className='burger-ingriedients' id='burger-ingriedients'>
                {
                    arr.map((item) => 
                        <div key={Math.random() * 10} className={item}></div>
                    )
                }
            </div>
        )
    }
    else {
        return (
            <div className='burger-ingriedients' id='burger-ingriedients'></div>
        )

    }
}
