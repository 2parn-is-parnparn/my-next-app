"use client";
import Navbar from "@/app/components/Navbar";
import { useRouter } from "next/navigation";


export default function Home() {

  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className="container">
      <Navbar />
      <main>
        <section id="about" className="hero">
          <div className="profile-container">
            <div className="myImage">
              <img src="/profile.jpg" alt="Profile" />
            </div>
          </div>

          <div className="hero-content">
            <h1 className="name">Narin Dapradit</h1>
            <p className="bio">
              I'm passionate about UX/UI design and software design. I'm committed to improving my skills in creating user-friendly, intuitive, and visually appealing digital experiences. I enjoy collaborating with others, sharing ideas, and discussing ways to design software that effectively meets user needs.
            </p>
          </div>
        </section>

        <section id="education" className="education-section">
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

        <section id="skills" className="skills-section">
          <h2 className="section-title">Skills</h2>
          <div className="skills-container">
            <div className="skills-category">
              <h3 className="skills-category-title">Hard Skills</h3>
              <ul className="skills-list">
                <li>Figma</li>
                <li>Adobe Photoshop</li>
                <li>Usability Testing</li>
                <li>Persona Creation</li>
                <li>Journey Mapping</li>
                <li>Interactive Prototypes</li>
                <li>Wireframing</li>
                <li>User Flow Diagrams</li>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>

            <div className="skills-category">
              <h3 className="skills-category-title">Soft Skills</h3>
              <ul className="skills-list">
                <li>Team Collaboration</li>
                <li>Effective Communication</li>
                <li>Project Management</li>
                <li>Creative Problem-Solving</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="experience" className="experience-section">
          <h2 className="section-title">Experience</h2>
          <div className="experience-card">
            <div className="experience-header">
              <div className="experience-company-section">
                <h3 className="company">Ascend Group</h3>
              </div>
              <span className="location">Bangkok, Thailand</span>

            </div>
            <div className="experience-company-section">
              <p className="position">TechOps Team Internship, Ascend Money</p>
              <span className="duration">January 8, 2024 – June 28, 2024</span>
            </div>

            <h4 className="project-name">Machine Learning-Based Issue Detection in Jenkins Pipeline</h4>
            <ul className="responsibilities">
              <li>Developed an ML-powered system to analyze and predict issues in CI/CD pipelines using Jenkins logs</li>
              <li>Built predictive models with Python, scikit-learn, and Jupyter Notebook</li>
              <li>Explored and implemented Docker, Kubernetes (EKS), and AWS (EC2, S3) for deployment and scalability</li>
              <li>Integrated MongoDB and AWS DocumentDB for log storage and processing</li>
              <li>Created a Next.js-based web dashboard to display predictions, statistics, and troubleshooting recommendations</li>
            </ul>
          </div>
        </section>

        <section id="projects" className="projects-section">
          <h2 className="section-title">Academic Projects</h2>
          <div className="projects-grid">
            <div className="myCard">
              <div className="card-content">
                <h3 className="project-title">ARTTROVERT</h3>
                <h4 className="project-subtitle">INTERACTIVE SYSTEMS PROJECT</h4>
                <p className="project-description">Art marketplace designed through UX research, competitive analysis, and Figma prototyping to enhance user engagement</p>
                <button className="myButton" onClick={() => navigateTo("/arttrovert")}>VIEW PROJECT</button>
              </div>
            </div>

            <div className="myCard">
              <div className="card-content">
                <h3 className="project-title">MEDISCAN</h3>
                <h4 className="project-subtitle">AI COURSE PROJECT</h4>
                <p className="project-description">AI-powered medicine recognition system using YOLO, LINE API, and Dialogflow for medication identification and information retrieval</p>
                <button className="myButton" onClick={() => navigateTo("/arttrovert")}>VIEW PROJECT</button>
              </div>
            </div>

            <div className="myCard">
              <div className="card-content">
                <h3 className="project-title">TEAMMORTAL</h3>
                <h4 className="project-subtitle">SOFTWARE DESIGN PROJECT</h4>
                <p className="project-description">Gamer matchmaking platform built with React.js/Node.js; implemented UX/UI design principles and comprehensive software documentation</p>
                <button className="myButton" onClick={() => navigateTo("/arttrovert")}>VIEW PROJECT</button>
              </div>
            </div>

            <div className="myCard">
              <div className="card-content">
                <h3 className="project-title">BOTTLE BANK</h3>
                <h4 className="project-subtitle">IOT IMPLEMENTATION PROJECT</h4>
                <p className="project-description">Smart recycling machine integrating Arduino sensors, web application, and Firebase for real-time monitoring and data collection</p>
                <button className="myButton" onClick={() => navigateTo("/arttrovert")}>VIEW PROJECT</button>
              </div>

              
            </div>

            <div className="myCard">
              <div className="card-content">
                <h3 className="project-title">กินคลีนกัน</h3>
                <h4 className="project-subtitle">Human-Computer Interaction Group Project</h4>
                <p className="project-description">Clean eating website designed with Figma, focusing on user-friendly UI/UX and interactive meal planning for a healthier lifestyle</p>
                <button className="myButton" onClick={() => navigateTo("/kinclean")}>VIEW PROJECT</button>
              </div>
            </div>


            <div className="myCard">
              <div className="card-content">
                <h3 className="project-title">NudMhor</h3>
                <h4 className="project-subtitle">ANDROID MOBILE APPLICATION PROGRAMMING Group Project</h4>
                <p className="project-description">Designed in Figma for development</p>
                <button className="myButton" onClick={() => navigateTo("/nudmhor")}>VIEW PROJECT</button>
              </div>
            </div>

          </div>
        </section>
      </main>

      <footer>
        <p>© 2025 Narin Dapradit. All rights reserved.</p>
      </footer>
    </div>
  );
}