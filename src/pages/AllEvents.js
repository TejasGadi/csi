import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { client, urlFor } from '../client';

const AllEvents = ({ eventFilter, setEventFilter, eventType }) => {
    const [events, setEvents] = useState(null);


    useEffect(() => {
        async function fetchAllEvents() {
            let query = ""
            if ((eventFilter == 'upcoming') || (eventFilter == 'ongoing') || (eventFilter == 'past')) {
                query = (eventType == 'All') ? `*[_type == "event" && eventstatus == "${eventFilter}"]` : `*[_type == "event" && type == "${eventType}" && eventstatus == "${eventFilter}"]`;
            }
            else {
                query = (eventType == 'All') ? `*[_type == "event"]` : `*[_type == "event" && type == "${eventType}"]`;
            }
            // if ((eventFilter == 'upcoming') || (eventFilter == 'ongoing') || (eventFilter == 'past')) {
            //     query = (eventType == 'Event') ? `*[_type == "event" && eventstatus == "${eventFilter}"]` : `*[_type == "event" && type == "Workshop" && eventstatus == "${eventFilter}"]`;
            // }
            // else {
            //     query = (eventType == 'Event') ? `*[_type == "event"]` : `*[_type == "event" && type == "Workshop"]`;
            // }
            const data = await client.fetch(query);
            console.log(query);
            setEvents(data);
        }
        fetchAllEvents();
    }, [eventFilter, eventType])
    return (
        <>
            {events && events.map((event) => {
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