import { useState } from 'react'
//import './App.css'

function App() {
  const [startingPoint, setStartingPoint] = useState('')
  const [endPoint, setEndPoint] = useState('')
  const [pickUpTime, setPickUpTime] = useState('')
  const [carType,setCarType] = useState('')
  const [slip, setSlip] = useState(null)

  function Book(){
    
    let distance = Math.floor((Math.random() * 50))
    const chargePerKm = {
      "Hatchback" : 15,
      "Sedan" : 20,
      "SUV" : 30
    }
    const charge = chargePerKm[carType] * distance
    
    const bookSlip = 
    <div>
      <h2> Booking Slip</h2>
      <p>Starting Point : {startingPoint} </p>
      <p>End Point : {endPoint} </p>
      <p>Pickup time: {pickUpTime} </p>
      <p>Car Type: {carType} </p>
      <p> Distance : {distance}</p>
      <p> Charges : {charge}</p>
    </div>
    
    setSlip(bookSlip)
  }
  return (
    <div>
      <label>
        Starting Point :
        <input type='text' onChange={(e) => setStartingPoint(e.target.value)}/>
      </label> <br/>

      <label>
        End Point :
        <input type='text' onChange={(e) => setEndPoint(e.target.value)}/>
      </label> <br/>

      <label>
        Date and |Time :
        <input type='text' onChange={(e) => setPickUpTime(e.target.value)}/>
      </label> <br/>
      <label>
       Type of car:
        <select value={carType} onChange={(e) => setCarType(e.target.value)}>
          <option value="Hatchback">Hatchback</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
        </select>
      </label> <br/>

      <button onClick={Book}>Book</button>
      {slip && slip}
    </div>
  )
}

export default App
