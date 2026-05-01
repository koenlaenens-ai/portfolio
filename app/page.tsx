'use client';

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Portfolio() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [currentKeyword, setCurrentKeyword] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [imageGlitch, setImageGlitch] = useState({ x: 0, y: 0, intensity: 0 });
  const keywords = ["design systems", "AI", "workflow automation", "software interfaces"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKeyword((prev) => (prev + 1) % keywords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [keywords.length]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement> | MouseEvent, cardId?: string) => {
    setMousePos({
      x: e.clientX,
      y: e.clientY,
    });
    if (cardId) {
      setActiveCard(cardId);
    }
  };

  const handleMouseLeave = () => {
    // Always clear active card, even during scroll
    setActiveCard(null);
  };

  const handleImageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setImageGlitch({ x, y, intensity: 1 });
  };

  const handleImageMouseLeave = () => {
    setImageGlitch({ x: 50, y: 50, intensity: 0 });
  };

  useEffect(() => {
    let rafId: number;
    let scrollTimeout: NodeJS.Timeout;

    const updateMousePosition = (e: MouseEvent) => {
      if (activeCard) {
        setMousePos({
          x: e.clientX,
          y: e.clientY,
        });
      }
    };

    const handleScroll = () => {
      setIsScrolling(true);

      // Clear existing timeout
      if (scrollTimeout) clearTimeout(scrollTimeout);

      // Reset scrolling state after scroll ends
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);

      // Request animation frame to update tooltip position smoothly during scroll
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (activeCard) {
          setMousePos(prev => ({ x: prev.x, y: prev.y }));
        }
      });
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeCard]);

  return (
    <div className="min-h-screen bg-bg-primary">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Toast notification */}
      <div className="fixed bottom-6 right-0 z-50 bg-gray-800 text-white px-3 py-3 shadow-lg text-sm font-medium">
        Vibe coded portfolio
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-gray-800" style={{backgroundColor: 'rgba(10, 10, 10, 0.8)'}}>
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <a href="#" className="text-base font-semibold text-white">
            Hi, I'm Koen!
          </a>
          <div className="flex items-center gap-12">
            <div className="hidden md:flex gap-8 text-sm font-medium">
              <a href="#work" className="nav-link text-white">
                Work
              </a>
              <a href="#about" className="nav-link text-white">
                About
              </a>
            </div>
            <a
              href="#contact"
              className="btn btn-primary text-sm"
            >
              Get in touch
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main id="main-content" className="pt-32 pb-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mt-20 mb-28">
            <p className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-8">
              Staff Product Designer - Design Systems - AI Driven automation
            </p>
            <h1 className="text-white max-w-5xl" style={{fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 0.95}}>
              a product design partner with focus on{' '}
              <span className="inline-block overflow-visible relative" style={{minWidth: '450px', height: 'clamp(36px, 6vw, 72px)', verticalAlign: 'baseline', top: '0.1em'}}>
                {keywords.map((keyword, index) => {
                  const isCurrent = currentKeyword === index;

                  return (
                    <span
                      key={keyword}
                      className="absolute left-0 text-white whitespace-nowrap transition-all duration-500 ease-in-out"
                      style={{
                        top: '0.05em',
                        height: isCurrent ? 'clamp(36px, 6vw, 72px)' : '0',
                        lineHeight: 'clamp(36px, 6vw, 72px)',
                        opacity: isCurrent ? 1 : 0,
                        overflow: 'hidden',
                      }}
                    >
                      {keyword}
                    </span>
                  );
                })}
              </span>
            </h1>
          </div>
        </div>
      </main>

      {/* Work Section */}
      <section id="work" className="py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 hidden">
            <span className="section-number">01</span>
            <h2 className="display-lg text-white mt-4 mb-6">
              Selected Work
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl">
              Design systems fail when they're hard to use or don't solve real problems.
              I create solutions that remove friction and empower designers to do their best work.
            </p>
          </div>

          <div className="space-y-8">
            {/* Project 1: Linter Plugin - RED */}
            <a href="/linter" className="block p-6 md:p-8 transition-opacity hover:opacity-95 bg-accent-red sticky rounded-lg" style={{top: '120px'}}>
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div
                  className="project-card relative bg-gray-900 p-6 md:p-8 aspect-[16/10]"
                  onMouseMove={(e) => handleMouseMove(e, 'project-1')}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image
                    src="/screenshots/figma-linter.png"
                    alt="Figma Design System Linter Plugin interface"
                    fill
                    className="project-image object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {activeCard === 'project-1' && (
                    <div
                      className="project-card-overlay"
                      style={{
                        left: `${mousePos.x}px`,
                        top: `${mousePos.y}px`,
                      }}
                    >
                      <div className="project-card-cta-wrapper">
                        <span className="project-card-cta">View Project →</span>
                        <span className="project-card-cta">View Project →</span>
                        <span className="project-card-cta">View Project →</span>
                        <span className="project-card-cta">View Project →</span>
                        <span className="project-card-cta">View Project →</span>
                        <span className="project-card-cta">View Project →</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col justify-between py-4">
                  <div>
                    <div className="text-xs font-bold tracking-widest uppercase text-white/80 mb-4">
                      Design Systems • Figma
                    </div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-none">
                      Figma Design System Linter
                    </h3>
                  </div>
                  <div className="flex gap-8 text-white mt-8">
                    <div>
                      <div className="text-3xl font-bold">5+</div>
                      <div className="text-xs uppercase tracking-wide opacity-80">Rules</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">60%</div>
                      <div className="text-xs uppercase tracking-wide opacity-80">Faster QA</div>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            {/* Project 2: Component Library - PURPLE */}
            <div className="block p-6 md:p-8 cursor-not-allowed bg-accent-purple sticky rounded-lg" style={{top: '140px'}}>
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div
                  className="project-card relative bg-gray-900 p-6 md:p-8 aspect-[16/10]"
                  onMouseMove={(e) => handleMouseMove(e, 'project-2')}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image
                    src="/screenshots/screen-storybook.png"
                    alt="Storybook Component Library interface"
                    fill
                    className="project-image object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {activeCard === 'project-2' && (
                    <div
                      className="project-card-overlay"
                      style={{
                        left: `${mousePos.x}px`,
                        top: `${mousePos.y}px`,
                      }}
                    >
                      <div className="project-card-cta-wrapper">
                        <span className="project-card-cta">Coming Soon</span>
                        <span className="project-card-cta">Coming Soon</span>
                        <span className="project-card-cta">Coming Soon</span>
                        <span className="project-card-cta">Coming Soon</span>
                        <span className="project-card-cta">Coming Soon</span>
                        <span className="project-card-cta">Coming Soon</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col justify-between py-4">
                  <div>
                    <div className="text-xs font-bold tracking-widest uppercase text-white/80 mb-4">
                      Storybook • Components
                    </div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-none">
                      Component Library
                    </h3>
                    <span className="inline-block text-white/80 font-bold text-sm uppercase tracking-wide">
                      Live demo coming soon
                    </span>
                  </div>
                  <div className="flex gap-8 text-white mt-8">
                    <div>
                      <div className="text-3xl font-bold">59+</div>
                      <div className="text-xs uppercase tracking-wide opacity-80">Components</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">90%</div>
                      <div className="text-xs uppercase tracking-wide opacity-80">Token Adoption</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3: Health Dashboard - YELLOW */}
            <div className="bg-accent-yellow block p-6 md:p-8 cursor-not-allowed sticky rounded-lg" style={{top: '160px'}}>
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div
                  className="project-card relative bg-gray-900 p-6 md:p-8 aspect-[16/10]"
                  onMouseMove={(e) => handleMouseMove(e, 'project-3')}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image
                    src="/screenshots/health-dashboard.png"
                    alt="Design System Health Dashboard"
                    fill
                    className="project-image object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {activeCard === 'project-3' && (
                    <div
                      className="project-card-overlay"
                      style={{
                        left: `${mousePos.x}px`,
                        top: `${mousePos.y}px`,
                      }}
                    >
                      <div className="project-card-cta-wrapper">
                        <span className="project-card-cta">Coming Soon</span>
                        <span className="project-card-cta">Coming Soon</span>
                        <span className="project-card-cta">Coming Soon</span>
                        <span className="project-card-cta">Coming Soon</span>
                        <span className="project-card-cta">Coming Soon</span>
                        <span className="project-card-cta">Coming Soon</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col justify-between py-4">
                  <div>
                    <div className="text-xs font-bold tracking-widest uppercase text-black/70 mb-4">
                      Analytics • Dashboard
                    </div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-none">
                      Design System Health Dashboard
                    </h3>
                    <span className="inline-block text-black/60 font-bold text-sm uppercase tracking-wide">
                      Live demo coming soon
                    </span>
                  </div>
                  <div className="flex gap-8 text-black mt-8">
                    <div>
                      <div className="text-3xl font-bold">100%</div>
                      <div className="text-xs uppercase tracking-wide opacity-70">Coverage</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">7</div>
                      <div className="text-xs uppercase tracking-wide opacity-70">Tools</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 4: Designer FAQ - CREAM */}
            <div className="block p-6 md:p-8 cursor-not-allowed bg-accent-cream sticky rounded-lg" style={{top: '180px'}}>
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div
                  className="project-card relative bg-gray-900 p-6 md:p-8 aspect-[16/10]"
                  onMouseMove={(e) => handleMouseMove(e, 'project-4')}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image
                    src="/screenshots/designer-faq.png"
                    alt="Designer Onboarding FAQ System"
                    fill
                    className="project-image object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {activeCard === 'project-4' && (
                    <div
                      className="project-card-overlay"
                      style={{
                        left: `${mousePos.x}px`,
                        top: `${mousePos.y}px`,
                      }}
                    >
                      <div className="project-card-cta-wrapper">
                        <span className="project-card-cta">Private</span>
                        <span className="project-card-cta">Private</span>
                        <span className="project-card-cta">Private</span>
                        <span className="project-card-cta">Private</span>
                        <span className="project-card-cta">Private</span>
                        <span className="project-card-cta">Private</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col justify-between py-4">
                  <div>
                    <div className="text-xs font-bold tracking-widest uppercase text-black/70 mb-4">
                      Onboarding • Web App
                    </div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-none">
                      Designer Onboarding System
                    </h3>
                    <span className="inline-block text-black/60 font-bold text-sm uppercase tracking-wide">
                      Private deployment
                    </span>
                  </div>
                  <div className="flex gap-8 text-black mt-8">
                    <div>
                      <div className="text-3xl font-bold">70%</div>
                      <div className="text-xs uppercase tracking-wide opacity-70">Less Support</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">3x</div>
                      <div className="text-xs uppercase tracking-wide opacity-70">Faster Ramp</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-8 bg-bg-primary">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-gray-400 mb-12 uppercase tracking-wider">about</p>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-3xl md:text-4xl text-white leading-relaxed" style={{lineHeight: 1.4}}>
                I build design systems that ship faster and scale teams. 15 years reducing engineering overhead, accelerating product velocity, and turning design quality into a competitive advantage—not a bottleneck.
              </p>
            </div>
            <div
              className="relative aspect-[3/4] max-w-md ml-auto overflow-visible cursor-pointer glitch-container"
              onMouseMove={handleImageMouseMove}
              onMouseLeave={handleImageMouseLeave}
              style={{
                ['--glitch-x' as any]: `${imageGlitch.x}`,
                ['--glitch-y' as any]: `${imageGlitch.y}`,
                ['--glitch-intensity' as any]: imageGlitch.intensity,
              }}
            >
              {/* Base grayscale image */}
              <img
                src="/profile-photo.jpg"
                alt="Koen Laenens"
                className="glitch-layer-base w-full h-full object-cover grayscale relative z-10"
              />

              {/* Cyan layer - back left */}
              <div className="glitch-layer glitch-layer-cyan absolute inset-0 pointer-events-none">
                <img
                  src="/profile-photo.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Red layer - back right */}
              <div className="glitch-layer glitch-layer-red absolute inset-0 pointer-events-none">
                <img
                  src="/profile-photo.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Magenta layer - front right */}
              <div className="glitch-layer glitch-layer-magenta absolute inset-0 pointer-events-none">
                <img
                  src="/profile-photo.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Yellow layer - front left */}
              <div className="glitch-layer glitch-layer-yellow absolute inset-0 pointer-events-none">
                <img
                  src="/profile-photo.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-accent-yellow overflow-hidden">
        <div className="inline-flex items-center gap-12 animate-scroll-banner whitespace-nowrap">
          <h2 className="text-4xl md:text-6xl font-bold text-black uppercase tracking-tight">
            Ready to scale your design system?
          </h2>
          <a
            href="mailto:koenlaenens@gmail.com?subject=Let's%20work%20together"
            className="btn btn-primary text-sm"
          >
            Get in touch
          </a>
          <h2 className="text-4xl md:text-6xl font-bold text-black uppercase tracking-tight">
            Ready to scale your design system?
          </h2>
          <a
            href="mailto:koenlaenens@gmail.com?subject=Let's%20work%20together"
            className="btn btn-primary text-sm"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-16 pb-0 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-8">
          {/* Copyright */}
          <div className="mb-12 text-sm text-gray-400">
            <p>© 2026 Koen Laenens</p>
          </div>

          {/* Footer Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-32">
            <div>
              <ul className="space-y-3">
                <li><a href="#" className="text-white text-sm font-semibold hover:text-accent-yellow transition-colors uppercase tracking-wide">Home</a></li>
                <li><a href="#work" className="text-white text-sm font-semibold hover:text-accent-yellow transition-colors uppercase tracking-wide">Work</a></li>
                <li><a href="#about" className="text-white text-sm font-semibold hover:text-accent-yellow transition-colors uppercase tracking-wide">About</a></li>
                <li><a href="#contact" className="text-white text-sm font-semibold hover:text-accent-yellow transition-colors uppercase tracking-wide">Contact</a></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li><a href="https://linkedin.com/in/koenlaenens" target="_blank" rel="noopener noreferrer" className="text-white text-sm font-semibold hover:text-accent-yellow transition-colors uppercase tracking-wide">LinkedIn</a></li>
                <li><a href="mailto:koenlaenens@gmail.com" className="text-white text-sm font-semibold hover:text-accent-yellow transition-colors uppercase tracking-wide">Email</a></li>
              </ul>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Koen Laenens</p>
              <p className="text-gray-400 text-sm">Staff Product Designer</p>
            </div>
          </div>
        </div>

        {/* Large Name */}
        <div className="overflow-hidden px-8 text-center" style={{height: 'clamp(96px, 14.4vw, 192px)'}}>
          <h3 className="font-bold text-white tracking-tight whitespace-nowrap" style={{fontSize: 'clamp(120px, 18vw, 240px)', lineHeight: 1}}>
            Koen Laenens
          </h3>
        </div>
      </footer>
    </div>
  );
}
