import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { client, urlFor } from '../client';

const AllEvents = ({ eventFilter, setEventFilter, eventType }) => {
    const [events, setEvents] = useState(null);

    useEffect(() => {
        setEventFilter('all');
        async function fetchAllEvents() {
            const query = (eventType == 'Event') ? '*[_type == "event"]' : '*[_type == "event" && type == "Workshop"]';
            const data = await client.fetch(query);
            console.log(data);
            setEvents(data);
        }
        fetchAllEvents();
    }, [])
    return (
        <>
            {events && events.map((event) => {
                console.log(event);
                return (
                    <Link key={event._id} to={'/events/cardPage/' + event.slug.current}>
                        <Card event={event} key={event._id} />
                    </Link>
                )
            })}
        </>
    )
}

export default AllEvents;