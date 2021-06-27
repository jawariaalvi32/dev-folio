import React from 'react'
import ViewProject from '../../components/project/Project'
import { buildProjects } from "../../portfolio";
import Grid from '@material-ui/core/Grid';
import '../../components/project/Project.css'
import { Button } from '@material-ui/core';

function Projects() {
    if (!buildProjects.display) {
        return null;
    }
    return (
        <div className="project-main-div">
            <h3 className="project-heading">PROJECTS</h3>
            <Grid container className="project-div">
                {
                    buildProjects.projects.map((projects) => (
                        <Grid item md={4} key={projects.projectName}>
                            <ViewProject title={projects.projectName} link={projects.hostedLink} gitLink={projects.githubLink} img={projects.image} description={projects.projectDesc}/>
                        </Grid>
                    ))
                }
            </Grid>
            <div className="more-projects-btn">
                <a href="https://github.com/jawariaalvi32?tab=repositories"><Button variant="outlined" color="primary">More Projects</Button></a>
            </div>
        </div>

    )
}

export default Projects