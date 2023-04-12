import React, { useEffect } from 'react';
import Header from '../components/Header';
import '../stylesheets/Events.css'
import EventNavbar from '../components/EventNavbar';
import AllEvents from '../pages/AllEvents.js';
import { useState } from 'react';

const Events = () => {
    const [eventFilter, setEventFilter] = useState(null);

    const handleClick = (e) => {
        setEventFilter(e.target.id);
    }

    return (
        <div className='main-container'>
            <div className='header-container'>
                <Header eventType={"Event"} />
            </div>
            <div className='eventsNavbar-container'>
                <EventNavbar handleClick={handleClick} />
            </div>
            <div className="card-container">
                <AllEvents eventFilter={eventFilter} setEventFilter={setEventFilter} eventType={"Event"} />
            </div>
        </div>
    )
}

export default Events;