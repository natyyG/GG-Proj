import React,{useState, useEffect} from "react";
import Datelist from "./component/Datelist";
import api from './api/data'
import {v4 as uuidv4} from 'uuid';
import DateForm from "./component/DateForm";
import Contribute from "./component/Contribute";
import About from "./component/About";
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import Events from "./component/Events";
import Upcoming from "./component/Upcoming";
import EventsForm from "./component/EventsForm";
import UpcomingForm from "./component/UpcomingForm";
import Admin from "./component/Admin";
import AdminLogin from "./component/AdminLogin";

function App() {
  const[date, setDate] = useState([]);
  useEffect(async ()=>{
    const response = await api.get("/date");
    setDate(response.data)
  },[])
  
  // const addContactHandler = async (dat)=>{
  //   const request = {
  //     id: uuidv4(),
  //     ...dat
  //   }
  //   console.log(request);
  //   const response = await api.post("/date", request)
  //   setDate([...date, response.data])
  // }
  // const removeHandler = async (id) => {
  //   await api.delete(`/date/${id}`);
  //   const newList = date.filter((dates)=>{
  //     return dates.id !== id
  //   })
  //   setDate(newList);
  //   }
  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route path='/' element={<Datelist />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contribute' element={<Contribute />}/>
          <Route path='/admin' element = {<Admin />}/>
          <Route path='/home' element = {<Home />}/>
          <Route path='/adminlogin' element = {<AdminLogin />}/>
          <Route path="/day" element = {<Datelist />}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
