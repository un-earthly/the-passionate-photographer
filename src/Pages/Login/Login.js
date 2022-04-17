import React, { useState } from 'react'
import useShowPass from '../../Hooks/useShowPass'

export default function Login() {
    const { showPass, setShowPass } = useShowPass()
    return (
        <div>


            <main class="relative min-h-screen w-full bg-white">
                <div class="p-6">

                    <section
                        class="absolute top-1/2 left-1/2 mx-auto max-w-sm -translate-x-1/2 -translate-y-1/2 transform space-y-4 text-center"
                    >


                        <div x-show="!isLoginPage" class="space-y-4">
                            <header class="mb-3 text-2xl font-bold">Log in</header>
                            <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200">
                                <input
                                    type="text"
                                    placeholder="Email or username"
                                    class="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                                />
                            </div>
                            <div
                                class="flex w-full items-center space-x-2 rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200"
                            >
                                <input
                                    type={showPass ? 'text' : 'password'}
                                    placeholder="Password"
                                    class="fos:outline-none my-3 w-full border-none bg-transparent outline-none"
                                />
                                <span onClick={() => setShowPass(!showPass)} className="font-medium text-gray-400 hover:text-gray-500"><i class={`bi bi-${showPass ? 'eye-slash' : 'eye'}`}></i></span>
                            </div>
                            <button
                                class="w-full rounded-2xl border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400"
                            >
                                LOG IN
                            </button>
                        </div>


                    </section>
                </div>
            </main >

        </div >
    )
}
