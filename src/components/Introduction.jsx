import "./about.css"
import Hello from "../assets/Hello.svg"

function Introduction() {
  return (
    <div className="centerFlex intro">
        <img src={Hello} alt="" />
      <p>
        I’m Winnie, a sophomore at Cornell University studying Computer Science,
        and pursuing minors in Game Design & Information Science. My love for
        creativity started long before code, back when I collected every color
        imaginable. Markers, paints, clay, balloons… and eventually, those
        colors moved onto a screen. The digital world became my playground where
        I could blend art and programming into interactive experiences. Now I
        build projects that connect both worlds, and to me, that’s what make my
        experience truly colorful.
      </p>
    </div>
  );
}

export default Introduction;
