import { useEffect, useRef, useState } from 'react';
import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';

const Navbar = ({ onHeightChange }) => {
  const headerRef = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      if(headerRef.current) {
        onHeightChange(headerRef.current.offsetHeight);
      }
    };
    updateHeight();

    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [onHeightChange]);

  return (
    <header ref={headerRef} className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" width={14} height={18} className='cursor-pointer'/>
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div key={nav} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">{nav}</div>
          ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} className='cursor-pointer' />
          <img src={bagImg} alt="bag" width={18} height={18} className='cursor-pointer' />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
