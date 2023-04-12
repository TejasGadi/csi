import React from 'react';
import '../stylesheets/Card.css';
import { useState, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';
import { urlFor } from '../client';

const Card = ({ event }) => {
    const [isVisible, setIsVisible] = useState(false);
    const transition = useTransition(isVisible, {
        from: { x: -100, y: 800, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        leave: {}
    })
    useEffect(() => {
        setIsVisible(true)
        return () => {
            setIsVisible(false);
        }
    }, [isVisible])
    return (
        transition((style, item) => item && (
            <animated.div className='cards__container' style={style}>
                <ul className="cards">
                    <li>
                        <>
                            <div href="" className="card">
                                <img src={urlFor(event.poster)} className="card__image" alt="" />
                                <div className='card__info__container'>
                                    <p className='card__info'>{event.name}</p>
                                </div>
                            </div>
                        </>
                    </li>
                </ul>
            </animated.div>
        )))
}

export default Card;