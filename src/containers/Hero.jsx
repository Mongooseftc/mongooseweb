import React from 'react'
import Header from '../components/Header'

import styles from '../../styles/Hero.module.css'

const Hero = () => {
  return (
    <section id="top" className={styles.hero}>
        <Header />
        <div className={styles.presentation}>
            <h1 className='animate__animated animate__fadeInUp'>
                Simplificando el acceso a criptodivisas
                y la inclusión financiera
            </h1>
            <button className='animate__animated animate__fadeInUp'>Conócenos</button>
        </div>
    </section>
  )
}

export default Hero