import React from 'react';
import Header from '../components/Header';
import '../stylesheets/Events.css'
import EventNavbar from '../components/EventNavbar';
import AllEvents from '../pages/AllEvents.js';
import PastEvents from '../components/PastEvents';
import UpcomingEvents from '../components/UpcomingEvents';
import Ongoing from '../components/Ongoing';
import { useState } from 'react';

const Events = () => {
    const [events, setEvents] = useState(null);
    const handleClick = (e) => {
        console.log(e.target.id);
        setEvents(e.target.id);
    }
    return (
        <div className='main-container'>
            <div className='header-container'>
                <Header />
            </div>
            <div className='eventsNavbar-container'>
                <EventNavbar handleClick={handleClick} />
            </div>
            <div className="card-container">
                {events === "all" ? <AllEvents /> : events === 'past' ? <PastEvents /> : events === 'upcoming' ? <UpcomingEvents /> : events === 'ongoing' ? <Ongoing /> : <AllEvents />}
            </div>
        </div>
    )
}

export default Events;