import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React from 'react'
import useShowPass from '../../Hooks/useShowPass'
import Social from '../../UtilitiesAndShared/Social'
import auth from '../../firebase.init';
import useUserCredential from '../../Hooks/useUserCredential';
import { Link } from 'react-router-dom';

export default function Register() {
    const { showPass, setShowPass } = useShowPass()
    const [createUserWithEmailAndPassword, , , error] = useCreateUserWithEmailAndPassword(auth, {
        sendEmailVerification: true,
    })


    const { setEmail, email, setPassword, password, setName, name } = useUserCredential();
    const handleRegister = e => {
        e.preventDefault()
        createUserWithEmailAndPassword(email, password)

    }
    return (
        <div className='pb-20 pt-6 space-y-4 flex items-center justify-center'>

            <div className=" text-white w-3/4 mx-auto">
                <header className="mb-3 text-8xl text-center font-[Tangerine] text-orange-500 font-bold">Lets Sign Up</header>
                <form onSubmit={e => handleRegister(e)} className='space-y-4'>
                    <div className="hover:backdrop-blur-lg duration-500 w-full rounded-md px-4 bg-transparent border border-orange-400">
                        <input
                            type="text"
                            placeholder="Name (optional)"
                            className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="hover:backdrop-blur-lg duration-500 w-full rounded-md px-4 bg-transparent border border-orange-400">
                        <input
                            type="text"
                            placeholder="Email"
                            className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div
                        className="hover:backdrop-blur-lg duration-500 flex w-full items-center space-x-2 rounded-md px-4 border border-orange-400 "
                    >
                        <input
                            type={showPass ? 'text' : 'password'}
                            placeholder="Password"
                            className="fos:outline-none my-3 w-full border-none bg-transparent outline-none"
                            required
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <span onClick={() => setShowPass(!showPass)} className="font-medium text-gray-400 hover:text-gray-500"><i className={`bi bi-${showPass ? 'eye-slash' : 'eye'}`}></i></span>


                    </div>

                    <p className='text-red-500'>{error?.message}</p>
                    <button
                        className="w-full border-b border-b-orange-400 duration-500 py-3 font-bold text-white hover:bg-[#ffa60044] hover:rounded-sm hover:border-transparent active:translate-y-[0.125rem] active:border-b-blue-400"
                    >
                        CREATE ACCOUNT
                    </button>
                    <Link className='text-white text-center block' to='/login'>Already Have An Account ? <p className="text-orange-500 mt-3 inline">Login Now!</p></Link>
                </form>
                <Social />
            </div>
        </div>
    )
}
