import React from 'react';
import '../stylesheets/CardPage.css';
import { useParams } from 'react-router-dom';
import { useTransition, animated } from '@react-spring/web';
import { useEffect, useState } from 'react';
import { client, urlFor } from '../client';

const CardPage = () => {
    const [specificEvent, setSpecificEvent] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    const transition = useTransition(isVisible, {
        from: { opacity: 0, transform: 'translate3d(0, 100%, 0)' },
        enter: { opacity: 1, transform: 'translate3d(0, 0%, 0)' },
        leave: { opacity: 0, transform: 'translate3d(0, -50%, 0)' },
    });


    const params = useParams();
    const { slug } = params;

    useEffect(() => {
        async function fetchCurrentEvent(slug) {
            const query = `*[_type == "event" && slug.current == "${slug}"][0]`;
            const event = await client.fetch(query);
            setSpecificEvent(event);
        }

        fetchCurrentEvent(slug);

    }, [])



    useEffect(() => {
        setIsVisible(true);
        return () => setIsVisible(false);
    }, [isVisible]);


    return (
        specificEvent && transition((style, item) => item && (
            <animated.div className='cardPage__main__container' style={style}>
                <div className="cardPage__title__container">
                    <p className='cardPage__title'>{specificEvent.name}</p>
                </div>
                <div className="cardPage__eventInfo">
                    <div className="cardPage__eventInfo__container">
                        <h4>Name</h4>
                        <p>{specificEvent.name}</p>
                    </div>
                    <div className="cardPage__eventInfo__container">
                        <h4>Start Date</h4>
                        <p>{specificEvent.startdate}</p>
                    </div>
                    <div className="cardPage__eventInfo__container">
                        <h4>Event Theme</h4>
                        <p>{specificEvent.theme}</p>
                    </div>
                </div>
                <div className="cardPage__video__container">
                    <img src={urlFor(specificEvent.poster)} width="60%" alt="Event Poster" srcSet="" />
                </div>
                <div className="cardPage__eventImages__title">
                    <p>Event Description</p>
                </div>
                <div className="cardPage__aboutEvent">
                    <p>{specificEvent.desc}</p>
                </div>
                <div className="cardPage__eventImages__title">
                    <p>Glimpses of the Event</p>
                </div>
                <div className="cardPage__eventImages">
                    {specificEvent.eventimages && specificEvent.eventimages.map((eventimage, index) => {
                        return (
                            <img key={index} src={urlFor(eventimage)} alt="Event Image" />
                        )
                    })}

                </div>
            </animated.div>
        ))

    )
}

export default CardPage;  