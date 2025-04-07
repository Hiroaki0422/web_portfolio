import React from "react";
import img from "./img/image1.png";
import img2 from "./img/image2.png";
import img3 from "./img/image3.png";
import img4 from "./img/image4.png";
import img5 from "./img/image5.png";
import img6 from "./img/image6.png";

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
      link: "https://github.com/Hiroaki0422/tft_stock_preds_mlops/#readme",
      image: img,
    },
    {
      title:
        "GeoVisualizing Rent Burden: A U.S. County-Level Interactive Dashboard",
      link: "https://hiroaki0422.github.io/rent_burden_interactive_map/",
      image: img2,
    },
    {
      title: "From Parquet to Delta: Building a Modern Lakehouse Architecture",
      link: "https://github.com/Hiroaki0422/delta_lake_portfolio/#readme",
      image: img6,
    },
    {
      title:
        "Temporal Fusion-Based Stock Predictor Enhanced by Daily News Sentiment",
      link: "https://github.com/Hiroaki0422/tft_stock_predictor/#readme",
      image: img3,
    },
    {
      title: "Fine Tuning DeepSeek: Teach DeepSeek How To Code Terraform",
      link: "https://github.com/Hiroaki0422/deepseek_terraform_finetune/#readme",
      image: img4,
    },
    {
      title: "RAG + DeepSeek: Scalable Knowledge-Aware Chatbot Pipeline",
      link: "https://github.com/Hiroaki0422/rag_deepseek_chatbot/blob/main/deepseek-chatbot-with-rag-service.ipynb",
      image: img5,
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
