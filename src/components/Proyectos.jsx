import githubIcon from '../icons/githubGreen.svg'
import linkIcon from '../icons/linkGreen.svg'
import reactIcon from '../icons/slider/react.svg'
import pythonIcon from '../icons/slider/python.svg'
import tailwindIcon from '../icons/slider/tailwind.svg'
import figmaIcon from '../icons/figma.svg'
import jsIcon from '../icons/js.svg'
import mongo from '../icons/slider/mongo.svg'
import pgsql from '../icons/pgsql.svg'
import nextjs from '../icons/nextjs.svg'
import flaskIcon from '../icons/flask.svg'
import pj1Img from '../assets/calidad.png'
import pj2Img from '../assets/fruitDetector.png'
import pj3Img from '../assets/palacioColesterol.png'
import pj4Img from '../assets/secdep.png'

const Proyectos = () => {
    return (
        <section className=' flex-row w-2/3 px-2 py-6 mx-auto my-20 h-auto bg-[#352E2E]  rounded-2xl'>
            <h2 className='w-full py-2 text-xl text-center text-white font-paytoneOne' id='proyectos'>PROYECTOS</h2>

            <div className="flex flex-wrap justify-center gap-4 ">


                {/* Proyecto #1 */}
                <section className='sm:w-full lg:w-[46%] h-74 rounded-2xl bg-[#1D1919]   flex flex-col md:flex-row font-paytoneOne'>
                    <section className="flex w-full md:w-1/2 h-auto px-2 bg-top bg-cover my-2 rounded">
                        {/* IMG */}
                        <img src={pj4Img} alt="Proyecto Sec Deporte Neiva" className='w-full h-full object-cover rounded-2xl'/>
                    </section>
                    <section className='w-full md:w-1/2 px-2 md:ml-2 md:my-7 h-4/5'>
                        <h3 className='md:text-xl text-lg   text-[#06D6A0]'>Sec Deporte Neiva</h3>

                        <section className='w-5 gap-3 my-1 text-white flex'>
                            {/* Logos tecnologias */}

                            <img src={figmaIcon} alt="" />
                            <img src={pgsql} alt="" />
                            <img src={jsIcon} alt="" />
                            <img src={nextjs} alt="" />
                            <img src={tailwindIcon} alt="" />

                        </section>

                        <p className='text-[#877474] [font-size:10px] sm:text-xs font-inter  my-2 pr-2'>Plataforma SaaS diseñada para la Secretaría de Deportes de Neiva, que gestiona escenarios deportivos, usuarios y actividades. Incluye dashboards intuitivos para monitorear estadísticas, registrar academias, programar eventos y evaluar el estado de infraestructuras deportivas, optimizando la administración y promoviendo la transparencia en la gestión deportiva municipal.</p>

                        <section className='flex justify-end mt-6'>
                            {/* <h3 className='text-xs text-white'>01/01/01</h3> */}
                            <div className="flex mr-2">
                                {/* <a href="/" className='hover:active:scale-[.90]'>
                                <img src={githubIcon} className='w-5 mx-2 fill-red-800' />
                            </a> */}
                                {/* <a href="/" className='hover:active:scale-[.90]'>
                                <img src={linkIcon} className='w-5' />
                            </a> */}
                            </div>
                        </section>

                    </section>

                </section>

                
                {/* Proyecto #2 */}
                <section className='sm:w-full lg:w-[46%] h-74 rounded-2xl bg-[#1D1919] flex flex-col md:flex-row font-paytoneOne'>
                    <section className="flex w-full md:w-1/2 h-auto px-2 bg-top bg-cover my-2 rounded">
                        {/* IMG */}
                        <img src={pj1Img} alt="Proyecto Gestor C/R" className='w-full h-full object-cover rounded-2xl'/>
                    </section>
                    <section className='w-full md:w-1/2 px-2 md:ml-2 md:my-7 h-4/5'>
                        <h3 className='md:text-xl text-lg text-[#06D6A0]'>Gestor C/R</h3>

                        <section className='w-5 gap-3 my-1 text-white flex'>
                            {/* Logos tecnologias */}

                            <img src={figmaIcon} alt="" />
                            <img src={mongo} alt="" />
                            <img src={jsIcon} alt="" />
                            <img src={reactIcon} alt="" />
                            <img src={tailwindIcon} alt="" />

                        </section>

                        <p className='text-[#877474] [font-size:10px] sm:text-xs font-inter  my-2 pr-2'>Aplicación para evaluar la calidad de productos y empresas mediante modelos como ISO 25000 y Six Sigma. También permite analizar riesgos, generando matrices automatizadas para identificar amenazas. Con una interfaz intuitiva, centraliza resultados y facilita la toma de decisiones para optimizar estándares de calidad y gestión empresarial.</p>

                        <section className='flex justify-end px-2 md:mt-6'>
                            <div className="flex m-2 md:m-0 md:mr-2">
                                <a href="https://github.com/Minmgf/Calidad" className='hover:active:scale-[.90]'>
                                    <img src={githubIcon} className='w-5 md:mx-2 fill-red-800' />
                                </a>
                                {/* <a href="/" className='hover:active:scale-[.90]'>
                                <img src={linkIcon} className='w-5' />
                            </a> */}
                            </div>
                        </section>

                    </section>

                </section>

                {/* Proyecto #3 */}
                <section className='sm:w-full lg:w-[46%] h-74 rounded-2xl bg-[#1D1919] flex flex-col md:flex-row font-paytoneOne'>
                    <section className="flex w-full md:w-1/2 h-auto px-2 bg-top bg-cover my-2 rounded">
                        {/* IMG */}
                        <img src={pj2Img} alt="Proyecto Fruit Detector" className='w-full h-full object-cover rounded-2xl'/>
                    </section>
                    <section className='w-full md:w-1/2 px-2 md:ml-2 md:my-7 h-4/5'>
                        <h3 className='md:text-xl text-lg text-[#06D6A0]'>Fruit Detector</h3>

                        <section className='w-5 gap-3 my-1 text-white flex'>
                            {/* Logos tecnologias */}

                            <img src={flaskIcon} alt="" />
                            <img src={pythonIcon} alt="" />
                            <img src={tailwindIcon} alt="" />

                        </section>

                        <p className='text-[#877474] [font-size:10px] sm:text-xs font-inter  my-2'>Desarrollo de una aplicación web utilizando Flask, diseñada para realizar iteraciones con un modelo en formato H5. El propósito principal de esta aplicación es llevar a cabo análisis de imágenes</p>

                        <section className='flex justify-end px-2 m-2 md:mt-6'>
                            <div className="flex flex-col sm:flex-col md:inline-block lg:flex-row">
                                <a href="https://github.com/Minmgf/FruitDetector" target='blank' className=' md:flex hover:active:scale-[.90]'>
                                    <img src={githubIcon} className='w-5 mx-2 sm:mx-1 md:mx-2' />
                                </a>
                            </div>
                        </section>

                    </section>

                </section>

                {/* Proyecto #4 */}
                <section className='sm:w-full lg:w-[46%] h-74 rounded-2xl bg-[#1D1919] flex flex-col md:flex-row font-paytoneOne'>
                    <section className="flex w-full md:w-1/2 h-auto px-2 bg-top bg-cover my-2 rounded">
                        {/* IMG */}
                        <img src={pj3Img} alt="Proyecto Palacio del Colesterol" className='w-full h-60 object-cover rounded-2xl'/>
                    </section>
                    <section className='w-full md:w-1/2 px-2 md:ml-2 md:my-7 h-4/5'>
                        <h3 className='md:text-xl text-lg  text-[#06D6A0]'>Palacio del colesterol</h3>

                        <section className='flex  w-5 gap-3 my-1 text-white '>
                            {/* Logos tecnologias */}

                            <img src={figmaIcon} alt="" />
                            <img src={jsIcon} alt="" />
                            <img src={reactIcon} alt="" />
                            <img src={tailwindIcon} alt="" />

                        </section>

                        <p className='text-[#877474] [font-size:10px] sm:text-xs font-inter   my-2'>Landing desarrollada como proyecto universitario. Sitio web de restaurante *FICTICIO* de comidas rapidas en la ciudad de Neiva</p>

                        <section className='flex justify-end px-2 m-2 md:mt-6'>
                            <div className="flex sm:flex-row md:flex-row lg:flex-row">
                                <a href="https://github.com/Minmgf/palacioColesterol" target='blank' className=' md:flex hover:active:scale-[.90]'>
                                    <img src={githubIcon} className='w-5 sm:mx-1 md:mx-2 fill-red-800' />
                                </a>
                                {/* <a href="https://palaciocolesterol.netlify.app" target='blank' className=' md:flex hover:active:scale-[.90]'>
                                <img src={linkIcon} className='w-5' />
                            </a> */}
                            </div>
                        </section>

                    </section>

                </section>



            </div>




        </section>
    )
}

export default Proyectos
