import React from "react";
import resume from "./HIROAKI_OSHIMA.pdf";

function download(filename, text1) {
  const element = document.createElement("a");
  const dataBlob = new Blob([text1], { type: "data:application/pdf;base64" });
  const objectUrl = URL.createObjectURL(dataBlob);
  element.href = objectUrl;
  element.download = filename;
  element.click();
}

const Resume = () => {
  return (
    <section id="resume">
      <div class="flex-container2">
        <div
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => {
            download("Hiroaki_Oshima.pdf", resume);
          }}
        >
          Click to Download my latest resume
        </div>
      </div>
    </section>
  );
};

export default Resume;
