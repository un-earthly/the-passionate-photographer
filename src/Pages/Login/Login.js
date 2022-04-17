import React from 'react'
import useUserCredential from '../../Hooks/useUserCredential'
import useShowPass from '../../Hooks/useShowPass'
import Social from '../../UtilitiesAndShared/Social'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import { Link, useLocation, useNavigate } from 'react-router-dom'
export default function Login() {
    const { showPass, setShowPass } = useShowPass()
    const { emailRef, email, passwordRef, password } = useUserCredential();
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const handleLogin = e => {
        e.preventDefault()

        signInWithEmailAndPassword(email, password)
    }

    if (user) {
        navigate(from, { replace: true })

    }
    return (
        <div className='pb-16 mt-3'>
            <div className="text-white w-3/4 mx-auto">
                <header className="mb-3 text-8xl text-center font-[Tangerine] text-orange-500 font-bold">Log In</header>
                <form onSubmit={e => handleLogin(e)} className='space-y-6'>
                    <div className="w-full rounded-md px-4 bg-transparent border border-orange-400">
                        <input
                            type="email"
                            placeholder="Email"
                            className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                            ref={emailRef}
                            required
                        />
                    </div>
                    <div
                        className="flex w-full items-center space-x-2 rounded-md px-4 border border-orange-400 "
                    >
                        <input
                            type={showPass ? 'text' : 'password'}
                            ref={passwordRef}
                            placeholder="Password"
                            className="fos:outline-none my-3 w-full border-none bg-transparent outline-none"
                            required
                        />
                        <span onClick={() => setShowPass(!showPass)} className="font-medium text-gray-400 hover:text-gray-500"><i className={`bi bi-${showPass ? 'eye-slash' : 'eye'}`}></i></span>
                    </div>
                    <p className="text-red-500">{error?.message}</p>
                    <button
                        className="w-full border-b border-b-orange-400 duration-500 py-3 font-bold text-white hover:bg-[#ffa60048] hover:rounded-sm hover:border-transparent active:translate-y-[0.125rem] active:border-b-blue-400"
                    >
                        LOGIN
                    </button>
                    <Link className='text-white text-center block' to='/register'>New Here ? <p className="text-orange-500 mt-3 inline">Register Now!</p></Link>
                </form>
                <Social />
            </div>
        </div >
    )
}
