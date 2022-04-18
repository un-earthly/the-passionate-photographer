import React from 'react'
import useUserCredential from '../../Hooks/useUserCredential'
import useShowPass from '../../Hooks/useShowPass'
import Social from '../../UtilitiesAndShared/Social'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
export default function Login() {
    const { showPass, setShowPass } = useShowPass()
    const { setEmail, email, password, setPassword } = useUserCredential();
    const [signInWithEmailAndPassword, user, , error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail,  , cantSendResetEmail] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname
    const handleLogin = e => {
        e.preventDefault()

        signInWithEmailAndPassword(email, password)
    }

if (user) {
        navigate(from || '/', { replace: true })

    }
    return (
        <div className='pb-16 mt-3'>
            <div className="text-white w-3/4 mx-auto">
                <header className="mb-3 text-8xl text-center font-[Tangerine] text-orange-500 font-bold">Log In</header>
                <form onSubmit={e => handleLogin(e)} className='space-y-6'>
                    <div className="hover:backdrop-blur-lg duration-500 w-full rounded-md px-4 bg-transparent border border-orange-400">
                        <input
                            type="email"
                            placeholder="Email"
                            className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div
                        className="hover:backdrop-blur-lg duration-500 flex w-full items-center space-x-2 rounded-md px-4 border border-orange-400 "
                    >
                        <input
                            type={showPass ? 'text' : 'password'}
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            placeholder="Password"
                            className="fos:outline-none my-3 w-full border-none bg-transparent outline-none"
                            required
                        />
                        <span onClick={() => setShowPass(!showPass)} className="font-medium text-gray-400 hover:text-gray-500"><i className={`bi bi-${showPass ? 'eye-slash' : 'eye'}`}></i></span>
                    </div>
                    <p className="text-red-500">{error?.message || cantSendResetEmail?.message}</p>
                    <p className='duration-500 text-orange-500 hover:underline' onClick={async () => {
                        if (email.length > 0) {
                            await sendPasswordResetEmail(email);
                            toast('Sent email');
                        } else {
                            toast('please proveide the email')
                        }
                    }}> Forgot Password? Reset</p>
                    <button
                        className="w-full border-b border-b-orange-400 duration-500 py-3 font-bold text-white hover:bg-[#ffa60048] hover:rounded-sm hover:border-transparent active:translate-y-[0.125rem] active:border-b-blue-400"
                    >
                        LOGIN
                    </button>
                    <Link className='text-white text-center block' to='/register'>New Here ? <p className="text-orange-500 mt-3 inline">Register Now!</p></Link>
                </form>
                <Social />
            </div>

            <ToastContainer />
        </div >
    )
}
