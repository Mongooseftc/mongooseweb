import React from 'react'


import styles from '../../styles/Header.module.css'

const Header = () => {
  return (
    <header>
        <nav className={styles.nav}>
            <div className={styles.brand}>
                <h1>mongoose</h1>
            </div>

            <ul>
                <li><a href="#about">Nosotros</a></li>
                <li><a href="#services">Servicios</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header