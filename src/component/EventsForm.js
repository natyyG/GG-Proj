import React,{useState, useEffect} from 'react'
import api from '../api/data'
import '../css/dateform.css'
import {v4 as uuidv4} from 'uuid'
function EventsForm() {
    const[eventt, setEventt] = useState([]);
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [desc, setdesc] = useState('')
    const obj = {
        title: name,
        date: date,
        desc: desc,
    }
    useEffect(async ()=>{
        const response = await api.get("/event");
        setEventt(response.data)
        console.log(response.data)
      },[])
    const addEventHandler = async (eventObj) =>{
        const request = {
          id: uuidv4(),
          ...eventObj
        }
        const response = await api.post("/event", request)
        setEventt([...eventt, response.data])
      }
      const eventRemoveHandler = async (id) => {
          await api.delete(`/event/${id}`);
          const newList = eventt.filter((eve)=>{
            return eve.id !== id
          })
          setEventt(newList);
          }
    
    
    const [showForm, setShowForm] = useState(false)
  return (
    <div>
        <h1 className="datetitle"> Event Data</h1>
        <button className="AddBtn" onClick={()=>{showForm ? setShowForm(false): setShowForm(true)}
                        }>Add New</button>
                        {showForm === true ?
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
                }></textarea>
                <button className='formbtn' onClick={()=>{addEventHandler(obj)}}>Save</button>
            </form>
        </div>: <div></div>}
        
                {eventt.map((eve)=>{
                    return(
                        <div className="eventdesign" key={eve.id}>
                            <h1 className="listtitle">{eve.title}</h1>
                            <p className='desclist'>{eve.desc}</p>
                            <button onClick={()=>{
                                eventRemoveHandler(eve.id)
                            }} className="deleteBtn">Delete</button>
                        </div>
                    )
                })}
    </div>
  )
}

export default EventsForm