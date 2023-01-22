import React from 'react'


export default function Button({action, func, ing}) {
  
  if(action === "Add") {
    return <button onClick={func}>Add</button>
  }
  else {
    const remove = () => {
      if(document.querySelector(`.${ing}`)) {
        document.querySelector(`.${ing}`).remove()
      }
      else {
        console.log("Not Found");
      }
      
    }
    
    return (
      <button onClick={func}>Remove</button>
    )
  }

}
