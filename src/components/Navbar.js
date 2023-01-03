import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBookOpen } from 'react-icons/fa'
import { FaBars, FaTimes } from 'react-icons/fa'
import ButtonUp from './ButtonUp'
import './Navbar.css';
import { IconContext } from 'react-icons/lib'
import ButtonIn from './ButtonIn'
import Section from './Section'
import SectionProjeto from './SectionProjeto'
import SectionDestaques from './SectionDestaques'
import SectionAvaliacoes from './SectionAvaliacoes'
import SectionParcerias from './SectionParcerias'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else{
      setButton(true)
    }
  }

  window.addEventListener('resize', showButton);

  return(
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <div className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <FaBookOpen className='navbar-icon' />
              LIVRESE
            </Link>

            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars /> }
            </div>  

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='/projeto' className='nav-links' onClick={closeMobileMenu}>
                  Projeto
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='/destaques' className='nav-links' onClick={closeMobileMenu}>
                  Destaques
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='/avaliacoes' className='nav-links' onClick={closeMobileMenu}>
                  Avaliações
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='/parcerias' className='nav-links' onClick={closeMobileMenu}>
                  Parcerias
                </Link>
              </li>

              <li className='nav-btn'  onClick={closeMobileMenu}>
                <Link to='/login'>
                  <ButtonIn />
                </Link>
              </li>
              <li className='nav-btn'  onClick={closeMobileMenu}>
                <Link to='/cadastro'>
                  <ButtonUp />
                </Link>
              </li>
            </ul> 
          </div>
      </div>
      
      </IconContext.Provider>
      <Section />
      <SectionProjeto />
      <SectionDestaques />
      <SectionAvaliacoes/>
      <SectionParcerias />
    </> 
  )
}

export default Navbar