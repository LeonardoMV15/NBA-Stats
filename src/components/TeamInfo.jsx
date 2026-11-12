function TeamInfo({ team }) {
  const teamStyle = team.primaryColor
    ? { "--team-accent": team.primaryColor }
    : undefined;

  return (
    <article className="team-profile" style={teamStyle}>
      <header className="team-profile__hero">
        <div className="team-profile__identity">
          <div className="team-profile__location">
            {team.abbreviation && (
              <span className="team-profile__badge">{team.abbreviation}</span>
            )}
            <span>{team.city}</span>
          </div>
          <h1>{team.name}</h1>
          {team.history && <p className="team-profile__history">{team.history}</p>}
        </div>
        {team.logo && (
          <img className="team-profile__logo" src={team.logo} alt={`${team.name} logo`} />
        )}
        {team.conference && (
          <p className="team-profile__classification">
            {team.conference} Conference
            {team.division && ` / ${team.division} Division`}
          </p>
        )}
      </header>

      <dl className="team-facts">
        {team.founded != null && (
          <div className="team-facts__item">
            <dt>Founded</dt>
            <dd>{team.founded}</dd>
          </div>
        )}
        {team.championships != null && (
          <div className="team-facts__item">
            <dt>NBA championships</dt>
            <dd>{team.championships}</dd>
          </div>
        )}
      </dl>

      {team.championshipYears?.length > 0 && (
        <section className="championships" aria-labelledby="championships-title">
          <div className="details-section-heading">
            <div>
              <p className="details-eyebrow">Team history</p>
              <h2 id="championships-title">Championship years</h2>
            </div>
            <span>{team.championshipYears.length} titles</span>
          </div>
          <ul className="championship-years">
            {team.championshipYears.map((year) => (
              <li key={year}>{year}</li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}

export default TeamInfo;
