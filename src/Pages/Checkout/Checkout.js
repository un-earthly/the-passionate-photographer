import React from 'react'
import { toast, ToastContainer } from 'react-toastify'
import useUserCredential from '../../Hooks/useUserCredential'

export default function Checkout() {
    const { name, setName } = useUserCredential()
    const handleCheckout = e => {
        e.preventDefault()
        name ?
            toast(`thank You Mr.${name}, your form has been submitted successfully`)
            : toast('Form not submitted.Error:you have to provide all the info')
    }
    return (
        <div className="container p-12 mx-auto text-orange-100">
            <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
                <div className="flex flex-col md:w-full">
                    <h2 className="mb-4 font-bold md:text-8xl text-heading font-[Tangerine] text-center">Shipping Address
                    </h2>
                    <form className="justify-center w-full mx-auto" onSubmit={handleCheckout}>
                        <div className="">
                            <div className="space-x-0 lg:flex lg:space-x-4">
                                <div className="w-full lg:w-1/2">
                                    <label for="name" className="block mb-3 text-sm font-semibold ">Name</label>
                                    <input required name="name" type="text" placeholder="Name"
                                        onChange={e => setName(e.target.value)}
                                        value={name}
                                        className="w-full px-4 py-3 text-sm border  hover:backdrop-blur-lg duration-500 rounded lg:text-sm focus:outline-none " />
                                </div>
                                <div className="w-full lg:w-1/2 ">
                                    <label htmlFor="phone" className="block mb-3 text-sm font-semibold ">Phone</label>
                                    <input required type="tel" placeholder="Phone" id='phone'
                                        className="w-full px-4 py-3 text-sm border hover:backdrop-blur-lg duration-500 rounded lg:text-sm focus:outline-none " />
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="w-full">
                                    <label for="Email"
                                        className="block mb-3 text-sm font-semibold ">Email</label>
                                    <input required name="Last Name" type="text" placeholder="Email"
                                        className="w-full px-4 py-3 text-sm border  hover:backdrop-blur-lg duration-500 rounded lg:text-sm focus:outline-none " />
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="w-full">
                                    <label for="Address"
                                        className="block mb-3 text-sm font-semibold ">Address</label>
                                    <textarea

                                        className="w-full px-4 py-3 text-xs border  rounded lg:text-sm focus:outline-none  hover:backdrop-blur-lg duration-500"
                                        name="Address" cols="20" rows="4" placeholder="Address"></textarea>
                                </div>
                            </div>
                            <div className="space-x-0 lg:flex lg:space-x-4">
                                <div className="w-full lg:w-1/2 ">
                                    <label for="city"
                                        className="block mb-3 text-sm font-semibold">City</label>
                                    <input required name="city" type="text" placeholder="City"
                                        className="w-full px-4 py-3 text-sm border  hover:backdrop-blur-lg duration-500 rounded lg:text-sm focus:outline-none " />
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <label for="postcode" className="block mb-3 text-sm font-semibold ">
                                        Postcode</label>
                                    <input required name="postcode" type="text" placeholder="Post Code"
                                        className="w-full px-4 py-3 text-sm border rounded lg:text-sm focus:outline-none hover:backdrop-blur-lg duration-500" />
                                </div>
                            </div>
                            <div className="flex items-center mt-4 hover:backdrop-blur-lg duration-500">
                                <label className="flex items-center text-sm group text-heading">
                                    <input required type="checkbox"
                                        className="w-5 h-5 border  rounded focus:outline-none focus:ring-1" />
                                    <span className="ml-2">Save this information for next time</span></label>
                            </div>
                            <div className="relative pt-3 xl:pt-6 hover:backdrop-blur-lg duration-500"><label for="note"
                                className="block mb-3 text-sm font-semibold "> Notes
                                (Optional)</label><textarea name="note"
                                    className="flex items-center w-full px-4 py-3 text-sm border  hover:backdrop-blur-lg duration-500 rounded focus:outline-none "
                                    rows="4" placeholder="Notes for delivery"></textarea>
                            </div>
                            <div className="mt-4">
                                <button
                                    className="w-full border-b border-b-orange-500 duration-500 py-3 font-bold text-white hover:bg-[#ffa60048] hover:rounded-sm hover:border-transparent active:translate-y-[0.125rem] active:border-b-blue-400"
                                    onClick={e => handleCheckout(e)}
                                >
                                    CHECKOUT
                                </button>

                            </div>
                        </div>
                    </form>
                </div>
                <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
                    <div className="pt-12 md:pt-0 2xl:ps-4">
                        <h2 className="text-xl font-bold">Order Summary
                        </h2>
                        <div className="mt-8">
                            <div className="flex flex-col space-y-4">
                                <div className="flex space-x-4">
                                    <img src="images/Compressed/wdding-1.jpg"
                                        className="h-[100px]" />
                                    <div>
                                        <h2 className="text-xl font-bold">Wedding Photography</h2>
                                        <p className="text-sm">Wedding Is one of the most wonderful event in one's life...</p>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex items-center w-full py-4 text-sm font-semibold border-b  lg:py-5 lg:px-3 text-heading last:border-b-0  border-orange-500 last:text-base last:pb-0">
                            Subtotal : <span className="ml-2">$39.99</span></div>
                        <div
                            className="flex items-center w-full py-4 text-sm font-semibold border-b  lg:py-5 lg:px-3 text-heading last:border-b-0  border-orange-500 last:text-base last:pb-0">
                            Shipping &amp; Tax : <span className="ml-2">$10</span></div>
                        <div
                            className="flex items-center w-full py-4 text-sm font-semibold border-b  lg:py-5 lg:px-3 text-heading last:border-b-0 border-orange-500  last:text-base last:pb-0">
                            Total : <span className="ml-2">$49.99</span></div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

