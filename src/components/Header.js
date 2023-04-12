import React from 'react';
import '../stylesheets/Header.css';
import { useState, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';

const Header = ({ eventType }) => {
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
            <animated.p className='header' style={style}>
                Our {eventType}
            </animated.p>
        ))

    )
}

export default Header;