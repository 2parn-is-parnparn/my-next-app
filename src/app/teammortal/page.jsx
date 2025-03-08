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
            onClick={() => window.open("https://www.figma.com/proto/0nIr5HvG9aUX3AAfJfCXlI/HCI-Copy?node-id=72-18&p=f&t=dIubL3YZ0kn8mikk-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1230%3A13692", "_blank")}
          >
            VIEW PROTOTYPE
          </button>

          <p id="projectcaption" className="bio">
            "กินคลีนกัน" เป็นเว็บไซต์ที่ออกแบบมาเพื่อช่วยให้ผู้ใช้เข้าถึงข้อมูลเกี่ยวกับการกินอาหารคลีนได้ง่ายขึ้น โดยนำหลักการ Human-Computer Interaction (HCI) มาประยุกต์ใช้เพื่อสร้างประสบการณ์การใช้งานที่สะดวกและเป็นมิตรกับผู้ใช้ ภายในเว็บไซต์มีฟีเจอร์ที่ช่วยแนะนำเมนูอาหารคลีน สูตรทำอาหาร คำนวณแคลอรี่อัตโนมัติ และวางแผนมื้ออาหารตามเป้าหมายสุขภาพ การออกแบบทั้งหมดพัฒนาโดยใช้ Figma เพื่อให้สามารถสร้างต้นแบบ (Prototype) และทดสอบการใช้งานจริงก่อนพัฒนาเว็บไซต์จริงต่อไป
          </p>
        </div>
        <section id="about" className="hero">
          <section id="education" className="education-section">
            <img src="kinclean1.png" alt="" />
          </section>
        </section>
        <section id="skills" className="skills-section">
          <h2 className="section-title">การตั้งคำถาม
          (Questions) สำหรับที่ใช้ในการสัมภาษณ์ (Interviews)</h2>

          {/* แถวที่ 1 */}
          <div className="image-row">
            <div className="image-gallery">
              <img
                className="kinclean_img thumbnail"
                src="q&a_page-0001.jpg"
                alt="NudMhor app interface"
                onClick={() => openModal("q&a_page-0001.jpg")}
              />
              <img
                className="kinclean_img thumbnail"
                src="q&a_page-0002.jpg"
                alt="NudMhor app interface"
                onClick={() => openModal("q&a_page-0002.jpg")}
              />
              <img
                className="kinclean_img thumbnail"
                src="q&a_page-0003.jpg"
                alt="NudMhor app interface"
                onClick={() => openModal("q&a_page-0003.jpg")}
              />
            </div>
          </div>

        </section>

        <section id="skills" className="skills-section">
          <h2 className="section-title">Emphaty Map</h2>
          <img className="kinclean_img" src="empathy_map.png" alt="" />

        </section>


        <section id="skills" className="skills-section">
          <h2 className="section-title">Value Proposition Canvas (VPC)</h2>
          <img className="kinclean_img" src="VPC.png" alt="" />

        </section>
        

        
        <section id="skills" className="skills-section">
          <h2 className="section-title">Persona</h2>

        </section>

        <section id="skills" className="skills-section">
          <h2 className="section-title">Customer Journey / User Journey</h2>

        </section>

        <section id="skills" className="skills-section">
          <h2 className="section-title">Impact-Effort
          Matrix</h2>

        </section>

        <section id="skills" className="skills-section">
          <h2 className="section-title">IA –
          Information Architecture</h2>

        </section>
        <section id="skills" className="skills-section">
          <h2 className="section-title">
          Wireframe</h2>

        </section>
        <section id="skills" className="skills-section">
          <h2 className="section-title">
          Mockup</h2>

        </section>
        <section id="skills" className="skills-section">
          <h2 className="section-title">
          Design System / Design Token</h2>

        </section>

        <section id="skills" className="skills-section">
          <h2 className="section-title">
          UI Design & Prototype</h2>

        </section>

        <section id="skills" className="skills-section">
          <h2 className="section-title">
          Script
Usability Testing</h2>

        </section>

        <section id="skills" className="skills-section">
          <h2 className="section-title">
          Usability
          Testing</h2>

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