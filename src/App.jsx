import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)



  return (
    <div className='maindiv'>
    <div className='firstdiv'>
      <div className='buttons'>
        <button onClick={() => { setCount(count - 1) }}>-</button>
        <h2 className='heading'>{count}</h2>
        <button onClick={() => { setCount(count + 1) }}>+</button>
      </div>
    </div>
    <button className='reset' onClick={() => { setCount(0) }}> reset</button>
  </div>
  
  )
}

export default App
