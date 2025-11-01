import React from 'react'

const Card = (props) => {
    console.log(props) // props is an object
    return (
        <div className='card'>
            <img src={props.img} alt="" />
            <h1>{props.user}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            <button>View Profile</button>
        </div>
    )
}

export default Card
