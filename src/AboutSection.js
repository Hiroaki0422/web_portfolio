import React from "react";
import img from "./face.png"; // Replace with your own image

const AboutSection = () => {
  return (
    <section id="aboutme">
      <div class="flex-container2">
        <div class="flex-item flex-item-01">
          <img
            src={img}
            alt="Sample Image"
            style={{ width: "30vmin", height: "30vmin", objectFit: "cover" }}
          />
        </div>

        <div class="flex-item ">
          <br></br>
          Hi, I'm Hiro! I'm a professional Data Engineer with a deep passion for
          machine learning, AI technologies, and building robots that make a
          real difference in people's lives. Since earning my Bachelor's degree
          in Data Science from UC Berkeley, I've focused on using my ML and data
          engineering skills to help build data platforms for agricultural
          robots. I've also had the privilege of contributing to nonprofit
          organizations, where I applied my expertise to create meaningful
          impact through data. This site is where I share my passion projects
          and the work I'm most proud of. Thanks for stopping by—I hope you
          enjoy getting to know more about me!
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
