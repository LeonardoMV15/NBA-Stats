function PlayerInfo({ player, team }) {
  const parsedBirthDate = player.birthDate
    ? new Date(`${player.birthDate}T00:00:00Z`)
    : null;
  const birthDate =
    parsedBirthDate && !Number.isNaN(parsedBirthDate.valueOf())
      ? parsedBirthDate.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC",
        })
      : null;
      console.log(player)

  return (
    <article className="player-profile">
      <header className="player-profile__hero">
        <div className="player-profile__identity">
          {team?.name && (
            <p className="player-profile__team">
              {team.name}
              {player.position && <span> · {player.position}</span>}
              {player.number != null && <span> · #{player.number}</span>}
            </p>
          )}
          <h1>{player.fullName}</h1>
          <p className="player-profile__eyebrow">Player profile</p>
        </div>
        {player.image && (
          <img
            className="player-profile__portrait"
            src={player.image}
            alt={player.fullName}
          />
        )}
      </header>

      <section className="player-bio" aria-labelledby="player-bio-title">
        <div className="details-section-heading">
          <div>
            <p className="details-eyebrow">Player details</p>
            <h2 id="player-bio-title">Biography</h2>
          </div>
        </div>

        <dl className="player-bio__facts">
          {player.position && (
            <div>
              <dt>Position</dt>
              <dd>{player.position}</dd>
            </div>
          )}
          {player.age != null && (
            <div>
              <dt>Age</dt>
              <dd>{player.age}</dd>
            </div>
          )}
          {birthDate && (
            <div>
              <dt>Date of birth</dt>
              <dd>{birthDate}</dd>
            </div>
          )}
          {player.birthCountry && (
            <div>
              <dt>Birth country</dt>
              <dd>{player.birthCountry}</dd>
            </div>
          )}
          {player.heightCm != null && (
            <div>
              <dt>Height</dt>
              <dd>{player.heightCm} cm</dd>
            </div>
          )}
          {player.weightKg != null && (
            <div>
              <dt>Weight</dt>
              <dd>{player.weightKg} kg</dd>
            </div>
          )}
        </dl>
      </section>
    </article>
  );
}

export default PlayerInfo;
