import React from 'react'
import Home from '../pages/Home'
import { useLocation } from 'react-router-dom';

import Events from '../pages/Events';
import CardPage from '../pages/CardPage';
import NavBarHeader from './NavBarHeader';

// React Router
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion"

const AnimateRoutes = () => {
    let location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/"
                    element={<>
                        <NavBarHeader />
                        <Home />
                    </>
                    }
                />
                <Route path='/events'
                    element={
                        <>
                            <NavBarHeader />
                            <Events />
                        </>
                    }
                ></Route>
                <Route path='/cardPage/:id'
                    element={
                        <>
                            <NavBarHeader />
                            <CardPage />
                        </>
                    }
                ></Route>
            </Routes>
        </AnimatePresence >
    )
}

export default AnimateRoutes
