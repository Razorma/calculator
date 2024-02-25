import { useState } from 'react'
import Screen from './components/Screen'
import Buttons from './components/Buttons'

function App() {
  const [equation, setEquation] = useState("");
  const [total, setTotal] = useState("");

  return (
    <div className='container'>
      <Screen equation={equation} total={total}/>
      <Buttons setEquation={setEquation} setTotal={setTotal} equation={equation}/>
    </div>
  )
}

export default App
