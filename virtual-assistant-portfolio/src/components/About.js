// src/components/About.js
import React from "react";
import { useInView } from "react-intersection-observer";
import "./About.css";

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <section
      ref={ref}
      id="about"
      className={`about-section ${inView ? "fade-in" : ""}`}
    >
      <h2>About Me</h2>
      <p>
        I am a professional Virtual Assistant specializing in administrative
        support, email management, and more. With certifications in office
        management, I ensure seamless operations for my clients.
      </p>
    </section>
  );
};

export default About;
