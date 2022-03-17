import React, {useState, useEffect} from 'react'
import api from '../api/data'
import '../css/event.css'
import EventsForm from './EventsForm';
function Events() {
    const[eventt, setEventt] = useState([]);
    useEffect(async ()=>{
      const response = await api.get("/event");
      setEventt(response.data)
      console.log(response.data)
    },[])
    
  return (
    <div>
        <div className="events">
            <h1 className="weektext">Weekly Events</h1>
            <div className="eventcont">
                {eventt.map((eve)=>{
                    return(
                        <div className="event" key={eve.id}>
                            <h1 className="eventtitle">{eve.title}</h1>
                            <p>{eve.desc}</p>
                        </div>
                    )
                })}
                
            </div>
        </div>
        </div>

  )
}
export default Events