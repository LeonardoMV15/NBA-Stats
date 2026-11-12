import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/player-side-bar.css"

function PlayersSideBar({ team, selectedPlayer, onSelectPlayer }) {
  const { teamId } = useParams();
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadPlayers() {
      setLoading(true);
      setError("");

      try {
        const response = await axios.get(
          `VITE_API_URL/players?teamId=${teamId}`,
        );
        if (active) setPlayers(response.data);
      } catch (requestError) {
        if (active) {
          setError("Players could not be loaded. Please try again later.");
          console.error(requestError);
        }
      } finally {
        if (active) setLoading(false);
      }
    }

    loadPlayers();
    return () => {
      active = false;
    };
  }, [teamId]);

  return (
    <aside className="roster-panel" aria-label="Team roster">
      <header className="roster-panel__header">
        <p className="details-eyebrow">Team roster</p>
        {team && (
          <div className="roster-panel__team">
            {team.logo && (
              <img
                className="roster-panel__logo"
                src={team.logo}
                alt=""
              />
            )}
            <div>
              <h2>{team.name}</h2>
              <p>
                {[team.conference, team.division].filter(Boolean).join(" · ")}
              </p>
            </div>
          </div>
        )}
        <p className="roster-panel__caption">Roster / players</p>
      </header>

      <div className="roster-panel__columns" aria-hidden="true">
        <span>No.</span>
        <span>Player</span>
        <span>Pos.</span>
      </div>

      {loading ? (
        <p className="roster-panel__message" role="status">
          <span class="loader"></span>
        </p>
      ) : error ? (
        <p className="roster-panel__message roster-panel__message--error" role="alert">
          {error}
        </p>
      ) : players.length === 0 ? (
        <p className="roster-panel__message">No players are listed for this team.</p>
      ) : (
        <ul className="roster-list">
          {players.map((player) => (
            <li className="roster-list__item" key={player.id}>
              <button
                className="roster-list__button"
                type="button"
                onClick={() => onSelectPlayer(player)}
                aria-pressed={selectedPlayer?.id === player.id}
              >
                <span className="roster-list__number">{player.number}</span>
                <span className="roster-list__name">{player.fullName}</span>
                <span className="roster-list__position">{player.position}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}

export default PlayersSideBar;
