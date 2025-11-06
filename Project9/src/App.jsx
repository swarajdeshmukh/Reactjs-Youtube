// // hooks project 
// //useState
// //useReducer
// //useRef
// // useEffect 
// // useMemo 
// // useContext 

// import { useState } from "react"

// // useCallback 
// const App = () => {
//   const [num, setNum] = useState(0)
//   const [user, userName] = useState('')

//   function bocha(){
//     setNum(23)
//     userName("Swaraj Deshmukh")
//   }

//   return (
//     <div>
//       <h1>Age is: {num}</h1>
//       <h1>Name is: {user}</h1>
//       <button onClick={bocha}>Click</button>
//     </div>
//   )
// }

// export default App


import Card from './components/Card'
const App = () => {
  
  return (
    <div className='parent'>
      <Card />
    </div>
  )
}

export default App
