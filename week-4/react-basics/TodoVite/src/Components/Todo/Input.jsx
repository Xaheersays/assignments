import React, { useRef } from 'react'

function Input({todos,setTodos}) {
    const titleRef = useRef(null)
    const descRef  = useRef(null)
    const handleClick = ()=>{
        console.log('clicked')
        const title = titleRef.current.value
        const desc  = descRef.current.value
        if (title.length===0 || desc.length===0)return 
        setTodos(prev=>[...prev,{title,desc}])
        // titleRef.current.value = '';
        // descRef.current.value = '';
    }
    return (
        <div className='bg-slate-500 rounded-md'>
            <div className=' p-4 '>
                <div className='flex text-white gap-4 '>
                <input ref={titleRef}
                    className='p-3 w-full rounded-md  text-black font-bold text-xl '
                    type='text' placeholder='write title here ...'/>
                    <input ref={descRef}
                    className='p-3 w-full  rounded-md  text-black text-xl '
                    type='text' placeholder='write description here ...'/>
                    <div className='font-bold text-center bg-sky-500 p-4
                    rounded-md ml-1 cursor-pointer  hover:bg-blue-700 active:scale-95 text-white    focus:outline-none focus:shadow-outline
                    '
                    onClick={handleClick}
                    >Add Task</div>
                </div>
            </div>  
        </div>
  )
}

export default Input