import React, {useEffect, useState} from 'react'
import api from '../api/data'
import '../css/dateform.css'
import {v4 as uuidv4} from 'uuid'
function UpcomingForm() {
    const[events, setEvents] = useState([]);
    useEffect(async ()=>{
        const response = await api.get("/upcomingevents")
        setEvents(response.data)
    }, [])
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [desc, setdesc] = useState('')
    const obj = {
        title: name,
        date: date,
        desc: desc,
    }
     const addNewEventHandler = async (eventObj)=>{
      const request = {
          id: uuidv4(),
          ...eventObj
      }
      const response = await api.post("/upcomingevents", request)
      setEvents([...events, response.data])
  }
  const UpcomingRemoveHandler = async (id) => {
    await api.delete(`/upcomingevents/${id}`);
    const newList = events.filter((eve)=>{
      return eve.id !== id
    })
    setEvents(newList);
    }
    const [showUpForm, setShowUpForm] = useState(false)
  return (
    <div>
        <h1 className="datetitle">UpcomingEvent Data</h1>
        <button className = "AddBtn" onClick={()=>{showUpForm ? setShowUpForm(false): setShowUpForm(true)}}>Add New</button>
        {showUpForm === true?
        <div className='formcont'>
            <form>
                <input className='field' type="text" placeholder="Enter the name" onChange={(e)=>{
                    setName(e.target.value)
                }
                }/>
                <input className='field' type="number" placeholder='Enter the date' onChange={(e)=>{
                    setDate(e.target.value)
                }
                }/>
                <textarea className='formdescrip'  placeholder='Description...' onChange={(e)=>{
                    setdesc(e.target.value)
                }
                }></textarea><br/>
                <button className='formbtn' onClick={()=>{addNewEventHandler(obj)}}>Save</button>
            </form>
        </div>: <div></div>}
        {events.map((eve)=>{
                            return(
                                <div className='eventdesign' key={eve.id}>
                                    <h1>Date: Nov<span>{eve.date}</span></h1>
                                    <h1>{eve.title}</h1>
                                    <p className='desclist'>{eve.desc}</p>
                                    <button onClick={()=>{UpcomingRemoveHandler(eve.id)}} className="deleteBtn">Delete</button>
                                </div>
                            )
                        })}
    </div>
  )
}

export default UpcomingForm