import React, {useState, useEffect} from 'react'
import api from '../api/data'
import { v4 as uuidv4 } from 'uuid'
import '../css/upcoming.css'
import UpcomingForm from './UpcomingForm';
function Upcoming() {
    const[events, setEvents] = useState([]);
  useEffect(async ()=>{
      const response = await api.get("/upcomingevents")
      setEvents(response.data)
  }, [])
  
  return (
    <div>
        
       
        <div class="more">
            <div class="upcoming">
                <div className="upcont">
                    <h1 className="uptext">Upcoming Events</h1>
                        {events.map((eve)=>{
                            return(
                                <div className='upblock'>
                                    <div className="update">
                                        <h1>Nov<span>{eve.date}</span></h1>
                                    </div>
                                    <div className="updesc">
                                        <h1>{eve.title}</h1>
                                        <p>{eve.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                </div>
                
            </div>
            <div className="contact">
                <h1>Contact us</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime voluptatem voluptatum obcaecati itaque sed iusto, magni impedit aliquid.</p>
                <br/>
                <span>
                    <br/>09******23
                    <br/>09******55
                </span>
            </div>
        </div>
    </div>
  )
}
const upcomingform = {
    display:'none',
}
export default Upcoming