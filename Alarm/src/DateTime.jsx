import { useState, useEffect } from "react";

function DateTime(props){
    const [time, setTime] = useState(new Date());

    useEffect(() => {
       var timer =  setInterval(() => setTime(new Date()), 1000)

       if(time.toTimeString().slice(0,8) == props.alarmTime[0]){
        alert('Here')
        setAlarm(props.alarmTime.shift())
       } else {
        console.log(time.toTimeString().slice(0,8),  props.alarmTime)
       }

        return function cleanup() {
            clearInterval(timer)
        }
    });

    return (
        <div>
        <p> Time : {time.toTimeString().slice(0,8)}</p>
        <p> Date : {time.toLocaleDateString()}</p>
        </div>
    )
}

export default DateTime;