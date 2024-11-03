import { Pause, Play } from "./Player"

export function CardPlayButoon({ id }) {
    return (
        <div className="card-play-button rounded-full bg-green-500 p-4">
            <Play></Play>
        </div>
    )
}