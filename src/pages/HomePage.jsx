
import NavBar from "../components/Navbar"
import TeamCard from "../components/TeamCard"



function HomePage({dark, onToggle}){
    return (
        <div className="home-page">
            <NavBar dark={dark} onToggle={onToggle} />
            <main className="team-explorer">
                <section className="team-grid" aria-label="NBA teams">
                    <TeamCard />
                </section>
            </main>
        </div>
    )

}

export default HomePage