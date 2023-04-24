import React from 'react'
import Home from '../pages/Home'
import { BrowserRouter, useLocation } from 'react-router-dom';

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
import Team from '../pages/Team';
import Workshops from '../pages/Workshops';

const AnimateRoutes = () => {

    return (
        <AnimatePresence>
            <NavBarHeader key={1} />
            <Routes key={2}>
                <Route exact path="/"
                    element={
                        <Home />
                    }
                />
                <Route exact path='/events'
                    element={
                        <Events />
                    }
                ></Route>
                <Route exact path='/events/cardPage/:slug'
                    element={
                        <CardPage />
                    }
                ></Route>
                <Route exact path='/team'
                    element={
                        <Team />
                    }
                ></Route>
            </Routes>
        </AnimatePresence >
    )
}

export default AnimateRoutes
