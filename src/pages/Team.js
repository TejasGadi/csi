// import { color } from "framer-motion";
import React from "react";
import "../stylesheets/Team.css";
// import "../images/photo_circular.png"
function Team() {
  return (
    <div className="team">
      <h1 className="main_heading">Our Team</h1>
      {/* <img
        className="divider"
        src="https://cdn.pixabay.com/photo/2012/04/18/12/08/divider-36856_1280.png"
        alt=""
      /> */}
      <div className="core container">
        <h2 className="sub_heading">Core Team</h2>
        <div className="core__members_container members_container">
          <div className="core__card card">
            <img src="https://i.imgur.com/oYiTqum.jpg" alt="This is image" />
            <p className="name">Rehan Qazi</p>
            <p className="designation">President</p>
          </div>
          <div className="core__card card">
            <img src="https://i.imgur.com/oYiTqum.jpg" alt="This is image" />
            <p className="name">Rehan Qazi</p>
            <p className="designation">President</p>
          </div>
          <div className="core__card card">
            <img src="https://i.imgur.com/oYiTqum.jpg" alt="This is image" />
            <p className="name">Rehan Qazi</p>
            <p className="designation">President</p>
          </div>
        </div>
      </div>
      <div className="heads container">
        <h2 className="sub_heading">Heads</h2>
        <div className="heads__members_container members_container">
          <div className="heads__card card">
            <img src="https://i.imgur.com/oYiTqum.jpg" alt="This is image" />
            <p className="name">Rehan Qazi</p>
            <p className="designation">President</p>
          </div>
          <div className="heads__card card">
            <img src="https://i.imgur.com/oYiTqum.jpg" alt="This is image" />
            <p className="name">Rehan Qazi</p>
            <p className="designation">President</p>
          </div>
          <div className="heads__card card">
            <img src="https://i.imgur.com/oYiTqum.jpg" alt="This is image" />
            <p className="name">Rehan Qazi</p>
            <p className="designation">President</p>
          </div>
        </div>
      </div>
      <div className="secretaries container">
        <h2 className="sub_heading">Secretaries</h2>
        <div className="secretaries__members_container members_container">
          <div className="secretaries__card card">
            <img src="https://i.imgur.com/oYiTqum.jpg" alt="This is image" />
            <p className="name">Rehan Qazi</p>
            <p className="designation">President</p>
          </div>
          <div className="secretaries__card card">
            <img src="https://i.imgur.com/oYiTqum.jpg" alt="This is image" />
            <p className="name">Rehan Qazi</p>
            <p className="designation">President</p>
          </div>
          <div className="secretaries__card card">
            <img src="https://i.imgur.com/oYiTqum.jpg" alt="This is image" />
            <p className="name">Rehan Qazi</p>
            <p className="designation">President</p>
          </div>
          <div className="secretaries__card card">
            <img src="https://i.imgur.com/oYiTqum.jpg" alt="This is image" />
            <p className="name">Rehan Qazi</p>
            <p className="designation">President</p>
          </div>
          <div className="secretaries__card card">
            <img src="https://i.imgur.com/oYiTqum.jpg" alt="This is image" />
            <p className="name">Rehan Qazi</p>
            <p className="designation">President</p>
          </div>
          <div className="secretaries__card card">
            <img src="https://i.imgur.com/oYiTqum.jpg" alt="This is image" />
            <p className="name">Rehan Qazi</p>
            <p className="designation">President</p>
          </div>
          <div className="secretaries__card card">
            <img src="https://i.imgur.com/oYiTqum.jpg" alt="This is image" />
            <p className="name">Rehan Qazi</p>
            <p className="designation">President</p>
          </div>
        </div>
      </div>
      <div className="secretaries"></div>
    </div>
  );
}

export default Team;
