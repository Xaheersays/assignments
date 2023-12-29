import React from 'react'

function Display({title,description}) {
  return (
    <div className='text-white bg-slate-700  rounded-md p-4 mt-3 '>
        <div className='font-mono font-bold text-2xl'>
           title :  {title}
        </div>
        <div className='font-mono font-bold text-xl'>
           description: {description}
        </div>
    </div>
  )
}

export default Display