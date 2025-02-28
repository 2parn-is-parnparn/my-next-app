import Navbar from "@/app/components/Navbar";


export default function Home() {
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
          </div>
                  <section id="education" className="education-section">
            <img src="arttrovert1.png" alt="" />
        </section>
        </section>

      </main>

      <footer>
        <p>© 2025 Narin Dapradit. All rights reserved.</p>
      </footer>
    </div>
  );
}