import AboutSection from "./AboutSection";
import Project from "./Project";
import Contact from "./Contact";
import Resume from "./Resume";
import "./styles.css"; // Optional: keep if you have custom styles

export default function App() {
  return (
    <div className="flex-container">
      <div className="container mx-auto px-4 py-4">
        <div className="navbar flex justify-between items-center">
          <h2 className="name">Hiroaki Oshima</h2>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#aboutme" className="hover:underline">
                  About Me
                </a>
              </li>
              <li>
                <a href="#project" className="hover:underline">
                  Project
                </a>
              </li>
              <li>
                <a href="#resume" className="hover:underline">
                  Resume
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="aboutme flex-item flex-item-01 container2">
        <h1> About me </h1>
        <AboutSection />
      </div>
      <div class="flex-item flex-item-01 container2">
        <h1> Project </h1>
        <Project />
      </div>
      <div class="flex-item flex-item-01 container2">
        <h1> Resume </h1>
        <Resume />
      </div>
      <div class="flex-item flex-item-01 container2">
        <h1> Contact Me </h1>
        <Contact />
      </div>
    </div>
  );
}
