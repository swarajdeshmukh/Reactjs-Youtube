import React from 'react'
import {MoveRight} from 'lucide-react'
const RightCardContent = (props) => {
  return (
     <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center'>{props.id}</h2>
            <div>
                <p className='text-lg leading-normal text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis minus aliquam ipsum et sequi!</p>
                <div className='flex items-center justify-between gap-2'>
                    <button className='bg-blue-600 text-white font-medium px-7 py-3 rounded-full '> {props.tag}</button>
                    <button className='bg-blue-600 text-white font-medium px-4 py-3 rounded-full '><MoveRight /></button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContent
