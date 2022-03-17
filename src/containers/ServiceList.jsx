import React from 'react'
import ServiceCard from '../components/ServiceCard'

import styles from '../../styles/ServiceList.module.css'

const ServiceList = () => {
  return (
    <div className={styles.serviceList}>
        <ServiceCard 
          title="Asesorías"
          description="Asesoramos a empresas, evaluamos su modelo de negocio para asesorarlos en adoptar
          una herramienta u otra. Acompañamos a nuestros clientes en cada etapa del proceso
          de adopción."
          icon={<i className="bi bi-info-circle"></i>}/>
        <ServiceCard
          title="Administración de criptoactivos"
          description="Brindamos educación sobre la administración de criptoactivos y brindamos adicionalemnte
          software para simplificar su administración."
          icon={<i className="bi bi-safe"></i>}/>
        <ServiceCard
          title="DeFi"
          description="Contamos con plataformas DeFi únicas que se adaptan a las necesidades de 
          cada negocio y empresa."
          icon={<i className="bi bi-bank"></i>}/>
    </div>
  )
}

export default ServiceList