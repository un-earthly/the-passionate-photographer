import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <div className='h-screen  flex-col flex items-center justify-center'>

            <h1 className="text-[200px]  font-[Tangerine]  text-center mb-10 text-orange-500">4 <img className='w-1/4 mx-5 animate-spin inline' src="https://www.seekpng.com/png/full/43-438549_camera-shutter-png-download-shutter-png-hd.png" alt="" /> 4</h1>


            <Link className='text-orange-400 text-8xl  font-[Tangerine] ' to='/home'>Back To Home</Link>
        </div>
    )
}
