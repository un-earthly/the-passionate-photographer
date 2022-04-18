import React from 'react'
import { Link } from 'react-router-dom'
import Gallery from './Gallery'
import Services from './Service/Services'

export default function Home() {
    return (
        <div className='text-white'>
            <div className='h-[70vh] flex flex-col items-center justify-center'>
                <h1 className="md:text-8xl text-5xl text-center font-[Tangerine] font-bold md:mt-24 overflow-hidden">Hello.I'm <span className="duration-500 md:text-8xl text-3xl block md:inline border-b-4 md:relative top-3 border-orange-400 md:p-4 md:leading-snug">William Jhon<p className='text-center my-4 md:text-3xl text-sm md:relative md:left-24 md:-top-10 md:font-bold font-[Tangerine] animate-bounce'>A passionate photographer who Loves to click images.</p></span></h1>
                <Link to='/contact' className='duration-500 border mt-20 border-orange-400 rounded-md px-4 py-2 hover:text-orange-400 hover:border-transparent'>Get In Touch</Link>
            </div>
            <div>
                <h1 className="text-4xl text-center md:mt-10 text-cyan-500">My Works</h1>
                <Gallery />
            </div>

            <Services />
        </div>
    )
}
