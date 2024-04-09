import { useState, useEffect } from "react";


// Custom Hooks
export const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {

        const fechData = async () => {

            const res = await fech(url)
            const json = await res.json()
            setData(json)
        }

        fechData();

    },[url])

    return {data}

}