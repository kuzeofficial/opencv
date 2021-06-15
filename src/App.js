import React from 'react'
import Navbar from "./components/navbar/navbar"
import About from "./components/about/about"
import Skills from "./components/skills/skills"
import Interests from "./components/interests/interests"
import Experience from "./components/experience/experience"
const App = () => {
    return (
        <React.Fragment>
            <Navbar />
            <div className="container-fluid p-0">
                <About />
                <hr className="m-0" />
                <Skills />
                <hr className="m-0" />
                <Interests />
                <hr className="m-0" />
                <Experience />
            </div>
        </React.Fragment>
    )
}

export default App
