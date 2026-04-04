export function ResultsGrid({ games, search }) {
    // Esto funciona ahora con el JSON, pero cuando conecte la API real 
    // voy a enviar el término de búsqueda como parámetro (/games?search=witcher) 
    // y RAWG me devuelve los resultados ya filtrados. El filtro en frontend 
    // va a desaparecer. Está bien por ahora, solo tenelo en mente
    const filteredGames = games
        .filter((game) => (
            game.name.toLowerCase().includes(search.toLowerCase())
        ))

    return (
        <div className="mt-5 px-8">
            <div className='mb-2 font-semibold'>
                <span>{search ? "Results:" : "Trending:"}</span>
            </div>
            <div className='mt-5 px-8 sm:grid sm:grid-cols-2 sm:gap-5 lg:grid-cols-4' >
                {
                    games.length === 0
                        ? (
                            <p>Cargando...</p>
                        )
                        : (
                            filteredGames.length === 0
                                ? (
                                    <p>No se encontraron juegos segun tu busqueda</p>
                                )
                                : (
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
                                )
                        )
                }
            </div>
        </div>
    )
}