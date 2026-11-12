import "../styles/team-card.css"
import { Link } from "react-router-dom"


function TeamCard({ team }) {
  return (
    <Link className="team-card-link" to={`/teamInfo/${team.id}`}>
    
    <article className="team-card">
      <div className="team-card__topline">
        <span className="team-card__city">{team.city}</span>
        <span className="team-card__badge">{team.abbreviation}</span>
      </div>

      <h2 className="team-card__name">{team.name}</h2>
      <p className="team-card__description">{team.history}</p>

      <dl className="team-card__facts">
        <div className="team-card__fact">
          <dt>Established</dt>
          <dd>{team.founded}</dd>
        </div>
        <div className="team-card__fact">
          <dt>NBA titles</dt>
          <dd>{team.championships}</dd>
        </div>
      </dl>
    </article>
    </Link>
  )
}

export default TeamCard