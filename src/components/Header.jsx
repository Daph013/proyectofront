import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="navbar py-4 bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><Link to ="/" className="nav-link active" aria-current="page" href="#">Inicio</Link></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost rounded-none text-xl py-auto"><img src="/public/kingmmologo.png" width={250}  alt="" /></a>
    
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to ="/" className="nav-link active btn btn-ghost rounded-none text-lg bg-neutral" aria-current="page" href="#">Inicio</Link></li>
    <li><Link to ="/Ventaosrs" className="nav-link active btn btn-ghost rounded-none text-lg  text-orange-300" aria-current="page" href="#">Vende OSRS</Link></li>
    <li><Link to ="/Compraosrs" className="nav-link active btn btn-ghost rounded-none text-lg  text-orange-300" aria-current="page" href="#">Compra OSRS</Link></li>
    <li><Link to ="/Ventars" className="nav-link active btn btn-ghost rounded-none text-lg text-orange-300" aria-current="page" href="#">Vende RS3</Link></li>
    <li><Link to ="/Comprars" className="nav-link active btn btn-ghost rounded-none text-lg text-orange-300" aria-current="page" href="#">Compra RS3</Link></li>
      
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
  )
}

export default Header