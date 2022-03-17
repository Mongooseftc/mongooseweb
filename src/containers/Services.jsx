import React from 'react'

import styles from '../../styles/Services.module.css'
import ServiceList from './ServiceList'

const Services = () => {
  return (
    <section id="services" className={styles.services}>
        <h1>Nuestros servicios</h1>
        <ServiceList />
    </section>
  )
}

export default Services