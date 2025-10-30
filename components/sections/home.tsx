import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, TrendingUp, Users, Globe, Award, Mail, MapPin, Linkedin, Menu, X, Book, Briefcase, Play, ChevronDown, Star } from 'lucide-react';

export const FarrajPortfolio = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [counters, setCounters] = useState({ value: 0, experience: 0, countries: 0, portfolios: 0 });
  const [isVisible, setIsVisible] = useState({});
  const sectionsRef = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      Object.keys(sectionsRef.current).forEach(key => {
        const element = sectionsRef.current[key];
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
          setIsVisible(prev => ({ ...prev, [key]: isInView }));
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const duration = 2500;
    const steps = 80;
    const increment = duration / steps;
    
    const targets = { value: 10, experience: 20, countries: 5, portfolios: 15 };
    let current = { value: 0, experience: 0, countries: 0, portfolios: 0 };
    
    const timer = setInterval(() => {
      let updated = false;
      Object.keys(targets).forEach(key => {
        if (current[key] < targets[key]) {
          current[key] = Math.min(current[key] + targets[key] / steps, targets[key]);
          updated = true;
        }
      });
      
      if (updated) {
        setCounters({ ...current });
      } else {
        clearInterval(timer);
      }
    }, increment);
    
    return () => clearInterval(timer);
  }, []);

  const portfolios = [
    {
      title: "International Methanol Company",
      subtitle: "IMC Strategic Transformation",
      value: "$1.2B",
      year: "2023",
      status: "Completed",
      category: "Manufacturing",
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1200&q=80"
    },
    {
      title: "Tuwaiq Casting & Forging",
      subtitle: "Industrial Excellence Initiative",
      value: "$933M",
      year: "2024",
      status: "Completed",
      category: "Heavy Industry",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&q=80"
    },
    {
      title: "Ma'aden Phosphate Company",
      subtitle: "Joint Venture Development",
      value: "$7B",
      year: "2025",
      status: "Completed",
      category: "Mining & Resources",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1200&q=80"
    }
  ];

  const services = [
    {
      icon: "📊",
      title: "Strategic Planning & Vision",
      description: "Comprehensive strategic frameworks that align boardroom vision with operational execution, driving sustainable growth and market leadership.",
      features: ["Long-term Planning", "Market Analysis", "Risk Management"]
    },
    {
      icon: "🏭",
      title: "Operational Excellence",
      description: "End-to-end operational transformation focused on efficiency, quality, and performance optimization across all business functions.",
      features: ["Process Optimization", "Quality Systems", "Performance Metrics"]
    },
    {
      icon: "💼",
      title: "Value Creation & M&A",
      description: "Strategic investment advisory and value creation initiatives that maximize shareholder returns and establish competitive advantages.",
      features: ["Investment Strategy", "Due Diligence", "Integration Planning"]
    },
    {
      icon: "🎯",
      title: "Board Advisory & Governance",
      description: "Executive-level consulting on governance frameworks, board effectiveness, and strategic decision-making processes.",
      features: ["Board Development", "Governance Framework", "Strategic Oversight"]
    }
  ];

  const expertise = [
    { area: "Manufacturing Excellence", level: 95 },
    { area: "Strategic Investment", level: 90 },
    { area: "Operational Leadership", level: 98 },
    { area: "Value Creation", level: 92 }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Premium Top Banner */}
      <div className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 border-b border-neutral-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-neutral-300">Available for Strategic Engagements</span>
            </div>
            <span className="text-neutral-600">•</span>
            <span className="text-sm text-white font-medium">40 Hours POC: $2,500</span>
            <a href="#contact" className="text-sm text-white underline underline-offset-4 hover:text-neutral-300 transition-colors flex items-center space-x-1">
              <span>Send Brief</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Premium Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/98 backdrop-blur-2xl border-b border-neutral-800 shadow-2xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-12">
              <div className="group cursor-pointer">
                <div className="text-3xl font-bold tracking-tighter bg-gradient-to-r from-white via-neutral-200 to-white bg-clip-text text-transparent">
                  FARRAJ
                </div>
                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-500"></div>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center space-x-1">
              {['HOME', 'SERVICES', 'PROJECTS', 'ABOUT', 'BOOK', 'CONTACT'].map((item, i) => (
                <a 
                  key={i} 
                  href={`#${item.toLowerCase()}`} 
                  className="group relative px-5 py-2.5 text-sm font-medium tracking-wider transition-colors"
                >
                  <span className={`${i === 0 ? 'text-white' : 'text-neutral-400 group-hover:text-white'} transition-colors`}>
                    {item}
                  </span>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-3/4 transition-all duration-300"></div>
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button className="hidden lg:flex items-center space-x-2 px-7 py-3.5 bg-white text-black rounded-full font-semibold text-sm tracking-wide hover:bg-neutral-100 hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105">
                <span>Get in Touch</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-3 hover:bg-neutral-900 rounded-xl transition-all"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="absolute inset-0 bg-black/98 backdrop-blur-2xl"></div>
        <div className="relative h-full flex flex-col items-center justify-center space-y-8">
          {['HOME', 'SERVICES', 'PROJECTS', 'ABOUT', 'BOOK', 'CONTACT'].map((item, i) => (
            <a 
              key={i} 
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-4xl font-bold hover:text-neutral-400 transition-all transform hover:scale-110"
              style={{ 
                animation: mobileMenuOpen ? `fadeInUp 0.5s ease-out ${i * 0.1}s forwards` : 'none',
                opacity: 0 
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Hero Section - Enhanced */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }}></div>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
        
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 py-20">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-10">
              {/* Badge */}
              <div className="inline-flex items-center space-x-4 px-5 py-3 bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-full border border-neutral-700 shadow-xl animate-fade-in">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  </div>
                  <span className="text-xs font-bold tracking-widest text-white">TOP RATED EXPERT</span>
                </div>
                <span className="text-neutral-600">|</span>
                <span className="text-xs font-semibold text-neutral-300">Upwork Certified</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h1 className="text-6xl lg:text-8xl font-black leading-[0.95] tracking-tighter">
                  <span className="block text-white">Optimists</span>
                  <span className="block text-white">Designing</span>
                  <span className="block bg-gradient-to-r from-neutral-200 via-white to-neutral-200 bg-clip-text text-transparent">
                    Bold Brands
                  </span>
                </h1>
                <p className="text-2xl font-light text-neutral-400 tracking-wide">
                  & Cutting-Edge Digital Solutions
                </p>
              </div>

              {/* Description */}
              <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Fueling the world's most influential companies and visionary pioneers driving innovation, 
                leadership, and impact across industries and global markets.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <button className="group px-8 py-4 bg-white text-black rounded-full font-bold text-base tracking-wide hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-105 flex items-center space-x-3">
                  <span>View Portfolio</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-neutral-700 text-white rounded-full font-bold text-base tracking-wide hover:bg-neutral-900 hover:border-neutral-600 transition-all duration-300 hover:scale-105">
                  Download Book
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 pt-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">${Math.floor(counters.value)}B+</div>
                  <div className="text-xs text-neutral-500 font-medium tracking-wider">PORTFOLIO VALUE</div>
                </div>
                <div className="w-px h-12 bg-neutral-800"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">{Math.floor(counters.experience)}+</div>
                  <div className="text-xs text-neutral-500 font-medium tracking-wider">YEARS EXPERIENCE</div>
                </div>
                <div className="w-px h-12 bg-neutral-800"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">{Math.floor(counters.countries)}</div>
                  <div className="text-xs text-neutral-500 font-medium tracking-wider">COUNTRIES</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:col-span-5 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-8 bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-all duration-700"></div>
                
                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80" 
                    alt="Executive Leadership" 
                    className="w-full h-auto transform group-hover:scale-105 transition-all duration-700"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-center justify-center">
                    <button className="w-28 h-28 bg-white/95 backdrop-blur-sm text-black rounded-full flex flex-col items-center justify-center shadow-2xl hover:scale-110 hover:bg-white transition-all duration-300 group/play">
                      <Play size={32} className="mb-1 fill-current" />
                      <div className="text-[10px] font-bold tracking-widest">PLAY VIDEO</div>
                    </button>
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute top-6 right-6 px-4 py-2 bg-black/80 backdrop-blur-xl rounded-full border border-neutral-700 shadow-xl">
                    <div className="text-xs font-bold text-white tracking-wider">20+ YEARS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-neutral-600" size={32} />
        </div>
      </section>

      {/* About Section - Premium */}
      <section 
        id="about" 
        ref={el => sectionsRef.current['about'] = el}
        className="py-32 bg-white text-black relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className={`grid lg:grid-cols-2 gap-16 items-end mb-24 transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div>
              <div className="inline-block px-4 py-2 bg-black text-white rounded-full text-xs font-bold tracking-widest mb-6">
                ABOUT US
              </div>
              <h2 className="text-6xl font-black leading-tight tracking-tight">
                Your Partner in Strategic Transformation
              </h2>
            </div>
            <div>
              <p className="text-2xl text-neutral-600 leading-relaxed font-light">
                We are a team of optimists who transform visionary ideas into stylish, 
                functional, and high-impact digital solutions.
              </p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className={`relative transition-all duration-1000 delay-200 ${isVisible.about ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              <div className="relative rounded-3xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1000&q=80" 
                  alt="Team Collaboration" 
                  className="w-full h-auto transform group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-8 shadow-2xl border border-neutral-200">
                <div className="text-center">
                  <div className="text-5xl font-black text-black mb-2">2018</div>
                  <div className="text-sm text-neutral-600 font-semibold">Founded</div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className={`space-y-8 transition-all duration-1000 delay-400 ${isVisible.about ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
              {/* Story Card */}
              <div className="bg-black text-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                <h3 className="text-3xl font-bold mb-6 leading-tight">
                  Born from Collective Passion in 2018
                </h3>
                <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                  What began as a tight-knit group of visionary designers, developers, and strategists 
                  has evolved into a vibrant, award-winning agency.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-2 border-black bg-neutral-800 overflow-hidden">
                        <img src={`https://i.pravatar.cc/150?img=${i + 10}`} alt="Team" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-neutral-400">30+ Team Members</div>
                </div>
              </div>

              {/* Expertise Bars */}
              <div className="space-y-6">
                {expertise.map((item, i) => (
                  <div key={i} className="group">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-bold text-black">{item.area}</span>
                      <span className="text-sm font-bold text-neutral-400">{item.level}%</span>
                    </div>
                    <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-black rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible.about ? `${item.level}%` : '0%',
                          transitionDelay: `${i * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Interactive */}
      <section 
        id="services" 
        ref={el => sectionsRef.current['services'] = el}
        className="py-32 bg-white text-black border-t border-neutral-200"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className={`mb-20 transition-all duration-1000 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="inline-block px-4 py-2 bg-black text-white rounded-full text-xs font-bold tracking-widest mb-6">
              SERVICES
            </div>
            <h2 className="text-6xl font-black leading-tight tracking-tight max-w-4xl mb-6">
              Full Range of Services for Digital Excellence
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl">
              Comprehensive solutions for creating and promoting your digital presence
            </p>
          </div>

          <div className="space-y-0">
            {services.map((service, i) => (
              <div 
                key={i}
                onMouseEnter={() => setActiveService(i)}
                className={`group border-t border-neutral-200 py-12 cursor-pointer transition-all duration-500 ${activeService === i ? 'bg-black text-white' : 'hover:bg-neutral-50'}`}
                style={{
                  transitionDelay: isVisible.services ? `${i * 100}ms` : '0ms'
                }}
              >
                <div className="flex items-start justify-between gap-12">
                  <div className="flex items-start gap-8 flex-1">
                    {/* Number */}
                    <div className={`text-6xl font-black ${activeService === i ? 'text-white' : 'text-neutral-200'} transition-colors`}>
                      0{i + 1}
                    </div>

                    {/* Icon */}
                    <div className={`w-24 h-24 rounded-2xl flex items-center justify-center text-4xl shrink-0 transition-all duration-500 ${activeService === i ? 'bg-white scale-110 rotate-6' : 'bg-black'}`}>
                      {service.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                      <p className={`text-lg leading-relaxed mb-6 max-w-2xl ${activeService === i ? 'text-neutral-300' : 'text-neutral-600'}`}>
                        {service.description}
                      </p>
                      
                      {/* Features */}
                      <div className="flex flex-wrap gap-3">
                        {service.features.map((feature, j) => (
                          <div 
                            key={j} 
                            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${activeService === i ? 'bg-white/10 text-white' : 'bg-neutral-200 text-black'}`}
                          >
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ${activeService === i ? 'bg-white scale-110 rotate-45' : 'bg-black'}`}>
                    <ArrowRight className={`${activeService === i ? 'text-black' : 'text-white'}`} size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section - Enhanced */}
      <section 
        id="projects" 
        ref={el => sectionsRef.current['projects'] = el}
        className="py-32 bg-black relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`flex items-end justify-between mb-20 transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div>
              <div className="inline-block px-4 py-2 bg-white text-black rounded-full text-xs font-bold tracking-widest mb-6">
                PORTFOLIO
              </div>
              <h2 className="text-6xl font-black text-white leading-tight tracking-tight">
                Latest Projects
              </h2>
            </div>
            <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-neutral-200 transition-all flex items-center space-x-2 hover:scale-105 hover:shadow-2xl hover:shadow-white/20">
              <span>View All</span>
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {portfolios.map((project, i) => (
              <div 
                key={i} 
                className={`group cursor-pointer transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[3/4] bg-neutral-900">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-all"></div>
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    {/* Top Badge */}
                    <div className="flex items-center justify-between">
                      <div className="px-3 py-1.5 bg-white/10 backdrop-blur-xl rounded-full text-xs font-bold text-white border border-white/20">
                        {project.category}
                      </div>
                      <div className="px-3 py-1.5 bg-green-500/90 backdrop-blur-xl rounded-full text-xs font-bold text-white">
                        {project.status}
                      </div>
                    </div>

                    {/* Bottom Content */}
                    <div className="space-y-3">
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-5xl font-black text-white mb-2">{project.value}</div>
                          <div className="text-sm text-neutral-300 font-medium">{project.year}</div>
                        </div>
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          <ArrowRight className="text-black" size={20} />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neutral-200 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-neutral-400">{project.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative bg-black rounded-[3rem] p-16 lg:p-20 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
              {/* Icon */}
              <div className="lg:col-span-2">
                <div className="w-28 h-28 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl flex items-center justify-center text-5xl border border-neutral-700 shadow-2xl">
                  🚀
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-6 space-y-6">
                <p className="text-neutral-400 text-lg leading-relaxed">
                  Partner with a team that values your success. We offer personalized service, 
                  expert guidance, and innovative solutions to help you grow and thrive.
                </p>
                <h3 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                  Become a Valued Client We're Proud to Serve
                </h3>
              </div>

              {/* CTA */}
              <div className="lg:col-span-4 flex flex-col items-end space-y-6">
                {/* Team Avatars */}
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-16 h-16 rounded-full border-4 border-black bg-neutral-800 overflow-hidden ring-2 ring-neutral-700 transform hover:scale-110 hover:z-10 transition-all">
                      <img 
                        src={`https://i.pravatar.cc/150?img=${i + 20}`} 
                        alt="Team" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="w-16 h-16 rounded-full border-4 border-black bg-white flex items-center justify-center ring-2 ring-neutral-700 transform hover:scale-110 hover:z-10 transition-all">
                    <span className="text-black font-bold text-sm">+30</span>
                  </div>
                </div>

                <button className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-neutral-200 transition-all flex items-center space-x-3 hover:scale-105 hover:shadow-2xl hover:shadow-white/30">
                  <span>Learn More</span>
                  <ArrowRight size={22} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Section */}
      <section 
        id="book" 
        ref={el => sectionsRef.current['book'] = el}
        className="py-32 bg-neutral-950"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${isVisible.book ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            {/* Book Cover */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 to-emerald-600/30 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-neutral-900 to-black rounded-3xl p-12 border border-neutral-800 shadow-2xl transform hover:scale-105 hover:rotate-2 transition-all duration-500">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl p-12 shadow-2xl">
                  <div className="text-center space-y-6">
                    <div className="text-7xl">📚</div>
                    <h3 className="text-3xl font-black text-white">التحول الاستراتيجي</h3>
                    <div className="h-1 w-24 bg-white/30 mx-auto rounded-full"></div>
                    <p className="text-emerald-100 text-lg font-semibold">Strategic Transformation</p>
                    <p className="text-emerald-200 text-sm">Case Studies & Best Practices</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Book Info */}
            <div className="space-y-8">
              <div>
                <div className="inline-block px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-bold tracking-widest mb-6 border border-emerald-500/30">
                  LATEST RELEASE
                </div>
                <h2 className="text-5xl font-black text-white leading-tight mb-6">
                  Strategic Transformation Case Studies
                </h2>
                <p className="text-xl text-neutral-400 leading-relaxed">
                  A comprehensive guide to strategic transformation with real case studies from major 
                  industrial companies. Learn proven methodologies and best practices.
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-neutral-400 text-lg font-semibold">(4.8/5.0)</span>
                <span className="text-neutral-600">•</span>
                <span className="text-neutral-400">2,000+ Readers</span>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "📖", label: "300+ Pages" },
                  { icon: "🏆", label: "Case Studies" },
                  { icon: "💡", label: "Best Practices" },
                  { icon: "🎯", label: "Action Plans" }
                ].map((feature, i) => (
                  <div key={i} className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800 hover:border-neutral-700 transition-all">
                    <div className="text-3xl mb-2">{feature.icon}</div>
                    <div className="text-sm font-semibold text-white">{feature.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-neutral-200 transition-all flex items-center space-x-2 hover:scale-105 hover:shadow-2xl hover:shadow-white/20">
                  <span>Get Your Copy</span>
                  <ArrowRight size={20} />
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-neutral-700 text-white rounded-full font-bold hover:bg-neutral-900 transition-all hover:scale-105">
                  Preview Chapters
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        ref={el => sectionsRef.current['contact'] = el}
        className="py-32 bg-black"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="inline-block px-4 py-2 bg-white text-black rounded-full text-xs font-bold tracking-widest mb-6">
              GET IN TOUCH
            </div>
            <h2 className="text-6xl font-black text-white mb-6 leading-tight tracking-tight">
              Let's Connect
            </h2>
            <p className="text-2xl text-neutral-400 max-w-3xl mx-auto">
              For strategic opportunities, board positions, and executive consulting
            </p>
          </div>

          <div className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-200 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            {[
              { icon: Mail, label: "Email", value: "Admin@farraj-sa.com", link: "mailto:Admin@farraj-sa.com" },
              { icon: Linkedin, label: "LinkedIn", value: "Professional Profile", link: "#" },
              { icon: MapPin, label: "Location", value: "Riyadh, Saudi Arabia", link: "#" }
            ].map((contact, i) => (
              <a 
                key={i} 
                href={contact.link}
                className="group bg-neutral-900 rounded-3xl p-10 text-center hover:bg-neutral-800 transition-all duration-300 hover:scale-105 border border-neutral-800 hover:border-neutral-700"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl mb-6 group-hover:scale-110 transition-all">
                  <contact.icon className="text-black" size={32} />
                </div>
                <div className="text-xl font-bold text-white mb-3">{contact.label}</div>
                <div className="text-neutral-400 font-medium">{contact.value}</div>
              </a>
            ))}
          </div>

          <div className={`text-center transition-all duration-1000 delay-400 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <button className="px-16 py-6 bg-white text-black rounded-full font-bold text-xl hover:bg-neutral-200 transition-all inline-flex items-center space-x-3 hover:scale-105 hover:shadow-2xl hover:shadow-white/30">
              <span>Schedule a Meeting</span>
              <ArrowRight size={28} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer - Premium */}
      <footer className="py-20 bg-black border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-4">
              <div className="text-3xl font-black mb-6 tracking-tighter">FARRAJ</div>
              <p className="text-neutral-400 text-sm leading-relaxed mb-8 max-w-md">
                Industrial Manufacturing Investor | Board-Level Value Creator | Published Author
              </p>
              <div className="flex items-center space-x-4">
                {[Linkedin, Mail].map((Icon, i) => (
                  <a 
                    key={i} 
                    href="#" 
                    className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center hover:bg-white hover:text-black transition-all hover:scale-110"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="md:col-span-2">
              <h3 className="font-bold mb-6 text-white text-sm tracking-widest">COMPANY</h3>
              <div className="space-y-4">
                {['About', 'Services', 'Portfolio', 'Book'].map((link, i) => (
                  <a 
                    key={i} 
                    href={`#${link.toLowerCase()}`} 
                    className="block text-neutral-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <h3 className="font-bold mb-6 text-white text-sm tracking-widest">SERVICES</h3>
              <div className="space-y-4">
                {['Strategic Planning', 'Operations', 'M&A Advisory', 'Board Advisory'].map((link, i) => (
                  <a 
                    key={i} 
                    href="#services" 
                    className="block text-neutral-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div className="md:col-span-4">
              <h3 className="font-bold mb-6 text-white text-sm tracking-widest">NEWSLETTER</h3>
              <p className="text-neutral-400 text-sm mb-4">
                Subscribe for insights on strategic transformation
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-700 transition-all"
                />
                <button className="px-6 py-3 bg-white text-black rounded-xl font-bold hover:bg-neutral-200 transition-all">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-500 text-sm">
              © 2025 Farraj. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="text-neutral-500 hover:text-white text-sm transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default FarrajPortfolio;