import React from 'react'
import { toast, ToastContainer } from 'react-toastify'
import useUserCredential from '../../Hooks/useUserCredential'

export default function Contact() {
    const { name, setName } = useUserCredential()
    const handleCheckout = e => {
        e.preventDefault()
        name ? toast(`thnaks MR ${name}.Your Form Has been submitted `) : toast(`Please fill up the form`)


        setName('')
    }
    return (

        <div className="w-full flex items-center justify-center my-12 text-orange-400">
            <form onSubmit={e => handleCheckout(e)} className="dark:bg-[#4b60563e] shadow rounded py-12 lg:px-28 px-8 ">
                <h1 className="md:text-7xl text-xl font-bold leading-7 text-center  font-[Tangerine]">Let's chat and get a quote!</h1>
                <div className="md:flex items-center mt-12">
                    <div className="md:w-72 flex flex-col">
                        <label htmlFor='name' className="text-base font-semibold leading-none  ">Name</label>
                        <input id='name' arial-label="Please input name" value={name} onChange={e => setName(e.target.value)} type="name" className="text-base bg-transparent outline-none leading-none  p-3 focus:oultine-none focus:border-orange-700 mt-4  border rounded border-orange-500 " placeholder="Please input  name" />
                    </div>
                    <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label htmlFor='email' className="text-base font-semibold leading-none  ">Email Address</label>
                        <input id='email' arial-label="Please input email address" type="email" className="text-base leading-none  p-3 focus:oultine-none focus:border-orange-700 mt-4 border rounded bg-transparent border-orange-500 outline-none " placeholder="Please input email address" />
                    </div>
                </div>
                <div className="md:flex items-center mt-8">
                    <div className="md:w-full flex flex-col">
                        <label htmlFor='subject' className="text-base font-semibold leading-none  ">Subject</label>
                        <input id='subject' arial-label="Please input your topic" type="text" className="text-base bg-transparent outline-none leading-none  p-3 focus:oultine-none focus:border-orange-700 mt-4  border rounded border-orange-500 " placeholder="Subject" />
                    </div>
                </div>
                <div>
                    <div className="w-full flex flex-col mt-8">
                        <label htmlFor='msg' className="text-base font-semibold leading-none  ">Message</label>
                        <textarea id='msg' aria-label="leave a message" role="textbox" type="name" className="h-36 text-base bg-transparent outline-none leading-none  p-3 focus:oultine-none focus:border-orange-700 mt-4  border rounded border-orange-500  resize-none"></textarea>
                    </div>
                </div>
                <p className="text-xs leading-3 text-orange-600 dark:text-orange-200 mt-4">By clicking submit you agree to our terms of service, privacy policy and how we use data as stated</p>
                <div className="flex items-center justify-center w-full">
                    <button className="mt-9 text-base font-semibold leading-none py-4 px-10 border duration-500 border-orange-700 rounded hover:bg-orange-600 focus:outline-none outline-none">SUBMIT</button>
                </div>
            </form>

            <ToastContainer />
        </div>



    )
}
