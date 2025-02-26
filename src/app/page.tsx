import Header from "@/app/components/Header";

export default function Home() {
  return (
    <div className="container">
      {/* <Header /> */}
      
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="name">Narin Dapradit</h1>
            <p className="bio">
              I'm passionate about UX/UI design and software design. I'm committed to improving my skills in creating user-friendly, intuitive, and visually appealing digital experiences. I enjoy collaborating with others, sharing ideas, and discussing ways to design software that effectively meets user needs.
            </p>
          </div>
          
          <div className="profile-container">
            <div className="myImage">
              <img src="/profile.jpg" alt="Profile" />
            </div>
          </div>
        </section>
        
       
        
        <h2 className="section-title">Academic Projects</h2>
        
        <div className="projects-grid">
          <div className="myCard">
            <div className="card-content">
              <h3 className="project-title">ART TROVERT</h3>
              <h4 className="project-subtitle">INTERACTIVE SYSTEMS PROJECT</h4>
              <p className="project-description">Art marketplace designed through UX research, competitive analysis, and Figma prototyping to enhance user engagement</p>
              <button className="myButton">VIEW PROJECT</button>
            </div>
          </div>
          
          <div className="myCard">
            <div className="card-content">
              <h3 className="project-title">MEDI SCAN</h3>
              <h4 className="project-subtitle">AI COURSE PROJECT</h4>
              <p className="project-description">AI-powered medicine recognition system using YOLO, LINE API, and Dialogflow for medication identification and information retrieval</p>
              <button className="myButton">VIEW PROJECT</button>
            </div>
          </div>

          <div className="myCard">
            <div className="card-content">
              <h3 className="project-title">TEAM MORTAL</h3>
              <h4 className="project-subtitle">SOFTWARE DESIGN PROJECT</h4>
              <p className="project-description">Gamer matchmaking platform built with React.js/Node.js; implemented UX/UI design principles and comprehensive software documentation</p>
              <button className="myButton">VIEW PROJECT</button>
            </div>
          </div>
          
          <div className="myCard">
            <div className="card-content">
              <h3 className="project-title">BOTTLE BANK</h3>
              <h4 className="project-subtitle">IOT IMPLEMENTATION PROJECT</h4>
              <p className="project-description">Smart recycling machine integrating Arduino sensors, web application, and Firebase for real-time monitoring and data collection</p>
              <button className="myButton">VIEW PROJECT</button>
            </div>
          </div>
        </div>

         <section className="education-section">
          <h2 className="section-title">Education</h2>
          <div className="education-card">
            <div className="education-header">
              <h3 className="institution">King Mongkut's Institute of Technology Ladkrabang</h3>
              <span className="location">Bangkok, Thailand</span>
            </div>
            <p className="degree">School of Science in Computer Science, 2.96 GPA</p>
            <p className="duration">2021 – Present</p>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2025 Narin Dapradit. All rights reserved.</p>
      </footer>
    </div>
  );
}