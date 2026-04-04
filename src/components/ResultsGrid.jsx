export function ResultsGrid ({ games, search }) {
    const filteredGames = games
    .filter((game) => (
      game.name.toLowerCase().includes(search.toLowerCase())
    ))

    return (
        <div className='mt-5 px-8 sm:grid sm:grid-cols-2 sm:gap-5 lg:grid-cols-4' >
        <div className='mb-2 font-semibold'>
          <span>{search ? "Results:" : "Trending:"}</span>
        </div>
        {
          games.length === 0
            ? (
              <p>Error al cargar los juegos...</p>
            )
            : (
              filteredGames.length === 0
                ? (
                  <p>No se encontraron juegos segun tu busqueda</p>
                )
                : (
                  filteredGames.map((item) => (
                    <div key={item.id} className='mb-4'>
                      <img src={item.background_image} alt={item.name} className='rounded-md' />
                      <h3>{item.name}</h3>
                      <p>{item.rating}</p>
                      {item.genres.length > 0 && (
                        <div className="flex gap-2 mt-2">
                          {item.genres.map((genre) => (
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
    )
}