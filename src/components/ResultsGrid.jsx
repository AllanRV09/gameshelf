import { GameCard } from "./GameCard"

/**
 * @param {{ games: Array<any>, loading: boolean, error: string | null, search: string }} props
 */
export function ResultsGrid({ games, loading, error, search }) {
    if (error) {
        return (
            <div className="flex justify-center items-center mt-10 text-red-400 text-lg h-[60vh]">
                <p>Error: {error}</p>
            </div>
        )
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center mt-10 text-gray-400 text-lg h-[60vh]">
                <p>Cargando...</p>
            </div>
        )
    }

    if (games.length === 0) {
        return (
            <div className="flex justify-center items-center mt-10 text-gray-400 text-lg h-[60vh]">
                <p>No se encontraron resultados para "{search}</p>
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
                    games.map((game) => (
                        <GameCard key={game.id} game={game} />
                    ))
                }
            </div>
        </div>
    )
}