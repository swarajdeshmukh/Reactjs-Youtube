import React, { useState } from 'react'

const App = () => {
  
  const [count, setCount]= useState(0);

  // const counter = () =>{
  //   setCount(count + 1);
  //   if(count >= 10){
  //     alert("Count limit reached");
  //     setCount(0);
  //   }
  // }

  // const userInput = (val) =>{
  //   console.log(val.target.value)
  // }
  
  // const userInput = (val) =>{
  //   console.log(val)
  // }

  const mouseSpeed = (val) =>{
    if(val > 0){
      console.log("niche jaa raha hai")
    }else{
      console.log("uppar jaa raha hai")
    }
  }

  return (
    <div className='parent' onWheel={(elem) =>{
      mouseSpeed(elem.deltaY)
    }} >
      {/* <div className="child">
        <h1>{count}</h1>
        <button onClick={counter}>Click me</button>

          <input onChange={userInput} type="text" placeholder='Enter your name...' />

          <input onChange={function(elem){
            userInput(elem.target.value)
          }} type="text" placeholder='Enter your name...' />
          
      </div> */}

      <div id="page1"></div>
      <div id="page2"></div>
      <div id="page3"></div>
      
    </div>
  )
}

export default App
