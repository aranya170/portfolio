import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import "../styles/Experience.css";

const experienceItems = {
  "UIU Robotics Club": {
    jobTitle: "Software Team Lead @",
    duration: "JAN 2024 - AUG 2025",
    desc: [
      "Developed the club website using Codeigniter4, PHP, JS and Tailwind CSS, enhancing user experience and engagement with a modern, responsive design",
      "Managed several projects and initiatives to promote robotics and programming within the club, including workshops, hackathons, and community outreach programs",
      "Led a team of 50+ members in designing and implementing a new curriculum for the club, focusing on practical applications of robotics and programming, resulting in a 30% increase in member engagement",
    ],
  },
  "CrossRoads Initiative": {
    jobTitle: "Technical Lead @",
    duration: "JUN 2020 - FEB 2022",
    desc: [
      "Led UX design and prototyping in Figma, translating research findings into intuitive wireframes and user journeys designed around privacy, ensuring user safety and trust",
      "Worked closely with the development team to implement the design in React, ensuring a seamless user experience and adherence to best practices in web development",
      "Worked as an education professional, conducting workshops and training sessions to educate users on the platform's features and benefits, enhancing user adoption and engagement",
    ],
  },
  "Gregorian Science Club": {
    jobTitle: "Designer @",
    duration: "MAY 2018 - AUG 2020",
    desc: [
      "Managed the club's social media presence, creating engaging content and graphics to promote events and initiatives, resulting in a 50% increase in online engagement",
      "Acted as a designer for the club, creating visually appealing graphics and promotional materials for events and initiatives, enhancing the club's visibility and engagement",
    ],
  },
  ISTARC: {
    jobTitle: "Club Co-ordinator @",
    duration: "January 2016 - OCT 2018",
    desc: [
      "Managed a team of 20+ members to organize and execute events, workshops, and seminars, enhancing the club's visibility and engagement within the school community",
      "Leveraged graphic design skills and creativity to produce unique and compelling designs",
    ],
  },
};

const JobList = () => {
  const [value, setValue] = useState(0);
  const [isHorizontal, setIsHorizontal] = useState(window.innerWidth < 600);
  const keys = Object.keys(experienceItems);

  const contentRef = useRef(null);
  const listsRef = useRef({});
  const oldValueRef = useRef(value);

  useEffect(() => {
    const handleResize = () => {
      setIsHorizontal(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTabChange = (index) => {
    const oldIndex = oldValueRef.current;

    if (oldIndex === index) return;

    oldValueRef.current = index;

    const currentPanel = document.querySelector(".joblist-panel");

    if (currentPanel) {
      gsap.to(currentPanel, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          setValue(index);
          animateJobDetails();

          const newPanel = contentRef.current.querySelector(
            `.joblist-panel:nth-child(${index + 1})`
          );
          if (newPanel) {
            gsap.fromTo(
              newPanel,
              { opacity: 0 },
              { opacity: 1, duration: 0.3 }
            );
          }
        },
      });
    } else {
      setValue(index);
      animateJobDetails();
    }
  };

  const animateJobDetails = () => {
    const listItems = contentRef.current?.querySelectorAll(
      ".job-description li"
    );

    if (listItems?.length) {
      gsap.set(listItems, { opacity: 0, x: 20 });

      gsap.to(listItems, {
        opacity: 1,
        x: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: "power2.out",
      });
    }
  };

  useEffect(() => {
    animateJobDetails();
  }, []);

  return (
    <div className={`joblist-root ${isHorizontal ? "horizontal" : "vertical"}`}>
      <div
        className={`joblist-tabs ${isHorizontal ? "horizontal" : "vertical"}`}
      >
        {keys.map((key, i) => (
          <button
            key={key}
            className={`joblist-tab${value === i ? " active" : ""}`}
            onClick={() => handleTabChange(i)}
          >
            {isHorizontal ? `0${i + 1}.` : key}
          </button>
        ))}
      </div>

      <div className="joblist-content" ref={contentRef}>
        {keys.map((key, i) =>
          value === i ? (
            <div key={key} className="joblist-panel">
              <span className="joblist-job-title">
                {experienceItems[key]["jobTitle"] + " "}
              </span>
              <span className="joblist-job-company">{key}</span>
              <div className="joblist-duration">
                {experienceItems[key]["duration"]}
              </div>
              <ul className="job-description">
                {experienceItems[key]["desc"].map((descItem, j) => (
                  <li key={j}>{descItem}</li>
                ))}
              </ul>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default JobList;
