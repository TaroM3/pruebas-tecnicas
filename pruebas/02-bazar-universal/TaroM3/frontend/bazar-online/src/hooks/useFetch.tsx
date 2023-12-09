import { useState, useEffect } from 'react'
import { Data } from '../interfaces/types'

export function useFetch(url: string, options?: object) {

    const [response, setResponse] = useState({ items: Array<Data>() })
    const [error, setError] = useState({})

    useEffect(() => {
        fetch(url, options).
            then(res => res.json()).
            then(res => setResponse({ items: res }))
            .catch(err => setError(err))
    }, [url, options])
    
    return { response, error }
}