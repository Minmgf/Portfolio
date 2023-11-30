import React from 'react'
import NavBar from '../src/components/NavBar'
import Header from '../src/components/Header'
import Habilidades from '../src/components/Habilidades'
import Proyectos from '../src/components/Proyectos'
import Footer from '../src/components/footer'
import Contactos from '../src/components/Contacto'


const Index = () => {
  return (
    <div className='bg-[#141414]'>
        <NavBar/>
        <Header/>
        <Habilidades/>
        <Proyectos/>
        <Contactos/>
        <Footer/>

      
    </div>
  )
}

export default Index
