import React from 'react'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../firebase.init';
export default function Social() {
    const [signInWithGoogle, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, gihubError] = useSignInWithGithub(auth);
    toast(googleError || gihubError)
    return (
        <div className='pb-4'>

            <div className="flex items-center space-x-4">
                <hr className="w-full border border-orange-600" />
                <div className="font-semibold text-orange-400">OR</div>
                <hr className="w-full border border-orange-600" />
            </div>

            <div className="flex items-center justify-center flex-col">
                <a
                    className="w-full cursor-pointer border-b border-b-orange-400 bg-transparent py-2.5 px-4 font-bold text-center text-orange-400 block"
                    onClick={() => signInWithGoogle()}
                >Google</a>
                <a
                    onClick={() => signInWithGithub()}
                    className="w-full cursor-pointer border-b border-b-orange-400 bg-transparent py-2.5 px-4 font-bold text-center text-orange-400 block"
                >Github</a>
            </div>

            <div className="mt-4 text-sm capitalize text-center">
                you agree to our
                <a className='cursor-pointer text-amber-500' > Terms and Privacy Policy</a>.
            </div>

            <ToastContainer />
        </div>
    )
}
