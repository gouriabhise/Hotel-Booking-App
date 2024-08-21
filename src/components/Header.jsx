import React, { useState } from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import { faPerson,faBed,faPlane,faCar,faTaxi } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import {format} from  "date-fns"
const Header = () => {
    const [openDate,setOpenDate]=useState(false)
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

  return (
    <div className='header'>
        <div className='headerContainer'>
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
    <h1 className='headerTitle'>A lifetime of discounts? It's Genius</h1>
    <p className='headerDesc'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quae, aliquam aut doloribus eligendi eaque exercitationem. Temporibus quidem, dignissimos illo quos corporis sit, itaque iusto placeat labore necessitatibus eaque? Perferendis.
    </p>
    <button className='headerBtn'>Sign in / Register</button>
       <div className='headerSearch'>
        <div className='headerSearchitem'>
            <FontAwesomeIcon icon={faBed} className='headerIcon'/>
            <input type='text' placeholder='where are you going' className='headerSearchInput'/>
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
            <span className='headerSearchText'> {`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
        </div>

        <div className='headerSearchitem'>
            <button className='headerBtn'>Search</button>
            </div>
       </div>
        </div>
 
    </div>
  )
}

export default Header
 