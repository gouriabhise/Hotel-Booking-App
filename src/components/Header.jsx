import React, { useState } from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import { faPerson,faBed,faPlane,faCar,faTaxi } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import {format} from  "date-fns"
import { useNavigate } from 'react-router-dom'
const Header = ({type}) => {
    const [openDate,setOpenDate]=useState(false)
    const[destination,setDestination]=useState("")
    const [date,setDate]=useState([
        {
            startDate:new Date(),
            endDate:new Date(),
            key:'selection'
        }
        
    ])

    const [openOptions,setOpenOptions]=useState(false)
    const[options,setOptions]=useState({
        adult:1,
        children:0,
        room:1
    })

    const navigate=useNavigate()
    const handleOption=(name,operation)=>{
        setOptions(prev=>{return {
            ...prev,
            [name]:operation==='i'?options[name]+1:options[name]-1
        }})
    }

    const handleSearch=()=>{
navigate('/hotels',{state:{destination,date,options}})
    }
  return (
    <div className='header'>
        <div className={type==="list"?"headerContainer listMode":"headerContainer"}>
        <div className='headerList'>
        <div className='headerListItem'>
            <FontAwesomeIcon itcon={faBed}/>
            <span>Stays</span>
        </div>
        <div className='headerListItem'>
            <FontAwesomeIcon itcon={faPlane}/>
            <span>Flights</span>
        </div>
        <div className='headerListItem'>
            <FontAwesomeIcon itcon={faCar}/>
            <span>Car Rentals</span>
        </div>
        <div className='headerListItem'>
            <FontAwesomeIcon itcon={faBed}/>
            <span>Attractions</span>
        </div>
        <div className='headerListItem'>
            <FontAwesomeIcon itcon={faTaxi}/>
            <span>Airport Taxis</span>
        </div>
    </div>
   {type!=="list" &&
   <>
   <h1 className='headerTitle'>A lifetime of discounts? It's Genius</h1>
    <p className='headerDesc'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quae, aliquam aut doloribus eligendi eaque exercitationem. Temporibus quidem, dignissimos illo quos corporis sit, itaque iusto placeat labore necessitatibus eaque? Perferendis.
    </p>
    <button className='headerBtn'>Sign in / Register</button>
       <div className='headerSearch'>
        <div className='headerSearchitem'>
            <FontAwesomeIcon icon={faBed} className='headerIcon'/>
            <input type='text'
             placeholder='where are you going' 
             className='headerSearchInput'
             onChange={e=>setDestination(e.target.value)}
             />
        </div>

        <div className='headerSearchitem'>
            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon'/>
 <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
 {openDate &&<DateRange
 editableDateInputs={true}
 onChange={item=>setDate([item.selection])}
 moveRangeOnFirstSelection={false}
 ranges={date}
 className='date'
 />}
         </div>

        <div className='headerSearchitem'>
            <FontAwesomeIcon icon={faPerson} className='headerIcon'/>
            <span onClick={()=>setOpenOptions(!openOptions)} className='headerSearchText'> {`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
    {openOptions &&   <div className="options">
        <div className="optionItem">
            <span className="optionText">Adult</span>
          <div className='opttionCounter'>
          <button 
             disabled={options.adult<=1}
          className='optionCounterButton' onClick={()=>handleOption("adult","d")}>-</button>
            <span className='optionCounterNumber'>{options.adult}</span>
            <button 
         
            className='optionCounterButton' onClick={()=>handleOption("adult","i")}>+</button>
          </div>
          
        </div>

        <div className="optionItem">
            <span className="optionText">Children</span>
            <div className='optionCounter'>
            <button
             disabled={options.children<=0}
            className='optionCounterButton' onClick={()=>handleOption("children","d")}>-</button>
            <span className='optionCounterNumber'>{options.children}</span>
            <button className='optionCounterButton' onClick={()=>handleOption("children","i")}>+</button>
            </div>
           
        </div>

        <div className="optionItem">
            <span className="optionText">Room</span>
            <div className='optionCounter'>
            <button 
             disabled={options.room<=1}
            className='optionCounterButton' onClick={()=>handleOption("room","d")}>-</button>
            <span className='optionCounterNumber'>{options.room}</span>
            <button className='optionCounterButton' onClick={()=>handleOption("room","i")}>+</button>
            </div>
           
        </div>
       </div> }
       
        </div>

        <div className='headerSearchitem'>
            <button className='headerBtn' onClick={handleSearch}>Search</button>
            </div>
       </div>
       </>
       }
        </div>
 
    </div>
  )
}

export default Header
 