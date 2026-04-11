import { useMemo } from "react"
import { GameCard } from "./GameCard"

/**
 * @param {{ games: Array<any>, search: string }} props
 */
export function ResultsGrid({ games: allGames, search }) {
    // TODO: Remove frontend filtering when API handles search queries

    const filteredGames = useMemo(
        () => allGames.filter((game) =>
            game.name.toLowerCase().includes(search.toLowerCase())
        ),
        [allGames, search]
    )

    if (allGames.length === 0) {
        return (
            <div className="flex justify-center items-center mt-10 text-gray-400 text-lg h-[60vh]">
                <p>Cargando...</p>
            </div>
        )
    }

    if (filteredGames.length === 0) {
        return (
            <div className="flex justify-center items-center mt-10 text-gray-400 text-lg h-[60vh]">
                <p>No se encontraron juegos según tu búsqueda</p>
            </div>
        )
    }

    return (
        <div className="mt-5 px-8">
            <div className='mb-2 font-semibold'>
                <span>{search ? "Results:" : "Trending:"}</span>
            </div>
            <div className='mt-5 sm:grid sm:grid-cols-2 sm:gap-5 lg:grid-cols-4'>
                {
                    filteredGames.map((game) => (
                        <GameCard key={game.id} game={game} />
                    ))
                }
            </div>
        </div>
    )
}