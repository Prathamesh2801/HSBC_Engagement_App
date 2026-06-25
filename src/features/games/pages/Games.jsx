import { games } from "../gamesData";
import GameCard from "../components/GameCard";

export default function Games() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-5 rounded-2xl border border-border bg-surface-translucent p-4 text-center shadow-xl backdrop-blur-md">
        <h1 className="text-xl font-semibold text-heading">Games</h1>
        <p className="mt-1 text-sm text-muted">Play, earn points, level up.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {games.map((game, index) => (
          <GameCard key={game.id} game={game} index={index} />
        ))}
      </div>
    </div>
  );
}
