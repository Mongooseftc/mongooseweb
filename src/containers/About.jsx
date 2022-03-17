import React from 'react'

import styles from '../../styles/About.module.css'

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <h1>¿Quiénes somos?</h1>
            <div className={styles.info}>
                <p>
                    Somos una empresa 100% salvadoreña de tecnología
                    financiera enfocada en las criptodivisas, buscamos
                    facilitar estas tecnologías a todas las personas,
                    diseñando software de alta calidad y fácil de comprender,
                    también educamos a las personas sobre qué son y cómo
                    administrar criptoactivos.
                </p>
                <div>
                    <div className={styles.imageContainer}>
                        <img src="/logo.png" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About