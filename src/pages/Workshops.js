import React, { useEffect } from 'react';
import Header from '../components/Header';
import '../stylesheets/Events.css'
import EventNavbar from '../components/EventNavbar';
import AllEvents from '../pages/AllEvents.js';
import { useState } from 'react';

const Workshops = () => {
    const [eventFilter, setEventFilter] = useState(null);

    const handleClick = (e) => {
        console.log(e.target.id);
        setEventFilter(e.target.id);
    }
    return (
        <div className='main-container'>
            <div className='header-container'>
                <Header eventType={"Workshops"} />
            </div>
            <div className='eventsNavbar-container'>
                <EventNavbar handleClick={handleClick} />
            </div>
            <div className="card-container">
                <AllEvents eventFilter={eventFilter} setEventFilter={setEventFilter} eventType={"Workshops"} />
            </div>
        </div>
    )
}


export default Workshops;