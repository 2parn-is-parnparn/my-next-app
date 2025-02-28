"use client"

import Navbar from "@/app/components/Navbar";
import Link from 'next/link';


export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <main>

      <Navbar currentPageName="NudMhor" />

        <div className="hero-content">
          <h1 className="name">NudMhor</h1>
          <button
            className="myButton"
            onClick={() => window.open("https://www.figma.com/proto/ncl76eMcLaPMTG9pFJ8LoY/android-ui-Copy?node-id=0-1&p=f&t=cTmL2qD4ZfL2yOH5-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=17%3A2", "_blank")}
          >
            VIEW PROTOTYPE
          </button>

          <p id="projectcaption" className="bio">
            "NudMhor" เป็นแอปพลิเคชันที่ช่วยให้ผู้ป่วยสามารถ นัดหมายแพทย์ล่วงหน้า ผ่านมือถือ เพื่อลดเวลารอคิวที่โรงพยาบาลและเพิ่มความสะดวกสบายในการเข้ารับบริการ ระบบถูกออกแบบให้ใช้งานง่าย มีฟีเจอร์สำหรับเลือกแพทย์และเวลานัดหมาย พร้อมแจ้งเตือนอัตโนมัติ ช่วยให้การพบแพทย์เป็นไปอย่างมีประสิทธิภาพมากขึ้น
          </p>
        </div>
        <section id="about" className="hero">

        </section>



        <section id="skills" className="skills-section">
          <h2 className="section-title">App Interface Preview</h2>
          <img className="kinclean_img" src="nudmhor1.png" alt="" />
          <img className="kinclean_img" src="nudmhor2.png" alt="" />
        </section>

      </main>

      <footer>
        <p>© 2025 Narin Dapradit. All rights reserved.</p>
      </footer>
    </div>
  );
}