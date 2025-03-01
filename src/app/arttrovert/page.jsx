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
            Art marketplace designed through UX research, competitive analysis, and Figma prototyping to enhance user engagement
            </p>
            <button
            className="myButton"
            onClick={() => window.open("https://www.figma.com/proto/jC7unMWIHdvtj7sEXv3H4h/goodart?node-id=0-1&p=f&t=JRaLAdbucMrJzC2t-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=493%3A2729&show-proto-sidebar=1", "_blank")}
          >
            VIEW PROTOTYPE
          </button>
          </div>
                  <section id="education" className="education-section">
            <img src="arttrovert1.png" alt="" />
        </section>
        </section>

        <section id="skills" className="skills-section">
  <h2 className="section-title">App Interface Preview</h2>
  
  
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