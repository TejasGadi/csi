import React, { useEffect } from 'react';
import Header from '../components/Header';
import '../stylesheets/Events.css'
import EventNavbar from '../components/EventNavbar';
import AllEvents from '../pages/AllEvents.js';
import { useState } from 'react';
import Footer from '../components/Footer';

const Events = () => {
    const [eventFilter, setEventFilter] = useState('all');
    const [eventType, setEventType] = useState('All');

    const handleClick = (e) => {
        setEventFilter(e.target.id);
    }
    const handleClickEventType = (e) => {
        setEventType(e.target.value);
    }

    return (
        <div className='main-container'>
            <div className='header-container'>
                <Header eventType={eventType} eventFilter={eventFilter} />
            </div>
            <div className='eventsNavbar-container'>
                <EventNavbar handleClick={handleClick} handleClickEventType={handleClickEventType} />
            </div>
            <div className="card-container">
                <AllEvents eventFilter={eventFilter} setEventFilter={setEventFilter} eventType={eventType} />
            </div>
        </div>
    )
}

export default Events;