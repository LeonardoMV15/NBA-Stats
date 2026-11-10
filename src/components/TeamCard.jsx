import axios from "axios"
import "../styles/team-card.css"

function TeamCard({ team = {} }) {

    const[team,setTeam]=useState(null)

useEffect(() => {
    getData()
  }, [])

const getData = async() => {
    try {

      // call the API here to receive all projects...
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/projects`)

      // console.log(response)
      setAllProjects(response.data)


    } catch (error) {
      console.log(error)
      //todo proper error handling here
    }
  }

    const {
        city = 'TEAM CITY',
        name = 'Team name',
        abbreviation = 'NBA',
        description = 'Team overview will appear here.',
        founded = '-',
        titles = '-',
        accentColor,
    } = team

    return (
        <article
            className="team-card"
            style={{ '--team-accent': accentColor || 'var(--accent)' }}
        >
            <div className="team-card__topline">
                <span className="team-card__city">{city}</span>
                <span className="team-card__badge">
                    {abbreviation}
                </span>
            </div>

            <h2 className="team-card__name">{name}</h2>
            <p className="team-card__description">{description}</p>

            <dl className="team-card__facts">
                <div className="team-card__fact">
                    <dt>Established</dt>
                    <dd>{founded}</dd>
                </div>
                <div className="team-card__fact">
                    <dt>NBA titles</dt>
                    <dd>{titles}</dd>
                </div>
            </dl>
        </article>
    )
}

export default TeamCard