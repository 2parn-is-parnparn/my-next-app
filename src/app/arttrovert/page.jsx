"use client"

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Link from 'next/link';


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
      <Navbar />
      <main>
        
        <section id="about" className="hero">

          <div className="hero-content">
            <h1 className="name">Arttrovert</h1>
            <p className="bio">
              Designed a website for buying and selling artwork.
            </p>
            <button
              className="myButton"
              onClick={() => window.open("https://www.figma.com/proto/jC7unMWIHdvtj7sEXv3H4h/goodart?node-id=493-2729&p=f&t=JRaLAdbucMrJzC2t-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=493%3A2729", "_blank")}
            >
              VIEW PROTOTYPE
            </button>
          </div>
          <section id="education" className="education-section">
            <img src="arttrovert1.png" alt="" />
          </section>
        </section>

        <img src="arttrovert_poster.png" alt="" />

        <section id="skills" className="skills-section">
          <h2 className="section-title">UI Animation Showcase</h2>
          {/* <img className="kinclean_img" src="arttrovert.gif" alt="" /> */}
          <video autoPlay loop muted playsInline>
      <source 
        src="/Arttrovert_UI_Animation_Showcase.mp4"
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