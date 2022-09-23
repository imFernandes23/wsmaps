import React from 'react'
import './Sidebar.css'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {SidebarData} from './SidebarData'
function Sidebar() {
  const [sidebarVar, setSidebarVar] = useState(false)

  const showSidebar = () => setSidebarVar(!sidebarVar)

  return (
    <>
    <div className='sidebar'>
        <Link to='#' className='menu-bar'>
            <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
    </div>
    <nav className={sidebarVar ? 'side-menu active' : 'side-menu'}>
      <ul className='side-menu-itens'onClick={showSidebar}>
        <li className='sidebar-toggle'>
          <Link to='#' className='menu-bars' onClick={showSidebar}>
            <AiIcons.AiOutlineClose/>
          </Link>
        </li>
        {SidebarData.map((item,index) => {
          return(
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
    </>
  )
}

export default Sidebar