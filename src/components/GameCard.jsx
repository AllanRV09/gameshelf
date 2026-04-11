import { useState } from "react"
import { StarIcon } from "@heroicons/react/16/solid"
import { PlayIcon } from "@heroicons/react/24/outline"

const MAX_GENRES_DISPLAY = 3
const CARD_IMAGE_HEIGHT = "h-48"

/**
 * @param {{ game: any }} props
 */
export function GameCard({ game }) {
    const [imageError, setImageError] = useState(false)

    const handleCardClick = () => {
        // TODO: Navigate to game details page
        console.log("Navigate to game:", game.id)
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            handleCardClick()
        }
    }

    const genres = game.genres?.slice(0, MAX_GENRES_DISPLAY) ?? []

    return (
        <div
            className="mb-4 group cursor-pointer transition-transform duration-300 hover:-translate-y-1"
            onClick={handleCardClick}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
            aria-label={`View details for ${game.name}`}
        >
            <div className={`relative overflow-hidden rounded-md ${CARD_IMAGE_HEIGHT}`}>
                {!imageError && game.background_image ? (
                    <img
                        src={game.background_image}
                        alt={game.name || "Game screenshot"}
                        className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:scale-110 group-hover:brightness-50"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                        <PlayIcon className="w-16 h-16 text-gray-500" />
                    </div>
                )}

                {game.rating && (
                    <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-md text-white text-xs px-2 py-1 rounded-md border border-white/30 flex items-center gap-1">
                        <StarIcon className="size-4 fill-white" />
                        {game.rating}
                    </div>
                )}
            </div>

            <h3 className="mt-2 font-semibold line-clamp-1">{game.name}</h3>

            {genres.length > 0 && (
                <div className="flex gap-2 mt-2 flex-wrap">
                    {genres.map((genre) => (
                        <span
                            key={genre.id}
                            className="bg-gray-800 text-gray-200 px-2 py-1 rounded text-xs"
                        >
                            {genre.name}
                        </span>
                    ))}
                </div>
            )}
        </div>
    )
}