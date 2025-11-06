const Button = ({num, setNum}) => {

    function increment(){
        setNum(num + 1)
        if(num === 100){
            alert("Limit reached!")
            setNum(0)
        }
        console.log("Increse...")
    }

    const decrement = () =>{
        setNum(num - 1)
        if(num === 0){
            alert("Negative number not allowed!")
            setNum(0);
        }
        console.log("Decrease...")
    }

  return (
    <div>
      <div className='card-btn'>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    </div>
  )
}

export default Button
