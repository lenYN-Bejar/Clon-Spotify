import { Pause, Play } from "./Player"
import { usePlayerStore } from "@/store/playerStore"

export function CardPlayButoon({ id }) {
    const { currentSong, isPlaying, setIsPlaying, setCurrentSong } = usePlayerStore(state => state)

    console.log(isPlaying)

    const handleClick = () => {
        setIsPlaying(!isPlaying)
    }

    return (
        <button onClick={handleClick} className="card-play-button rounded-full bg-green-500 p-4">
            {isPlaying ? <Pause /> : <Play />}
        </button>
    )
}