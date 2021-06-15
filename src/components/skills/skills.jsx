import React from 'react'

const Skills = () => {
    return (
        <section className="resume-section" id="skills">
            <div className="resume-section-content">
                <h2 className="mb-5">Skills</h2>
                <div className="subheading mb-3">Programming Lenguajes, Frameworks & Tools</div>
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
                <div className="subheading mb-3">Workflow</div>
                <ul className="fa-ul mb-0">
                    <li>
                        <span className="fa-li"><li className="fas fa-check" /></span>
                        Mobile-First, Responsive Design
                    </li>
                    <li>
                        <span className="fa-li"><li className="fas fa-check"/></span>
                       Cross Browser Testing & Debugging
                    </li>
                    <li>
                        <span className="fa-li"><li className="fas fa-check" /></span>
                       Cross Functional Teams
                    </li>
                    <li>
                        <span className="fa-li"><li className="fas fa-check" /></span>
                       Agile Development & Scrum
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Skills
