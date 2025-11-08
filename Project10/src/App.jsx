//Form handling in react js
// two way binding 

import { useState } from "react";

const App = () => {

  const [title, setTitle] = useState('');

  const submitHandler = (e)=>{
    e.preventDefault();

    if(title === ''){
      console.log("Empty form can not be submited!")
    }else{
      console.log("Form submited!")
    }
    setTitle('')
  }

  return (
    <div>
      <form onSubmit={(e)=>{
          submitHandler(e) 
      }}> 
        <input 
        type="text" 
        placeholder="Enter your name"
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
