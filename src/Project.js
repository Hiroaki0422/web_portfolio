import React from "react";
import img from "./placeholder.jpg"; // Replace with your own image

const Project = () => {
  return (
    <section id="project">
      <div class="grid-container">
        <div class="grid-item">
          <em>
            State-of-art Attention-model Stock Price Predictor with Sentiment
            Analysis
          </em>
        </div>
        <div class="grid-item">
          <em>Fine-tuning Deepseek coder to generate Terraform code</em>
        </div>
        <div class="grid-item">
          <em>Efficient RAG Pipeline with Deepseek Chatbot</em>
        </div>
        <div class="grid-item">
          <em>
            Databricks Data Lakehouse: Efficient Alternative for Data
            Warehousing
          </em>
        </div>
        <div class="grid-item">
          <em>
            {" "}
            Interactive Geographical Visualization of Housing Cost Burden for{" "}
          </em>
        </div>
        <div class="grid-item">
          <em>End-to-End MLOPs setup with fully open source tech stack </em>
        </div>
      </div>
    </section>
  );
};

export default Project;
