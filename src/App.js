import React from 'react'
import Navbar from "./components/navbar/navbar"
import About from "./components/about/about"
import Skills from "./components/skills/skills"
import Interests from "./components/interests/interests"
import Experience from "./components/experience/experience"
import { useTranslation } from 'react-i18next'
const App = () => {
    const [t, i18n] = useTranslation("global")
    return (
        <React.Fragment >
            <Navbar t={t} i18n={i18n} />
            <div className="container-fluid p-0">
                <About  t={t} i18n={i18n} />
                <hr className="m-0" />
                <Skills  t={t} i18n={i18n} />
                <hr className="m-0" />
                <Interests  t={t} i18n={i18n} />
                <hr className="m-0" />
                <Experience  t={t} i18n={i18n} />
            </div>
        </React.Fragment>
    )
}

export default App
