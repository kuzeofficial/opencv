import React from 'react'

const Skills = (props) => {
    return (
        <section className="resume-section" id="skills">
            <div className="resume-section-content">
                <h2 className="mb-5">{props.t("skills.title")}</h2>
                <div className="subheading mb-3">{props.t("skills.subheading")}</div>
                <ul className="list-inline dev-icons">
                    <li className="list-inline-item"><i className="fab fa-html5" /></li>
                    <li className="list-inline-item"><i className="fab fa-css3-alt" /></li>
                    <li className="list-inline-item"><i className="fab fa-js-square" /></li>
                    <li className="list-inline-item"><i className="fab fa-react" /></li>
                    <li className="list-inline-item"><i className="fab fa-node-js" /></li>
                    <li className="list-inline-item"><i className="fab fa-npm" /></li>
                    <li className="list-inline-item"><i className="fab fa-python" /></li>
                    <li className="list-inline-item"><i className="fab fa-git" /></li>
                    <li className="list-inline-item"><i className="fab fa-bootstrap" /></li>
                </ul>
                <div className="subheading mb-3">{props.t("skills.subheading1")}</div>
                <ul className="fa-ul mb-0 dot">
                    <li>
                        <span className="fa-li"><li className="fas fa-check" /></span>
                        {props.t("skills.description1")}
                    </li>
                    <li>
                        <span className="fa-li"><li className="fas fa-check"/></span>
                       {props.t("skills.description2")}
                    </li>
                    <li>
                        <span className="fa-li"><li className="fas fa-check" /></span>
                       {props.t("skills.description3")}
                    </li>
                    <li>
                        <span className="fa-li"><li className="fas fa-check" /></span>
                      {props.t("skills.description4")}
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Skills
