import React from 'react'
import NavBar from '../src/components/NavBar'
import Header from '../src/components/Header'
import Habilidades from '../src/components/Habilidades'
import Proyectos from '../src/components/Proyectos'
import Footer from '../src/components/footer'


const Index = () => {
  return (
    <div className='bg-[#141414]'>
        <NavBar/>
        <Header/>
        <Habilidades/>
        <Proyectos/>
        <Footer/>

      
    </div>
  )
}

export default Index
