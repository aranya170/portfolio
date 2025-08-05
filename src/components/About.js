import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Icon from "./Icons";
import "../styles/About.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      ".about-title",
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#about",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.from(textRefs.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-content",
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="about" ref={aboutRef}>
      <div className="section-header">
        <span className="section-title about-title">About Me</span>
      </div>

      <div className="about-content">
        <div className="about-description">
          <p ref={(el) => (textRefs.current[0] = el)}>
            Hi, my name is Aranya and I enjoy fiddling with numbers and solving
            problems. My interest in CS started back in 2016 when I was just in
            the junior school. I was fascinated by a remote control car. I
            wanted to know how it worked, so I took it apart and tried to put it
            back together. That curiosity led me to explore coding.
          </p>

          <p ref={(el) => (textRefs.current[1] = el)}>
            Since then, I’ve earned a degree in Computer Science Engineering
            from the United International University, where I specialized in and
            built a strong foundation in{" "}
            <span className="highlight">
              Data Science, Python, Design and Software Development
            </span>
            . For me, computer science is not just about writing code; it's
            about understanding how technology can solve real-world problems and
            make life easier.
          </p>

          <p ref={(el) => (textRefs.current[2] = el)}>
            I have a strong appetite for learning and I'm always eager to
            explore new technologies. This website is a testament to my journey
            where I picked up{" "}
            <span className="highlight">Tailwind, React & JavaScript</span>{" "}
            along the way. I also have a background in{" "}
            <span className="highlight"> Graphic Design. </span>
          </p>

          <p ref={(el) => (textRefs.current[4] = el)}>
            Outside of work, I love playing video games. I'm also into aesthetic
            interior designs and I love hoarding cool tech products.
          </p>
        </div>
        <p
          className="about-timeline-link"
          ref={(el) => (textRefs.current[5] = el)}
        >
          <a href="#timeline">
            <span role="img" aria-label="timeline"></span>
            View my <span className="about-timeline-highlight">
              timeline
            </span>{" "}
            to learn more about my unique journey into data &rarr;
          </a>
        </p>
        <div className="about-actions" ref={(el) => (textRefs.current[6] = el)}>
          <a href="#contact" className="resume-button btn-effect">
            Get in Touch <Icon name="Mail" className="button-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
