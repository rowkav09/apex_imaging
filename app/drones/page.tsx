'use client';

import { useEffect } from "react";
import Link from "next/link";
import Script from "next/script";
import Header from '../components/Header';

export default function PortfolioPage() {
  useEffect(() => {
    // Dynamic background gradient
    const handlePointerMove = (e: PointerEvent) => {
      const { currentTarget: el, clientX: x, clientY: y } = e;
      if (el instanceof HTMLElement) {
        const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
        el.style.setProperty('--posX', String(x - l - w / 2));
        el.style.setProperty('--posY', String(y - t - h / 2));
      }
    };
    document.body.addEventListener('pointermove', handlePointerMove);

    // Custom cursor
    const handleMouseMove = (n: MouseEvent) => {
      const t = document.getElementById("cursor");
      const e = document.getElementById("cursor2");
      const header = document.querySelector('nav');
      const headerHeight = header ? header.offsetHeight : 80;
      
      // Hide cursor when in header area
      if (n.clientY < headerHeight) {
        t?.style.setProperty('opacity', '0');
        e?.style.setProperty('opacity', '0');
      } else {
        if (!t?.classList.contains('hover')) {
          t?.style.removeProperty('opacity');
        }
        if (!e?.classList.contains('hover')) {
          e?.style.removeProperty('opacity');
        }
      }
      
      if (t) {
        t.style.left = n.clientX + "px";
        t.style.top = n.clientY + "px";
      }
      if (e) {
        e.style.left = n.clientX + "px";
        e.style.top = n.clientY + "px";
      }
    };

    const handleHoverIn = () => {
      const t = document.getElementById("cursor");
      const e = document.getElementById("cursor2");
      t?.classList.add("hover");
      e?.classList.add("hover");
    };

    const handleHoverOut = () => {
      const t = document.getElementById("cursor");
      const e = document.getElementById("cursor2");
      t?.classList.remove("hover");
      e?.classList.remove("hover");
    };

    document.body.addEventListener("mousemove", handleMouseMove);
    
    const hoverTargets = document.querySelectorAll(".hover-target");
    hoverTargets.forEach((target) => {
      target.addEventListener("mouseover", handleHoverIn);
      target.addEventListener("mouseout", handleHoverOut);
    });

    // Section handlers
    const setupSectionHandlers = () => {
      const fpvBtn = document.querySelector(".fpv");
      const cinematicBtn = document.querySelector(".cinematic");
      const neo1Btn = document.querySelector(".neo1");
      const cameraBtn = document.querySelector(".camera");

      const fpvClose = document.querySelector(".fpv-close");
      const cinematicClose = document.querySelector(".cinematic-close");
      const neo1Close = document.querySelector(".neo1-close");
      const cameraClose = document.querySelector(".camera-close");

      fpvBtn?.addEventListener("click", () => document.body.classList.add("fpv-on"));
      fpvClose?.addEventListener("click", () => document.body.classList.remove("fpv-on"));

      cinematicBtn?.addEventListener("click", () => document.body.classList.add("cinematic-on"));
      cinematicClose?.addEventListener("click", () => document.body.classList.remove("cinematic-on"));

      neo1Btn?.addEventListener("click", () => document.body.classList.add("neo1-on"));
      neo1Close?.addEventListener("click", () => document.body.classList.remove("neo1-on"));

      cameraBtn?.addEventListener("click", () => document.body.classList.add("camera-on"));
      cameraClose?.addEventListener("click", () => document.body.classList.remove("camera-on"));
    };

    setupSectionHandlers();

    // Hide header on scroll in overlay sections
    const handleSectionScroll = () => {
      const sections = document.querySelectorAll('.fpv-section, .cinematic-section, .neo1-section, .camera-section');
      sections.forEach((section) => {
        section.addEventListener('scroll', () => {
          const scrolled = (section as HTMLElement).scrollTop > 50;
          const header = document.querySelector('nav');
          if (header && (document.body.classList.contains('fpv-on') || 
                        document.body.classList.contains('cinematic-on') || 
                        document.body.classList.contains('neo1-on') || 
                        document.body.classList.contains('camera-on'))) {
            if (scrolled) {
              header.style.opacity = '0';
              header.style.transform = 'translateY(-100%)';
            } else {
              header.style.opacity = '1';
              header.style.transform = 'translateY(0)';
            }
          }
        });
      });
    };

    handleSectionScroll();

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("pointermove", handlePointerMove as any);
      document.body.className = "";
    };
  }, []);

  return (
    <>
      <Header />
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i');

        body {
          font-family: 'Poppins', sans-serif;
          font-weight: 300;
          font-size: 15px;
          line-height: 1.6;
          color: #fff;
          height: 100vh;
          margin: 0;
          --x: calc(var(--posX, 0) * 1px);
          --y: calc(var(--posY, 0) * 1px);
          background-image: 
            linear-gradient(115deg, rgb(211 255 215), rgb(0 0 0)), 
            radial-gradient(90% 100% at calc(50% + var(--x)) calc(0% + var(--y)), rgb(200 200 200), rgb(022 000 045)), 
            radial-gradient(100% 100% at calc(80% - var(--x)) calc(0% - var(--y)), rgb(250 255 000), rgb(036 000 000)), 
            radial-gradient(150% 210% at calc(100% + var(--x)) calc(0% + var(--y)), rgb(020 175 125), rgb(000 010 255)), 
            radial-gradient(100% 100% at calc(100% - var(--x)) calc(30% - var(--y)), rgb(255 077 000), rgb(000 200 255)), 
            linear-gradient(60deg, rgb(255 000 000), rgb(120 086 255));
          background-blend-mode: overlay, overlay, difference, difference, difference, normal;
          overflow: hidden;
          transition: all 300ms linear;
          perspective: 800px;
        }

        .cursor, .cursor2, .cursor3 {
          position: fixed;
          transform: translateX(-50%) translateY(-50%);
          pointer-events: none;
          left: -100px;
          top: 50%;
          transition: all 300ms linear;
        }

        .cursor {
          width: 48px;
          height: 48px;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cursor svg {
          width: 100%;
          height: 100%;
          fill: none;
          stroke: #fff;
          stroke-width: 1.5;
          filter: drop-shadow(0 0 3px rgba(255,255,255,0.6));
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .cursor.hover {
          opacity: 0;
          transform: translateX(-50%) translateY(-50%) scale(0);
        }

        .cursor2 {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: 2px solid #fff;
          background: transparent;
          z-index: 99998;
          opacity: 0;
          transition: all 0.3s ease-out;
        }

        .cursor2.hover {
          opacity: 1;
          width: 50px;
          height: 50px;
          background: rgba(255,255,255,0.1);
          border-color: #fff;
        }

        .hero-section {
          position: relative;
          width: 100%;
          display: block;
          overflow: hidden;
          height: 100vh;
          background: transparent;
          transform: scale(1) rotateX(0);
          box-shadow: 0 0 40px rgba(0,0,0,0.2);
          transition: all 300ms linear;
          transition-delay: 400ms;
          transform-origin: center top;
        }

        .hero-section h1 {
          color: #fff;
          font-size: 8vw;
          line-height: 1;
          font-weight: 900;
        }

        .hero-section .dancing {
          letter-spacing: 1px;
          color: #ffeba7;
          font-size: 25px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          transform: translateY(-175px) rotate(-45deg);
          z-index: 2;
        }

        .hero-section .dancing span {
          padding: 8px 15px;
          padding-right: 10px;
          display: inline-block;
          border-radius: 5px;
          background-color: #102770;
        }

        .hero-section p {
          font-size: 20px;
          line-height: 1;
          font-weight: 700;
          color: #ffeba7;
        }

        .hero-section p span {
          margin-left: 15px;
          margin-right: 15px;
          position: relative;
          display: inline-block;
          cursor: pointer;
        }

        body.fpv-on .hero-section,
        body.cinematic-on .hero-section,
        body.neo1-on .hero-section,
        body.camera-on .hero-section {
          transform: rotateX(-10deg);
          transition-delay: 0ms;
        }

        .fpv-section,
        .cinematic-section,
        .neo1-section,
        .camera-section {
          position: fixed;
          top: 100%;
          left: 0;
          padding: 100px 0;
          width: 100%;
          height: 100vh;
          display: block;
          overflow-x: hidden;
          overflow-y: auto;
          background-color: #102770;
          transition: all 300ms linear;
          z-index: 10;
        }

        .fpv-close,
        .cinematic-close,
        .neo1-close,
        .camera-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 30px;
          display: block;
          overflow: hidden;
          height: 30px;
          transition: all 200ms linear;
          background-repeat: no-repeat;
          background-position: center;
          background-size: 36px 36px;
          background-image: url('http://www.ivang-design.com/svg-load/portfolio/close.svg');
          cursor: pointer;
          z-index: 11;
        }

        .fpv-close:hover,
        .cinematic-close:hover,
        .neo1-close:hover,
        .camera-close:hover {
          transform: rotate(90deg);
        }

        body.fpv-on .fpv-section,
        body.cinematic-on .cinematic-section,
        body.neo1-on .neo1-section,
        body.camera-on .camera-section {
          top: 0;
          transition-delay: 400ms;
        }

        .fpv-section img,
        .cinematic-section img,
        .neo1-section img,
        .camera-section img {
          margin-top: 30px;
          width: 100%;
          height: auto;
          display: block;
          border-radius: 4px;
          box-shadow: 0 0 20px rgba(0,0,0,0.4);
          background: transparent;
        }

        .fpv-section h3,
        .cinematic-section h3,
        .neo1-section h3,
        .camera-section h3 {
          font-size: 7vw;
          line-height: 1;
          font-weight: 700;
          letter-spacing: 1px;
          color: #fff;
        }

        .fpv-section p,
        .cinematic-section p,
        .neo1-section p,
        .camera-section p {
          font-size: 14px;
          line-height: 1.7;
          letter-spacing: 1px;
          font-weight: 500;
        }

        .fpv-section p span,
        .cinematic-section p span,
        .neo1-section p span,
        .camera-section p span {
          font-size: 20px;
          line-height: 1.3;
          font-weight: 700;
          color: #ffeba7;
        }

        .section-center {
          position: absolute;
          width: 100%;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1;
        }

        .back-home {
          position: fixed;
          top: 30px;
          left: 30px;
          z-index: 200000;
          color: #ffeba7;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all 250ms linear;
        }

        .back-home:hover {
          color: #fff;
        }

        @media screen and (max-width: 1200px) {
          .cursor, .cursor2 {
            display: none;
          }
        }

        @media (max-width: 967px) {
          .hero-section h1 {
            font-size: 11vw;
          }
          .hero-section p {
            font-size: 18px;
          }
          .hero-section p span {
            margin-left: 10px;
            margin-right: 10px;
          }
        }
      `}</style>

      <div className="hero-section">
        <div className="section-center">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <h1>Apex<br />Aerial</h1>
              </div>
              <div className="col-12 text-center mb-2">
                <div className="dancing"><span>portfolio</span></div>
              </div>
              <div className="col-12 text-center">
                <p>
                  <span className="fpv hover-target">FPV</span>
                  <span className="cinematic hover-target">Cinematic</span>
                  <span className="neo1 hover-target">Neo1</span>
                  <span className="camera hover-target">Camera Work</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FPV Section */}
      <div className="fpv-section">
        <div className="fpv-close hover-target"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h3>FPV</h3>
            </div>
            <div className="col-12 mt-3 text-center">
              <p><span>High-Speed Racing Drone</span></p>
            </div>
            <div className="col-12 text-center">
              <p>
                Camera: GoPro Hero 12<br />
                Max Speed: 120mph<br />
                Flight Time: 4-6 minutes<br />
                Use: Automotive • Action • Indoor
              </p>
            </div>
            <div className="col-md-6 col-lg-4">
              <img src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2000&auto=format&fit=crop" alt="FPV Work 1" />
            </div>
            <div className="col-md-6 col-lg-4">
              <img src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1600&auto=format&fit=crop" alt="FPV Work 2" />
            </div>
            <div className="col-md-6 col-lg-4">
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop" alt="FPV Work 3" />
            </div>
            <div className="col-md-6 col-lg-4">
              <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop" alt="FPV Work 4" />
            </div>
            <div className="col-md-6 col-lg-4">
              <img src="https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=2834&auto=format&fit=crop" alt="FPV Work 5" />
            </div>
            <div className="col-md-6 col-lg-4">
              <img src="https://images.unsplash.com/photo-1504829857797-ddff29c27927?q=80&w=2940&auto=format&fit=crop" alt="FPV Work 6" />
            </div>
          </div>
        </div>
      </div>

      {/* Cinematic Section */}
      <div className="cinematic-section">
        <div className="cinematic-close hover-target"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h3>Cinematic</h3>
            </div>
            <div className="col-12 mt-3 text-center">
              <p><span>Heavy-Lift Cinema Drone</span></p>
            </div>
            <div className="col-12 text-center">
              <p>
                Camera: RED Komodo / Arri Mini<br />
                Max Speed: 45mph<br />
                Flight Time: 12-15 minutes<br />
                Use: Film • Real Estate • Commercials
              </p>
            </div>
            <div className="col-md-6 col-lg-4">
              <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2670&auto=format&fit=crop" alt="Cinematic Work 1" />
            </div>
            <div className="col-md-6 col-lg-4">
              <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" alt="Cinematic Work 2" />
            </div>
            <div className="col-md-6 col-lg-4">
              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop" alt="Cinematic Work 3" />
            </div>
            <div className="col-md-6 col-lg-4">
              <img src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2000&auto=format&fit=crop" alt="Cinematic Work 4" />
            </div>
            <div className="col-md-6 col-lg-4">
              <img src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1600&auto=format&fit=crop" alt="Cinematic Work 5" />
            </div>
            <div className="col-md-6 col-lg-4">
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop" alt="Cinematic Work 6" />
            </div>
          </div>
        </div>
      </div>

      {/* Neo1 Section */}
      <div className="neo1-section">
        <div className="neo1-close hover-target"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h3>Neo1</h3>
            </div>
            <div className="col-12 mt-3 text-center">
              <p><span>DJI Neo Indoor Specialist</span></p>
            </div>
            <div className="col-12 text-center">
              <p>
                Camera: 4K/30fps Stabilized<br />
                Max Speed: 35mph<br />
                Flight Time: 18 minutes<br />
                Use: Indoor • Close Proximity • POV
              </p>
            </div>
            <div className="col-md-6 col-lg-4">
              <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop" alt="Neo1 Work 1" />
            </div>
            <div className="col-md-6 col-lg-4">
              <img src="https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=2834&auto=format&fit=crop" alt="Neo1 Work 2" />
            </div>
            <div className="col-md-6 col-lg-4">
              <img src="https://images.unsplash.com/photo-1504829857797-ddff29c27927?q=80&w=2940&auto=format&fit=crop" alt="Neo1 Work 3" />
            </div>
            <div className="col-md-6 col-lg-4">
              <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2670&auto=format&fit=crop" alt="Neo1 Work 4" />
            </div>
            <div className="col-md-6 col-lg-4">
              <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" alt="Neo1 Work 5" />
            </div>
            <div className="col-md-6 col-lg-4">
              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop" alt="Neo1 Work 6" />
            </div>
          </div>
        </div>
      </div>

      {/* Camera Work Section */}
      <div className="camera-section">
        <div className="camera-close hover-target"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h3>Camera Work</h3>
            </div>
            <div className="col-12 mt-3 text-center">
              <p><span>Our Finest Aerial Cinematography</span></p>
            </div>
            <div className="col-12 text-center">
              <p>
                A collection of our best work<br />
                across all drone platforms<br />
                showcasing diverse projects<br />
                and creative excellence
              </p>
            </div>
            <div className="col-md-6 col-lg-4">
              <img src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2000&auto=format&fit=crop" alt="Camera Work 1" />
            </div>
            <div className="col-md-6 col-lg-4">
              <img src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1600&auto=format&fit=crop" alt="Camera Work 2" />
            </div>
            <div className="col-md-6 col-lg-4">
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop" alt="Camera Work 3" />
            </div>
            <div className="col-md-6 col-lg-4">
              <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop" alt="Camera Work 4" />
            </div>
            <div className="col-md-6 col-lg-4">
              <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2670&auto=format&fit=crop" alt="Camera Work 5" />
            </div>
            <div className="col-md-6 col-lg-4">
              <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" alt="Camera Work 6" />
            </div>
            <div className="col-md-6 col-lg-4">
              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop" alt="Camera Work 7" />
            </div>
            <div className="col-md-6 col-lg-4">
              <img src="https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=2834&auto=format&fit=crop" alt="Camera Work 8" />
            </div>
            <div className="col-md-6 col-lg-4">
              <img src="https://images.unsplash.com/photo-1504829857797-ddff29c27927?q=80&w=2940&auto=format&fit=crop" alt="Camera Work 9" />
            </div>
          </div>
        </div>
      </div>

      <div className='cursor' id="cursor">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          {/* Center body */}
          <circle cx="12" cy="12" r="2.5"/>
          {/* Arms */}
          <line x1="6" y1="12" x2="2" y2="12"/>
          <line x1="18" y1="12" x2="22" y2="12"/>
          <line x1="12" y1="6" x2="12" y2="2"/>
          <line x1="12" y1="18" x2="12" y2="22"/>
          {/* Propellers */}
          <circle cx="2" cy="12" r="1.5"/>
          <circle cx="22" cy="12" r="1.5"/>
          <circle cx="12" cy="2" r="1.5"/>
          <circle cx="12" cy="22" r="1.5"/>
        </svg>
      </div>
      <div className='cursor2' id="cursor2"></div>

      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
    </>
  );
}
