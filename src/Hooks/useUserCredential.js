import { useState } from "react";



const useUserCredential = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return { setName, name, setEmail, email, setPassword, password }
}

export default useUserCredential;