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
            "กินคลีนกัน" เป็นเว็บไซต์ที่ออกแบบมาเพื่อช่วยให้ผู้ใช้เข้าถึงข้อมูลเกี่ยวกับการกินอาหารคลีนได้ง่ายขึ้น โดยนำหลักการ Human-Computer Interaction (HCI) มาประยุกต์ใช้เพื่อสร้างประสบการณ์การใช้งานที่สะดวกและเป็นมิตรกับผู้ใช้ ภายในเว็บไซต์มีฟีเจอร์ที่ช่วยแนะนำเมนูอาหารคลีน สูตรทำอาหาร คำนวณแคลอรี่อัตโนมัติ และวางแผนมื้ออาหารตามเป้าหมายสุขภาพ การออกแบบทั้งหมดพัฒนาโดยใช้ Figma เพื่อให้สามารถสร้างต้นแบบ (Prototype) และทดสอบการใช้งานจริงก่อนพัฒนาเว็บไซต์จริงต่อไป
          </p>
        </div>
        <section id="about" className="hero">
          <section id="education" className="education-section">
            <img src="teammortal.png" alt="" />
          </section>
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