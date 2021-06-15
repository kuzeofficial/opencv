import React from 'react'
import ProfileImage from '../../assets/profile.jfif'
import Switch from './switch'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">Cristian Fonseca</span>
                <span className="d-none d-lg-block"><img src={ProfileImage} className="img-fluid img-profile rounded-circle mx-auto mb-2" alt="..."/></span>
            </a>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle Navigation"><span className="navbar-toggler-icon" /></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about"><i className="fas fa-user" /> About</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills"><i className="fas fa-laptop-code" /> Skills</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests"><i className="fas fa-file-alt" /> Interest</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience"><i className="fas fa-chalkboard-teacher" /> Experience</a></li>
                    <Switch />
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
