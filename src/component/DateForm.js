import api from '../api/data'
import React, {useEffect, useState} from 'react'
import '../css/dateform.css'
function DateForm({addContactHandler}) {
    const [disdate, setDateDis] = useState([])
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [desc, setdesc] = useState('')
    const obj = {
        name: name,
        date: date,
        disc: desc,
    }
    useEffect(async ()=>{
        const response = await api.get("/date");
        setDateDis(response.data)
      },[])
      const dateRemoveHandler = async (id) => {
        await api.delete(`/date/${id}`);
        const newList = disdate.filter((dat)=>{
          return dat.id !== id
        })
        setDateDis(newList);
        }
      const [showDateForm, setShowDateForm] = useState(false)
  return (
    <div>
        <h1 className='datetitle'>Date Data</h1>
        <button className="AddBtn" onClick={()=>{showDateForm ? setShowDateForm(false): setShowDateForm(true)}}>+Add New</button>
        {showDateForm === true?
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
                <button className='formbtn' onClick={()=>{addContactHandler(obj)}}>Save</button>
            </form>
        </div>: <div></div>}
        {disdate.map((dat)=>{
            return(
            <div className='eventdesign' key={dat.id}>
                <h1 className='listtitle'>{dat.name}</h1>
                <p className='desclist'>{dat.disc}</p>
                <button className="deleteBtn" onClick={() => {dateRemoveHandler(dat.id)}}>Delete</button>
               
            </div>
            )
        
      })}
    </div>
  )
}

export default DateForm