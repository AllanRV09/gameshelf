import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

/**
 * @param {{ search: string, onChange: (value: string) => void }} props
 */
export function SearchInput({ search, onChange }) {
    return (
        <div className='flex justify-center mt-8 mx-8'>
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
                className='w-full max-w-md bg-gray-500 text-white rounded-l-md px-2 py-2'
            />

            <div className="flex justify-center items-center px-2 rounded-r-md bg-gray-600 hover:bg-gray-700 ">
                <button>
                    <MagnifyingGlassIcon className="size-6 fill-white/60" />
                </button>
            </div>
        </div>
    )
}