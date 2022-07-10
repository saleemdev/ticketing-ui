import React from "react";
// import heroSVG from "../images/background2.jpg";
import "./HeroContent.css";
// import { EuiFieldText, EuiFlexGroup, EuiFlexItem, EuiFormRow } from "@elastic/eui";
// import {
//   EuiSpacer,
//   EuiText,
//   EuiTextAlign,
//   EuiTextColor,
//   EuiTitle,
//   EuiButton,
//   EuiForm,
// } from "@elastic/eui";
// const navigation = [
//   { title: "Customers", path: "javascript:void(0)" },
//   { title: "Careers", path: "javascript:void(0)" },
// ];
const HeroContent = () => {
  return (
    <div className="hero-dark-container">
      <section className="hero-dark">
        <div className="hero-details">
          <h1>
            It 's your time to <span> shine </span>{" "}
          </h1>
          <p>
            It is a long established fact that a reader give us some of their money for this stunning design
          </p>
          <div className="hero-btns">
            <a href="/" className="btn-primary">
              Get started
            </a>
            <a href="/" className="btn-secondary">
              Try it out{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
        <div className="hero-img">
          <img src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png" alt="hero illustration" />
        </div>{" "}
      </section>{" "}
     
    </div>
  );
};

export default HeroContent;
