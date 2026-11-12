
import TeamCard from "../components/TeamCard"
import axios from "axios"
import { useEffect, useState } from "react"
import SearchBar from "../components/SearchBar.jsx"
import "../styles/home-page.css"


function HomePage(){

     const [teams, setTeams] = useState([]);
const [searchValue, setSearchValue] = useState("");
const [selectedZone, setSelectedZone] = useState("All");



const filteredTeams = teams.filter((team) => {
  const matchesName = team.name
    .toLowerCase()
    .includes(searchValue.toLowerCase());

  const matchesZone =
    selectedZone === "All" || team.zone === selectedZone;

  return matchesName && matchesZone;
});


      useEffect(() => {
    async function getTeams() {
      try {
        const response = await axios.get(
          "https://json-server-project2.onrender.com/teams"
        )
        setTeams(response.data)
      } catch (error) {
        setError("No se pudieron cargar los equipos.")
        console.error(error)
      } 
    }

    getTeams()
  }, [])


   if (!teams) {
    return (
      <main className="details-page">
        <p className="details-page__message" role="status">
          <span class="loader"></span>
        </p>
      </main>
    );
  }

    return (
      
        <div className="home-page">
          <div className="home-page__toolbar">
            <div
              className="home-page__filters"
              role="group"
              aria-label="Filter teams by conference"
            >
              <button
                className="home-page__filter-button home-page__filter-button--all"
                type="button"
                onClick={() => setSelectedZone("All")}
                aria-pressed={selectedZone === "All"}
              >
                All
              </button>

              <button
                className="home-page__filter-button home-page__filter-button--east"
                type="button"
                onClick={() => setSelectedZone("East")}
                aria-pressed={selectedZone === "East"}
              >
                East
              </button>

              <button
                className="home-page__filter-button home-page__filter-button--west"
                type="button"
                onClick={() => setSelectedZone("West")}
                aria-pressed={selectedZone === "West"}
              >
                West
              </button>
            </div>

            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
          </div>
            <main className="team-explorer">
                  <section className="team-grid" aria-label="NBA teams">
          {filteredTeams.map((team) => (
              <TeamCard key={team.id} team={team} />
            ))}
        </section>
            </main>
        </div>
    )

}

export default HomePage