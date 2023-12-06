import myLogo from '../icons/logo.svg';
import translate from '../icons/translate.svg'

const Header = () => {
  return (
    <>
      <nav id='navbar' className="w-full shadow-md font-inter">
        <div className="flex items-center justify-center ">
          <a href="/">
          <img src={myLogo} className='w-24 my-4 mx-7 '/>
          </a>
        </div>
        <div className="flex justify-around invisible py-4 ml-5 text-xl text-white sm:visible sm:gap-8 xl:flex ">
          <a href="/" className='hover:text-gray-400 active:scale-[.98] sm:text-center '>Sobre mi</a>
          <a href="#" className='hover:text-gray-400 active:scale-[.98] sm:text '>Proyectos</a>
          <a href="/" className='hover:text-gray-400 active:scale-[.98] sm:text '>Contacto</a>
        </div>
        <div className="[grid-area:translate] flex justify-center items-center pt-2">
          <a href="" >
            <img src={translate} alt=""  />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
