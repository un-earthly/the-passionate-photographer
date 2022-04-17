import React from 'react'
import { Link } from 'react-router-dom'

export default function Service({ name, pricing, img, desc }) {

    console.log(name, pricing, img, desc)
    return (
        <div className='p-4 text-center space-y-6'>
            <div className=' overflow-hidden h-[250px] rounded-md mx-auto'>
                <img src={img} className=' duration-500 object-cover h-full w-full rounded-sm filter hover:brightness-50 hover:scale-150' alt="" />
            </div>
            <h2 className="text-2xl font-semibold">{name}</h2>
            <p className="text-md font-light text-slate-400">{desc}</p>
            <p className="font-semibold">Starting From: {pricing}/ hour</p>
            <Link to='/checkout' className="px-4 block py-2 checkoutBtn border-orange-500 border hover:border-transparent duration-300 text-orange-400">Checkout</Link>
        </div>
    )
}
