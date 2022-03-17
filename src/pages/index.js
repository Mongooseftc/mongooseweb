import Head from 'next/head'
import About from '../containers/About'
import Contact from '../containers/Contact'
import Footer from '../containers/Footer'
import Hero from '../containers/Hero'
import Services from '../containers/Services'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mongoose Fintech Company</title>
        <meta name="description" content="Somos una empresa 100% salvadoreña de tecnología financiera enfocada en las criptodivisas, buscamos facilitar estas tecnologías a todas las personas, diseñando software de alta calidad y fácil de comprender, también educamos a las personas sobre qué son y cómo administrar criptoactivos." />
        <link rel="icon" href="/logo.png" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>

      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
