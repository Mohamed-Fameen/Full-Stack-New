import { useState } from 'react'
import alarm from './alarms'
import DateTime  from './DateTime'
import AlarmList from './AlarmList'

function App() {
  const [alarm, setAlarm] = useState([])
  const [time, setTime] = useState('')
  const handleChange = () => {
    
    console.log(time)
    //setTime(time + ':00')
    setAlarm([...alarm, time + ":00"])
    console.log(typeof alarm)
    console.log(alarm)
  }
  return (
    <> 
    <DateTime alarmTime = {alarm} id="date-time"/>
     <label>
      Alarm : 
        <input type='time' onChange={(e)=> {setTime(e.target.value) }}></input>
     </label>
     <br></br>
     <button onClick={ handleChange}>Add Alarm</button>
     {time}

     <br></br>
     <AlarmList alarmList={alarm}></AlarmList>
    </>
  )
}

export default App;
