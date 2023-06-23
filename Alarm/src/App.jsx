import { useState } from 'react'
import alarm from './alarms'
import DateTime  from './DateTime'

function App() {
  const [time, setTime] = useState('')

  const handleChange = () => {
    console.log(time)
    alarm(time)
  }
  return (
    <> ;
    <DateTime/>
     <label>
      Alarm : 
        <input type='datetime-local' onChange={ (e)=> {setTime(e.target.value)}}></input>
     </label>
     <button onClick={ handleChange}>Add Alarm</button>
    </>
  )
}

export default App;
