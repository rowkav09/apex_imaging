export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900/80 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">FPV Cinematic</h1>
            <div className="flex gap-6">
              <a href="#services" className="text-slate-300 hover:text-white transition-colors">Services</a>
              <a href="#portfolio" className="text-slate-300 hover:text-white transition-colors">Portfolio</a>
              <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
              <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-6xl font-bold text-white mb-6 leading-tight">
            Elevate Your Story with<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              FPV Cinematic Drone Filming
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Professional aerial videography that captures breathtaking perspectives and tells your story from angles that inspire.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#pricing" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
              View Packages
            </a>
            <a href="#portfolio" className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-lg font-semibold transition-all">
              See Our Work
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-white text-center mb-4">Our Services</h3>
          <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            Specializing in FPV cinematic drone filming for various industries and occasions
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all">
              <div className="text-4xl mb-4">🎬</div>
              <h4 className="text-2xl font-semibold text-white mb-3">Commercial Projects</h4>
              <p className="text-slate-300">
                High-quality aerial footage for advertisements, corporate videos, and brand storytelling that captivates audiences.
              </p>
            </div>
            <div className="bg-slate-900 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all">
              <div className="text-4xl mb-4">🏠</div>
              <h4 className="text-2xl font-semibold text-white mb-3">Real Estate</h4>
              <p className="text-slate-300">
                Showcase properties with stunning aerial tours that highlight features and surrounding areas.
              </p>
            </div>
            <div className="bg-slate-900 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all">
              <div className="text-4xl mb-4">🎉</div>
              <h4 className="text-2xl font-semibold text-white mb-3">Events & Weddings</h4>
              <p className="text-slate-300">
                Capture unforgettable moments from unique perspectives that traditional cameras can&apos;t reach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-white text-center mb-4">Featured Work</h3>
          <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            Experience the immersive world of FPV cinematic drone filming
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative aspect-video bg-slate-800 rounded-xl overflow-hidden group cursor-pointer border border-slate-700 hover:border-blue-500 transition-all">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h5 className="text-white text-xl font-semibold mb-2">Urban Architecture Tour</h5>
                <p className="text-slate-300 text-sm">FPV cinematic showcase of modern architecture</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative aspect-video bg-slate-800 rounded-xl overflow-hidden group cursor-pointer border border-slate-700 hover:border-blue-500 transition-all">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h5 className="text-white text-xl font-semibold mb-2">Luxury Estate Showcase</h5>
                <p className="text-slate-300 text-sm">Cinematic real estate videography</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative aspect-video bg-slate-800 rounded-xl overflow-hidden group cursor-pointer border border-slate-700 hover:border-blue-500 transition-all">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h5 className="text-white text-xl font-semibold mb-2">Adventure Sports</h5>
                <p className="text-slate-300 text-sm">High-energy action sequences</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative aspect-video bg-slate-800 rounded-xl overflow-hidden group cursor-pointer border border-slate-700 hover:border-blue-500 transition-all">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h5 className="text-white text-xl font-semibold mb-2">Wedding Highlights</h5>
                <p className="text-slate-300 text-sm">Romantic aerial moments</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-white text-center mb-4">Pricing Packages</h3>
          <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            Choose the perfect bundle for your project. All packages include professional editing and color grading.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Package */}
            <div className="bg-slate-900 rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all flex flex-col">
              <h4 className="text-2xl font-bold text-white mb-2">Starter</h4>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$499</span>
                <span className="text-slate-400 ml-2">/ project</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Up to 2 hours of flight time</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>1-2 minute final video</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Professional color grading</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>4K resolution</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>1 revision included</span>
                </li>
              </ul>
              <button className="w-full bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-lg font-semibold transition-all">
                Get Started
              </button>
            </div>

            {/* Professional Package - Featured */}
            <div className="bg-gradient-to-b from-blue-600 to-blue-700 rounded-xl p-8 border-2 border-blue-400 relative flex flex-col transform md:scale-105 shadow-2xl">
              <div className="absolute top-0 right-0 bg-cyan-400 text-slate-900 px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-bold">
                POPULAR
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Professional</h4>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$999</span>
                <span className="text-blue-100 ml-2">/ project</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2 text-white">
                  <svg className="w-5 h-5 text-cyan-300 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Up to 4 hours of flight time</span>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <svg className="w-5 h-5 text-cyan-300 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>3-5 minute final video</span>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <svg className="w-5 h-5 text-cyan-300 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Professional color grading</span>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <svg className="w-5 h-5 text-cyan-300 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>4K resolution</span>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <svg className="w-5 h-5 text-cyan-300 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>3 revisions included</span>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <svg className="w-5 h-5 text-cyan-300 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Raw footage delivery</span>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <svg className="w-5 h-5 text-cyan-300 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Social media cuts</span>
                </li>
              </ul>
              <button className="w-full bg-white text-blue-700 py-3 rounded-lg font-semibold transition-all hover:bg-cyan-50">
                Get Started
              </button>
            </div>

            {/* Premium Package */}
            <div className="bg-slate-900 rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all flex flex-col">
              <h4 className="text-2xl font-bold text-white mb-2">Premium</h4>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$1,999</span>
                <span className="text-slate-400 ml-2">/ project</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Up to 8 hours of flight time</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>5-10 minute final video</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Professional color grading</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>4K & 6K resolution</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Unlimited revisions</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Raw footage delivery</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Multiple social media cuts</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Priority scheduling</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Dedicated project manager</span>
                </li>
              </ul>
              <button className="w-full bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-lg font-semibold transition-all">
                Get Started
              </button>
            </div>
          </div>
          <p className="text-center text-slate-400 mt-8 text-sm">
            * Custom packages available for larger projects. Contact us for a personalized quote.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-6">Ready to Take Your Project to New Heights?</h3>
          <p className="text-xl text-slate-300 mb-8">
            Let&apos;s create something extraordinary together. Get in touch to discuss your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hello@fpvcinematic.com" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </a>
            <a href="tel:+1234567890" className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold text-lg mb-4">FPV Cinematic</h4>
              <p className="text-slate-400 text-sm">
                Professional FPV drone filming services for all your aerial videography needs.
              </p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li><a href="#services" className="text-slate-400 hover:text-white transition-colors text-sm">Services</a></li>
                <li><a href="#portfolio" className="text-slate-400 hover:text-white transition-colors text-sm">Portfolio</a></li>
                <li><a href="#pricing" className="text-slate-400 hover:text-white transition-colors text-sm">Pricing</a></li>
                <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors text-sm">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Connect</h5>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © 2024 FPV Cinematic. All rights reserved. | Professional Drone Filming Services
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
