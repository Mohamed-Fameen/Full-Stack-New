import { useState } from 'react'
//import './App.css'

function App() {
  const [salary, setSalary]  = useState(0)
  const[saving,setSaving] = useState(0.0)
  const[houseCost, setHouseCost] = useState(0)
  const [months, setMonths] = useState(0)
  
  return(
    <div>
      <label htmlFor="salary">Salary: </label><br/>
      <input type="number" id="salary" value={salary} onChange={ (e) => setSalary(e.target.value)}/><br/>
      <label htmlFor="savings">Savings : </label><br/>
      <input type="number" id="savings" value={saving} onChange={ (e) => setSaving(e.target.value)} min="0" max="1"/><br/>
      <label htmlFor="cost">Cost of house: </label><br/>
      <input type="number" id="cost" value={houseCost} onChange={ (e) => setHouseCost(e.target.value)}/><br/>
      <button type='button'  onClick={() => setMonths(Math.ceil((houseCost * 0.25)/(salary * saving)))}>Estimate</button><br/>
      { months > 0 && <p>{months} will take to save enough amount for down payment</p>}
    </div>
  )
}

export default App
