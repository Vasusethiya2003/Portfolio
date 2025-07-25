import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <h1 className="text-5xl p-2 mb-4 font-medium">Projects</h1>
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>
                Discover Stays Effortlessly with a Beautiful, Location-Based
                Listing Web App called Wanderlust
              </h2>
              <p className="text-white-50 md:text-xl">
                A web app built with Node.js, Express, MongoDB, and TailwindCSS,
                featuring secure authentication, Cloudinary image uploads, and
                MapTiler-powered location listings for a seamless user
                experience.
              </p>
              <button className="bg-white text-black text-xl rounded-2xl md:w-80 md:h-16 w-60 h-12">
                <a href="https://wanderlust-production-a8ad.up.railway.app/listings">
                  Wanderlust
                </a>
              </button>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>The File Management Platform</h2>
              <p className="text-white-50 md:text-xl">
                A secure and lightweight file management system for uploading,
                organizing, and accessing files — built using Python with a
                Tkinter GUI for a simple and user-friendly desktop experience.
              </p>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="YC Directory App" />
              </div>
              <h2>My AI-Inspired from Open Ai</h2>
              <p className="text-white-50 md:text-xl">
                A smart AI assistant built with React, TailwindCSS, and OpenAI
                API, using local storage for smooth, persistent interactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
