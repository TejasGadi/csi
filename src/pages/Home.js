import { useCallback, useEffect, useState } from "react";
import CenterTitle from "../components/CenterTitle";
import Cursor from "../components/Cursor";
import { ThreeCircles } from "react-loader-spinner";
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
    // States
    const [cursorX, setCursorX] = useState();
    const [cursorY, setCursorY] = useState();
    const [isloading, setIsLoading] = useState(false);

    window.addEventListener('mousemove', (e) => {
        setCursorX(e.pageX);
        setCursorY(e.pageY);
    })

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, [])

    return (
        <motion.div
            className="father-container"
            initial={
                {
                    height: "0vh",
                    opacity: 0,
                }
            }
            animate={
                {
                    height: "100vh",
                    opacity: 1,
                    transition: { duration: 0.6 }
                }
            }
            exit={
                {
                    height: "0vh",
                }
            }
        >s
            <CenterTitle />
        </motion.div>

    );
};


export default Home;