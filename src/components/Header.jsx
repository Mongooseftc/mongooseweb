import React from 'react'


import styles from '../../styles/Header.module.css'

const Header = () => {

  let visible = false

  const toggleMenu = () => {
    visible = !visible
    const menu = document.getElementById('full-menu')
    if (visible) {
      menu.style.display = "flex"
    } else {
      menu.style.display = "none"
    }
  }

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
        <button className={styles.menuBtn} id="menu-btn" onClick={toggleMenu}>
          <i className="bi bi-list"></i>
        </button>
      </nav>
      <nav className={styles.fullNav} id='full-menu' onClick={toggleMenu}>
        <button>
          <i className="bi bi-x"></i>
        </button>
        <ul>
          <li className='animate__animated animate__fadeInDown'><a href="#about">Nosotros</a></li>
          <li className='animate__animated animate__fadeInDown'><a href="#services">Servicios</a></li>
          <li className='animate__animated animate__fadeInDown'><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header