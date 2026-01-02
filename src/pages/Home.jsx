import NavBar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import Works from "../components/Works"

function Home () {
    return (
        <div>
            <NavBar />
            <main>
                <HeroSection />
                <Works />
            </main>
        </div>
    )
}

export default Home