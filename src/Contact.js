import React from "react";
import email from "./circle.png";
import linkedin from "./InBug-Black.png";
import github from "./github-mark.png";
import location from "./location.png";

const Contact = () => {
  return (
    <section id="contact">
      <div className="flex-container2">
        <div className="contact-item">
          <a
            href="mailto:kifa0422@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img
                src={email}
                alt="Email"
                style={{ width: "5vmin", height: "5vmin", objectFit: "cover" }}
              />
            </div>
            <div>kifa0422@gmail.com</div>
          </a>
        </div>

        <div className="contact-item">
          <a
            href="https://www.linkedin.com/in/hiroaki-oshima-31246a15b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img
                src={linkedin}
                alt="LinkedIn"
                style={{ width: "5vmin", height: "5vmin", objectFit: "cover" }}
              />
            </div>
            <div>LinkedIn</div>
          </a>
        </div>

        <div className="contact-item">
          <a
            href="https://github.com/Hiroaki0422"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img
                src={github}
                alt="GitHub"
                style={{ width: "5vmin", height: "5vmin", objectFit: "cover" }}
              />
            </div>
            <div>GitHub</div>
          </a>
        </div>

        <div className="contact-item">
          {/* You could link this to a map if you want */}
          <a
            href="https://www.google.com/maps/place/San+Jose,+CA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img
                src={location}
                alt="Location"
                style={{ width: "5vmin", height: "5vmin", objectFit: "cover" }}
              />
            </div>
            <div>San Jose, CA</div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
