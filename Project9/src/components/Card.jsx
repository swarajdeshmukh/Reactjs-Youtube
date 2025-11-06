import Button from "./Button"
import { useState } from 'react'

const Card = () => {
    const [num, setNum] = useState(95);

  return (
    <div className='card'>
        <div className="count">
            <h1>{num}</h1>
        </div>
        <Button num={num} setNum={setNum}/>
    </div>
  )
}

export default Card
