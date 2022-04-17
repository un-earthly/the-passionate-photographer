import { useState } from "react";

const useShowPass = () => {

    const [showPass, setShowPass] = useState(false)




    return { showPass, setShowPass }
}

export default useShowPass;