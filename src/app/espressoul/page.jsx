"use client"

import Navbar from "@/app/components/Navbar";

export default function Home() {
  return (
    <div className="container">
      <Navbar currentPageName="Espressoul" />
      <main>
                
      <section id="about" className="hero">
        <div className="hero-content">
          <h1 className="name">Espressoul</h1>
          <p id="projectcaption" className="bio">
            Designed a website to showcase the history and evolution of coffee.</p>
          <button
            className="myButton"
            onClick={() => window.open("https://www.figma.com/proto/6tJithskaIrDPEphZc8w3V/HCI_64050129?node-id=0-1&p=f&t=bhJKmXqc9s47wwyn-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2", "_blank")}
          >
            VIEW PROTOTYPE
          </button>
        </div>

          <section id="education" className="education-section">
            <img src="espressoul.png" alt="" />
          </section>
        </section>

        <section id="skills" className="skills-section">
          <h2 className="section-title">Animated Preview</h2>
          <img className="kinclean_img" src="espressoul.gif" alt="" />
          {/* <video src="kinclean_video.mp4" autoPlay muted loop playsinline></video> */}


        </section>
      </main>

      <footer>
        <p>© 2025 Narin Dapradit. All rights reserved.</p>
      </footer>
    </div>
  );
}