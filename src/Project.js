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
        "State-of-art Attention-model Stock Price Predictor with Sentiment Analysis",
      link: "#", // Replace with actual URL
    },
    {
      title: "Fine-tuning Deepseek coder to generate Terraform code",
      link: "#",
    },
    {
      title: "Efficient RAG Pipeline with Deepseek Chatbot",
      link: "#",
    },
    {
      title:
        "Databricks Data Lakehouse: Efficient Alternative for Data Warehousing",
      link: "#",
    },
    {
      title: "Interactive Geographical Visualization of Housing Cost Burden",
      link: "#",
    },
    {
      title: "End-to-End MLOps setup with fully open source tech stack",
      link: "#",
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
            image={img}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;
