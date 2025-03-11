"use client"

import Navbar from "@/app/components/Navbar";

export default function Home() {
  return (
    <div className="container">
      <Navbar currentPageName="กินคลีนกัน" />
      <main>
        <section id="about" className="hero">
          <div className="hero-content">
            <h1 className="name">KINCLEAN</h1>


            <p id="projectcaption" className="bio">
              Designed a website for selling clean food with a delivery service.
            </p>

            <button
              className="myButton"
              onClick={() => window.open("https://www.figma.com/proto/0nIr5HvG9aUX3AAfJfCXlI/HCI-Copy?node-id=72-18&p=f&t=dIubL3YZ0kn8mikk-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1230%3A13692", "_blank")}
            >
              VIEW PROTOTYPE
            </button>
          </div>

          <section id="education" className="education-section">
            <img src="kinclean1.png" alt="" />
          </section>
        </section>

        <section id="skills" className="skills-section">
          <h2 className="section-title">UI Animation Showcase</h2>
          <img className="kinclean_img" src="kinclean1.gif" alt="" />
          {/* <video src="kinclean_video.mp4" autoPlay muted loop playsinline></video> */}


        </section>
      </main>

      <footer>
        <p>© 2025 Narin Dapradit. All rights reserved.</p>
      </footer>
    </div>
  );
}