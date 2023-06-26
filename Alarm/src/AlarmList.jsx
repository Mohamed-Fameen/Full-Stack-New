import React from 'react'

function AlarmList(props) {
  return (
    <div>
        {props.alarmList.map((alarm)=> (
            <li key={alarm}>{alarm}</li>
        ))}
    </div>
  )
}

export default AlarmList