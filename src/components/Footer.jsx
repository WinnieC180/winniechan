import winLogo from "../assets/logo-light.svg";

function Footer () {
    const footer = {
        flexDirection: "column",
        gap: "20px",
        backgroundColor: "var(--clr-primary-800)",
        padding: "100px",
    }

    return  (
        <div className="footer centerFlex" style={footer}>
            <img src={winLogo} alt="Winnie's Logo, Chinese character for win" />
            <h3 style={{fontWeight: "300", width: "305px", textAlign: "center"}}><em>To dive into the depths, is to believe 
            there is something new worth discovering</em></h3>
        </div>
    )
}

export default Footer