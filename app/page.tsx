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
                title: "Highland Trail",
                tag: "Landscape",
                location: "UK",
                video: "/non_paid/mountain_walk.MP4",
              },
              {
                title: "Forest Path",
                tag: "Lifestyle",
                location: "UK",
                video: "/non_paid/walk.MP4",
              },
              {
                title: "Still Waters",
                tag: "Waterscape",
                location: "UK",
                video: "/non_paid/water.MP4",
              },
              {
                title: "Yacht Glide",
                tag: "Marine",
                location: "UK",
                video: "/non_paid/yacht.mp4",
              },
              {
                title: "Yacht Rainbow Run",
                tag: "Marine",
                location: "UK",
                video: "/non_paid/yacht_rainbow.MP4",
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
              "/non_paid/mountain_walk.MP4",
              "/non_paid/walk.MP4",
              "/non_paid/water.MP4",
              "/non_paid/yacht.mp4",
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
                        <source src="/stock_footage/fall-forest-autumn.mp4" type="video/mp4" />
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
                          backgroundImage: 'linear-gradient(135deg, #1f8a5b 0%, #2f9b6c 40%, #3a8f62 70%, #2b6b4d 100%)',
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
                          We create aerial stories across property, automotive, commercial, tourism, construction, events, and marine.
                          <span className="italic text-secondary"> Cinematic drone coverage </span>
                          that makes every project feel intentional and premium.
                        </h2>
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
                          <div className="space-y-2">
                            <span className="text-sm font-medium text-primary">Real Estate</span>
                            <p className="text-xs text-secondary">Exteriors, neighborhoods, and luxury listings.</p>
                          </div>
                          <div className="space-y-2">
                            <span className="text-sm font-medium text-primary">Automotive</span>
                            <p className="text-xs text-secondary">FPV chase, rolling shots, and hero passes.</p>
                          </div>
                          <div className="space-y-2">
                            <span className="text-sm font-medium text-primary">Commercial & Brand</span>
                            <p className="text-xs text-secondary">Campaign visuals and social-ready promos.</p>
                          </div>
                          <div className="space-y-2">
                            <span className="text-sm font-medium text-primary">Tourism & Hospitality</span>
                            <p className="text-xs text-secondary">Resorts, venues, and destination highlights.</p>
                          </div>
                          <div className="space-y-2">
                            <span className="text-sm font-medium text-primary">Construction</span>
                            <p className="text-xs text-secondary">Progress capture, site context, and timelines.</p>
                          </div>
                          <div className="space-y-2">
                            <span className="text-sm font-medium text-primary">Events & Marine</span>
                            <p className="text-xs text-secondary">Live coverage, yachts, and coastal visuals.</p>
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
                        <span>Real Estate</span>
                        <span>Automotive</span>
                        <span>Commercial</span>
                        <span>Tourism</span>
                        <span>Construction</span>
                        <span>Events</span>
                        <span>Marine</span>
                        <span>FPV</span>
                        <span>Real Estate</span>
                        <span>Automotive</span>
                        <span>Commercial</span>
                        <span>Tourism</span>
                      </div>
                      <div className="flex gap-20 px-10 text-neutral-500 font-medium tracking-widest text-sm uppercase">
                        <span>Construction</span>
                        <span>Events</span>
                        <span>Marine</span>
                        <span>FPV</span>
                        <span>Real Estate</span>
                        <span>Automotive</span>
                        <span>Commercial</span>
                        <span>Tourism</span>
                        <span>Construction</span>
                        <span>Events</span>
                        <span>Marine</span>
                        <span>FPV</span>
                      </div>
                    </div>
                  </section>

                  <section id="drone-services" className="relative px-6 py-24 md:px-12 lg:px-24 bg-bg">
                    <div className="mb-14 text-center max-w-4xl mx-auto">
                      <span className="font-mono text-xs uppercase tracking-[0.35em] text-secondary">Drone & Hourly Pricing</span>
                      <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-primary">Three Drone Types</h2>
                      <p className="mt-6 text-base text-secondary leading-relaxed">Clear hourly pricing for the right platform.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto justify-items-center">
                      {/* Mini Drone */}
                      <div className="relative hover:bg-white/[0.04] transition-all duration-300 group rounded-2xl pt-6 pr-6 pb-6 pl-6 w-full" style={{ maxWidth: "22rem", backgroundColor: "hsla(155, 20%, 8%, 1)", backgroundImage: "radial-gradient(at 88% 40%, hsla(155, 20%, 8%, 1) 0px, transparent 85%), radial-gradient(at 49% 30%, hsla(155, 20%, 8%, 1) 0px, transparent 85%), radial-gradient(at 14% 26%, hsla(155, 20%, 8%, 1) 0px, transparent 85%), radial-gradient(at 0% 64%, hsla(150, 65%, 40%, 1) 0px, transparent 85%), radial-gradient(at 41% 94%, hsla(150, 55%, 55%, 1) 0px, transparent 85%), radial-gradient(at 100% 99%, hsla(145, 60%, 35%, 1) 0px, transparent 85%)", boxShadow: "0px -16px 24px 0px rgba(255, 255, 255, 0.18) inset" }}>
                        <div style={{ overflow: "hidden", pointerEvents: "none", position: "absolute", zIndex: -10, top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "calc(100% + 2px)", height: "calc(100% + 2px)", backgroundImage: "linear-gradient(0deg, hsl(0, 0%, 100%) -50%, hsl(0, 0%, 40%) 100%)", borderRadius: "1rem" }}>
                          <div style={{ content: "", pointerEvents: "none", position: "fixed", zIndex: 200, top: "50%", left: "50%", transform: "translate(-50%, -50%) rotate(0deg)", transformOrigin: "left", width: "200%", height: "10rem", backgroundImage: "linear-gradient(0deg, hsla(0, 0%, 100%, 0) 0%, hsl(150, 55%, 45%) 40%, hsl(150, 55%, 45%) 60%, hsla(0, 0%, 40%, 0) 100%)", animation: "rotate 8s linear infinite" }}></div>
                        </div>
                        
                        <style>{`@keyframes rotate { to { transform: translate(-50%, -50%) rotate(360deg); } }`}</style>

                        <div className="mb-6">
                          <h3 className="text-xl font-medium tracking-tight text-white">Mini</h3>
                          <p className="text-xs text-neutral-500">Indoor / tight spaces</p>
                        </div>

                        <div className="mb-6">
                          <p className="text-sm text-neutral-300 mb-3">Safe, compact footage for interiors</p>
                          <p className="text-xs text-neutral-500">Homes • Venues • Tight fly-throughs</p>
                        </div>

                        <div className="mb-6">
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-semibold tracking-tight text-white">£100/hr</span>
                          </div>
                          <p className="text-xs text-neutral-500 mt-1">Per hour</p>
                        </div>

                        <ul className="space-y-3 text-sm text-neutral-300 list-disc pl-5">
                          <li>Indoor-safe platform</li>
                          <li>Stable close-proximity movement</li>
                          <li>Ideal for interior reveals</li>
                        </ul>
                      </div>

                      {/* Mavic Drone */}
                      <div className="relative hover:bg-white/[0.04] transition-all duration-300 group rounded-2xl pt-6 pr-6 pb-6 pl-6 w-full" style={{ maxWidth: "22rem", backgroundColor: "hsla(155, 20%, 8%, 1)", backgroundImage: "radial-gradient(at 88% 40%, hsla(155, 20%, 8%, 1) 0px, transparent 85%), radial-gradient(at 49% 30%, hsla(155, 20%, 8%, 1) 0px, transparent 85%), radial-gradient(at 14% 26%, hsla(155, 20%, 8%, 1) 0px, transparent 85%), radial-gradient(at 0% 64%, hsla(150, 65%, 40%, 1) 0px, transparent 85%), radial-gradient(at 41% 94%, hsla(150, 55%, 55%, 1) 0px, transparent 85%), radial-gradient(at 100% 99%, hsla(145, 60%, 35%, 1) 0px, transparent 85%)", boxShadow: "0px -16px 24px 0px rgba(255, 255, 255, 0.18) inset" }}>
                        <div style={{ overflow: "hidden", pointerEvents: "none", position: "absolute", zIndex: -10, top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "calc(100% + 2px)", height: "calc(100% + 2px)", backgroundImage: "linear-gradient(0deg, hsl(0, 0%, 100%) -50%, hsl(0, 0%, 40%) 100%)", borderRadius: "1rem" }}>
                          <div style={{ content: "", pointerEvents: "none", position: "fixed", zIndex: 200, top: "50%", left: "50%", transform: "translate(-50%, -50%) rotate(0deg)", transformOrigin: "left", width: "200%", height: "10rem", backgroundImage: "linear-gradient(0deg, hsla(0, 0%, 100%, 0) 0%, hsl(150, 55%, 45%) 40%, hsl(150, 55%, 45%) 60%, hsla(0, 0%, 40%, 0) 100%)", animation: "rotate 8s linear infinite" }}></div>
                        </div>

                        <div className="mb-6">
                          <h3 className="text-xl font-medium tracking-tight text-white">Mavic</h3>
                          <p className="text-xs text-neutral-500">Cinematic / general aerial</p>
                        </div>

                        <div className="mb-6">
                          <p className="text-sm text-neutral-300 mb-3">Clean, cinematic establishing shots</p>
                          <p className="text-xs text-neutral-500">Property • Tourism • Commercial</p>
                        </div>

                        <div className="mb-6">
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-semibold tracking-tight text-white">£150/hr</span>
                          </div>
                          <p className="text-xs text-neutral-500 mt-1">Per hour</p>
                        </div>

                        <ul className="space-y-3 text-sm text-neutral-300 list-disc pl-5">
                          <li>4K capture depending on camera</li>
                          <li>3-axis gimbal stabilization</li>
                          <li>Log profiles and grade-ready files</li>
                        </ul>
                      </div>

                      {/* FPV Drone */}
                      <div className="relative hover:bg-white/[0.04] transition-all duration-300 group rounded-2xl pt-6 pr-6 pb-6 pl-6 w-full" style={{ maxWidth: "22rem", backgroundColor: "hsla(155, 20%, 8%, 1)", backgroundImage: "radial-gradient(at 88% 40%, hsla(155, 20%, 8%, 1) 0px, transparent 85%), radial-gradient(at 49% 30%, hsla(155, 20%, 8%, 1) 0px, transparent 85%), radial-gradient(at 14% 26%, hsla(155, 20%, 8%, 1) 0px, transparent 85%), radial-gradient(at 0% 64%, hsla(150, 65%, 40%, 1) 0px, transparent 85%), radial-gradient(at 41% 94%, hsla(150, 55%, 55%, 1) 0px, transparent 85%), radial-gradient(at 100% 99%, hsla(145, 60%, 35%, 1) 0px, transparent 85%)", boxShadow: "0px -16px 24px 0px rgba(255, 255, 255, 0.18) inset" }}>
                        <div style={{ overflow: "hidden", pointerEvents: "none", position: "absolute", zIndex: -10, top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "calc(100% + 2px)", height: "calc(100% + 2px)", backgroundImage: "linear-gradient(0deg, hsl(0, 0%, 100%) -50%, hsl(0, 0%, 40%) 100%)", borderRadius: "1rem" }}>
                          <div style={{ content: "", pointerEvents: "none", position: "fixed", zIndex: 200, top: "50%", left: "50%", transform: "translate(-50%, -50%) rotate(0deg)", transformOrigin: "left", width: "200%", height: "10rem", backgroundImage: "linear-gradient(0deg, hsla(0, 0%, 100%, 0) 0%, hsl(150, 55%, 45%) 40%, hsl(150, 55%, 45%) 60%, hsla(0, 0%, 40%, 0) 100%)", animation: "rotate 8s linear infinite" }}></div>
                        </div>

                        <div className="mb-6">
                          <h3 className="text-xl font-medium tracking-tight text-white">FPV</h3>
                          <p className="text-xs text-neutral-500">High-risk / specialist</p>
                        </div>

                        <div className="mb-6">
                          <p className="text-sm text-neutral-300 mb-3">Aggressive movement and close passes</p>
                          <p className="text-xs text-neutral-500">Automotive • Action • Complex paths</p>
                        </div>

                        <div className="mb-6">
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-semibold tracking-tight text-white">£220/hr</span>
                          </div>
                          <p className="text-xs text-neutral-500 mt-1">Per hour</p>
                        </div>

                        <ul className="space-y-3 text-sm text-neutral-300 list-disc pl-5">
                          <li>High-speed tracking and dynamic transitions</li>
                          <li>Close-proximity FPV chase</li>
                          <li>Specialist operation</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section className="px-6 pb-24 md:px-12 lg:px-24">
                    <div className="mb-10 flex items-end justify-between gap-6">
                      <div>
                        <span className="font-mono text-xs uppercase tracking-[0.35em] text-secondary">APEX Packages & Pricing</span>
                        <h3 className="mt-4 font-display text-3xl md:text-4xl tracking-tight text-primary">Packages by project type</h3>
                      </div>
                      <span className="text-secondary text-sm">Swipe to explore</span>
                    </div>

                    <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
                      {[
                        {
                          title: "Real Estate",
                          price: "Starting from £450",
                          lines: ["Exterior aerials", "Property context", "Edit: Basic or Premium"],
                          accent: "from-emerald-500/20 to-teal-500/10",
                        },
                        {
                          title: "Automotive - Cinematic Aerial",
                          price: "Starting from £650",
                          lines: ["Rolling shots", "Hero passes", "Edit: Basic or Premium"],
                          accent: "from-green-500/20 to-emerald-500/10",
                        },
                        {
                          title: "Automotive - FPV Chase",
                          price: "Starting from £900",
                          lines: ["Close-proximity FPV chase", "Dynamic passes", "Edit: Basic or Premium"],
                          accent: "from-teal-500/20 to-emerald-500/10",
                        },
                        {
                          title: "Tourism & Hospitality",
                          price: "Starting from £600",
                          lines: ["Exterior flyovers", "Location context", "Edit: Basic or Premium"],
                          accent: "from-emerald-400/20 to-lime-500/10",
                        },
                        {
                          title: "Construction",
                          price: "Starting from £450",
                          lines: ["Site overview", "Progress documentation", "Edit: Basic or Premium"],
                          accent: "from-emerald-600/20 to-teal-500/10",
                        },
                        {
                          title: "Construction Add-ons",
                          price: "Add-on services",
                          lines: ["Scheduled repeat visits", "Annotated footage", "Raw archive delivery"],
                          accent: "from-emerald-600/15 to-teal-500/10",
                        },
                        {
                          title: "Events (Non-live)",
                          price: "Starting from £550",
                          lines: ["Planned venue coverage", "Edit: Basic or Premium"],
                          accent: "from-green-400/20 to-teal-500/10",
                        },
                        {
                          title: "Marine",
                          price: "Starting from £700",
                          lines: ["Yacht / marina flyarounds", "Edit: Basic or Premium"],
                          accent: "from-teal-500/20 to-cyan-500/10",
                        },
                      ].map((item) => (
                        <div
                          key={item.title}
                          className={`min-w-[260px] snap-center rounded-2xl border border-white/10 bg-gradient-to-br ${item.accent} p-6 text-white shadow-[0_12px_40px_rgba(0,0,0,0.25)]`}
                        >
                          <h4 className="text-xl font-medium tracking-tight">{item.title}</h4>
                          <p className="mt-2 text-sm text-white/70">{item.price}</p>
                          <ul className="mt-4 space-y-2 text-xs text-white/75 list-disc pl-4">
                            {item.lines.map((line) => (
                              <li key={line}>{line}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="mt-12 grid gap-8 md:grid-cols-2">
                      <div className="rounded-2xl border border-border bg-card p-6">
                        <h4 className="text-lg font-medium text-primary">Edit Options</h4>
                        <div className="mt-4 space-y-4 text-sm text-secondary">
                          <div>
                            <p className="font-medium text-primary">Basic Edit - included</p>
                            <p>Clean cut, music, colour correction</p>
                          </div>
                          <div>
                            <p className="font-medium text-primary">Premium Edit - +£200</p>
                            <p>Cinematic pacing, advanced colour grade, sound design, social-ready master</p>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-2xl border border-border bg-card p-6">
                        <h4 className="text-lg font-medium text-primary">Global Add-ons</h4>
                        <ul className="mt-4 space-y-2 text-sm text-secondary list-disc pl-4">
                          <li>Interior drone footage - +£120</li>
                          <li>FPV sequences (non-automotive) - +£250</li>
                          <li>Sunrise / sunset shoot - +£150</li>
                          <li>Multiple locations - +£100 per location</li>
                          <li>Extended shoot time - hourly rates below</li>
                          <li>Raw footage delivery - +£100</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-8 rounded-2xl border border-border bg-card p-6">
                      <h4 className="text-lg font-medium text-primary">Multi-drone setups</h4>
                      <p className="mt-2 text-sm text-secondary">Quoted per job.</p>
                    </div>
                  </section>

                  <section id="portfolio" className="relative px-6 py-32 md:px-12 lg:px-24 overflow-hidden bg-gradient-to-b from-[#0f1a14] via-[#111c16] to-[#0f1411] w-full">
                    <div className="relative mx-auto max-w-7xl">
                      <div className="mb-16 reveal" style={{ transitionDelay: "0ms" }}>
                        <span className="font-mono text-xs uppercase tracking-[0.35em] text-emerald-300">Portfolio</span>
                        <h2 className="mt-4 font-display text-5xl tracking-tight text-white md:text-6xl lg:text-7xl">Featured Work</h2>
                        <p className="mt-6 max-w-3xl text-base text-emerald-50 leading-relaxed">From serene landscapes to towering structures, each project showcases our mastery of aerial cinematography and precision documentation.</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, idx) => (
                          <div 
                            key={project.title} 
                            className="group reveal relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500"
                            style={{ transitionDelay: `${idx * 100}ms` }}
                          >
                            <div className="absolute inset-0 bg-neutral-800">
                              <video
                                className="h-full w-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="metadata"
                              >
                                <source src={project.video} type="video/mp4" />
                              </video>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                            
                            <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                              <div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-400 text-black uppercase tracking-wide">{project.tag}</span>
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
                      <h3 className="font-display text-4xl leading-tight md:text-5xl">Aerial highlights from recent flights.</h3>
                      <span className="text-secondary">Client-ready selects from our cinematic drone work.</span>
                    </div>
                    <div className="grid h-[55vh] grid-cols-2 gap-4 md:grid-cols-4">
                      {gallery.map((videoSrc, idx) => (
                        <div
                          key={videoSrc}
                          className={`relative overflow-hidden rounded-xl ${idx % 2 === 1 ? "mt-10 md:mt-20" : ""}`}
                        >
                          <video
                            className="h-full w-full object-cover transition-all duration-700 hover:scale-105"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                          >
                            <source src={videoSrc} type="video/mp4" />
                          </video>
                          <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white mix-blend-difference">
                            {idx === 0 ? "Highland Trail" : idx === 1 ? "Forest Path" : idx === 2 ? "Still Waters" : "Yacht Glide"}
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
