import React from 'react'
import Contact from '../../components/contact/Contact'
import Intro from '../../components/intro/Intro'
import Skills from '../../components/skills/Skills'
import Projects from '../projects/Projects'

const Home = () => {
    return (
        <div>
            <Intro/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    )
}

export default Home
