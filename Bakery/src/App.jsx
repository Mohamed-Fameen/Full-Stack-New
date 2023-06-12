import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

function App() {
  const [muffins, setMuffins] = useState(20)
  const [cookies,setCookies] =  useState(20)
  const [totalSold, setTotalSold] = useState(20)

  return (
    <div>
      <p>Total items sold: {totalSold}</p>
      <div>
        <p>Muffins</p>
        <p>Muffins Available : {muffins}</p>
        <button onClick={() => {setMuffins( muffins - 1); setTotalSold(totalSold+1)}}>Buy</button>
      </div>
      <div>
        <p>Cookies</p>
        <p>Cookies Available : {cookies}</p>
        <button onClick={() =>{setCookies( cookies - 1); setTotalSold(totalSold+1)}}>Buy</button>
      </div>
    </div>
  )
   
   
}

export default App
