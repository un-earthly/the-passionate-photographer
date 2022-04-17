import { useRef } from "react";



const useUserCredential = () => {


    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const name = nameRef.current.value
    const email = emailRef.current.value
    const password = passwordRef.current.value
    return { nameRef, name, emailRef, email, passwordRef, password }
}

export default useUserCredential;