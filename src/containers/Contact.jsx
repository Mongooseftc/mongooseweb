import React from 'react'

import styles from '../../styles/Contact.module.css'

const Contact = () => {
    return (
        <section id="contact" className={styles.contact}>
            <h1>Contáctanos</h1>
            <a href="mailto:mongoose.fintech.company@gmail.com">
            <button>
                <i className="bi bi-envelope"></i>
                <div className={styles.space}></div>
                Envía un email
            </button>
            </a>
        </section>
    )
}

export default Contact