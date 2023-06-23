import { useState, useEffect } from "react";

function DateTime(){
    const [time, setTime] = useState(new Date());

    useEffect(() => {
       var timer =  setInterval(() => setTime(new Date()), 1000)

        return function cleanup() {
            clearInterval(timer)
        }
    });

    return (
        <div>
        <p> Time : {time.toLocaleTimeString()}</p>
        <p> Date : {time.toLocaleDateString()}</p>
        </div>
    )
}

export default DateTime;