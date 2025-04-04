import React from "react";
import img from "./placeholder.jpg"; // Replace with your own image or pass it as a prop

const ItemBox = ({ title, link, image }) => {
  return (
    <a
      href={link}
      className="item-box"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="item-title">{title}</div>
      <div className="item-image-wrapper">
        <img src={image} alt={title} className="item-image" />
      </div>
    </a>
  );
};

const Project = () => {
  const projects = [
    {
      title:
        "MLOps-Enabled Full Stack ML Pipeline with Real-Time Inference and Workflow Automation",
      link: "#",
      image: img,
    },
    {
      title:
        "GeoVisualizing Rent Burden: A U.S. County-Level Interactive Dashboard",
      link: "#",
      image: img,
    },
    {
      title:
        "Temporal Fusion-Based Stock Predictor Enhanced by Daily News Sentiment",
      link: "#",
      image: img,
    },
    {
      title: "Fine Tuning DeepSeek: Teach DeepSeek How To Code Terraform",
      link: "#",
      image: img,
    },
    {
      title: "RAG + DeepSeek: Scalable Knowledge-Aware Chatbot Pipeline",
      link: "#",
      image: img,
    },
    {
      title: "From Parquet to Delta: Building a Modern Lakehouse Architecture",
      link: "#",
      image: img,
    },
  ];

  return (
    <section id="project">
      <div className="grid-container">
        {projects.map((project, index) => (
          <ItemBox
            key={index}
            title={project.title}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;
