import { useEffect, useState } from "react"


const useImgs = () => {
    const [imgs, setImgs] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setImgs(data))

    }, [])


    return { imgs }

}

export default useImgs;