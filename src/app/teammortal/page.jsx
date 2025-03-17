"use client"

import { useState } from "react";
import Navbar from "@/app/components/Navbar";

export default function Home() {

  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const openModal = (imageSrc) => {
    setCurrentImage(imageSrc);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="container">
      <Navbar currentPageName="TEAMMORTAL" />
      <main>
        <div className="hero-content">
          <h1 className="name">TEAM MORTAL</h1>
          <button
            className="myButton"
            onClick={() => window.open("https://maroon-helium-dda.notion.site/TEAM-MORTAL-1b2aa31ef795800bb6bfc6babbbcae39", "_blank")}
          >
            VIEW PROJECT DETAIL
          </button>

          <p id="projectcaption" className="bio">
          Designed and developed a website using React, Node.js, and MongoDB to help users find gaming partners, connecting them with others who share similar interests and lifestyles.          </p>
        </div>

        <section id="about" className="hero">
          <section id="education" className="education-section">
            <img src="teammortal.png" alt="" />
          </section>
        </section>

        <img src="teammortal_poster.png" alt="" />

        <section id="skills" className="skills-section">
          <h2 className="section-title">UI Animation Showcase</h2>
          {/* <img className="kinclean_img" src="arttrovert.gif" alt="" /> */}
          <video autoPlay loop muted playsInline>
      <source 
        src="/Teammortal_UI_Animation_Showcase.mkv"
        type="video/mp4" 
      />
      Your browser does not support the video tag.
    </video>
        </section>


        
        
      </main>

            {/* Image Modal */}
            {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <img src={currentImage} alt="Full size view" className="modal-image" />
          </div>
        </div>
      )}

      <footer>
        <p>© 2025 Narin Dapradit. All rights reserved.</p>
      </footer>
    </div>
  );
}