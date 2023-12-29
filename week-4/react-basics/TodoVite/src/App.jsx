import { useState } from 'react'
import { Input ,Display} from './Components/index'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  return (
    <>
    <div className='bg-slate-900  min-h-screen w-screen p-4'>
      <Input todos ={todos} setTodos ={setTodos}/>
      <Display/>
      <div className='text-white flex gap-3 flex-wrap justify-around  transition duration-500 ease-in-out ' >

        {todos.map((obj,x)=>{
          return <Display key={Date.now()+x} title={obj.title} description={obj.desc} className="transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100"/>
        })}
        
      </div>
    </div>
    
    </>
  )
}

export default App
