import React from 'react'

export default function Checkout() {
    return (
        <div className="container p-12 mx-auto text-orange-100">
            <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
                <div className="flex flex-col md:w-full">
                    <h2 className="mb-4 font-bold md:text-xl text-heading ">Shipping Address
                    </h2>
                    <form className="justify-center w-full mx-auto" method="post" action>
                        <div className="">
                            <div className="space-x-0 lg:flex lg:space-x-4">
                                <div className="w-full lg:w-1/2">
                                    <label for="firstName" className="block mb-3 text-sm font-semibold ">First
                                        Name</label>
                                    <input name="firstName" type="text" placeholder="First Name"
                                        className="w-full px-4 py-3 text-sm border  rounded lg:text-sm focus:outline-none " />
                                </div>
                                <div className="w-full lg:w-1/2 ">
                                    <label for="firstName" className="block mb-3 text-sm font-semibold ">Last
                                        Name</label>
                                    <input name="Last Name" type="text" placeholder="Last Name"
                                        className="w-full px-4 py-3 text-sm border  rounded lg:text-sm focus:outline-none " />
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="w-full">
                                    <label for="Email"
                                        className="block mb-3 text-sm font-semibold ">Email</label>
                                    <input name="Last Name" type="text" placeholder="Email"
                                        className="w-full px-4 py-3 text-sm border  rounded lg:text-sm focus:outline-none " />
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="w-full">
                                    <label for="Address"
                                        className="block mb-3 text-sm font-semibold ">Address</label>
                                    <textarea
                                        className="w-full px-4 py-3 text-xs border  rounded lg:text-sm focus:outline-none "
                                        name="Address" cols="20" rows="4" placeholder="Address"></textarea>
                                </div>
                            </div>
                            <div className="space-x-0 lg:flex lg:space-x-4">
                                <div className="w-full lg:w-1/2">
                                    <label for="city"
                                        className="block mb-3 text-sm font-semibold ">City</label>
                                    <input name="city" type="text" placeholder="City"
                                        className="w-full px-4 py-3 text-sm border  rounded lg:text-sm focus:outline-none " />
                                </div>
                                <div className="w-full lg:w-1/2 ">
                                    <label for="postcode" className="block mb-3 text-sm font-semibold ">
                                        Postcode</label>
                                    <input name="postcode" type="text" placeholder="Post Code"
                                        className="w-full px-4 py-3 text-sm border  rounded lg:text-sm focus:outline-none " />
                                </div>
                            </div>
                            <div className="flex items-center mt-4">
                                <label className="flex items-center text-sm group text-heading">
                                    <input type="checkbox"
                                        className="w-5 h-5 border  rounded focus:outline-none focus:ring-1" />
                                    <span className="ml-2">Save this information for next time</span></label>
                            </div>
                            <div className="relative pt-3 xl:pt-6"><label for="note"
                                className="block mb-3 text-sm font-semibold "> Notes
                                (Optional)</label><textarea name="note"
                                    className="flex items-center w-full px-4 py-3 text-sm border  rounded focus:outline-none "
                                    rows="4" placeholder="Notes for delivery"></textarea>
                            </div>
                            <div className="mt-4">
                                <button
                                    className="w-full border-b border-b-orange-400 duration-500 py-3 font-bold text-white hover:bg-[#ffa60048] hover:rounded-sm hover:border-transparent active:translate-y-[0.125rem] active:border-b-blue-400"
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
                                    <div>
                                        <img src="https://source.unsplash.com/user/erondu/1600x900" alt="image"
                                            className="w-60" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold">Title</h2>
                                        <p className="text-sm">Lorem ipsum dolor sit amet, tet</p>
                                        <span className="text-red-600">Price</span> $20
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex space-x-4">
                                    <div>
                                        <img src="https://source.unsplash.com/collection/190727/1600x900" alt="image"
                                            className="w-60" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold">Title</h2>
                                        <p className="text-sm">Lorem ipsum dolor sit amet, tet</p>
                                        <span className="text-red-600">Price</span> $20
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
                        <div className="flex p-4 mt-4">
                            <h2 className="text-xl font-bold">ITEMS 2</h2>
                        </div>
                        <div
                            className="flex items-center w-full py-4 text-sm font-semibold border-b  lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                            Subtotal<span className="ml-2">$40.00</span></div>
                        <div
                            className="flex items-center w-full py-4 text-sm font-semibold border-b  lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                            Shipping Tax<span className="ml-2">$10</span></div>
                        <div
                            className="flex items-center w-full py-4 text-sm font-semibold border-b  lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                            Total<span className="ml-2">$50.00</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

