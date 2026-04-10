import { useMemo } from "react"

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
            <div className='mt-5 sm:grid sm:grid-cols-2 sm:gap-5 lg:grid-cols-4' >
                {
                    filteredGames.map((item) => (
                        <div key={item.id} className='mb-4'>
                            <img
                                src={item.background_image}
                                alt={item.name}
                                className='rounded-md w-full h-48 object-cover'
                            />
                            <h3>{item.name}</h3>
                            <p>{item.rating}</p>
                            {item.genres.length > 0 && (
                                <div className="flex gap-2 mt-2">
                                    {item.genres.slice(0, 3).map((genre) => (
                                        <span key={genre.id} className="bg-gray-700 px-2 py-1 rounded text-sm">
                                            {genre.name}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}