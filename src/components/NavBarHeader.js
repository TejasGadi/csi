import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import CustomEase from "gsap/CustomEase";
import Cursor from "./Cursor";

const NavBarHeader = () => {
  // States
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  window.addEventListener("mousemove", (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  });

  const AnimateHamburger = ({ currentTarget }) => {
    const line1 = currentTarget.children[0];
    const line2 = currentTarget.children[1];

    const navlogo = currentTarget.parentNode.children[0].children[0];
    const navwindow = currentTarget.parentNode.parentNode.children[1];
    const navheader = document.querySelector(".nav-header");
    const menulinks = document.querySelector(".menu-links");
    gsap.registerPlugin(CustomEase);
    CustomEase.create(
      "custom",
      "M0,0 C0,0.408 0.153,0.637 0.222,0.608 0.3,0.574 0.584,1 1,1 "
    );

    // Toggle hamburger icon
    if (!currentTarget.classList.contains("active")) {
      gsap.to(line1, {
        rotate: "45deg",
        y: "7px",
        background: "white",
        duration: 0.5,
      });
      gsap.to(line2, {
        rotate: "-45deg",
        y: "-7px",
        background: "white",
        duration: 0.5,
      });
      gsap.to(currentTarget, { color: "white", duration: 0.5 });
      gsap.to(navlogo, { color: "white", duration: 0.5 });
      gsap.to(menulinks, { color: "#202020", duration: 0 });

      gsap.to(navwindow, {
        clipPath: "circle(3000px at 100% -10%)",
        background: "#202020",
        color: "white",
        duration: 0.75,
        ease: "power1.out",
      });
      // gsap.to(navwindow, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", background: "#202020", color: "white", duration: 0.75, ease: "power3.out" });
      currentTarget.classList.add("active");
      document.body.classList.add("hide");
    } else {
      gsap.to(line1, {
        rotate: "0deg",
        y: "0px",
        background: "white",
        duration: 0.5,
      });
      gsap.to(line2, {
        rotate: "0deg",
        y: "0px",
        background: "white",
        duration: 0.5,
      });
      gsap.to(currentTarget, { color: "white" });
      gsap.to(navlogo, { color: "white", duration: 0.5 });
      gsap.to(menulinks, { color: "white", duration: 0 });

      gsap.to(navwindow, {
        clipPath: "circle(50px at 100% -10%)",
        background: "#202020",
        color: "white",
        duration: 0.75,
        ease: "power1.out",
      });
      // gsap.to(navwindow, { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", background: "#202020", color: "white", duration: 0.75, ease: "power3.out" });
      currentTarget.classList.remove("active");
      document.body.classList.remove("hide");
    }
  };

  return (
    <div className="">
      <NavHeader className="nav-header">
        <a href="/" id="logo" style={{ textDecoration: "none" }}>
          <Logo>
            <img
              src="https://raw.githubusercontent.com/TejasGadi/csivitpunelogos/main/White%20logo%20CSI.svg"
              height={"60px"}
              alt=""
            />
            <p style={{ fontFamily: "Abril Fatface", fontSize: "2rem" }}>
              csi.
            </p>
          </Logo>
        </a>
        <MenuLinks className="menu-links">
          <a href="/">
            <h3>Home</h3>
          </a>
          <a href="/events">
            <h3>Events</h3>
          </a>
          <a href="/workshops">
            <h3>Workshops</h3>
          </a>
          <a href="/team">
            <h3>Our Team</h3>
          </a>
        </MenuLinks>
        <Hamburger onClick={AnimateHamburger}>
          <Line1 className="line1"></Line1>
          <Line2 className="line2"></Line2>
        </Hamburger>
        {/* <Cursor cursorX={cursorX} cursorY={cursorY} zIndexValue={1} /> */}
      </NavHeader>
      <NavWindow className="nav-bar">
        <StayInContact className="contact">
          <h2>MENU</h2>
        </StayInContact>
        <NavLinks className="nav-links">
          <a href="/">
            <h3>HOME</h3>
          </a>
          <a href="/events">
            <h3>EVENTS</h3>
          </a>
          <a href="/workshops">
            <h3>WORKSHOPS</h3>
          </a>
          <a href="/team">
            <h3>OUR TEAM</h3>
          </a>
        </NavLinks>
        <Cursor cursorX={cursorX} cursorY={cursorY} zIndexValue={2} />
      </NavWindow>
    </div>
  );
};

const NavHeader = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  /* background: #a0a0a066; */
  background: #202020;
  min-height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  /* box-shadow: 3px 3px 2px 3px rgba(255, 255, 255, 0.2); */
`;

const MenuLinks = styled.div`
  min-width: 25rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1000px) {
    display: none;
  }
  a {
    color: white;
    text-decoration: none;
    border-radius: 2rem;
  }
  h3 {
    width: 10rem;
    text-align: center;
    font-size: 1rem;
    font-weight: 400;
    cursor: pointer;
    transition: all 0.15s ease;
    :hover {
      color: #e79d4a;
      font-size: 1.4rem;
    }
  }
`;

const NavWindow = styled.nav`
  margin-top: 5rem;
  z-index: 3;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  opacity: 1;
  /* clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%); */
  clip-path: circle(50px at 100% -10%);
  -webkit-clip-path: circle(50px at 100% -10%);
  flex-wrap: wrap;
`;

const NavLinks = styled.ul`
  list-style: none;
  font-size: 1.5rem;
  /* flex: 1 1 35rem; */
  flex-basis: 30rem;
  padding: 1rem;
  a {
    color: white;
    text-decoration: none;
    border-radius: 2rem;
  }
  h3 {
    font-size: 3.5rem;
    font-family: "Space Grotesk", sans-serif;
    letter-spacing: 2px;
    font-weight: 400;
    padding: 0.75rem;
    text-align: left;
    background: transparent;
    color: white;
    /* border: 2px solid black;
        border-radius: 2rem; */
    margin: 1rem;
    transition: all 0.1s ease;
    :hover {
      color: #e69e4c;
      transform: scale(1.05);
    }
  }
`;

const StayInContact = styled.div`
  flex-basis: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    text-decoration-line: underline;
    text-decoration-thickness: 8px;
    font-family: "Cabin", sans-serif;
    /* font-weight: 500; */
    color: #e79d4a;
    font-size: 10rem;
    font-weight: 700;
  }
  /* h2{
        padding: 2rem;
        font-size: 4rem;
        font-weight: 700;
        padding: 1rem 0rem;
    }
    p{
        text-align: justify;
        font-size: 1.5rem;
        line-height: 2.8rem;
        font-weight: 400;
    } */
`;

// const Logo = styled.h1`
//     opacity: 1;
//     color: white;
//     font-size: 2rem;
//     font-family: 'Abril Fatface', cursive;
//     margin-left: 5rem;
//     letter-spacing: 1px;
// `;
const Logo = styled.div`
  z-index: 2;
  margin-left: 5rem;
  display: flex;
  align-content: center;
  justify-content: center;
  p {
    margin-left: 8px;
    margin-top: 5px;
    text-align: center;
    opacity: 1;
    color: white;
    font-family: "Unbounded", cursive;
    font-weight: 700;
    font-size: 1.2rem;
    letter-spacing: 2px;
  }
`;
const Hamburger = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  opacity: 1;
  margin-right: 5rem;
  cursor: pointer;
  pointer-events: all;
  border-radius: 50%;
  background: #e69e4c;
  text-align: center;
  @media (max-width: 1000px) {
    margin-right: 1rem;
  }
`;
const Line1 = styled.div`
  width: 1.6rem;
  height: 0.2rem;
  background: white;
  margin: 0.7rem;
  margin-top: 1.2rem;
  margin-left: 1rem;
  pointer-events: none;
`;
const Line2 = styled.div`
  width: 1.6rem;
  height: 0.2rem;
  background: white;
  margin: 0.7rem;
  margin-left: 1rem;
  pointer-events: none;
`;

export default NavBarHeader;
