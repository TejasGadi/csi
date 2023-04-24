import React, { useState, useEffect } from "react";
import "../stylesheets/Team.css";
import { client, urlFor } from "../client";
import premanand_ghadekar from "../images/premanand_ghadekar.jpeg";
import pankaj_kunekar from "../images/pankaj_kunekar.jpeg";
import Footer from "../components/Footer";

const Team = () => {
  const [allteamMembers, setAllTeamMembers] = useState(null);
  const [coreTeamMembers, setCoreTeamMembers] = useState(null);
  const [headTeamMembers, setHeadTeamMembers] = useState(null);
  const [secretariesMembers, setSecretariesMembers] = useState(null);

  useEffect(() => {
    async function fetchAllTeamMembers() {
      const query = '*[_type == "teammember"]';
      const data = await client.fetch(query);
      setAllTeamMembers(data);
    }
    async function fetchCoreTeamMembers() {
      const query = '*[_type == "teammember" && team == "Core"]';
      const coreMembers = await client.fetch(query);
      setCoreTeamMembers(coreMembers);
    }
    async function fetchHeadTeamMembers() {
      const query = '*[_type == "teammember" && designation == "Head"]';
      const heads = await client.fetch(query);
      setHeadTeamMembers(heads);
    }
    async function fetchSecretariesTeamMembers() {
      const query = '*[_type == "teammember"&& designation == "Secretary"]';
      const secretaries = await client.fetch(query);
      setSecretariesMembers(secretaries);
    }

    fetchAllTeamMembers();
    fetchCoreTeamMembers();
    fetchHeadTeamMembers();
    fetchSecretariesTeamMembers();
  }, []);

  return (
    <div className="team">
      <div className=" container">
        <h2 className="main_heading">IT Department, VIT Pune</h2>
        <div className="members_container">
          <div className="faculty__card card">
            <img
              src={premanand_ghadekar}
              className="profile__pic"
              alt="Profile pic"
            />
            <p className="name">Premanand Ghadekar</p>
            <p className="designation">Head of Department</p>
          </div>
          <div className="faculty__card card">
            <img
              src={pankaj_kunekar}
              className="profile__pic"
              alt="Profile pic"
            />
            <p className="name">Pankaj Kunekar</p>
            <p className="designation">Faculty Advisor</p>
          </div>
        </div>
      </div>
      <h1 className="main_heading">Our Team</h1>
      <div className="core container">
        <h2 className="sub_heading">Core Team</h2>
        <div className="core__members_container members_container">
          {coreTeamMembers &&
            coreTeamMembers.map((individualCoreMember) => {
              return (
                <div className="core__card card">
                  <img
                    src={urlFor(individualCoreMember.imageUrl)}
                    className="profile__pic"
                    alt="Profile pic"
                  />
                  <p className="name">{individualCoreMember.name}</p>
                  <p className="designation">
                    {individualCoreMember.designation}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
      <div className="heads container">
        <h2 className="sub_heading">Heads</h2>
        <div className="heads__members_container members_container">
          {headTeamMembers &&
            headTeamMembers.map((individualHeadMember) => {
              return (
                <div className="core__card card">
                  <img
                    src={urlFor(individualHeadMember.imageUrl)}
                    className="profile__pic"
                    alt="Profile pic"
                  />
                  <p className="name">{individualHeadMember.name}</p>
                  <p className="designation">
                    {individualHeadMember.designation}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
      <div className="secretaries container">
        <h2 className="sub_heading">Secretaries</h2>
        <div className="secretaries__members_container members_container">
          {secretariesMembers &&
            secretariesMembers.map((individualSecretaryMember) => {
              return (
                <div className="secretaries__card card">
                  <img
                    src={urlFor(individualSecretaryMember.imageUrl)}
                    className="profile__pic"
                    alt="Profile pic"
                  />
                  <p className="name">{individualSecretaryMember.name}</p>
                  <p className="designation">
                    {individualSecretaryMember.designation}
                  </p>
                </div>
              );
            })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Team;