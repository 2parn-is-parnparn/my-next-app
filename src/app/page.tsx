"use client";
import Navbar from "@/app/components/Navbar";
import { useRouter } from "next/navigation";


export default function Home() {

  const router = useRouter();

  const navigateTo = (path?: string) => {
    if (path) {
      router.push(path);
    }
  };

  const projects = [
    {
      title: "TEAMMORTAL",
      subtitle: "SOFTWARE DESIGN PROJECT",
      mainDescription: "Gamer matchmaking platform built with React.js/Node.js; implemented UX/UI design principles and comprehensive software documentation",
      detailPath: "/teammortal",
      mainTechStack: ["React.js", "Node.js", "UI Design", "UX Research","Figma", "Prototyping"],
      hasDetailPage: true
    },
    {
      title: "ARTTROVERT",
      subtitle: "INTERACTIVE SYSTEMS PROJECT",
      mainDescription: "Art marketplace designed through UX research, competitive analysis, and Figma prototyping to enhance user engagement",
      detailPath: "/arttrovert",
      mainTechStack: ["Figma", "Prototyping","UI Design"],
      hasDetailPage: true
    },

    {
      title: "กินคลีนกัน",
      subtitle: "HUMAN-COMPUTER INTERACTION GROUP PROJECT",
      mainDescription: "Clean eating website designed with Figma, focusing on user-friendly UI/UX and interactive meal planning for a healthier lifestyle",
      detailPath: "/kinclean",
      mainTechStack: ["Figma", "UI Design","Prototyping"],
      hasDetailPage: true
    },
    {
      title: "NudMhor",
      subtitle: "ANDROID MOBILE APPLICATION GROUP PROJECT",
      mainDescription: "Mobile application designed in Figma with a focus on user experience and interface design",
      detailPath: "/nudmhor",
      mainTechStack: ["Android", "UI Design","Prototyping"],
      hasDetailPage: true,
    },
    {
      title: "Espressoul",
      subtitle: "HUMAN-COMPUTER INTERACTION INDIVIDUAL PROJECT",
      mainDescription: "Designed in Figma with a focus on user experience and interface design",
      detailPath: "/espressoul",
      mainTechStack: ["Figma",  "UI Design","Prototyping"],
      hasDetailPage: true,
    },
    {
      title: "MEDISCAN",
      subtitle: "AI COURSE PROJECT",
      mainDescription: "AI-powered medicine recognition system using YOLO, LINE API, and Dialogflow for medication identification and information retrieval",
      mainTechStack: ["YOLO", "Python", "LINE API"],
      hasDetailPage: false,
      detailPath: undefined
    },
    {
      title: "BOTTLE BANK",
      subtitle: "IOT IMPLEMENTATION PROJECT",
      mainDescription: "Smart recycling machine integrating Arduino sensors, web application, and Firebase for real-time monitoring and data collection",
      mainTechStack: ["Arduino", "Firebase", "IoT"],
      hasDetailPage: false,
      detailPath: undefined
    },
  ];

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



        <section id="projects" className="projects-section">
          <h2 className="section-title">Academic Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="myCard">
                <div className="card-content">
                  <h3 className="project-title">{project.title}</h3>
                  <h4 className="project-subtitle">{project.subtitle}</h4>
                  <div className="tech-stack">
                    <div className="tech-stack-items">
                      {project.mainTechStack.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <p className="project-description">{project.mainDescription}</p>
                  

                  
                  {project.hasDetailPage && (
                    <button 
                      className="myButton" 
                      onClick={() => navigateTo(project.detailPath)}
                    >
                      VIEW PROJECT
                    </button>
                  )}
                </div>
              </div>
            ))}
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

      </main>

      <footer>
        <p>© 2025 Narin Dapradit. All rights reserved.</p>
      </footer>
    </div>
  );
}