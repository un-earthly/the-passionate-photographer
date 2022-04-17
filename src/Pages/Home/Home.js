import React from 'react'
import { Link } from 'react-router-dom'
import Gallery from './Gallery'
import Services from './Service/Services'

export default function Home() {
    return (
        <div className='text-white'>
            <div className='h-screen flex flex-col items-center justify-center'>
                <h1 className="text-8xl text-center font-[Tangerine] font-bold overflow-hidden">Hello.I'm <span className="duration-500 text-8xl border-b-4 relative top-3 border-orange-400 p-4 leading-snug">William Jhon<p className='text-center my-4 text-3xl relative left-24 -top-10 font-bold font-[Tangerine] animate-bounce'>A passionate photographer who Loves to click images.</p></span></h1>
                <Link to='contact' className='duration-500 border border-orange-400 rounded-md px-4 py-2 hover:text-orange-400 hover:border-transparent'>Get In Touch</Link>
            </div>
            <Gallery />

            <Services />
        </div>
    )
}
