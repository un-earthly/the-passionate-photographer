import React from 'react'

export default function Social() {
    return (
        <div>

            <div className="flex items-center space-x-4">
                <hr className="w-full border border-orange-400" />
                <div className="font-semibold text-orange-400">OR</div>
                <hr className="w-full border border-orange-400" />
            </div>

            <div className="flex items-center justify-center flex-col">
                <a
                    href="#"
                    className="w-full border-b border-b-orange-400 bg-transparent py-2.5 px-4 font-bold text-orange-400 block"
                >FACEBOOK</a>
                <a

                    className="w-full border-b border-b-orange-400 bg-transparent py-2.5 px-4 font-bold text-orange-400 block"
                >GOOGLE</a>
            </div>

            <div className="mt-8 text-sm text-gray-400">
                you agree to our
                <a > Terms</a> and
                <a > Privacy Policy</a>.
            </div>
        </div>
    )
}
