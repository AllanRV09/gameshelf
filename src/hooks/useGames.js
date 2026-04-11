import { useState, useEffect } from 'react'
import { searchGames } from '../services/games'

export function useGames({ search }) {
    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchGames = async () => {
            try {
                setLoading(true)
                setError(null)

                const newGames = await searchGames({ search })
                setGames(newGames)
            } catch (e) {
                setError(e.message)
                setGames([])
            } finally {
                setLoading(false)
            }
        }

        const timer = setTimeout(() => {
            fetchGames()
        }, 500)

        return () => clearTimeout(timer)
    }, [search])

    return { games, loading, error }
}