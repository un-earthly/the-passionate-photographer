import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React from 'react'
import useShowPass from '../../Hooks/useShowPass'
import Social from '../../UtilitiesAndShared/Social'
import auth from '../../firebase.init';
import useUserCredential from '../../Hooks/useUserCredential';
import { toast, ToastContainer } from 'react-toastify';

export default function Register() {
    const { showPass, setShowPass } = useShowPass()
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)


    const { emailRef, email, passwordRef, password, nameRef } = useUserCredential();
    const handleRegister = e => {
        e.preventDefault()
        createUserWithEmailAndPassword(email, password)

    }
    return (
        <div className='pb-20 pt-6 space-y-4 flex items-center justify-center'>

            <div className=" text-white w-3/4 mx-auto">
                <header className="mb-3 text-8xl text-center font-[Tangerine] text-orange-500 font-bold">Lets Sign Up</header>
                <form onSubmit={e => handleRegister(e)} className='space-y-4'>
                    <div className="w-full rounded-md px-4 bg-transparent border border-orange-400">
                        <input
                            type="text"
                            placeholder="Name (optional)"
                            className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                            ref={nameRef}
                        />
                    </div>
                    <div className="w-full rounded-md px-4 bg-transparent border border-orange-400">
                        <input
                            type="text"
                            placeholder="Email"
                            className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                            required
                            ref={emailRef}
                        />
                    </div>
                    <div
                        className="flex w-full items-center space-x-2 rounded-md px-4 border border-orange-400 "
                    >
                        <input
                            type={showPass ? 'text' : 'password'}
                            placeholder="Password"
                            className="fos:outline-none my-3 w-full border-none bg-transparent outline-none"
                            required
                            ref={passwordRef}
                        />
                        <span onClick={() => setShowPass(!showPass)} className="font-medium text-gray-400 hover:text-gray-500"><i className={`bi bi-${showPass ? 'eye-slash' : 'eye'}`}></i></span>
                    </div>
                    <button
                        className="w-full border-b border-b-orange-400 duration-500 py-3 font-bold text-white hover:bg-orange-400 hover:rounded-xl hover:border-transparent active:translate-y-[0.125rem] active:border-b-blue-400"
                    >
                        CREATE ACCOUNT
                    </button>
                </form>
                <Social />
            </div>
            <ToastContainer />
        </div>
    )
}