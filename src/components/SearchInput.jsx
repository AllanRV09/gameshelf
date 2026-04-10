export function SearchInput({ search, onChange }) {
    return (
        <div className='flex justify-center'>
            <label htmlFor="searchGames" className="sr-only">
                Buscar juegos
            </label>

            <input
                id="searchGames"
                name='searchGames'
                type="text"
                value={search}
                onChange={(e) => onChange(e.target.value)}
                placeholder='The Witcher, Portal...'
                className='w-full max-w-md bg-gray-500 text-white rounded-md mt-8 px-2 py-2 mx-4'
            />
        </div>
    )
}