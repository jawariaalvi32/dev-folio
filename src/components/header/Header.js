import React, { useContext } from 'react';
import Headroom from 'react-headroom';
import './Header.css';
import { greeting } from '../../portfolio';

function Header() {
    // const greeting = {
    //     username: 'Jawaria Alvi'
    // }
//   const { isDark } = useContext(StyleContext);
//   const viewExperience = workExperiences.display;
//   const viewOpenSource = openSource.display;
//   const viewSkills = skillsSection.display;
//   const viewAchievement = achievementSection.display;
//   const viewBlog = blogSection.display;
//   const viewTalks = talkSection.display;

  return (
    <Headroom>
      <header className='header'>
        <a href="" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name" style={{color: "#3f677b"}}>{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: 'white' }}
        >
        </label>
        <ul>
            <li><a href="">Skills</a></li>
          {/* {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">Open Source</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">Blogs</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">Talks</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            <a>
              <ToggleSwitch />
            </a>
          </li> */}
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;