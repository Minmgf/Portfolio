import React from 'react'
import linkedIn from '../icons/linkedin.svg'
import gitHub from '../icons/github.svg'

const Header = () => {
  return (
    <div className='flex justify-center w-2/3 mx-auto mt-20 lg:flex-row md:flex-col ' id='home'>
        <div className="hidden w-full sm:hidden md:flex md:justify-center md:m-auto">
            <img src="https://avatars.githubusercontent.com/u/113538957?s=400&u=ee9af8821cf0232c9bb368eada412d94d21ff7e8&v=4" className='rounded-full '/>
        </div>
        <div className="ml-4 md:ml-2">
            <p className='text-white font-inter'>¡HOLA!</p>
            <h1 className='md:text-4xl text-3xl text-white font-paytoneOne' >SOY <span className='text-[#06D6A0]'> MANUEL ISAIAS NAVARRO MONTEALEGRE</span> </h1>
            <p className='mt-4 text-white font-inter'>Amante de la tecnología y con una comprensión sólida del 
              desarrollo y los conceptos multimedia. Estudiante de ingeniería
              de software, me sumerjo en un constante proceso de aprendizaje 
              para ampliar mi capacidad de enfrentar desafíos, tanto a nivel 
              personal como profesional. </p>

              <div className="flex justify-center m-4 text-center">
                  {/* Actualizar ruta del cv */}
                <a href="/CV-ES.pdf" download="CV-ES.pdf" className='flex'>
                <button className="inline-flex items-center px-4 py-2 mx-4 font-bold text-gray-800 bg-gray-300 rounded hover:bg-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                  <span>  CV-ES</span>
                </button>
                </a>


                  {/* Actualizar ruta del cv */}
                  <a href="/CV-EN.pdf" download="CV-EN" className='flex justify-center '>
                <button className="inline-flex items-center px-4 py-2 mx-4 font-bold text-gray-800 bg-gray-300 rounded hover:bg-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                  <span>  CV-EN</span>
                </button>
                </a>

              </div>
    
        </div>
        <div className="flex flex-col justify-center sm:flex-col md:flex-row lg:flex-col">
            <a href="https://www.linkedin.com/in/manuel-navarro-m/" target='blank'
            className=' w-8 my-4 mx-4 md:mx-7 hover:active:scale-[.90]'>
              <img src={linkedIn}  className='w-full h-full ' />
            </a>
            <a href="https://github.com/Minmgf" target='blank'
            className=' w-8 my-4 mx-4 md:mx-7 hover:active:scale-[.90]'>
              <img src={gitHub} className='w-full h-full' />
            </a>            
        </div>
        
              
    </div>
  )
}

export default Header