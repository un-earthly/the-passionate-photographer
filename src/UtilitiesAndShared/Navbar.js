import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="sticky top-0 flex items-center justify-around p-4 backdrop-blur z-10">
            <Link to='/'>
                <img className='w-1/4 h-1/4' src="images/logo.png" alt="" /></Link>
            <ul className="flex justify-center items-center text-cyan-50">
                <NavLink className='mx-2 py-1 p-3 hover:text-[#47ffb2] duration-500' to='/home'>Home</NavLink>
                <NavLink className='mx-2 py-1 p-3 hover:text-[#47ffb2] duration-500' to='/about'>About</NavLink>
                <NavLink className='mx-2 py-1 p-3 hover:text-[#47ffb2] duration-500' to='/checkout'>Checkout</NavLink>
                <NavLink className='mx-2 py-1 p-3 hover:text-[#47ffb2] duration-500' to='/login'>Login</NavLink>
                <NavLink className='mx-2 py-1 p-3 hover:text-[#47ffb2] duration-500' to='/register'>Register</NavLink>
            </ul>
        </nav>
    )
}
