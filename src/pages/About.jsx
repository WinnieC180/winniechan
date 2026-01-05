import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import Introduction from "../components/Introduction"

function About () {
    return (
        <div>
            <NavBar />

            <main>
                <Introduction />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default About