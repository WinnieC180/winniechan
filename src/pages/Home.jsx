import NavBar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import Works from "../components/Works"
import Footer from "../components/Footer"

function Home () {
    return (
        <div>
            <NavBar />
            <main>
                <HeroSection />
                <Works />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Home