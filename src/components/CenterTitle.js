import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import "../App.css";
import bigCircle from "../images/circle.svg";
import introReel from "../videos/demo.mp4";
import playCircleContainer from "../images/play-container.svg";
import playIcon from "../images/play.svg";
import Video from '../videos/demo.mp4';


const CenterTitle = () => {

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/aboutgsocmania`;
        navigate(path);
    }
    // States
    const [cursorX, setCursorX] = useState();
    const [cursorY, setCursorY] = useState();

    window.addEventListener('mousemove', (e) => {
        setCursorX(e.pageX);
        setCursorY(e.pageY);
    })

    return (
        <div className="">

            <Container >
                <VideoContainer>
                    {/* <video src="https://emble.studio/media/pages/home/b42d9d9881-1631837366/10secondwebsitefinal_editbydennis.mp4" autoplay loop muted playsinline uk-cover className="uk-cover"></video> */}
                    {/* <video autoplay loop={true}>
                        <source src={Video} type="video/mp4"></source>
                    </video> */}
                    <video autoPlay muted loop={true} src={Video} typeof='video/mp4'></video>
                </VideoContainer>
                <TitleContainer>
                    <LeftVerticalText>CSI, Vit Pune — EST. 2023</LeftVerticalText>
                    <CentredText>Computer Society Of India,<br></br> <span style={{ color: "#f8ca96" }}>Vit Pune</span></CentredText>
                    <RightVerticalText>CSI, Vit Pune — EST. 2023</RightVerticalText>
                </TitleContainer>
            </Container>
            <CircleContainer>
                <img width={"700rem"} src={bigCircle} alt="" />
            </CircleContainer>
            <ScrollDown href='#quote-para'>Scroll Down</ScrollDown>
            <QuotePara id='quote-para'>
                We bridge the gap between message and perception with <span style={{ color: "#E69E4C" }}>visual media</span>, persuasive narratives and iconic cinematography.
            </QuotePara>
            <a href="">
                <PlayContainer>
                    <img className='play-circle-img' src={playCircleContainer} alt="" srcset="" />
                    <img className='play-img' src={playIcon} alt="" srcset="" />
                </PlayContainer>
            </a>
        </div>
    )
}

const Container = styled.div`
                position: relative;
                margin-top: 0;
                width: 100vw;
                min-height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                `
const VideoContainer = styled.div`
                position: absolute;
                z-index: 1;
                width: 18%;
                height: 32rem;
                overflow: hidden;
                /* padding: 2rem; */
                /* background: #ccc; */
                border-radius: 30rem;
                video{
                    height: 100%+1rem;
                    width: 100%;
                    border-radius: 30rem;
                }

                `
const CircleContainer = styled.div`
                width: 100%;
                height: 50vh;
                /* background: #ccc; */
                transform: translateY(-40%);
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                z-index: 0;
                `
const TitleContainer = styled.div`
                width: 100%;
                display: flex;
                z-index: 2;
                justify-content: space-around;
                align-items: center;
                `
const LeftVerticalText = styled.div`
                font-family: cursive;
                font-size: 0.8rem;
                writing-mode:  vertical-lr;
                text-orientation: mixed;
                `
const CentredText = styled.div`
                font-size: 4rem;
                font-family: 'Unbounded', cursive;
                text-align: center;
                `
const RightVerticalText = styled.div`
                font-family: cursive;
                font-size: 0.8rem;
                writing-mode: vertical-rl;
                text-orientation: sideways-right;
                `

const ScrollDown = styled.a`
                font-size: 1rem;
                font-family: 'Montserrat',cursive;
                text-decoration: none;
                color: #7E8F81;
                letter-spacing: 5px;
                transition: all 0.3s ease;
                position: absolute;
                top: 95vh;
                left: 45.5vw;
                cursor: pointer;
                :hover{
                    color: #E69E4C;
    }
                `

const QuotePara = styled.div`
                font-size: 2.5rem;
                width: 50%;
                text-align: center;
                position: absolute;
                top: 130vh;
                left: 25vw;
                `

const PlayContainer = styled.div`
    width: fit-content;
    height: fit-content;
    border-radius: 50%;
    background: #ccc;

    cursor: pointer;
    .play-circle-img{
        position: absolute;
        top: 91vh;
        left: 65vw;
        :hover{
            transition: all 5s ease;
            transform: rotate(340deg);
        }       
    }
    .play-img{
        z-index: 2;
        position: absolute;
        top: 100vh;
        left: 69vw;
    }
`


export default CenterTitle;
