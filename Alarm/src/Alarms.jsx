import { useState } from "react"
function alarm(alarmTime){
    console.log(alarmTime)
    const [alarms, setAlarms] =  useState(null);
    return (
        <>
            <p>alarms</p>
        </>
    )
}

export default alarm;