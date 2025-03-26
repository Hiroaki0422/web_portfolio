import React from "react";
import email from "./circle.png";
import linkedin from "./InBug-Black.png";
import github from "./github-mark.png";
import location from "./location.png";

const Contact = () => {
  return (
    <section id="contact">
      <div class="flex-container2">
        <div class="contact-item">
          <div>
            <img
              src={email}
              alt="Email"
              style={{ width: "5vmin", height: "5vmin", objectFit: "cover" }}
            />
          </div>
          <div>kifa0422@gmail.com</div>
        </div>

        <div class="contact-item">
          <div>
            <img
              src={linkedin}
              alt="Email"
              style={{ width: "5vmin", height: "5vmin", objectFit: "cover" }}
            />
          </div>
          <div>LinkedIn</div>
        </div>
        <div class="contact-item">
          <div>
            <img
              src={github}
              alt="Email"
              style={{ width: "5vmin", height: "5vmin", objectFit: "cover" }}
            />
          </div>
          <div>Github</div>
        </div>
        <div class="contact-item">
          <div>
            <img
              src={location}
              alt="Email"
              style={{ width: "5vmin", height: "5vmin", objectFit: "cover" }}
            />
          </div>
          <div>San Jose, CA</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
