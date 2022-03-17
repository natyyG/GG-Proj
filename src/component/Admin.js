import React from 'react'
import DateForm from './DateForm'
import api from '../api/data'
import {v4 as uuidv4} from 'uuid';
import EventsForm from './EventsForm';
import UpcomingForm from './UpcomingForm';
import '../css/dateform.css'
import Navigation from './Navigation';
function Admin() {
    const addContactHandler = async (dat)=>{
        const request = {
          id: uuidv4(),
          ...dat
        }
        console.log(request);
        const response = await api.post("/date", request)
        
      }
      const removeHandler = async (id) => {
        await api.delete(`/date/${id}`);
        }
  return (
    <div>
      <Navigation />
      <div className="adminlayout">
          <DateForm className="componentlayout" addContactHandler = {addContactHandler} removeHandler={removeHandler}/>
          <EventsForm className="componentlayout"/>
          <UpcomingForm className="componentlayout"/>
      </div>
    </div>
  )
}

export default Admin