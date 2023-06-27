import { useState, useEffect } from "react";
import {alarmList} from './assets/alarmArray'
import AlarmList from "./AlarmList";

function DateTime(){
    const [time, setTime] = useState(new Date());


    useEffect(() => {
       var timer =  setInterval(() => setTime(new Date()), 1000)

       if(time.toTimeString().slice(0,8) == alarmList[0]){
        alert('Here' + time.toTimeString().slice(0,8) + "alarm" + alarmList[0])
        alarmList.shift()
       } else {
        console.log(time.toTimeString().slice(0,8), alarmList)
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