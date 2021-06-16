import React from 'react'

const Experience = (props) => {
    return (
        <section className="resume-section" id="experience">
            <div className="resume-section-content">
                <h2 className="mb-5">{props.t("experience.title")}</h2>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">{props.t("experience.job1.job1title")}</h3>
                        <div className="subheading mb-3">{props.t("experience.job1.job1name")}</div>
                        <p>{props.t("experience.job1.job1description")}</p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">{props.t("experience.job1.job1date")}</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">{props.t("experience.job2.job2title")}</h3>
                        <div className="subheading mb-3">{props.t("experience.job2.job2name")}</div>
                        <p>{props.t("experience.job2.job2description")}</p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">{props.t("experience.job2.job2date")}</span></div>
                </div>
            </div>
        </section>
    )
}

export default Experience
