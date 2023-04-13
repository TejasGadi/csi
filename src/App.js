import React, { useEffect, useRef } from 'react'
import "./App.css"
// React Router
import {
  BrowserRouter,
} from 'react-router-dom';
import AnimateRoutes from './components/AnimateRoutes';


const App = () => {

  return (
    <div className="">
      <BrowserRouter>
        <AnimateRoutes />
      </BrowserRouter>
    </div>
  )
}


export default App
