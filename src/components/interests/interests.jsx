import React from 'react'

const Interests = (props) => {
    return (
        <section className="resume-section" id="interests">
            <div className="resume-section-content">
                <h2 className="mb-5">{props.t("interests.title")}</h2>
                <p>{props.t("interests.subheading1")}</p>
                <p className="mb-0">{props.t("interests.subheading2")}</p>
            </div>
        </section>
    )
}

export default Interests
