import {Link, Navigate, Outlet} from "react-router-dom";
import React, {useEffect, useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Lovelight() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(()=>{
    const handleScroll = () => setIsScrolled(window.scrollY > 300 ?  true : false);
    
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll',handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const Header = () => {
    return (<header
      className={` w-full justify-center z-20 ${isScrolled ? 'shadow-md py-2 lg:fixed h-16' : 'relative bg-blend-hue bg-cover bg-center h-96'}`}
      style={{
        backgroundImage: isScrolled ? 'none' : `url('../bg-1.jpg')`,
        backgroundColor: isScrolled ? '#000' : 'transparent' 
        }}
        >
      <div className={`bg-black ${isScrolled? 'flex ' :'h-full bottom-0  bg-opacity-50'}`}>      
        <button className="flex lg:hidden text-white p-4" onClick={toggleMenu}>
          {isMenuOpen ? 
          'Hi' : <GiHamburgerMenu />}
          
        </button>
        <div className={`${isScrolled ? '': 'container mx-auto flex py-4 justify-center'}`}>
            <img className="w-auto absolute bottom-[30%]" src="../lovelight.svg"
            style={{
              maxHeight: isScrolled ? '40%' : 'auto',
              marginLeft: isScrolled ? '20px' : 'auto'
            }}
            />
        </div>
        
        <nav className={`lg:flex xs:hidden max-xs:hidden md:hidden sm:hidden text-white text-sm ${isScrolled? 'mr-[30%]' : ''}`}>
            <div className="container mx-auto px-4 py-2 flex justify-center max-w-[100%] bottom-[15%]"
            style={{position:'absolute'}}
            >
            <ul className="flex space-x-4 ">
                <li><a href="#">About</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Developments</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Latest News</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            </div>
        </nav>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col space-y-4">
            <li><a href="#">Menu 1</a></li>
            <li><a href="#">Menu 2</a></li>
            <li><a href="#">Menu 3</a></li>
          </ul>
        </nav>
      )}
    </header>);
  };
  return (

    <> 
      <Header/>
      <main className={`h-auto w-full ${isScrolled ? 'absolute mt-[23%]':''}`}>
        <Outlet/>
      </main>
    </>
  )

}