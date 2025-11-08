// import axios from 'axios'
import { useState, useEffect } from 'react'


const App = () => {

//  async function getData(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')

//     console.log(response)
//   }

  // const getData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users')

  //   const data = await response.json()

  //   console.log(data)

  //   // console.log(response)
  // }

  // API calling using  axios


  // const getData = async () =>{
  //   const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')

  //   console.log(data)
  // }

  // const getData = async () => {
  //   let {data} = await axios.get('https://picsum.photos/v2/list')
  //   console.log(data)
  // }

  // Learning useEffect hook

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
    // <div>
    //   <button onClick={getData}>Get Data</button>
    // </div>


      <div>
        <h1>number 1 = {num1}</h1>
        <h1>number 2 = {num2} </h1>
        <button onMouseEnter={mEnter} onMouseLeave={mLeave}>Hover Me</button>
      </div>
     
  )
}

export default App
