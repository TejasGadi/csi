import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../App.css";
import bigCircle from "../images/Ellipse.svg";
import playCircleContainer from "../images/play-container.svg";
import playIcon from "../images/play.svg";
import Video from "../assets/demo2.mp4";
import vit_logo from "../images/vit_logo.webp";

const CenterTitle = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/aboutgsocmania`;
    navigate(path);
  };
  // States
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  window.addEventListener("mousemove", (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  });

  return (
    <div className="">
      <Container>
        <VideoContainer>
          <video
            autoPlay
            muted
            loop={true}
            src={Video}
            typeof="video/mp4"
          ></video>
        </VideoContainer>
        <TitleContainer>
          <LeftVerticalText>CSI, Vit Pune — EST. 2023</LeftVerticalText>
          <CentredText>
            Computer Society Of India,<br></br>{" "}
            <span style={{ color: "#f8ca96" }}>Vit Pune</span>
          </CentredText>
          <RightVerticalText>CSI, Vit Pune — EST. 2023</RightVerticalText>
        </TitleContainer>
      </Container>
      <CircleContainer>
        <img width={"700rem"} src={bigCircle} alt="" />
      </CircleContainer>
      <ScrollDown href="#quote-para">Scroll Down</ScrollDown>

      <div className="quote-para">
        <img src={vit_logo} alt="" className="vit_logo" />
        <QuotePara id="quote-para">
          Computer Society of India (CSI) Student Branch is one of the{" "}
          <span style={{ color: "#E69E4C" }}>premier organizations</span>{" "}
          working under the banner of VIT Pune to drive students’ attention
          towards a career in the field of{" "}
          <span style={{ color: "#E69E4C" }}>Computer Science</span>
          <Link to='/events'>
            <ExploreEventsBtn>Explore Events</ExploreEventsBtn>
          </Link>
        </QuotePara>
      </div>
    </div>
  );
};

const Container = styled.div`
  position: relative;
  margin-top: 0;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ExploreEventsBtn = styled.button`
  color:white;
  display:block;
  background:transparent;
  color:#E69E4C ;
  border: 2px solid #E69E4C;
  text-align: center;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  width: 10rem;
  margin-left:18vw; 
  margin-top: 3rem;
  margin-bottom: 3rem;
  border-radius: 10px;
  transition: all 0.3s ease;
  :hover{
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    margin-left: 21vw;
  }
  @media ((min-width: 768px) and (max-width: 1008)) {
    margin-left: 10vw;
  }
`;
const VideoContainer = styled.div`
  position: absolute;
  z-index: 1;
  width: 20rem;
  height: 35rem;
  @media (max-width: 768px) {
    width: 18rem;
    height: 32rem;
  }
  opacity: 0.4;
  overflow: hidden;
  /* padding: 2rem; */
  /* background: #ccc; */
  border-radius: 30rem;
  video {
    height: 100%+1rem;
    width: 100%;
    border-radius: 30rem;
  }
`;
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
`;
const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  z-index: 2;
  justify-content: space-around;
  align-items: center;
`;
const LeftVerticalText = styled.div`
  font-family: cursive;
  font-size: 0.8rem;
  writing-mode: vertical-lr;
  text-orientation: mixed;
`;
const CentredText = styled.div`
  font-size: 4rem;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
  font-family: "Unbounded", cursive;
  text-align: center;
`;
const RightVerticalText = styled.div`
  font-family: cursive;
  font-size: 0.8rem;
  writing-mode: vertical-rl;
  text-orientation: sideways-right;
`;

const ScrollDown = styled.a`
  font-size: 1rem;
  font-family: "Montserrat", cursive;
  text-decoration: none;
  color: #7e8f81;
  letter-spacing: 5px;
  transition: all 0.3s ease;
  position: absolute;
  top: 95vh;
  left: 45.5vw;
  cursor: pointer;
  :hover {
    color: #e69e4c;
  }
`;

const QuotePara = styled.div`
  font-size: 2.5rem;
  width: 50%;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    width: 75%;
  }
  text-align: center;
  position: absolute;
  top: 130vh;
  a{
    text-decoration: none;
  }
`;

export default CenterTitle;