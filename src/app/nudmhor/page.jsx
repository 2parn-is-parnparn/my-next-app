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
      <main>
        <Navbar currentPageName="NudMhor" />

        <div className="hero-content">
          <h1 className="name">NudMhor</h1>


          <p id="projectcaption" className="bio">
          Designed a mobile application for reporting symptoms and scheduling doctor appointments in advance.          </p>

          <button
            className="myButton"
            onClick={() => window.open("https://www.figma.com/proto/ncl76eMcLaPMTG9pFJ8LoY/android-ui-Copy?node-id=0-1&p=f&t=cTmL2qD4ZfL2yOH5-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=17%3A2", "_blank")}
          >
            VIEW PROTOTYPE
          </button>
        </div>

        <section id="skills" className="skills-section">
          <h2 className="section-title">App Interface Preview</h2>
          <img
            className=""
            src="nudmhor1.png"
            alt="NudMhor app interface"
          />
          {/* แถวที่ 1
          <div className="image-row">
            <div className="image-gallery">
              <img
                className="kinclean_img thumbnail"
                src="nudmhor2.png"
                alt="NudMhor app interface"
                onClick={() => openModal("nudmhor2.png")}
              />
              <img
                className="kinclean_img thumbnail"
                src="nudmhor3.png"
                alt="NudMhor app interface"
                onClick={() => openModal("nudmhor3.png")}
              />
              <img
                className="kinclean_img thumbnail"
                src="nudmhor4.png"
                alt="NudMhor app interface"
                onClick={() => openModal("nudmhor4.png")}
              />      <img
                className="kinclean_img thumbnail"
                src="nudmhor5.png"
                alt="NudMhor app interface"
                onClick={() => openModal("nudmhor5.png")}
              />      <img
                className="kinclean_img thumbnail"
                src="nudmhor6.png"
                alt="NudMhor app interface"
                onClick={() => openModal("nudmhor6.png")}
              />
            </div>
          </div> */}

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