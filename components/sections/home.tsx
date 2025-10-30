'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";

import {
  ArrowRight, TrendingUp, Users, Globe, Award, Mail, MapPin,
  Linkedin, Menu, X, Book, Briefcase, Play, ChevronDown,
  Star, CheckCircle, Zap, Target, BarChart3, Shield
} from 'lucide-react';

interface SectionRefs {
  [key: string]: HTMLElement | null;
}

const FarrajPortfolio = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [counters, setCounters] = useState({ value: 0, experience: 0, countries: 0, portfolios: 0 });
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const sectionsRef = useRef<SectionRefs>({});

  /* ------------------------------------------------------------------ */
  /*  Scroll + Visibility */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY;
      setScrolled(top > 50);

      Object.entries(sectionsRef.current).forEach(([key, el]) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
        setIsVisible(prev => ({ ...prev, [key]: inView }));
      });
    };

    const handleMouse = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouse);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  /* ------------------------------------------------------------------ */
  /*  Testimonial carousel */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    const id = setInterval(() => {
      setActiveTestimonial(p => (p + 1) % 3);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  /* ------------------------------------------------------------------ */
  /*  Counters */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    const targets = { value: 10, experience: 20, countries: 5, portfolios: 15 };
    let current = { value: 0, experience: 0, countries: 0, portfolios: 0 };
    const step = 2500 / 80;

    const id = setInterval(() => {
      let changed = false;
      (Object.keys(targets) as (keyof typeof targets)[]).forEach(k => {
        if (current[k] < targets[k]) {
          current[k] = Math.min(current[k] + targets[k] / 80, targets[k]);
          changed = true;
        }
      });
      if (changed) setCounters({ ...current });
      else clearInterval(id);
    }, step);

    return () => clearInterval(id);
  }, []);

  /* ------------------------------------------------------------------ */
  /*  Data */
  /* ------------------------------------------------------------------ */
    const portfolios = [
    {
      title: "International Methanol Company",
      subtitle: "IMC Strategic Transformation",
      value: "$1.2B",
      year: "2023",
      status: "Completed",
      category: "Manufacturing",
      impact: "+45% Efficiency",
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1200&q=80",
      metrics: { roi: "245%", timeline: "18 months", team: "50+" }
    },
    {
      title: "Tuwaiq Casting & Forging",
      subtitle: "Industrial Excellence Initiative",
      value: "$933M",
      year: "2024",
      status: "Completed",
      category: "Heavy Industry",
      impact: "+60% Output",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&q=80",
      metrics: { roi: "320%", timeline: "24 months", team: "80+" }
    },
    {
      title: "Ma'aden Phosphate Company",
      subtitle: "Joint Venture Development",
      value: "$7B",
      year: "2025",
      status: "Completed",
      category: "Mining & Resources",
      impact: "+35% Revenue",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1200&q=80",
      metrics: { roi: "180%", timeline: "36 months", team: "120+" }
    }
  ];

  const services = [
    {
      icon: Target,
      title: "Strategic Planning & Vision",
      description: "Comprehensive strategic frameworks that align boardroom vision with operational execution, driving sustainable growth and market leadership.",
      features: ["Long-term Planning", "Market Analysis", "Risk Management"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Zap,
      title: "Operational Excellence",
      description: "End-to-end operational transformation focused on efficiency, quality, and performance optimization across all business functions.",
      features: ["Process Optimization", "Quality Systems", "Performance Metrics"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: BarChart3,
      title: "Value Creation & M&A",
      description: "Strategic investment advisory and value creation initiatives that maximize shareholder returns and establish competitive advantages.",
      features: ["Investment Strategy", "Due Diligence", "Integration Planning"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Shield,
      title: "Board Advisory & Governance",
      description: "Executive-level consulting on governance frameworks, board effectiveness, and strategic decision-making processes.",
      features: ["Board Development", "Governance Framework", "Strategic Oversight"],
      color: "from-purple-500 to-purple-600"
    }
  ];

  const testimonials = [
    {
      quote: "Farraj's strategic vision transformed our manufacturing operations, delivering exceptional results beyond our expectations.",
      author: "Mohammed Al-Rashid",
      position: "CEO, Industrial Group",
      company: "Saudi Manufacturing Co.",
      image: "https://i.pravatar.cc/150?img=12"
    },
    {
      quote: "The operational excellence framework implemented by Farraj increased our efficiency by 45% in just 18 months.",
      author: "Ahmed Al-Zahrani",
      position: "COO, Heavy Industries",
      company: "Gulf Industrial Corp",
      image: "https://i.pravatar.cc/150?img=13"
    },
    {
      quote: "Working with Farraj was a game-changer. His expertise in value creation is unmatched in the industry.",
      author: "Khalid Al-Otaibi",
      position: "Chairman",
      company: "Regional Investment Fund",
      image: "https://i.pravatar.cc/150?img=14"
    }
  ];

  const achievements = [
    { icon: Award, label: "Industry Awards", value: "12+" },
    { icon: TrendingUp, label: "Average ROI", value: "245%" },
    { icon: Users, label: "Satisfied Clients", value: "150+" },
    { icon: Globe, label: "Global Projects", value: "200+" }
  ];
  /* ------------------------------------------------------------------ */
  /*  Render */
  /* ------------------------------------------------------------------ */
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Custom cursor glow */}
      <div
        className="pointer-events-none fixed w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-700 z-0"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />
      

      {/* ------------------------------------------------------------------ */}
      {/*  Top banner */}
      {/* ------------------------------------------------------------------ */}
      {/* <div className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 border-b border-neutral-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer" />
        </div>
        <div className="max-w-7xl mx-auto px-6 py-4 relative z-10">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-neutral-300">Available for Strategic Engagements</span>
            </div>
            <span className="text-neutral-600 hidden sm:inline">•</span>
            <span className="font-semibold">40 Hours POC: $2,500</span>
            <a href="#contact" className="flex items-center gap-1 underline underline-offset-4 hover:text-neutral-300">
              <span>Send Brief</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition" />
            </a>
          </div>
        </div>
      </div> */}

     <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`sticky top-0 z-50 transition-all ${
          scrolled
            ? "bg-black/98 backdrop-blur-2xl border-b border-neutral-800 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="group cursor-pointer"
          >
            <div className="text-3xl font-black bg-gradient-to-r from-white via-neutral-100 to-white bg-clip-text text-transparent">
              FARRAJ
            </div>
            <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-transparent via-white to-transparent transition-all" />
          </motion.div>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {["HOME", "SERVICES", "PROJECTS", "ABOUT", "BOOK", "CONTACT"].map(
              (t, i) => (
                <motion.a
                  key={i}
                  href={`#${t.toLowerCase()}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="group relative px-5 py-2.5 text-sm font-semibold"
                >
                  <span
                    className={`${
                      i === 0
                        ? "text-white"
                        : "text-neutral-400 group-hover:text-white"
                    } transition`}
                  >
                    {t}
                  </span>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-3/4 transition-all" />
                </motion.a>
              )
            )}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:flex items-center gap-2 px-7 py-3.5 bg-white text-black rounded-full font-bold text-sm hover:bg-neutral-100 hover:shadow-2xl hover:shadow-white/30 transition-all"
            >
              <span>Get in Touch</span>
              <ArrowRight size={16} />
            </motion.button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-3 hover:bg-neutral-900 rounded-xl"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ------------------------------------------------------------- */}
      {/* Mobile Menu */}
      {/* ------------------------------------------------------------- */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="absolute inset-0 bg-black/98 backdrop-blur-2xl" />
        <div className="relative h-full flex flex-col items-center justify-center gap-8">
          {["HOME", "SERVICES", "PROJECTS", "ABOUT", "BOOK", "CONTACT"].map(
            (t, i) => (
              <motion.a
                key={i}
                href={`#${t.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-4xl font-black hover:text-neutral-400 transition transform hover:scale-110"
              >
                {t}
              </motion.a>
            )
          )}
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* Hero Section */}
      {/* ------------------------------------------------------------- */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Background Grid + Orbs */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.03) 2px,transparent 2px),linear-gradient(90deg,rgba(255,255,255,.03) 2px,transparent 2px)",
            backgroundSize: "100px 100px",
            animation: "grid-move 20s linear infinite",
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black pointer-events-none" />

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 py-20">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.15 },
                },
              }}
              className="lg:col-span-7 space-y-10"
            >
              {/* Top Badge */}
              <motion.div
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-neutral-900/80 to-neutral-800/80 backdrop-blur-xl rounded-full border border-neutral-700/50 shadow-2xl"
              >
                <div className="flex -space-x-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400 animate-pulse"
                    />
                  ))}
                </div>
                <span className="text-xs font-black tracking-widest">
                  TOP RATED EXPERT
                </span>
                <span className="text-neutral-600">|</span>
                <span className="text-xs font-bold text-neutral-300">
                  Upwork Certified
                </span>
              </motion.div>

              {/* Headline */}
              <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}>
                <h1 className="text-6xl lg:text-8xl font-black leading-[0.9] tracking-tighter">
                  <span className="block text-white">Industrial Solutions</span>
                  <span className="block text-white">That</span>
                  <span className="block bg-gradient-to-r from-white via-neutral-100 to-neutral-300 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
                    Drive Transformation
                  </span>
                </h1>
                <p className="text-2xl lg:text-3xl font-light text-neutral-400 tracking-wide">
                  & Cutting-Edge Digital Solutions
                </p>
              </motion.div>

              {/* Paragraph */}
              <motion.p
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                className="text-xl text-neutral-400 leading-relaxed max-w-2xl"
              >
                Fueling the world’s most influential companies and visionary
                pioneers driving{" "}
                <span className="text-white font-semibold">
                  innovation, leadership, and impact
                </span>{" "}
                across industries and global markets.
              </motion.p>

              {/* Buttons */}
              <motion.div
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                className="flex flex-wrap items-center gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-9 py-4 bg-white text-black rounded-full font-black text-base tracking-wide overflow-hidden transition-all"
                >
                  <div className="relative flex items-center gap-3">
                    <span>View Portfolio</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-9 py-4 bg-transparent border-2 border-neutral-700 text-white rounded-full font-black text-base tracking-wide hover:bg-neutral-900 transition-all"
                >
                  Download Book
                </motion.button>
              </motion.div>

              {/* Counters */}
              <motion.div
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                className="flex items-center gap-8 pt-8"
              >
                {[
                  { value: counters.value, suffix: "B+", label: "PORTFOLIO" },
                  { value: counters.experience, suffix: "+", label: "YEARS EXP" },
                  { value: counters.countries, suffix: "", label: "COUNTRIES" },
                ].map((s, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <div className="w-px h-12 bg-neutral-800" />}
                    <div className="text-center group cursor-pointer">
                      <div className="text-4xl font-black text-white group-hover:scale-110 transition">
                        {s.value}
                        {s.suffix}
                      </div>
                      <div className="text-xs text-neutral-500 font-bold tracking-widest">
                        {s.label}
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-5"
            >
              <div className="relative group" style={{ perspective: "1000px" }}>
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl opacity-50 group-hover:opacity-70 transition-all animate-pulse" />
                <motion.div
                  whileHover={{ rotateY: 5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="relative rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl transform-gpu"
                >
                  <img
                    src="https://www.farraj-sa.com/faraj222.jpg"
                    alt="Executive Leadership"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-neutral-500 font-semibold tracking-widest">
            SCROLL
          </span>
          <ChevronDown className="text-neutral-600" size={32} />
        </div>
      </section>


      {/* ------------------------------------------------------------------ */}
      {/*  Navigation */}
      {/* ------------------------------------------------------------------ */}
      <nav className={`sticky top-0 z-50 transition-all ${scrolled ? 'bg-black/98 backdrop-blur-2xl border-b border-neutral-800 shadow-2xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="group cursor-pointer">
            <div className="text-3xl font-black bg-gradient-to-r from-white via-neutral-100 to-white bg-clip-text text-transparent">
              FARRAJ
            </div>
            <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-transparent via-white to-transparent transition-all" />
          </div>

          <div className="hidden lg:flex items-center gap-1">
            {['HOME','SERVICES','PROJECTS','ABOUT','BOOK','CONTACT'].map((t,i)=>(
              <a key={i} href={`#${t.toLowerCase()}`} className="group relative px-5 py-2.5 text-sm font-semibold">
                <span className={`${i===0?'text-white':'text-neutral-400 group-hover:text-white'} transition`}>
                  {t}
                </span>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-3/4 transition-all" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden lg:flex items-center gap-2 px-7 py-3.5 bg-white text-black rounded-full font-bold text-sm hover:bg-neutral-100 hover:shadow-2xl hover:shadow-white/30 transition-all hover:scale-105">
              <span>Get in Touch</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
            </button>
            <button onClick={()=>setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-3 hover:bg-neutral-900 rounded-xl">
              {mobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>
          </div>
        </div>
      </nav>

      {/* ------------------------------------------------------------------ */}
      {/*  Mobile menu */}
      {/* ------------------------------------------------------------------ */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all ${mobileMenuOpen?'opacity-100 visible':'opacity-0 invisible'}`}>
        <div className="absolute inset-0 bg-black/98 backdrop-blur-2xl" />
        <div className="relative h-full flex flex-col items-center justify-center gap-8">
          {['HOME','SERVICES','PROJECTS','ABOUT','BOOK','CONTACT'].map((t,i)=>(
            <a key={i} href={`#${t.toLowerCase()}`} onClick={()=>setMobileMenuOpen(false)}
               className="text-4xl font-black hover:text-neutral-400 transition transform hover:scale-110 animate-menu-item"
               style={{animationDelay:`${i*100}ms`}}>
              {t}
            </a>
          ))}
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/*  Hero */}
      {/* ------------------------------------------------------------------ */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        {/* grid background */}
        <div className="absolute inset-0 opacity-10"
             style={{backgroundImage:'linear-gradient(rgba(255,255,255,.03) 2px,transparent 2px),linear-gradient(90deg,rgba(255,255,255,.03) 2px,transparent 2px)',backgroundSize:'100px 100px',animation:'grid-move 20s linear infinite'}} />
        {/* floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 py-20">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* left */}
            <div className="lg:col-span-7 space-y-10">
              <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-neutral-900/80 to-neutral-800/80 backdrop-blur-xl rounded-full border border-neutral-700/50 shadow-2xl animate-fade-in-up">
                <div className="flex -space-x-0.5">
                  {Array.from({length:5}).map((_,i)=><Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400 animate-pulse" style={{animationDelay:`${i*100}ms`}}/>)}
                </div>
                <span className="text-xs font-black tracking-widest">TOP RATED EXPERT</span>
                <span className="text-neutral-600">|</span>
                <span className="text-xs font-bold text-neutral-300">Upwork Certified</span>
              </div>

              <div className="space-y-4 animate-fade-in-up" style={{animationDelay:'0.2s'}}>
                <h1 className="text-6xl lg:text-8xl font-black leading-[0.9] tracking-tighter">
                  <span className="block text-white">Industrial Solutions </span>
                  <span className="block text-white">That </span>
                  <span className="block bg-gradient-to-r from-white via-neutral-100 to-neutral-300 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
                    Drive Transformation
                  </span>
                </h1>
                <p className="text-2xl lg:text-3xl font-light text-neutral-400 tracking-wide">
                  & Cutting-Edge Digital Solutions
                </p>
              </div>

              <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl animate-fade-in-up" style={{animationDelay:'0.4s'}}>
                Fueling the world's most influential companies and visionary pioneers driving <span className="text-white font-semibold">innovation, leadership, and impact</span> across industries and global markets.
              </p>

              <div className="flex flex-wrap items-center gap-4 animate-fade-in-up" style={{animationDelay:'0.6s'}}>
                <button className="group relative px-9 py-4 bg-white text-black rounded-full font-black text-base tracking-wide overflow-hidden transition-all hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-neutral-100 to-white transition-all" />
                  <div className="relative flex items-center gap-3">
                    <span>View Portfolio</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
                  </div>
                  <div className="absolute inset-0 shadow-2xl shadow-white/40 opacity-0 group-hover:opacity-100 transition" />
                </button>
                <button className="px-9 py-4 bg-transparent border-2 border-neutral-700 text-white rounded-full font-black text-base tracking-wide hover:bg-neutral-900 hover:border-neutral-600 transition-all hover:scale-105 backdrop-blur-sm">
                  Download Book
                </button>
              </div>

              <div className="flex items-center gap-8 pt-8 animate-fade-in-up" style={{animationDelay:'0.8s'}}>
                {[
                  {value:Math.floor(counters.value),suffix:'B+',label:'PORTFOLIO'},
                  {value:Math.floor(counters.experience),suffix:'+',label:'YEARS EXP'},
                  {value:Math.floor(counters.countries),suffix:'',label:'COUNTRIES'}
                ].map((s,i)=>(
                  <React.Fragment key={i}>
                    {i>0 && <div className="w-px h-12 bg-neutral-800" />}
                    <div className="text-center group cursor-pointer">
                      <div className="text-4xl font-black text-white group-hover:scale-110 transition">
                        ${s.value}{s.suffix}
                      </div>
                      <div className="text-xs text-neutral-500 font-bold tracking-widest">{s.label}</div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* right – hero image */}
            <div className="lg:col-span-5 animate-fade-in-up" style={{animationDelay:'0.4s'}}>
              <div className="relative group" style={{perspective:'1000px'}}>
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl opacity-50 group-hover:opacity-70 transition-all animate-pulse" />
                <div className="relative rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl transform-gpu transition-all hover:scale-[1.02] hover:rotate-1">
                  <img src="https://www.farraj-sa.com/faraj222.jpg" alt="Executive Leadership" className="w-full h-auto" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* <button className="relative w-32 h-32 bg-white/95 backdrop-blur-xl text-black rounded-full flex flex-col items-center justify-center shadow-2xl hover:scale-110 transition-all group/play"> */}
                      {/* <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-20" /> */}
                      {/* <Play size={36} className="mb-1 fill-current relative z-10" /> */}
                      {/* <div className="text-[11px] font-black tracking-widest relative z-10">PLAY VIDEO</div> */}
                    {/* </button> */}
                  </div>
                  <div className="absolute top-6 right-6 space-y-3">
                    <div className="px-4 py-2 bg-black/80 backdrop-blur-xl rounded-full border border-neutral-700/50 shadow-xl animate-float">
                      <div className="text-xs font-black text-white tracking-wider">20+ YEARS</div>
                    </div>
                    <div className="px-4 py-2 bg-green-500/90 backdrop-blur-xl rounded-full border border-green-400/50 shadow-xl animate-float-delayed">
                      <div className="text-xs font-black text-white tracking-wider">VERIFIED</div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black to-transparent p-6">
                    <div className="flex items-center justify-between text-white">
                      <div>
                        <div className="text-xs text-neutral-400 mb-1">Success Rate</div>
                        <div className="text-2xl font-black">98.5%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-neutral-400 mb-1">Projects Delivered</div>
                        <div className="text-2xl font-black">200+</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-neutral-500 font-semibold tracking-widest">SCROLL</span>
          <ChevronDown className="text-neutral-600" size={32} />
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Achievements */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 border-y border-neutral-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((a,i)=>(
              <div key={i} className="text-center group cursor-pointer opacity-0 animate-fadeInUp" style={{animationDelay:`${i*100}ms`}}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/5 rounded-2xl mb-4 group-hover:bg-white/10 group-hover:scale-110 transition-all">
                  <a.icon className="text-white" size={28} />
                </div>
                <div className="text-4xl font-black text-white mb-2 group-hover:scale-110 transition">{a.value}</div>
                <div className="text-sm text-neutral-400 font-semibold">{a.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  About */}
      {/* ------------------------------------------------------------------ */}
      <section id="about" ref={el => void (sectionsRef.current.about = el)} className="py-32 bg-white text-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 animate-pattern" style={{backgroundImage:'radial-gradient(circle at 2px 2px, black 1px, transparent 0)',backgroundSize:'50px 50px'}} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* header */}
          <div className={`grid lg:grid-cols-2 gap-16 items-end mb-24 transition-all duration-1000 ${isVisible.about?'opacity-100 translate-y-0':'opacity-0 translate-y-20'}`}>
            <div>
              <div className="inline-flex items-center px-5 py-2.5 bg-black text-white rounded-full text-xs font-black tracking-widest mb-6 shadow-lg">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse" />
                ABOUT US
              </div>
              <h2 className="text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight">
                Your Partner in Strategic Transformation
              </h2>
            </div>
            <div>
              <p className="text-2xl text-neutral-600 leading-relaxed font-light">
                We are a team of <span className="text-black font-bold">optimists</span> who transform visionary ideas into stylish, functional, and high-impact digital solutions.
              </p>
            </div>
          </div>

          {/* content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* image */}
            <div className={`relative transition-all duration-1000 delay-200 ${isVisible.about?'opacity-100 -translate-x-0':'opacity-0 -translate-x-20'}`}>
              <div className="relative rounded-3xl overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1000&q=80" alt="Team" className="w-full h-auto group-hover:scale-110 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all" />
                <div className="absolute inset-0 flex items-end p-8 opacity-0 group-hover:opacity-100 transition-all">
                  <div className="text-white">
                    <div className="text-3xl font-black mb-2">150+ Clients</div>
                    <div className="text-sm text-neutral-300">Across 5 Countries</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-black text-white rounded-3xl p-8 shadow-2xl border border-neutral-800 backdrop-blur-xl hover:scale-110 hover:rotate-3 transition-all">
                <div className="text-center">
                  <div className="text-6xl font-black mb-2 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">2018</div>
                  <div className="text-xs text-neutral-400 font-bold tracking-widest">EST.</div>
                </div>
              </div>
            </div>

            {/* text */}
            <div className={`space-y-8 transition-all duration-1000 delay-400 ${isVisible.about?'opacity-100 translate-x-0':'opacity-0 translate-x-20'}`}>
              {/* story card */}
              <div className="relative bg-black text-white rounded-3xl p-10 shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-black opacity-50 group-hover:opacity-70 transition-all" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:scale-150 transition-all" />
                <div className="relative z-10">
                  <h3 className="text-3xl lg:text-4xl font-black mb-6 leading-tight">
                    Born from Collective Passion in 2018
                  </h3>
                  <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                    What began as a tight-knit group of visionary designers, developers, and strategists has evolved into a <span className="text-white font-bold">vibrant, award-winning agency</span>.
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-neutral-800">
                    <div className="flex -space-x-4">
                      {[1,2,3,4,5].map(i=>(
                        <div key={i} className="w-12 h-12 rounded-full border-2 border-black bg-neutral-800 overflow-hidden ring-2 ring-neutral-700 hover:scale-125 hover:z-10 transition-all">
                          <img src={`https://i.pravatar.cc/150?»img=${i+10}`} alt="Team" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black">30+</div>
                      <div className="text-xs text-neutral-400 font-semibold">Team Members</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* expertise bars */}
              <div className="space-y-6 bg-neutral-50 rounded-3xl p-8">
                <h4 className="text-xl font-black mb-6">Core Expertise</h4>
                {[
                  {area:'Manufacturing Excellence',level:95,icon:'Factory'},
                  {area:'Strategic Investment',level:90,icon:'Briefcase'},
                  {area:'Operational Leadership',level:98,icon:'Zap'},
                  {area:'Value Creation',level:92,icon:'Chart'}
                ].map((it,i)=>(
                  <div key={i} className="group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{it.icon}</span>
                        <span className="text-sm font-bold text-black">{it.area}</span>
                      </div>
                      <span className="text-sm font-black text-neutral-600">{it.level}%</span>
                    </div>
                    <div className="h-3 bg-neutral-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-black to-neutral-800 rounded-full transition-all duration-1000 relative"
                           style={{width:isVisible.about?`${it.level}%`:'0%',transitionDelay:`${i*150}ms`}}>
                        <div className="absolute inset-0 bg-white/20 animate-shimmer-slow" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* testimonials */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible.about?'opacity-100 translate-y-0':'opacity-0 translate-y-20'}`}>
            <div className="bg-gradient-to-br from-black to-neutral-900 rounded-3xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 opacity-5" style={{backgroundImage:'radial-gradient(circle,white 1px,transparent 1px)',backgroundSize:'30px 30px'}} />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-black text-white">Client Testimonials</h3>
                  <div className="flex gap-2">
                    {[0,1,2].map(i=><button key={i} onClick={()=>setActiveTestimonial(i)}
                                            className={`w-3 h-3 rounded-full transition-all ${activeTestimonial===i?'bg-white w-8':'bg-neutral-600'}`}/>)}
                  </div>
                </div>
                <div className="relative min-h-[200px]">
                  {testimonials.map((t,i)=>(
                    <div key={i} className={`absolute inset-0 transition-all duration-500 ${activeTestimonial===i?'opacity-100 translate-x-0':'opacity-0 translate-x-8 pointer-events-none'}`}>
                      <p className="text-2xl text-white leading-relaxed mb-8 font-light italic">"{t.quote}"</p>
                      <div className="flex items-center gap-4">
                        <img src={t.image} alt={t.author} className="w-16 h-16 rounded-full border-2 border-white/20" />
                        <div>
                          <div className="font-bold text-white text-lg">{t.author}</div>
                          <div className="text-neutral-400 text-sm">{t.position}</div>
                          <div className="text-neutral-500 text-xs">{t.company}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Services – the rest of the file stays exactly the same (only minor class-name clean-ups) */}
      {/* ------------------------------------------------------------------ */}
      {/* ... (Services, Portfolio, CTA, Book, Contact, Footer) ... */}
      {/* For brevity the unchanged sections are omitted here – just copy-paste the original markup */}
      {/* but replace every `animate-fade-in-up` with Tailwind’s `animate-fade-in-up` class defined in globals.css */}
      {/* and remove the `<style jsx>` block completely. */}
    </div>
  );
};

export default FarrajPortfolio;