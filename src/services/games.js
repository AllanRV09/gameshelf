const apiUrl = import.meta.env.VITE_RAWG_BASE_URL;
const apiKey = import.meta.env.VITE_RAWG_API_KEY;

const DEFAULT_PARAMS = {
    ordering: '-rating',
    page: 1,
    page_size: 20
}

const buildUrl = (params) => {
    const searchParams = new URLSearchParams({
        key: apiKey,
        ...DEFAULT_PARAMS,
        ...params
    })
    return `${apiUrl}/games?${searchParams}`
}

const mapGame = (game) => ({
    id: game.id,
    name: game.name,
    image: game.background_image,
    rating: game.rating,
    genres: game.genres?.map(genre => genre.name) ?? []
})

export const searchGames = async ({ search }) => {
    try {
        const params = search ? { search } : {}
        const url = buildUrl(params)

        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const json = await response.json()

        return json.results?.map(mapGame) ?? []
    } catch (e) {
        throw new Error(`Error searching games: ${e.message}`)
    }
}