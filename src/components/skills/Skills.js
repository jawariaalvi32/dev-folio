import React from 'react'
import { skills } from "../../portfolio";
import "./Skills.css";
import work from '../../assets/images/work.png'
import Grid from '@material-ui/core/Grid';

const Skills = () => {
    return (
      <Grid container className="main" id="skills">
          <div className="skills-main-div">
            <div className="skills-image-div">
                <img src={work}/>
            </div>
            <div className='main' id="skills">
                <div className="software-skills-main-div">
                    <div className="skills-text-div">
                        <h1 className='skills-heading'>
                        {skills.title}{' '}
                        </h1>
                        <p className='subTitle skills-text-subtitle'>
                        {skills.subTitle}
                        </p>
                        <ul className="dev-icons">
                        {skills.softwareSkills.map((skills,i) => {
                            return (
                            <li key={i} className="software-skill-inline" name={skills.skillName}>
                                <i className={skills.fontAwesomeClassname}></i>
                                <p>{skills.skillName}</p>
                            </li>
                            );
                        })}
                        </ul>
                    </div>
                </div>
            </div>
                        {/* <div>
            {skills.skills.map((skills, i) => {
                return (
                <p
                    key={i}
                    className='subTitle skills-text'>
                    {skills}
                </p>
                );
            })}
            </div> */}
         </div>
        </Grid>
        
    )
}

export default Skills
