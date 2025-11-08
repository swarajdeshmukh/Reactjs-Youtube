import { useEffect, useState } from 'react'



const App = () => {

  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(100)

  useEffect(()=>{
    console.log("useState is Running...")
  },[num1]) // you have to pass dependence array in useEffect 

  const mEnter = () => {
    setNum1(num1 + 1)
  }

  const mLeave = () => {
      setNum2(num2 + 10)
  }

  return (
    <div>
      <h1>number 1 = {num1}</h1>
      <h1>number 2 = {num2} </h1>
      <button onMouseEnter={mEnter} onMouseLeave={mLeave}>Hover Me</button>
    </div>
  )
}

export default App
