import { signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, NavLink } from 'react-router-dom'
import auth from '../firebase.init'

export default function Navbar() {
    const [user] = useAuthState(auth)
    const [mobileNav, setMobileNav] = useState(true)
    const [menuOpen, setMenuOpen] = useState(false)
    if (window.screenX > 560) {
        setMobileNav(false)
    }
    return (
        <nav className="sticky top-0 flex items-center justify-around p-4 backdrop-blur z-10">
            <Link to='/'>
                <img className='w-1/4 h-1/4' src="images/logo.png" alt="" /></Link>
            <i onClick={() => setMenuOpen(!menuOpen)} className={`text-white text-3xl sm:hidden bi bi-${menuOpen ? 'x' : 'list'}`}></i>

            <ul className={`justify-center items-center text-cyan-50 md:flex ${mobileNav ? 'hidden' : 'flex'}`}>
                <NavLink className='mx-2 py-1 p-3 hover:text-[#47ffb2] duration-500' to='/home'>Home</NavLink>
                <NavLink className='mx-2 py-1 p-3 hover:text-[#47ffb2] duration-500' to='/about'>About</NavLink>
                <NavLink className='mx-2 py-1 p-3 hover:text-[#47ffb2] duration-500' to='/checkout'>Checkout</NavLink>
                <NavLink className='mx-2 py-1 p-3 hover:text-[#47ffb2] duration-500' to='/blogs'>Blogs</NavLink>
                {
                    user ? <button onClick={() => signOut(auth)}>Sign Out</button>
                        : <>

                            <NavLink className='mx-2 py-1 p-3 hover:text-[#47ffb2] duration-500' to='/login'>Login</NavLink>
                            <NavLink className='mx-2 py-1 p-3 hover:text-[#47ffb2] duration-500' to='/register'>Register</NavLink></>
                }
            </ul>

            <ul className={`absolute top-20 text-center duration-500 text-white h-screen bg-[#000000bc] w-screen ${menuOpen ? 'flex flex-col items-center justify-center' : 'hidden'}`}>
                <NavLink className='' to='/home'>Home</NavLink>
                <NavLink className='' to='/about'>About</NavLink>
                <NavLink className='  ' to='/checkout'>Checkout</NavLink>
                <NavLink className=' ' to='/blogs'>Blogs</NavLink>
                {
                    user ? <button className=' ' onClick={() => signOut(auth)}>Sign Out</button>
                        : <>

                            <NavLink className=' ' to='/login'>Login</NavLink>
                            <NavLink className=' ' to='/register'>Register</NavLink></>
                }
            </ul>

        </nav>
    )
}
