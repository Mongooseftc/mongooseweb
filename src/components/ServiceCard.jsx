import React from 'react'

import styles from '../../styles/ServiceCard.module.css'

const ServiceCard = ({title, description, icon}) => {
  return (
    <div className={styles.serviceCard}>
        <div>
            {icon}
        </div>
        <h1>{title}</h1>
        <p>
            {description}
        </p>
    </div>
  )
}

export default ServiceCard