import { useState } from 'react'
import { Input ,Display} from './Components/index'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  return (
    <>
    <div className='bg-slate-900 h-screen w-screen p-4'>
      <Input todos ={todos} setTodos ={setTodos}/>
      <Display/>
      <div className='text-white flex gap-3'>
        {todos.map((obj)=>{
          return <Display key={Date.now()} title={obj.title} description={obj.desc}/>
        })}
      </div>
    </div>
    
    </>
  )
}

export default App
