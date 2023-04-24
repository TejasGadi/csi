import React from 'react';
import '../stylesheets/EventNavbar.css';
import { useState, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';


const EventNavbar = ({ handleClick, handleClickEventType }) => {
    const [isVisible, setIsVisible] = useState(false);
    const transition = useTransition(isVisible, {
        from: { opacity: 0, transform: 'translate3d(0, -40px, 0)' },
        enter: { opacity: 1, transform: 'translate3d(0, 0px, 0)' },
        leave: { opacity: 0, transform: 'translate3d(0, -40px, 0)' },
    });
    useEffect(() => {
        setIsVisible(true);
        return () => {
            setIsVisible(false);
        }

    }, [isVisible])
    return (
        transition((style, item) => item && (
            <div className="event-navbar-container">
                <animated.div className="event-navbar" style={style}>
                    <span id="all" onClick={handleClick} >All</span>
                    <div className="vertical" />
                    <span id="upcoming" onClick={handleClick}>Upcoming</span>
                    <div className="vertical" />
                    <span id="ongoing" onClick={handleClick}>Ongoing</span>
                    <div className="vertical" />
                    <span id="past" onClick={handleClick}>Past</span>
                </animated.div>
                <animated.div className="" style={style}>
                    <select onChange={handleClickEventType} className='event-type-dropdown' name="eventTypes" id="eventTypes">
                        <option value="All" defaultValue>All</option>
                        <option value="Workshop">Workshop</option>
                        <option value="TechTalk">TechTalk</option>
                        <option value="Seminar">Seminar</option>
                    </select>
                </animated.div>

            </div>
        )))
}
export default EventNavbar;