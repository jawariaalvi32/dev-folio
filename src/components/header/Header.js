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
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;