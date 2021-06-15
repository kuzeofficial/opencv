import React from 'react'

const About = () => {
    return (
        <section className="resume-section" id="about">
            <div className="resume-section-content">
                <h1 className="mb-0">
                    Cristian
                    <span className="text-primary"> Fonseca</span>
                </h1>
                <div className="subheading mb-5">
                    186 Cocal % Sol y Loma · Cuba , Granma , Manzanillo ·  (+5354777898)  ·
                    <a href="mailto:cristian03022680483@gmail.com">cristian03022680483@gmail.com</a>
                </div>
                <p className="lead mb-5">I have experience in the development of static and dynamic web applications, with correct integration and scalability.</p>
                <div className="social-icons">
                        <a className="social-icon" href = "https://github.com/kuzeofficial"><i className="fab fa-github"></i></a>
                        <a className="social-icon" href = "https://twitter.com/cristian_devk"><i className="fab fa-twitter"></i></a>
                        <a className="social-icon" href = "https://t.me/christian_devk"><i className="fab fa-telegram-plane"></i></a>
                </div>
            </div>
        </section>
    )
}

export default About
