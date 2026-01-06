import { useState, useRef, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import NavBar from "../components/Navbar";
import "./Explorations.css";
import Portrait from "../assets/portrait.svg";
import Line from "../assets/line.png";
import { Move } from "lucide-react";

import gal1 from "../gallery/gallery_1.png";
import gal2 from "../gallery/gallery_2.png";
import gal3 from "../gallery/gallery_3.jpg";
import gal4 from "../gallery/gallery_4.jpg";
import gal5 from "../gallery/gallery_5.png";
import gal6 from "../gallery/gallery_6.jpg";
import gal7 from "../gallery/gallery_7.jpg";
import gal8 from "../gallery/gallery_8.jpg";
import gal9 from "../gallery/gallery_9.jpg";
import gal10 from "../gallery/gallery_10.jpg";

const galleryItems = [
  { id: 1, src: gal1, x: -300, y: -300, title: "My original characters" },
  { id: 2, src: gal2, x: 320, y: -200, title: "The biggest star" },
  { id: 3, src: gal3, x: 10, y: 370, title: "Halloween 2025" },
  { id: 4, src: gal4, x: 820, y: 320, title: "Snorlax crochet | Brother's Bday" },
  { id: 5, src: gal5, x: -350, y: 130, title: "Spell | Drawing with markers" },
  { id: 6, src: gal6, x: 550, y: 700, title: "Corchet blue flowers" },
  { id: 7, src: gal7, x: -730, y: -180, title: "Yoshi | Original pattern" },
  { id: 8, src: gal8, x: 700, y: -320, title: "Tomato Hero! 🍅" },
  { id: 9, src: gal9, x: 400, y: 220, title: "Lavendar🪻 | Original pattern" },
  { id: 10, src: gal10, x: -750, y: 350, title: "Pure vanilla cookie | Sculpting" },
];

function Explorations() {
  const [isSpread, setIsSpread] = useState(false);
  const constraintsRef = useRef(null);

  useEffect(() => {
    document.title = "Winnie's Explorations";
  }, []);

  return (
    <div className="explorations-page centerFlex">
      <NavBar />

      <div className="viewport" ref={constraintsRef}>
        <Motion.div
          className="canvas"
          drag={isSpread}
          dragConstraints={constraintsRef}
          animate={isSpread ? {} : { x: 0, y: 0 }}
          transition={{ type: "spring", damping: 100, stiffness: 400 }}
        >
          {!isSpread ? (
            <Motion.div
              className="hero-container centerFlex"
              onClick={() => setIsSpread(true)}
              style={{ flexDirection: "column" }}
            >
              <div className="portrait">
                <img src={Portrait} alt="Click to Explore" />
              </div>
              <div className="centerFlex" style={{ marginTop: "50px" }}>
                <img src={Line} alt="A short line" style={{ width: "28vw" }} />
                <p style={{ fontSize: "clamp(12px, 1.5vw + 0.5rem, 20px)" }}>
                  SIDEQUEST LOG
                </p>
                <img src={Line} alt="A short line" style={{ width: "28vw" }} />
              </div>
            </Motion.div>
          ) : (
            <>
              {galleryItems.map((item) => (
                <Motion.div
                  key={item.id}
                  className="scatter-card"
                  drag
                  dragMomentum={false}
                  dragPropagation={false}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ x: item.x, y: item.y, scale: 1, opacity: 1 }}
                >
                  <img src={item.src} alt={item.title} draggable="false" />
                  <span>{item.title}</span>
                </Motion.div>
              ))}
              <div className= "centerFlex" style={{gap: "20px", flexDirection: "column"}}>
                <h2 style={{ width: "20vw", textAlign: "center", fontSize: "1.6rem" }}>
                  <em>Letting my creativity flow freely across the surface</em>
                </h2>
                <p className= "centerFlex" style={{gap: "10px", color: "var(--clr-primary-400)"}}><Move height={"20px"}/> Drag to move</p>
              </div>
            </>
          )}
        </Motion.div>
      </div>

      {isSpread && (
        <button className="reset-btn" onClick={() => setIsSpread(false)}>
          Reset View
        </button>
      )}
    </div>
  );
}

export default Explorations;
