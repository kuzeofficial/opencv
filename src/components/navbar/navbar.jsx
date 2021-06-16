import React from 'react'
import ProfileImage from '../../assets/profile.jfif'
import Switch from './switch'
import "../../../node_modules/flag-icon-css/css/flag-icon.min.css"
const Navbar = (props) => {
   
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">Cristian Fonseca</span>
                <span className="d-none d-lg-block"><img src={ProfileImage} className="img-fluid img-profile rounded-circle mx-auto mb-2" alt="..."/></span>
            </a>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle Navigation"><span className="navbar-toggler-icon" /></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav">
                    <div className="translation">
                        <span className="flag-icon flag-icon-es" style={{cursor:"pointer"}} onClick={() => props.i18n.changeLanguage("es")}></span>
                        <span className="flag-icon flag-icon-us" style={{cursor:"pointer", marginLeft: "20px"}} onClick={() => props.i18n.changeLanguage("en")}></span>
                    </div>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about"><i className="fas fa-user" /> {props.t("navbar.about-me")}</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills"><i className="fas fa-laptop-code" /> {props.t("navbar.my-skills")}</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests"><i className="fas fa-file-alt" /> {props.t("navbar.interest")}</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience"><i className="fas fa-chalkboard-teacher" /> {props.t("navbar.experience")}</a></li>
                    <Switch />
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
