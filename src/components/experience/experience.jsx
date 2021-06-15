import React from 'react'

const Experience = () => {
    return (
        <section className="resume-section" id="experience">
            <div className="resume-section-content">
                <h2 className="mb-5">Experience</h2>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Junior Web Developer</h3>
                        <div className="subheading mb-3">Personal Projects</div>
                        <p>I have worked on creating a series of personal projects based on increasing my portfolio</p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">January 2021 - Present</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">QA</h3>
                        <div className="subheading mb-3">Boxitas</div>
                        <p>A meet platform for doctors and other professions, through paid video calls consultations</p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary"> December 2020 - January 2021</span></div>
                </div>
            </div>
        </section>
    )
}

export default Experience
