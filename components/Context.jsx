import { createContext, useState, useEffect } from 'react'

const Context = createContext({})

export const DataProvider = ({ children }) => {
    const [err, setErr] = useState(null)
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const fetchPosts = async () => {
        setErr(null)
        setIsLoading(true)
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=200`)
            const data = await res.json()
            setArticles(data)
        } catch {
            setErr("Please, reload the page.")
        }
    }

    useEffect(() => {
        (async () => await fetchPosts())()
        setTimeout(() => {
            setIsLoading(false)
        }, 1500);
    }, [])

    return (
        <Context.Provider value={{
            err, isLoading, articles,
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context