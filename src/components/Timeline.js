import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FcGraduationCap,
  FcIdea,
  FcBriefcase,
  FcGoogle,
  FcAcceptDatabase,
  FcStatistics,
} from "react-icons/fc";
import "../styles/Timeline.css";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    title: "Figma Design",
    description:
      "My journey into computer science began with a passion for design, where I honed my skills in Figma, creating user-centric designs that prioritize usability and aesthetics.",
    year: "Sep 2019 - Dec 2021",
    type: "startup",
  },
  {
    title: "Exposure to the field of Computer Science",
    description:
      "During the time of Covid, I explored various fields of computer science, including web development, data structures, and algorithms, laying the foundation for my future endeavors.",
    year: "Sep 2020 - Dec 2021",
    type: "statistics",
    learnMoreLink: "#experience",
    learnMoreText: "View Experience",
  },
  {
    title: "Decision to persue a career in Computer Science",
    description:
      "Realized my passion for computer science and decided to pursue a career in the field, focusing on software development and data science.",
    year: "Feb 2022 - Present",
    type: "education",
  },
  {
    title: "Declaring Computer Science Major in Data Science",
    description:
      "While pursuing my degree, I declared a major in Data Science, focusing on data analysis, machine learning, and data visualization.",
    year: "Jun 2025 - Present",
    type: "education",
  },
  {
    title: "Advanced Robotics and Deep Learning",
    description:
      "I am currently engaged in advanced research in robotics and deep learning, focusing on developing intelligent autonomous systems. My work involves implementing cutting-edge deep learning models to enhance robotic perception, decision-making, and control capabilities.",
    year: "Jan 2025 - Present",
    type: "research",
    learnMoreLink: "#projects",
    learnMoreText: "View Projects",
  },
];

export default function Timeline() {
  const timelineWrapRef = useRef(null);
  const timelineItemsRef = useRef([]);

  useEffect(() => {
    timelineItemsRef.current = timelineItemsRef.current.filter(Boolean);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "#timeline .section-title",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#timeline .section-title",
            start: "top 90%",
            toggleActions: "restart none none reverse",
          },
        }
      );

      gsap.fromTo(
        "#timeline-progress-line",
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: timelineWrapRef.current,
            start: "top 70%",
            end: "bottom 20%",
            scrub: 1,
          },
        }
      );

      timelineItemsRef.current.forEach((item, index) => {
        const direction = index % 2 === 0 ? -1 : 1;
        const content = item.querySelector(".timeline-content");
        const dot = item.querySelector(".timeline-dot");
        const date = item.querySelector(".timeline-date");

        const itemTl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "restart none none reverse",
          },
        });

        itemTl
          .fromTo(
            content,
            { x: direction * 100, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power2.out",
            }
          )
          .fromTo(
            dot,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.3,
              ease: "back.out(1.7)",
            },
            "-=0.3"
          )
          .fromTo(
            date,
            { opacity: 0, y: 10 },
            {
              opacity: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out",
            },
            "-=0.2"
          );
      });
    });

    return () => ctx.revert();
  }, []);

  const renderIcon = (type) => {
    switch (type) {
      case "education":
        return <FcGraduationCap className="timeline-icon" />;
      case "startup":
        return <FcIdea className="timeline-icon" />;
      case "career":
        return <FcBriefcase className="timeline-icon" />;
      case "google":
        return <FcGoogle className="timeline-icon" />;
      case "project":
        return <FcAcceptDatabase className="timeline-icon" />;
      case "statistics":
        return <FcStatistics className="timeline-icon" />;
      default:
        return null;
    }
  };

  return (
    <div id="timeline">
      <div className="section-header">
        <span className="section-title">My Journey to Data</span>
      </div>

      <div className="timeline-wrapper" ref={timelineWrapRef}>
        <div className="timeline-progress">
          <div id="timeline-progress-line"></div>
        </div>

        <div className="timeline-items">
          {milestones.map((item, idx) => (
            <div
              key={idx}
              className={`timeline-item ${idx % 2 === 0 ? "left" : "right"}`}
              ref={(el) => (timelineItemsRef.current[idx] = el)}
            >
              <div className="timeline-dot">{renderIcon(item.type)}</div>

              <div className="timeline-content">
                <h2>{item.title}</h2>
                <p>{item.description}</p>

                <div className="timeline-actions">
                  {item.certificateUrl && (
                    <a
                      href={item.certificateUrl}
                      className="timeline-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Certificate
                    </a>
                  )}

                  {item.learnMoreLink && (
                    <a href={item.learnMoreLink} className="timeline-link">
                      {item.learnMoreText}
                    </a>
                  )}
                </div>
              </div>
              <span className="timeline-date">{item.year}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
