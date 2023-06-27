import React from 'react'
import {alarmList} from './assets/alarmArray'

function AlarmList() {
  return (
    <div>
        {alarmList.map((alarm)=> (
            <li key={alarm}>{alarm}</li>
        ))}
    </div>
  )
}

export default AlarmList