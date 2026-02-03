import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Credits.css";
import SideNavBar from "./SideNavBar";

gsap.registerPlugin(ScrollTrigger);

const Credits = () => {
  const creditsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      creditsRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#credits",
          start: "top 95%",
          end: "bottom 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="credits" ref={creditsRef}>
      <div className="ending-credits">
        <SideNavBar />
        <div className="social-links-footer">
          <a
            href="https://github.com/aranya170"
            target="_blank"
            rel="noopener noreferrer me"
            title="Aranya Kishor Das on GitHub"
          >
            GitHub
          </a>
          <span className="footer-separator"> | </span>
          <a
            href="https://www.linkedin.com/in/aranya170"
            target="_blank"
            rel="noopener noreferrer me"
            title="Aranya Kishor Das on LinkedIn"
          >
            LinkedIn
          </a>
        </div>
        <div className="footer-copyright">
          © {new Date().getFullYear()} Aranya Kishor Das. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Credits;
