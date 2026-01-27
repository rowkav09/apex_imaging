'use client';

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-emerald-900 to-slate-950">
      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900/90 backdrop-blur-md z-50 border-b border-emerald-500/30 animate-slide-up shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white tracking-wide">APEX AERIAL IMAGING</h1>
            <div className="flex gap-6">
              <a href="#services" className="text-white hover:text-emerald-400 transition-colors duration-300 transform hover:scale-110 font-medium">Services</a>
              <a href="#gallery" className="text-white hover:text-emerald-400 transition-colors duration-300 transform hover:scale-110 font-medium">Gallery</a>
              <a href="#pricing" className="text-white hover:text-emerald-400 transition-colors duration-300 transform hover:scale-110 font-medium">Pricing</a>
              <a href="#contact" className="text-white hover:text-emerald-400 transition-colors duration-300 transform hover:scale-110 font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Iframe Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Iframe Background - Improved aspect ratio and sizing */}
        <div className="absolute inset-0 z-0 w-full h-full bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-950">
          <div className="absolute inset-0 w-full h-full" style={{ 
            transform: 'scale(1.5)',
            transformOrigin: 'center center'
          }}>
            <iframe 
              src="https://zeacon.com/player/5a24c184-6cf9-451f-88ae-87256060f95d" 
              title="Zeacon | Embed Video" 
              width="100%" 
              height="100%" 
              allowFullScreen 
              allow="autoplay; fullscreen"
              style={{ 
                border: '0px', 
                width: '100%', 
                height: '100%', 
                position: 'absolute', 
                top: 0, 
                left: 0,
                objectFit: 'cover'
              }}
              className="w-full h-full"
            />
          </div>
          {/* Enhanced overlay gradient with better contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-emerald-950/50 to-slate-900/80"></div>
        </div>

        {/* Hero Content - Enhanced text with better contrast */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-in">
          <h2 className="text-7xl md:text-8xl font-bold text-white mb-6 leading-tight tracking-tight animate-slide-up drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]">
            <span className="bg-slate-900/40 backdrop-blur-md px-6 py-3 rounded-2xl inline-block border border-emerald-500/30">
              APEX AERIAL
            </span>
            <br />
            <span className="bg-slate-900/40 backdrop-blur-md px-6 py-3 rounded-2xl inline-block mt-4 border border-emerald-500/30">
              IMAGING
            </span>
          </h2>
          <p className="text-2xl text-white mb-12 max-w-3xl mx-auto font-light tracking-wide animate-slide-up-delay drop-shadow-[0_0_20px_rgba(0,0,0,0.9)] bg-slate-900/30 backdrop-blur-sm py-4 px-6 rounded-xl">
            Capturing the world from above with breathtaking precision and artistry
          </p>
          <div className="flex gap-6 justify-center animate-slide-up-delay-2">
            <a href="#gallery" className="group relative bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white px-10 py-5 rounded-full font-semibold transition-all transform hover:scale-105 shadow-2xl overflow-hidden">
              <span className="relative z-10">View Our Work</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </a>
            <a href="#contact" className="bg-slate-800/60 backdrop-blur-md hover:bg-slate-700/70 text-white px-10 py-5 rounded-full font-semibold transition-all border-2 border-emerald-500/50 hover:border-emerald-400 transform hover:scale-105 shadow-xl">
              Get in Touch
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <svg className="w-8 h-8 text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-emerald-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-5xl font-bold text-white mb-6 animate-scale-in">Our Services</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-6 animate-scale-in-delay"></div>
            <p className="text-emerald-100 text-xl max-w-2xl mx-auto animate-scale-in-delay-2">
              Specializing in aerial photography and videography for diverse industries
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-emerald-950/50 backdrop-blur-md p-10 rounded-2xl border border-emerald-700/50 hover:border-green-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 animate-slide-in-left">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 animate-float">📷</div>
              <h4 className="text-2xl font-semibold text-white mb-4 group-hover:text-green-400 transition-colors">Aerial Photography</h4>
              <p className="text-emerald-200 leading-relaxed">
                Stunning high-resolution aerial photographs that capture landscapes, properties, and events from unique perspectives.
              </p>
            </div>
            <div className="group bg-emerald-950/50 backdrop-blur-md p-10 rounded-2xl border border-emerald-700/50 hover:border-green-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 animate-scale-in">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 animate-float">🎥</div>
              <h4 className="text-2xl font-semibold text-white mb-4 group-hover:text-green-400 transition-colors">Cinematic Videos</h4>
              <p className="text-emerald-200 leading-relaxed">
                Professional aerial videography with cinematic quality for commercials, real estate, and documentary projects.
              </p>
            </div>
            <div className="group bg-emerald-950/50 backdrop-blur-md p-10 rounded-2xl border border-emerald-700/50 hover:border-green-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 animate-slide-in-right">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 animate-float">🌄</div>
              <h4 className="text-2xl font-semibold text-white mb-4 group-hover:text-green-400 transition-colors">Nature & Landscapes</h4>
              <p className="text-emerald-200 leading-relaxed">
                Capturing the natural beauty of forests, mountains, coastlines, and wilderness areas with artistic precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Focus on Videos and Photos */}
      <section id="gallery" className="py-24 px-6 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950 via-green-900 to-emerald-950 opacity-50"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-5xl font-bold text-white mb-6 animate-scale-in">Featured Gallery</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-6 animate-scale-in-delay"></div>
            <p className="text-emerald-100 text-xl max-w-2xl mx-auto animate-scale-in-delay-2">
              Explore our collection of breathtaking aerial imagery and videography
            </p>
          </div>

          {/* Video Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Video Item 1 */}
            <div className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/30 animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/20 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=800&h=600&fit=crop" 
                alt="Forest Aerial View"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-20 h-20 bg-green-600/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 animate-pulse">
                  <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h5 className="text-white text-xl font-semibold mb-2">Forest Canopy Flight</h5>
                <p className="text-emerald-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Cinematic journey through ancient forests</p>
              </div>
            </div>

            {/* Video Item 2 */}
            <div className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/30 animate-scale-in-delay">
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/20 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop" 
                alt="Mountain Peak"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-20 h-20 bg-green-600/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 animate-pulse">
                  <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h5 className="text-white text-xl font-semibold mb-2">Mountain Majesty</h5>
                <p className="text-emerald-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Epic aerial views of peaks at sunrise</p>
              </div>
            </div>

            {/* Video Item 3 */}
            <div className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/30 animate-scale-in-delay-2">
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/20 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop" 
                alt="Coastal Beauty"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-20 h-20 bg-green-600/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 animate-pulse">
                  <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h5 className="text-white text-xl font-semibold mb-2">Coastal Dreams</h5>
                <p className="text-emerald-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Stunning shoreline cinematography</p>
              </div>
            </div>

            {/* Photo Item 4 */}
            <div className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/30 animate-slide-in-left">
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/20 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop" 
                alt="Sunset Landscape"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h5 className="text-white text-xl font-semibold mb-2">Golden Hour Vista</h5>
                <p className="text-emerald-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Spectacular landscape photography</p>
              </div>
            </div>

            {/* Photo Item 5 */}
            <div className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/30 animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/20 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop" 
                alt="River Valley"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h5 className="text-white text-xl font-semibold mb-2">Valley Serenity</h5>
                <p className="text-emerald-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Tranquil river valley aerials</p>
              </div>
            </div>

            {/* Photo Item 6 */}
            <div className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/30 animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/20 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop" 
                alt="Mountain Range"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h5 className="text-white text-xl font-semibold mb-2">Alpine Wilderness</h5>
                <p className="text-emerald-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Dramatic mountain range photography</p>
              </div>
            </div>
          </div>

          {/* View More Button */}
          <div className="text-center">
            <button className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-12 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-xl animate-pulse">
              <span className="flex items-center gap-2">
                View Full Portfolio
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 bg-emerald-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-5xl font-bold text-white mb-6 animate-scale-in">Pricing Packages</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-6 animate-scale-in-delay"></div>
            <p className="text-emerald-100 text-xl max-w-2xl mx-auto animate-scale-in-delay-2">
              Flexible packages tailored to your project needs. All include professional editing and color grading.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Package */}
            <div className="group bg-emerald-950/50 backdrop-blur-md rounded-2xl p-10 border border-emerald-700/50 hover:border-green-500/50 transition-all duration-500 flex flex-col hover:transform hover:scale-105 animate-slide-in-left">
              <h4 className="text-2xl font-bold text-white mb-2">Essentials</h4>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$599</span>
                <span className="text-emerald-300 ml-2">/ project</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3 text-emerald-200">
                  <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Up to 3 hours of flight time</span>
                </li>
                <li className="flex items-start gap-3 text-emerald-200">
                  <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>2-3 minute edited video</span>
                </li>
                <li className="flex items-start gap-3 text-emerald-200">
                  <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>4K resolution output</span>
                </li>
                <li className="flex items-start gap-3 text-emerald-200">
                  <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Professional color grading</span>
                </li>
                <li className="flex items-start gap-3 text-emerald-200">
                  <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>1 revision round</span>
                </li>
              </ul>
              <button className="w-full bg-emerald-800/50 backdrop-blur-sm hover:bg-green-600 text-white py-4 rounded-full font-semibold transition-all duration-300 border border-emerald-600 hover:border-green-500 group-hover:transform group-hover:scale-105">
                Get Started
              </button>
            </div>

            {/* Professional Package - Featured */}
            <div className="relative bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-700 rounded-2xl p-10 border-2 border-emerald-400 flex flex-col transform md:scale-110 shadow-2xl shadow-emerald-500/50 z-10 animate-scale-in">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-slate-900 px-8 py-2 rounded-full text-sm font-bold shadow-xl animate-pulse border-2 border-yellow-300">
                ⭐ MOST POPULAR ⭐
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Professional</h4>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$1,299</span>
                <span className="text-green-100 ml-2">/ project</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3 text-white">
                  <svg className="w-6 h-6 text-green-200 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Up to 6 hours of flight time</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <svg className="w-6 h-6 text-green-200 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>4-6 minute edited video</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <svg className="w-6 h-6 text-green-200 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>4K & 5K resolution options</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <svg className="w-6 h-6 text-green-200 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Cinematic color grading</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <svg className="w-6 h-6 text-green-200 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>3 revision rounds</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <svg className="w-6 h-6 text-green-200 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Raw footage included</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <svg className="w-6 h-6 text-green-200 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Social media cuts</span>
                </li>
              </ul>
              <button className="w-full bg-white hover:bg-green-50 text-green-800 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg transform hover:scale-105">
                Get Started
              </button>
            </div>

            {/* Premium Package */}
            <div className="group bg-emerald-950/50 backdrop-blur-md rounded-2xl p-10 border border-emerald-700/50 hover:border-green-500/50 transition-all duration-500 flex flex-col hover:transform hover:scale-105 animate-slide-in-right">
              <h4 className="text-2xl font-bold text-white mb-2">Premium</h4>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$2,499</span>
                <span className="text-emerald-300 ml-2">/ project</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3 text-emerald-200">
                  <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Unlimited flight time</span>
                </li>
                <li className="flex items-start gap-3 text-emerald-200">
                  <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>8-12 minute edited video</span>
                </li>
                <li className="flex items-start gap-3 text-emerald-200">
                  <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>6K resolution available</span>
                </li>
                <li className="flex items-start gap-3 text-emerald-200">
                  <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Advanced color grading</span>
                </li>
                <li className="flex items-start gap-3 text-emerald-200">
                  <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Unlimited revisions</span>
                </li>
                <li className="flex items-start gap-3 text-emerald-200">
                  <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Full raw footage library</span>
                </li>
                <li className="flex items-start gap-3 text-emerald-200">
                  <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Multiple social versions</span>
                </li>
                <li className="flex items-start gap-3 text-emerald-200">
                  <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Priority scheduling</span>
                </li>
                <li className="flex items-start gap-3 text-emerald-200">
                  <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Dedicated project manager</span>
                </li>
              </ul>
              <button className="w-full bg-emerald-800/50 backdrop-blur-sm hover:bg-green-600 text-white py-4 rounded-full font-semibold transition-all duration-300 border border-emerald-600 hover:border-green-500 group-hover:transform group-hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
          <p className="text-center text-emerald-300 mt-12 text-sm animate-fade-in">
            * Custom packages available for larger or specialized projects. Contact us for a personalized quote.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-green-800/20 to-emerald-950"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h3 className="text-5xl font-bold text-white mb-6 animate-scale-in">Ready to Elevate Your Vision?</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-8 animate-scale-in-delay"></div>
            <p className="text-xl text-emerald-100 mb-12 leading-relaxed animate-scale-in-delay-2">
              Let&apos;s collaborate to create stunning aerial imagery that tells your story from breathtaking new perspectives.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="mailto:hello@apexaerialimaging.com" className="group relative bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-10 py-5 rounded-full font-semibold transition-all inline-flex items-center justify-center gap-3 shadow-2xl transform hover:scale-105 overflow-hidden animate-slide-in-left">
              <svg className="w-6 h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="relative z-10">Email Us</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </a>
            <a href="tel:+1234567890" className="bg-emerald-800/50 backdrop-blur-md hover:bg-emerald-700/60 text-white px-10 py-5 rounded-full font-semibold transition-all inline-flex items-center justify-center gap-3 border border-emerald-600 hover:border-green-400 transform hover:scale-105 shadow-xl animate-slide-in-right">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-950 border-t border-emerald-800 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h4 className="text-white font-bold text-xl mb-4 tracking-wide">APEX AERIAL IMAGING</h4>
              <p className="text-emerald-300 text-sm leading-relaxed">
                Professional aerial photography and videography services, capturing the world from breathtaking perspectives.
              </p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-3">
                <li><a href="#services" className="text-emerald-300 hover:text-green-400 transition-colors text-sm transform hover:translate-x-1 inline-block">Services</a></li>
                <li><a href="#gallery" className="text-emerald-300 hover:text-green-400 transition-colors text-sm transform hover:translate-x-1 inline-block">Gallery</a></li>
                <li><a href="#pricing" className="text-emerald-300 hover:text-green-400 transition-colors text-sm transform hover:translate-x-1 inline-block">Pricing</a></li>
                <li><a href="#contact" className="text-emerald-300 hover:text-green-400 transition-colors text-sm transform hover:translate-x-1 inline-block">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Connect With Us</h5>
              <div className="flex gap-4">
                <a href="#" className="text-emerald-300 hover:text-green-400 transition-colors transform hover:scale-110 duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-emerald-300 hover:text-green-400 transition-colors transform hover:scale-110 duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-emerald-300 hover:text-green-400 transition-colors transform hover:scale-110 duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-emerald-800 pt-8 text-center">
            <p className="text-emerald-400 text-sm">
              © 2024 Apex Aerial Imaging. All rights reserved. | Professional Aerial Photography & Videography Services
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
