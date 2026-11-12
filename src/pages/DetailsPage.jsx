import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PlayersSideBar from "../components/PlayersSideBar.jsx";
import PlayerInfo from "../components/PlayerInfo.jsx";
import TeamInfo from "../components/TeamInfo.jsx";
import "../styles/details-page.css";
import Comment from "../components/CommentArea.jsx";
import api from "../services/api.js";

function DetailsPage() {
  const { teamId } = useParams();
  const [team, setTeam] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [error, setError] = useState("");

  function handleSelectPlayer(player) {
    setSelectedPlayer((currentPlayer) =>
      currentPlayer?.id === player.id ? null : player,
    );
  }

  useEffect(() => {
    let active = true;

    async function loadTeam() {
      setTeam(null);
      setSelectedPlayer(null);
      setError("");

      try {
        const response = await api.get(`/teams/${teamId}`, {
          params: { _embed: "comments" },
        });
        if (active) setTeam(response.data);
      } catch (requestError) {
        if (active) {
          setError("This team could not be loaded. Please try again later.");
          console.error(requestError);
        }
      }
    }

    loadTeam();
    return () => {
      active = false;
    };
  }, [teamId]);




  if (error) {
    return (
      <main className="details-page">
        <p className="details-page__message" role="alert">
          {error}
        </p>
      </main>
    );
  }

  if (!team) {
    return (
      <main className="details-page">
        <p className="details-page__message" role="status">
          <span class="loader"></span>
        </p>
      </main>
    );
  }

  return (
    <div className="details-page">
      <div className="details-breadcrumb">
        <div>
          <Link to="/">All teams</Link>
          <span aria-hidden="true">/</span>
          <span>{team.name}</span>
          {selectedPlayer && (
            <>
              <span aria-hidden="true">/</span>
              <span>{selectedPlayer.fullName}</span>
            </>
          )}
        </div>
        <span className="details-breadcrumb__note">Team and player archive</span>
      </div>

      <main className="details-layout">
        <section className="details-content" aria-live="polite">
          {selectedPlayer ? (
            <PlayerInfo player={selectedPlayer} team={team} />
          ) : (
            <>
            
            <TeamInfo team={team} />
             <Comment key={team.id} team={team}/>
            </>
          )}
        </section>
        <PlayersSideBar
          team={team}
          selectedPlayer={selectedPlayer}
          onSelectPlayer={handleSelectPlayer}
        />
      </main>
    </div>
  );
}

export default DetailsPage;
