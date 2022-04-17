import React from 'react'

export default function Checkout() {
    return (
        <div className='pb-20 pt-6 space-y-4 flex items-center justify-center'>

            <div className=" text-white w-3/4 mx-auto">
                <header className="mb-3 text-4xl text-center font-[Tangerine] text-orange-500 font-bold">Please Fill Up The Form.</header>
                <form className='space-y-4'>
                    <div className="w-full rounded-md px-4 bg-transparent border border-orange-400">
                        <input
                            type="text"
                            placeholder="Name (optional)"
                            className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                        />
                    </div>
                    <div className="w-full rounded-md px-4 bg-transparent border border-orange-400">
                        <input
                            type="text"
                            placeholder="Email"
                            className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                        />
                    </div>
                    <div
                        className="flex w-full items-center space-x-2 rounded-md px-4 border border-orange-400 "
                    >
                        <input
                            type='password'
                            placeholder="Password"
                            className="fos:outline-none my-3 w-full border-none bg-transparent outline-none"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

