import React, {useState, useEffect} from 'react'
import api from '../api/data'
import '../css/datelist.css'
function DateList() {
  const [date, setDate] = useState([]);
  useEffect(async ()=>{
    const response = await api.get("/date");
    setDate(response.data)
  },[])
    const currentdate = new Date();
    console.log(currentdate.getDate())
  return (
    <div className='daycont'>
        
        {date.map((dat)=>{
        if((currentdate.getDate()).toString() === dat.date){
            return(
            <div className='eventdaydesign' key={dat.id}>
                <h1 className='listdaytitle'>{dat.name}</h1>
                <p className='descdaylist'>{dat.disc}</p>
                
            </div>
            )
        }else{
            console.log(currentdate.getDate())
        }
        
      })}
    </div>
  )
}

export default DateList