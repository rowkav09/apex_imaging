'use client';

import { useEffect } from "react";
import Header from './components/Header';

export default function Home() {

  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleParallax = () => {
      const parallaxBgs = document.querySelectorAll<HTMLElement>(".parallax-bg");
      parallaxBgs.forEach((el) => {
        const parentCase = el.closest(".portfolio-case") as HTMLElement;
        if (!parentCase) return;
        const rate = parseFloat(parentCase.getAttribute("data-parallax-rate") || "0.3");
        const rect = el.getBoundingClientRect();
        const offset = (window.innerHeight - rect.top) * rate;
        el.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener("scroll", handleParallax, { passive: true });
    handleParallax();
    return () => window.removeEventListener("scroll", handleParallax);
  }, []);

  // Three.js Animation for Footer
  useEffect(() => {
    const loadThreeJS = async () => {
      const THREE = await import('three');
      const { FontLoader } = await import('three/examples/jsm/loaders/FontLoader.js');
      const { TextGeometry } = await import('three/examples/jsm/geometries/TextGeometry.js');

      const canvas = document.querySelector('.webgl-footer') as HTMLCanvasElement;
      if (!canvas) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        canvas.offsetWidth / canvas.offsetHeight,
        0.1,
        1000
      );
      camera.position.z = 5;

      const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
      });
      renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);

      // Font
      const fontLoader = new FontLoader();
      fontLoader.load(
        'https://raw.githubusercontent.com/danielyl123/person/refs/heads/main/fonts/helvetiker_regular.typeface.json',
        (font) => {
          const textGeometry = new TextGeometry("LET'S FLY", {
            font,
            size: 1,
            depth: 0,
            curveSegments: 5,
            bevelEnabled: true,
            bevelThickness: 0,
            bevelSize: 0,
            bevelOffset: 0,
            bevelSegments: 4,
          });
          textGeometry.computeBoundingBox();
          textGeometry.center();

          const textMaterial = new THREE.MeshBasicMaterial();
          textMaterial.wireframe = false;
          const text = new THREE.Mesh(textGeometry, textMaterial);
          scene.add(text);
        }
      );

      const torusGeometry = new THREE.TorusGeometry(0.7, 0.4, 100, 60);
      const torusMaterial = new THREE.MeshPhysicalMaterial();
      torusMaterial.metalness = 0;
      torusMaterial.roughness = 0;
      torusMaterial.iridescence = 1;
      torusMaterial.iridescenceIOR = 1.5;
      torusMaterial.iridescenceThicknessRange = [100, 324];
      torusMaterial.transmission = 1;
      torusMaterial.ior = 1.2;
      torusMaterial.thickness = 0.8;
      const torus = new THREE.Mesh(torusGeometry, torusMaterial);
      torus.position.z = 1;
      scene.add(torus);

      // Lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 10);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xffffff, 10);
      pointLight.position.set(-1, 2, 0);
      scene.add(pointLight);

      const pointLight2 = new THREE.PointLight(0xffffff, 10);
      pointLight2.position.set(-1, -2, 0);
      scene.add(pointLight2);

      const pointLight3 = new THREE.PointLight(0xffffff, 10);
      pointLight3.position.set(1, -2, 0);
      scene.add(pointLight3);

      const pointLight4 = new THREE.PointLight(0xffffff, 10);
      pointLight4.position.set(1, 2, 0);
      scene.add(pointLight4);

      const clock = new THREE.Clock();
      const tick = () => {
        const elapsedTime = clock.getElapsedTime();
        renderer.render(scene, camera);
        torus.rotation.x = elapsedTime * 0.5;
        torus.rotation.y = elapsedTime * 0.1;
        requestAnimationFrame(tick);
      };
      tick();

      const handleResize = () => {
        if (!canvas) return;
        camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        renderer.dispose();
      };
    };

    loadThreeJS();
  }, []);
  const projects = [
              {
                title: "The Stone House",
                tag: "Residential",
                location: "Oslo, Norway",
                image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
                altitude: "120m",
                sensor: "Hasselblad",
                description:
                  "Capturing the interplay between raw concrete and Nordic coastline. Heavy-lift drones in high winds, cinematic RAW pipeline.",
                tone: "light",
              },
              {
                title: "Apex Tower",
                tag: "Commercial",
                location: "London, UK",
                image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2670&auto=format&fit=crop",
                altitude: "310m",
                sensor: "Red V-Raptor",
                description:
                  "A vertical journey through the glass facade. Precision FPV flight paths navigating atrium structures with cinematic lighting.",
                tone: "dark",
              },
              {
                title: "Oasis Retreat",
                tag: "Hospitality",
                location: "Marrakech, Morocco",
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop",
                altitude: "45m",
                sensor: "Zenmuse X7",
                description:
                  "Geometry of shadows at sunset. Thermal imaging paired with 6K cinematography for a full sensory audit of the resort.",
                tone: "light",
              },
            ];

            const services = [
              {
                title: "Aerial Cinematography",
                copy: "Heavy-lift platforms carrying Arri and Red systems with stabilized, jib-like motion up to 400ft.",
                bullets: ["Dual operator crews", "25kg payload class"],
                tone: "light",
              },
              {
                title: "Interior FPV Flight",
                copy: "One-shot fly-throughs that stitch exterior context to interior atmosphere with cine-whoops and gyro-stabilized optics.",
                bullets: ["Sub-500g cine-whoops", "4K 10-bit capture"],
                tone: "muted",
              },
              {
                title: "Photogrammetry & 3D",
                copy: "Digital twins with orthomosaics and point clouds for architectural visualization and planning.",
                bullets: ["1cm/px accuracy", "Thermal mapping"],
                tone: "dark",
              },
            ];

            const gallery = [
              "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg",
              "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
            ];

  return (
    <div className="relative min-h-screen bg-bg text-primary">
      <Header />

                <header className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black">
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 scale-[1.06]">
                      <video
                        className="h-full w-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      >
                        <source src="/fall-forest-autumn.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </div>

                  <div className="relative z-10 flex flex-col items-center justify-center text-center text-white">
                    <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-glow-soft backdrop-blur-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.3em]">London & UK Wide</span>
                    </div>
                    <h1 className="flex flex-col items-center font-display text-[13vw] leading-[0.8] tracking-tight md:text-[8vw] text-glow">
                        <span className="drop-shadow-xl">APEX</span>
                        <span className="relative" style={{ 
                          backgroundImage: 'linear-gradient(135deg, #d4af37 0%, #cd7f32 35%, #b87333 70%, #8b4513 100%)',
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          textShadow: 'none',
                          letterSpacing: 'inherit',
                          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                        }}>AERIAL IMAGING</span>
                      </h1>
                      <p className="mx-auto mt-8 max-w-2xl font-mono text-xs uppercase tracking-[0.3em] text-white/85 text-glow-soft">
                        Cinema-grade aerial optics, architectural storytelling, and smooth FPV choreography.
                      </p>
                  </div>

                  <div className="absolute bottom-10 left-6 z-10 flex flex-col gap-1 text-white">
                    <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em]">
                      <span>51.5074° N</span>
                      <span className="h-px w-6 bg-white/40" />
                      <span>0.1278° W</span>
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.35em] text-white/60">London & Surrounding Areas</span>
                  </div>
                </header>

                <main className="wrapper relative z-10 bg-bg">
                  <section className="px-6 py-24 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
                      <div className="lg:col-span-4 flex flex-col justify-between border-t border-border pt-6">
                        <span className="font-mono text-xs uppercase tracking-[0.35em] text-secondary">01 — Manifesto</span>
                        <div className="mt-10 hidden lg:block text-secondary">※</div>
                      </div>
                      <div className="lg:col-span-8 space-y-8">
                        <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-primary md:text-5xl lg:text-6xl">
                          Every property has a story. Every vehicle deserves its moment. We capture
                          <span className="italic text-secondary"> stunning aerial perspectives </span>
                          that showcase your assets from angles impossible to achieve on the ground.
                        </h2>
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
                          <div className="space-y-2">
                            <span className="text-sm font-medium text-primary">4K Cinematic</span>
                            <p className="text-xs text-secondary">Crystal-clear 4K footage perfect for listings and showreels.</p>
                          </div>
                          <div className="space-y-2">
                            <span className="text-sm font-medium text-primary">Real Estate</span>
                            <p className="text-xs text-secondary">Property exteriors, neighborhoods, and surrounding areas.</p>
                          </div>
                          <div className="space-y-2">
                            <span className="text-sm font-medium text-primary">Automotive</span>
                            <p className="text-xs text-secondary">Dynamic car shots with FPV and cinematic tracking.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="py-12 border-y border-white/10 bg-black/20 overflow-hidden relative">
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg to-transparent z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg to-transparent z-10"></div>
                    
                    <div className="flex w-max animate-marquee items-center">
                      <div className="flex gap-20 px-10 text-neutral-500 font-medium tracking-widest text-sm uppercase">
                        <span>DJI</span>
                        <span>RED Digital</span>
                        <span>Arri</span>
                        <span>Freefly</span>
                        <span>Inspire</span>
                        <span>Mavic</span>
                        <span>DJI</span>
                        <span>RED Digital</span>
                        <span>Arri</span>
                        <span>Freefly</span>
                        <span>Inspire</span>
                        <span>Mavic</span>
                      </div>
                      <div className="flex gap-20 px-10 text-neutral-500 font-medium tracking-widest text-sm uppercase">
                        <span>DJI</span>
                        <span>RED Digital</span>
                        <span>Arri</span>
                        <span>Freefly</span>
                        <span>Inspire</span>
                        <span>Mavic</span>
                        <span>DJI</span>
                        <span>RED Digital</span>
                        <span>Arri</span>
                        <span>Freefly</span>
                        <span>Inspire</span>
                        <span>Mavic</span>
                      </div>
                    </div>
                  </section>

                  <section id="drone-services" className="relative px-6 py-24 md:px-12 lg:px-24 bg-bg">
                    <div className="mb-14 text-center max-w-4xl mx-auto">
                      <span className="font-mono text-xs uppercase tracking-[0.35em] text-secondary">Packages</span>
                      <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-primary">Our Drone Services</h2>
                      <p className="mt-6 text-base text-secondary leading-relaxed">Choose the perfect drone package for your project needs. From fast-paced action shots to luxury cinematic aerials.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto justify-items-center">
                      {/* FPV Drone Package */}
                      <div className="relative hover:bg-white/[0.04] transition-all duration-300 group rounded-2xl pt-6 pr-6 pb-6 pl-6 w-full" style={{ maxWidth: "22rem", backgroundColor: "hsla(240, 15%, 9%, 1)", backgroundImage: "radial-gradient(at 88% 40%, hsla(240, 15%, 9%, 1) 0px, transparent 85%), radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%), radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%), radial-gradient(at 0% 64%, hsla(263, 93%, 56%, 1) 0px, transparent 85%), radial-gradient(at 41% 94%, hsla(284, 100%, 84%, 1) 0px, transparent 85%), radial-gradient(at 100% 99%, hsla(306, 100%, 57%, 1) 0px, transparent 85%)", boxShadow: "0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset" }}>
                        <div style={{ overflow: "hidden", pointerEvents: "none", position: "absolute", zIndex: -10, top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "calc(100% + 2px)", height: "calc(100% + 2px)", backgroundImage: "linear-gradient(0deg, hsl(0, 0%, 100%) -50%, hsl(0, 0%, 40%) 100%)", borderRadius: "1rem" }}>
                          <div style={{ content: "", pointerEvents: "none", position: "fixed", zIndex: 200, top: "50%", left: "50%", transform: "translate(-50%, -50%) rotate(0deg)", transformOrigin: "left", width: "200%", height: "10rem", backgroundImage: "linear-gradient(0deg, hsla(0, 0%, 100%, 0) 0%, hsl(277, 95%, 60%) 40%, hsl(277, 95%, 60%) 60%, hsla(0, 0%, 40%, 0) 100%)", animation: "rotate 8s linear infinite" }}></div>
                        </div>
                        
                        <style>{`@keyframes rotate { to { transform: translate(-50%, -50%) rotate(360deg); } }`}</style>

                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-xl border border-white/20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"></path></svg>
                            </div>
                            <div>
                              <h3 className="text-xl font-medium tracking-tight text-white">FPV Drone</h3>
                              <p className="text-xs text-neutral-500">Fast & dynamic</p>
                            </div>
                          </div>
                          <div className="plan-radio h-5 w-5 rounded-full border-2 border-white/30"></div>
                        </div>

                        <div className="mb-6">
                          <p className="text-sm text-neutral-300 mb-3">Fast, dynamic, immersive footage</p>
                          <p className="text-xs text-neutral-500">Cars • Bikes • Action • Indoor fly-throughs</p>
                        </div>

                        <div className="mb-6">
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-semibold tracking-tight text-white">£POA</span>
                          </div>
                          <p className="text-xs text-neutral-500 mt-1">Per session</p>
                        </div>

                        <ul className="space-y-3 text-sm text-neutral-300">
                          <li className="flex items-start gap-3">
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "1rem", height: "1rem", backgroundColor: "hsl(266, 92%, 58%)", borderRadius: "50%" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="hsl(240, 15%, 9%)" stroke="hsl(240, 15%, 9%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
                            </div>
                            4K/60fps capture
                          </li>
                          <li className="flex items-start gap-3">
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "1rem", height: "1rem", backgroundColor: "hsl(266, 92%, 58%)", borderRadius: "50%" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="hsl(240, 15%, 9%)" stroke="hsl(240, 15%, 9%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
                            </div>
                            Sub-second response time
                          </li>
                          <li className="flex items-start gap-3">
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "1rem", height: "1rem", backgroundColor: "hsl(266, 92%, 58%)", borderRadius: "50%" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="hsl(240, 15%, 9%)" stroke="hsl(240, 15%, 9%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
                            </div>
                            Indoor & outdoor capable
                          </li>
                        </ul>
                      </div>

                      {/* Cinematic Drone Standard */}
                      <div className="relative hover:bg-white/[0.04] transition-all duration-300 group rounded-2xl pt-6 pr-6 pb-6 pl-6 w-full" style={{ maxWidth: "22rem", backgroundColor: "hsla(240, 15%, 9%, 1)", backgroundImage: "radial-gradient(at 88% 40%, hsla(240, 15%, 9%, 1) 0px, transparent 85%), radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%), radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%), radial-gradient(at 0% 64%, hsla(263, 93%, 56%, 1) 0px, transparent 85%), radial-gradient(at 41% 94%, hsla(284, 100%, 84%, 1) 0px, transparent 85%), radial-gradient(at 100% 99%, hsla(306, 100%, 57%, 1) 0px, transparent 85%)", boxShadow: "0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset" }}>
                        <div style={{ overflow: "hidden", pointerEvents: "none", position: "absolute", zIndex: -10, top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "calc(100% + 2px)", height: "calc(100% + 2px)", backgroundImage: "linear-gradient(0deg, hsl(0, 0%, 100%) -50%, hsl(0, 0%, 40%) 100%)", borderRadius: "1rem" }}>
                          <div style={{ content: "", pointerEvents: "none", position: "fixed", zIndex: 200, top: "50%", left: "50%", transform: "translate(-50%, -50%) rotate(0deg)", transformOrigin: "left", width: "200%", height: "10rem", backgroundImage: "linear-gradient(0deg, hsla(0, 0%, 100%, 0) 0%, hsl(277, 95%, 60%) 40%, hsl(277, 95%, 60%) 60%, hsla(0, 0%, 40%, 0) 100%)", animation: "rotate 8s linear infinite" }}></div>
                        </div>

                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-xl border border-white/20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400"><path d="M23 7l-7 5 7 5V7z"></path><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                            </div>
                            <div>
                              <h3 className="text-xl font-medium tracking-tight text-white">Cinematic Standard</h3>
                              <p className="text-xs text-neutral-500">High quality</p>
                            </div>
                          </div>
                          <div className="plan-radio h-5 w-5 rounded-full border-2 border-white/30"></div>
                        </div>

                        <div className="mb-6">
                          <p className="text-sm text-neutral-300 mb-3">Smooth, high-quality aerial shots</p>
                          <p className="text-xs text-neutral-500">Property • Businesses • Promo</p>
                        </div>

                        <div className="mb-6">
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-semibold tracking-tight text-white">£POA</span>
                          </div>
                          <p className="text-xs text-neutral-500 mt-1">Per session</p>
                        </div>

                        <ul className="space-y-3 text-sm text-neutral-300">
                          <li className="flex items-start gap-3">
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "1rem", height: "1rem", backgroundColor: "hsl(266, 92%, 58%)", borderRadius: "50%" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="hsl(240, 15%, 9%)" stroke="hsl(240, 15%, 9%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
                            </div>
                            8K RAW recording
                          </li>
                          <li className="flex items-start gap-3">
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "1rem", height: "1rem", backgroundColor: "hsl(266, 92%, 58%)", borderRadius: "50%" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="hsl(240, 15%, 9%)" stroke="hsl(240, 15%, 9%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
                            </div>
                            Gimbal stabilization
                          </li>
                          <li className="flex items-start gap-3">
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "1rem", height: "1rem", backgroundColor: "hsl(266, 92%, 58%)", borderRadius: "50%" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="hsl(240, 15%, 9%)" stroke="hsl(240, 15%, 9%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
                            </div>
                            Professional color grading
                          </li>
                        </ul>
                      </div>

                      {/* Cinematic Drone High-End */}
                      <div className="relative hover:bg-white/[0.04] transition-all duration-300 group rounded-2xl pt-6 pr-6 pb-6 pl-6 w-full" style={{ maxWidth: "22rem", backgroundColor: "hsla(240, 15%, 9%, 1)", backgroundImage: "radial-gradient(at 88% 40%, hsla(240, 15%, 9%, 1) 0px, transparent 85%), radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%), radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%), radial-gradient(at 0% 64%, hsla(263, 93%, 56%, 1) 0px, transparent 85%), radial-gradient(at 41% 94%, hsla(284, 100%, 84%, 1) 0px, transparent 85%), radial-gradient(at 100% 99%, hsla(306, 100%, 57%, 1) 0px, transparent 85%)", boxShadow: "0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset" }}>
                        <div style={{ overflow: "hidden", pointerEvents: "none", position: "absolute", zIndex: -10, top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "calc(100% + 2px)", height: "calc(100% + 2px)", backgroundImage: "linear-gradient(0deg, hsl(0, 0%, 100%) -50%, hsl(0, 0%, 40%) 100%)", borderRadius: "1rem" }}>
                          <div style={{ content: "", pointerEvents: "none", position: "fixed", zIndex: 200, top: "50%", left: "50%", transform: "translate(-50%, -50%) rotate(0deg)", transformOrigin: "left", width: "200%", height: "10rem", backgroundImage: "linear-gradient(0deg, hsla(0, 0%, 100%, 0) 0%, hsl(277, 95%, 60%) 40%, hsl(277, 95%, 60%) 60%, hsla(0, 0%, 40%, 0) 100%)", animation: "rotate 8s linear infinite" }}></div>
                        </div>

                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-xl border border-white/20 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                            </div>
                            <div>
                              <h3 className="text-xl font-medium tracking-tight text-white">Cinematic High-End</h3>
                              <p className="text-xs text-neutral-500">Premium quality</p>
                            </div>
                          </div>
                          <div className="plan-radio h-5 w-5 rounded-full border-2 border-white/30"></div>
                        </div>

                        <div className="mb-6">
                          <p className="text-sm text-neutral-300 mb-3">Highest quality cinematic aerials</p>
                          <p className="text-xs text-neutral-500">Luxury property • Brands</p>
                        </div>

                        <div className="mb-6">
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-semibold tracking-tight text-white">£POA</span>
                          </div>
                          <p className="text-xs text-neutral-500 mt-1">Per session</p>
                        </div>

                        <ul className="space-y-3 text-sm text-neutral-300">
                          <li className="flex items-start gap-3">
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "1rem", height: "1rem", backgroundColor: "hsl(266, 92%, 58%)", borderRadius: "50%" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="hsl(240, 15%, 9%)" stroke="hsl(240, 15%, 9%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
                            </div>
                            Full-frame cinema sensors
                          </li>
                          <li className="flex items-start gap-3">
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "1rem", height: "1rem", backgroundColor: "hsl(266, 92%, 58%)", borderRadius: "50%" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="hsl(240, 15%, 9%)" stroke="hsl(240, 15%, 9%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
                            </div>
                            Full post-production services
                          </li>
                          <li className="flex items-start gap-3">
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "1rem", height: "1rem", backgroundColor: "hsl(266, 92%, 58%)", borderRadius: "50%" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="hsl(240, 15%, 9%)" stroke="hsl(240, 15%, 9%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
                            </div>
                            Dedicated crew & equipment
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section id="portfolio" className="relative px-6 py-32 md:px-12 lg:px-24 overflow-hidden bg-[#1a140f] w-full">
                    <div className="absolute inset-0 pointer-events-none">
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="h-full w-full object-cover opacity-35"
                      >
                        <source src="/raja-ampat-islands-22.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <div className="relative mx-auto max-w-7xl">
                      <div className="mb-16 reveal" style={{ transitionDelay: "0ms" }}>
                        <span className="font-mono text-xs uppercase tracking-[0.35em] text-amber-300">Portfolio</span>
                        <h2 className="mt-4 font-display text-5xl tracking-tight text-white md:text-6xl lg:text-7xl">Featured Work</h2>
                        <p className="mt-6 max-w-3xl text-base text-amber-50 leading-relaxed">From serene landscapes to towering structures, each project showcases our mastery of aerial cinematography and precision documentation.</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, idx) => (
                          <div 
                            key={project.title} 
                            className="group reveal relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500"
                            style={{ transitionDelay: `${idx * 100}ms` }}
                          >
                            <div className="absolute inset-0 bg-neutral-800">
                              <img
                                src={project.image}
                                alt={project.title}
                                className="h-full w-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                              />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                            
                            <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                              <div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-amber-400 text-black uppercase tracking-wide">{project.tag}</span>
                              </div>
                              <h3 className="text-xl md:text-2xl font-medium text-white tracking-tight mb-2">{project.title}</h3>
                              <p className="text-xs text-white/70">{project.location}</p>
                            </div>

                            <button className="hidden md:flex absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 backdrop-blur items-center justify-center text-white border border-white/20 opacity-0 group-hover:opacity-100 hover:bg-white hover:text-black transition-all duration-300">
                              <span>→</span>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  <section className="px-6 py-24 md:px-12 lg:px-24">
                    <div className="mb-14 flex flex-col items-start justify-between gap-6 border-b border-border pb-8 md:flex-row md:items-end">
                      <h3 className="font-display text-4xl leading-tight md:text-5xl">The view from the oblique angle.</h3>
                      <span className="text-secondary">Atmospheric studies, ready for flight.</span>
                    </div>
                    <div className="grid h-[55vh] grid-cols-2 gap-4 md:grid-cols-4">
                      {gallery.map((image, idx) => (
                        <div
                          key={image}
                          className={`relative overflow-hidden rounded-xl ${idx % 2 === 1 ? "mt-10 md:mt-20" : ""}`}
                        >
                          <img src={image} alt="Aerial still" className="h-full w-full object-cover transition-all duration-700 hover:scale-105 hover:grayscale-0 grayscale" />
                          <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white mix-blend-difference">
                            {idx === 0 ? "SENSOR_01" : idx === 1 ? "ISO_400" : idx === 2 ? "ALT_400" : "READY"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section id="contact" className="relative flex h-[70vh] items-center justify-center bg-[#050505] px-6 text-white overflow-hidden">
                    <canvas className="webgl-footer absolute inset-0 w-full h-full"></canvas>
                  </section>
                </main>
              </div>
            );
}
