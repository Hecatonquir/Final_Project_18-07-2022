import React, { useState,useEffect, useRef } from 'react'
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import {Calendar} from "react-date-range"
import {format} from "date-fns"
import {useSelector} from "react-redux"
function CalendarEvents() {
    const reference = useRef(null)
    const [date, setDate] = useState("")


    const [open, setOpen] = useState(false)

    let handleChange = (e) => {
       
        setDate(format(e, 'dd/MM/yyyy'))
        
    }

    let hideOnScape = (e) => {
    if(e.key === "Escape")  setOpen(false)
    }
    let hideOnClickOutside = (e) => {
        if(reference.current && !reference.current.contains(e.target))
        setOpen(false)
    }


    useEffect(() => {
    setDate(format(new Date(), 'dd/MM/yyyy'))
    document.addEventListener("keydown", hideOnScape, true)
    document.addEventListener("click", hideOnClickOutside, true)
    }

    
    ,[])

  return (
    <div>
        <label>Events By Date</label>
        <input value={date} onClick={() => setOpen(true)}></input>
        <div ref={reference}>
        {open && <Calendar editableDateInputs={true} onChange={(e) =>handleChange(e)}></Calendar>}
        </div>
        </div>
  )
}

export default CalendarEvents