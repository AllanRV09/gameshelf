export function SearchInput({ search, handleSearch }) {
    return (
        <div className='flex justify-center'>
            <input name='searchGames' type="text" value={search} onChange={handleSearch} placeholder='The Witcher, Portal...' className='w-full max-w-md bg-gray-500 text-white rounded-md mt-8 px-2 py-2 mx-4' />
        </div>
    )
}