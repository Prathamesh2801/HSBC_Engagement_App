import FeaturePage from "../../../components/ui/FeaturePage";
import { leaderboardGames, leaderboardData } from "../leaderboardData";

const rankBadgeStyles = {
  1: "bg-primary text-on-primary",
  2: "bg-accent text-on-primary",
  3: "bg-accent-soft text-accent",
};

export default function Leaderboard() {
  const ranked = leaderboardData
    .map((team) => ({
      ...team,
      total: team.scores.reduce((sum, score) => sum + score, 0),
    }))
    .sort((a, b) => b.total - a.total)
    .map((team, index) => ({ ...team, rank: index + 1 }));

  return (
    <FeaturePage title="Leaderboard" subtitle="See how your team ranks.">
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full min-w-160 border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-surface-muted">
              <th className="px-3 py-3 font-semibold text-heading">Rank</th>
              <th className="px-3 py-3 font-semibold text-heading">Team</th>
              {leaderboardGames.map((game) => (
                <th key={game} className="px-3 py-3 font-semibold text-heading">
                  {game}
                </th>
              ))}
              <th className="px-3 py-3 font-semibold text-heading">Total Score</th>
              <th className="px-3 py-3 font-semibold text-heading">Registrations</th>
            </tr>
          </thead>
          <tbody>
            {ranked.map((team) => (
              <tr
                key={team.team}
                className="border-b border-border last:border-0 odd:bg-surface even:bg-surface-muted/50"
              >
                <td className="px-3 py-3">
                  <span
                    className={`grid h-7 w-7 place-items-center rounded-full text-xs font-semibold ${
                      rankBadgeStyles[team.rank] || "bg-surface-muted text-muted"
                    }`}
                  >
                    {team.rank}
                  </span>
                </td>
                <td className="px-3 py-3">
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent-soft text-xs font-semibold text-accent">
                      {team.initials}
                    </span>
                    <span className="font-medium text-heading">{team.team}</span>
                  </div>
                </td>
                {team.scores.map((score, i) => (
                  <td key={leaderboardGames[i]} className="px-3 py-3 text-text">
                    {score}
                  </td>
                ))}
                <td className="px-3 py-3 font-semibold text-primary">{team.total}</td>
                <td className="px-3 py-3 text-muted">{team.registrations}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </FeaturePage>
  );
}
