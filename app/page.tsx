'use client';

import { useEffect, useState } from "react";

export default function Home() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 120);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

                <nav
                  className={`fixed top-0 left-0 w-full z-40 bg-black/80 border-b border-white/10 transition-all duration-300 ease-out ${
                    showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6 pointer-events-none"
                  }`}
                  aria-hidden={!showNav}
                >
                  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30">
                        <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      </div>
                      <span className="font-display text-lg tracking-tight text-white">APEX</span>
                    </div>
                    <div className="hidden gap-8 text-xs uppercase tracking-[0.2em] md:flex">
                      <a href="#work" className="text-white hover:text-emerald-400 transition-colors">Projects</a>
                      <a href="#services" className="text-white hover:text-emerald-400 transition-colors">Expertise</a>
                      <a href="#contact" className="text-white hover:text-emerald-400 transition-colors">Contact</a>
                    </div>
                    <a
                      href="#contact"
                      className="group flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-emerald-400"
                    >
                      Inquire
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </a>
                  </div>
                </nav>

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
                    <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-glow-soft">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Global Operations</span>
                    </div>
                    <h1 className="flex flex-col items-center font-display text-[13vw] leading-[0.8] tracking-tight md:text-[8vw] text-glow">
                        <span className="drop-shadow-xl">APEX</span>
                        <span className="text-stroke text-transparent">AERIAL IMAGING</span>
                      </h1>
                      <p className="mx-auto mt-8 max-w-2xl font-mono text-xs uppercase tracking-[0.3em] text-white/85 text-glow-soft">
                        Cinema-grade aerial optics, architectural storytelling, and smooth FPV choreography.
                      </p>
                  </div>

                  <div className="absolute bottom-10 left-6 z-10 flex flex-col gap-1 text-white">
                    <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em]">
                      <span>40.7128° N</span>
                      <span className="h-px w-6 bg-white/40" />
                      <span>74.0060° W</span>
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.35em] text-white/60">Atmospheric Sensing Unit</span>
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
                          Architecture is not just volume; it is the manipulation of light and void. We deploy
                          <span className="italic text-secondary"> cinema-grade aerial optics </span>
                          to document properties from the vantage point of the sublime.
                        </h2>
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
                          <div className="space-y-2">
                            <span className="text-sm font-medium text-primary">8K Cinema RAW</span>
                            <p className="text-xs text-secondary">Red Raptor and Arri Mini LF airborne configurations.</p>
                          </div>
                          <div className="space-y-2">
                            <span className="text-sm font-medium text-primary">LiDAR Mapping</span>
                            <p className="text-xs text-secondary">Sub-millimeter terrain and structural modeling.</p>
                          </div>
                          <div className="space-y-2">
                            <span className="text-sm font-medium text-primary">FPV Precision</span>
                            <p className="text-xs text-secondary">Interior-to-exterior continuous flight paths.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="services" className="relative overflow-hidden bg-white py-24">
                    <div className="flex h-full w-full overflow-x-auto snap-x snap-mandatory no-scrollbar">
                      {services.map((service) => (
                        <div
                          key={service.title}
                          className={`snap-center flex w-full flex-shrink-0 items-center justify-center px-8 py-16 md:px-20 ${
                            service.tone === "dark"
                              ? "bg-primary text-white"
                              : service.tone === "muted"
                              ? "bg-[#f5f5f7] text-primary"
                              : "bg-white text-primary"
                          }`}
                        >
                          <div className="max-w-3xl space-y-6">
                            <span className={`${service.tone === "dark" ? "text-white/50" : "text-secondary"} font-mono text-[11px] uppercase tracking-[0.3em]`}>
                              Capabilities
                            </span>
                            <h3 className="font-display text-5xl tracking-tight md:text-6xl">{service.title}</h3>
                            <p className={`${service.tone === "dark" ? "text-white/70" : "text-secondary"} text-lg leading-relaxed`}>
                              {service.copy}
                            </p>
                            <ul className="space-y-2 text-sm">
                              {service.bullets.map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                  <span className="h-2 w-2 rounded-full bg-primary/60" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
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
                      <div className="mb-24 reveal" style={{ transitionDelay: "0ms" }}>
                        <span className="font-mono text-xs uppercase tracking-[0.35em] text-amber-300">Portfolio</span>
                        <h2 className="mt-4 font-display text-5xl tracking-tight text-white md:text-6xl lg:text-7xl">Featured Work</h2>
                        <p className="mt-6 max-w-3xl text-base text-amber-50 leading-relaxed">From serene landscapes to towering structures, each project showcases our mastery of aerial cinematography and precision documentation.</p>
                      </div>

                      <div className="relative space-y-32 md:space-y-48">
                        {projects.slice(0, 3).map((project, idx) => {
                          const offset = idx % 2 === 0 ? "md:mr-32" : "md:ml-32";
                          const parallaxRate = 0.2 + idx * 0.15;
                          return (
                            <div 
                              key={project.title} 
                              className={`group reveal portfolio-case ${offset}`}
                              style={{ transitionDelay: `${80 + idx * 120}ms` }}
                              data-parallax-rate={parallaxRate}
                            >
                              <div className="relative overflow-hidden border border-border shadow-xl">
                                <div className="aspect-video overflow-hidden relative bg-black">
                                  <div 
                                    className="parallax-bg absolute inset-0 transition-transform duration-0 ease-out scale-110"
                                    style={{
                                      backgroundImage: `url(${project.image})`,
                                      backgroundSize: 'cover',
                                      backgroundPosition: 'center',
                                      transform: `translateY(0px) scale(1.1)`,
                                    }}
                                  />
                                  <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 relative z-10 scale-110"
                                    style={{ opacity: 0 }}
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-20" />
                                </div>
                                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent md:p-12 z-30">
                                  <div className="reveal-inner">
                                    <span className="inline-block text-xs uppercase tracking-[0.35em] text-amber-200 mb-3">Portfolio — {project.tag}</span>
                                    <h3 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight text-white mb-3">{project.title}</h3>
                                    <p className="text-white/85 text-sm md:text-base max-w-2xl mb-6">{project.description}</p>
                                    <div className="flex flex-wrap gap-6 md:gap-10 mb-6">
                                      <div>
                                        <p className="text-xs uppercase tracking-[0.25em] text-white/50">Location</p>
                                        <p className="text-white font-medium mt-1">{project.location}</p>
                                      </div>
                                      <div>
                                        <p className="text-xs uppercase tracking-[0.25em] text-white/50">Altitude</p>
                                        <p className="text-white font-medium mt-1">{project.altitude}</p>
                                      </div>
                                      <div>
                                        <p className="text-xs uppercase tracking-[0.25em] text-white/50">Equipment</p>
                                        <p className="text-white font-medium mt-1">{project.sensor}</p>
                                      </div>
                                    </div>
                                    <button className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-amber-700/30 border border-amber-600/60 text-white hover:bg-amber-600/40 hover:border-amber-400 transition-all duration-300 text-sm uppercase tracking-widest font-medium">
                                      <span>Explore Project</span>
                                      <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
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

                  <section id="contact" className="relative flex h-[70vh] items-center justify-center bg-[#050505] px-6 text-white">
                    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
                    <div className="relative z-10 text-center">
                      <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-white/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                        Flight Permits Active Globally
                      </div>
                      <h3 className="font-display text-[14vw] leading-[0.85] tracking-tight md:text-[8vw]">LET'S FLY</h3>
                      <div className="mt-10 flex flex-col gap-12 text-left text-sm text-white/80 md:grid md:grid-cols-3 md:gap-10">
                        <div className="space-y-3">
                          <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/50">Inquiries</span>
                          <a href="mailto:rowkav0809@highgateschool.org.uk" className="block text-white hover:text-white/70">rowkav0809@highgateschool.org.uk</a>
                          <a href="tel:+15550000000" className="block text-white hover:text-white/70">+1 (555) 000-0000</a>
                        </div>
                        <div className="space-y-3">
                          <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/50">Base</span>
                          <p className="max-w-xs leading-relaxed">
                            72 Spring Street
                            <br /> New York, NY 10012
                            <br /> United States
                          </p>
                        </div>
                        <div className="space-y-3">
                          <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/50">Network</span>
                          <div className="flex flex-col gap-2">
                            <a href="https://instagram.com/rowkav09" className="flex items-center gap-2 hover:text-white">
                              Instagram <span>↗</span>
                            </a>
                            <a href="https://linkedin.com/in/rowkav09" className="flex items-center gap-2 hover:text-white">
                              LinkedIn <span>↗</span>
                            </a>
                            <a href="https://vimeo.com/rowkav09" className="flex items-center gap-2 hover:text-white">
                              Vimeo <span>↗</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="mt-12 flex items-center justify-between text-[10px] uppercase tracking-[0.35em] text-white/30">
                        <span>© 2024 Apex Aerial Imaging</span>
                        <span>Privacy / Terms</span>
                      </div>
                    </div>
                  </section>
                </main>
              </div>
            );
}
