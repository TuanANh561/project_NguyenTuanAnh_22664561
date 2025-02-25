import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Appj from './hook/todoReducer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Appj></Appj>
      </div>
    </>
  )
}

export default App
