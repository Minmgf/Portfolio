import myLogo from '../icons/logo.svg';
import translate from '../icons/translate.svg'

const Header = () => {
  return (
    <>
      <nav id='navbar' className="w-full shadow-md font-inter">
        <div className="[grid-area:logo] flex justify-center items-center">
          <a href="/">
          <img src={myLogo} className='w-24 my-4 mx-7 '/>
          </a>
        </div>
        <div className="[grid-area:menu] text-white flex justify-around text-xl   ml-5 pt-4">
          <a href="/" className='hover:text-gray-400 active:scale-[.98] '>Sobre mi</a>
          <a href="#" className='hover:text-gray-400 active:scale-[.98] '>Proyectos</a>
          <a href="/" className='hover:text-gray-400 active:scale-[.98] '>Contacto</a>
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
