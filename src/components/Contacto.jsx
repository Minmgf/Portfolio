import React from 'react'
import mailIcon from '../icons/mail.svg'
import githubIcon from '../icons/github.svg'
import igIcon from '../icons/ig.svg'
import linkedinIcon from '../icons/linkedin.svg'

const Contacto = () => {
  return (
    <section className=' w-2/3 px-2 py-6 mx-auto my-20 h-auto bg-[#352E2E]  rounded-2xl'>
        <h2 className='w-full py-2 text-xl text-center text-white font-paytoneOne'>Contacto</h2>
        <section className='flex gap-4'>
        
            <section className='flex flex-col w-1/2 px-8'>
                <h2 className='text-[#06D6A0] text-3xl font-paytoneOne '>¿QUÉ ESPERAS?</h2>
                <p className='font-semibold text-white font-inter mt-7'>Puedes comunicarte conmigo a través de 
                    este formulario o por algunas de mis redes 
                    sociales.</p>
                <div className="flex items-center ">
                <img src={mailIcon} className='w-24 ' />
                    <div className="py-5 mx-2 mt-6">
                        <p className='text-[26] font-semibold text-[#A08282]'>CORREO ELECTRONICO</p>
                        <p className='text-[24] font-semibold text-white'>Manuelinm2015@gmail.com</p>
                        <div className="flex gap-4 mx-3 mt-1 ">
                            <a href="https://www.instagram.com/mamuel_n/" target='blank'>
                                <img src={igIcon} className='w-8 active:scale-[.90] bg-[#5f6e62] p-1 rounded-full' />
                            </a>
                            <a href="https://github.com/Minmgf" target='blank'>
                                <img src={githubIcon} className='w-8 active:scale-[.90] bg-[#5f6e62] p-1 rounded-full' />
                            </a>
                            <a href="https://www.linkedin.com/in/manuel-navarro-m/" target='blank'>
                                <img src={linkedinIcon} className='w-8 active:scale-[.90] bg-[#5f6e62] p-1 rounded-full' />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className='flex w-1/2'>
                <div className="flex flex-row flex-wrap gap-4 my-6">
                    <form name="contact" data-netlify="true">
                        <input type="text" placeholder='Nombre'  className='w-1/3 h-14 px-2 py-4 rounded-3xl bg-[#3D3838] text-white font-inter '/>
                        <input type="text" placeholder='Correo'  className='w-1/2 h-14 px-2 mx-4 py-4 rounded-3xl bg-[#3D3838] text-white font-inter '/>
                        <textarea placeholder='Mensaje' className='w-[90%] px-2 py-2 bg-[#3D3838] text-white font-inter  my-2 rounded-2xl h-1/2 resize-none' />
                        
                        <button type="submit" className=' px-6 py-3 bg-[#06D6A0] rounded-full font-semibold font-inter text-white hover:bg-[#41ac8f] active:scale-[.90] '>ENVIAR</button>
                    </form>
                </div>
            </section>

        </section>
      
    </section>
  )
}

export default Contacto
