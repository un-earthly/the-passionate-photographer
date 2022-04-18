import React from 'react'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../firebase.init';
export default function Social() {
    const [signInWithGoogle, , , googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, , , gihubError] = useSignInWithGithub(auth);
    toast(googleError?.message || gihubError?.message)
    return (
        <div className='pb-4 mt-10'>

            <div className="flex items-center space-x-4">
                <hr className="w-full border border-orange-600" />
                <div className="font-semibold text-orange-400">OR</div>
                <hr className="w-full border border-orange-600" />
            </div>

            <div className="flex items-center justify-center flex-col">
                <button aclassName="w-full cursor-pointer border-b border-b-orange-400 duration-500 hover:bg-[#ffa60048] bg-transparent py-2.5 px-4 font-bold text-center text-orange-400 block"
                    onClick={() => signInWithGoogle()}
                >Google</button>
                <button
                    onClick={() => signInWithGithub()}
                    className="w-full cursor-pointer border-b border-b-orange-400 duration-500 hover:bg-[#ffa60048] bg-transparent py-2.5 px-4 font-bold text-center text-orange-400 block"
                >Github</button>
            </div>


        </div>
    )
}
