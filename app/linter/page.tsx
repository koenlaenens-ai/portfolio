'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function LinterCaseStudy() {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  const openLightbox = (src: string, alt: string) => {
    setLightboxImage({ src, alt });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  // Keyboard support for closing lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxImage) {
        closeLightbox();
      }
    };

    if (lightboxImage) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxImage]);

  const metrics = [
    {
      value: "100%",
      label: "Design Team Coverage",
      description: "Every designer has instant access to quality checks"
    },
    {
      value: "7",
      label: "Designers Empowered",
      description: "Self-service compliance without workflow interruption"
    },
    {
      value: "Real-time",
      label: "Feedback Loop",
      description: "Catch issues during design, not during handoff"
    },
    {
      value: "Any File",
      label: "Universal Compatibility",
      description: "Works in design files, library files, and community files—no restrictions"
    }
  ];

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-gray-800" style={{backgroundColor: 'rgba(10, 10, 10, 0.8)'}}>
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-base font-semibold text-white hover:text-accent-yellow transition-colors">
            ← Back to Portfolio
          </Link>
          <a
            href="mailto:koenlaenens@gmail.com?subject=Let's%20work%20together"
            className="btn btn-primary text-sm"
          >
            Get in touch
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <span className="text-sm font-bold tracking-widest uppercase text-accent-red">
              Case Study
            </span>
          </div>

          <h1 className="text-white max-w-5xl mb-8" style={{fontSize: 'clamp(40px, 7vw, 96px)', fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 0.95}}>
            Figma Design System Linter
          </h1>

          <p className="text-2xl text-gray-300 max-w-3xl mb-16" style={{lineHeight: 1.4}}>
            The first Figma linter that works everywhere—from design files to library source files—with intelligent severity scoring that helps designers prioritize what actually matters.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-sm text-gray-300 uppercase tracking-wide mb-2">Role</div>
              <div className="text-white font-medium">Product Designer & Developer</div>
            </div>
            <div>
              <div className="text-sm text-gray-300 uppercase tracking-wide mb-2">Timeline</div>
              <div className="text-white font-medium">3 Days (AI-Assisted)</div>
            </div>
            <div>
              <div className="text-sm text-gray-300 uppercase tracking-wide mb-2">Team</div>
              <div className="text-white font-medium">Solo Project</div>
            </div>
            <div>
              <div className="text-sm text-gray-300 uppercase tracking-wide mb-2">Impact</div>
              <div className="text-white font-medium">7 Designers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width Screenshot */}
      <section className="py-0 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="relative w-full px-8 py-16" style={{aspectRatio: '16/9'}}>
          <div
            className="relative w-full h-full cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openLightbox('/screenshots/figma-linter.png', 'Figma Design System Linter Interface')}
          >
            <Image
              src="/screenshots/figma-linter.png"
              alt="Figma Design System Linter Interface"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-32 px-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-5xl font-bold text-white mb-8" style={{letterSpacing: '-0.02em', lineHeight: 1.1}}>
                The Problem
              </h2>
              <div className="space-y-6 text-xl text-gray-300" style={{lineHeight: 1.6}}>
                <p>
                  Design systems only work when they're actually used. But adoption isn't about documentation—it's about removing friction from the designer's workflow.
                </p>
                <p>
                  Our team of 7 designers had access to a comprehensive design system, but consistency was a constant battle:
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Outdated components everywhere",
                  description: "Designers working in files with deprecated components, missing critical updates and improvements"
                },
                {
                  title: "Manual compliance checks",
                  description: "Every design review became a tedious audit of spacing, colors, and component usage"
                },
                {
                  title: "Handoff friction",
                  description: "Developers receiving files that violate standards, creating rework and slowing velocity"
                },
                {
                  title: "Knowledge gaps",
                  description: "Design principles documented but not enforced—easy to forget, easier to ignore"
                }
              ].map((issue, idx) => (
                <div key={idx} className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-white font-bold text-lg mb-2">{issue.title}</h3>
                  <p className="text-gray-300">{issue.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insight Section */}
      <section className="py-32 px-8 bg-accent-red">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8" style={{letterSpacing: '-0.02em', lineHeight: 1.1}}>
            "If design systems are tools for quality at scale, why do we still rely on manual enforcement?"
          </h2>
          <p className="text-xl text-white/80">
            The breakthrough: automate quality checks inside the design tool, not after handoff.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-32 px-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-12" style={{letterSpacing: '-0.02em', lineHeight: 1.1}}>
            The Solution
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
              <div className="text-accent-red text-4xl font-bold mb-4">01</div>
              <h3 className="text-white font-bold text-xl mb-4">Works Everywhere</h3>
              <p className="text-gray-300">
                Unlike other linters limited to design files, this runs in <strong className="text-white">any Figma file</strong>—including library source files where consistency matters most.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
              <div className="text-accent-red text-4xl font-bold mb-4">02</div>
              <h3 className="text-white font-bold text-xl mb-4">Severity-Based Prioritization</h3>
              <p className="text-gray-300">
                Not all violations are equal. <strong className="text-white">Intelligent severity scoring</strong> helps designers focus on critical issues first, not noise.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
              <div className="text-accent-red text-4xl font-bold mb-4">03</div>
              <h3 className="text-white font-bold text-xl mb-4">Zero-Friction UX</h3>
              <p className="text-gray-300">
                One-click fix for common issues. Education embedded in warnings. Fast enough to run constantly.
              </p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-8" style={{lineHeight: 1.6}}>
              I built a Figma plugin that acts as a continuous quality guardian—scanning designs against our design system rules and surfacing issues the moment they appear. Designers get immediate, actionable feedback without leaving their canvas.
            </p>

            <p className="text-xl text-gray-300" style={{lineHeight: 1.6}}>
              The plugin was vibe-coded in 3 days using Claude AI, turning the concept from "this would be nice to have" to "shipping to the team" in less than a week. Rapid prototyping meets production quality.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-16" style={{letterSpacing: '-0.02em', lineHeight: 1.1}}>
            How It Works
          </h2>

          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-accent-red text-black text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">
                  Step 1
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Launch & Scan</h3>
                <p className="text-gray-300 text-lg" style={{lineHeight: 1.6}}>
                  Designer opens the plugin while working on any file. The linter scans the current page, analyzing layers against design system rules.
                </p>
              </div>
              <div className="bg-gray-950 p-6 rounded-lg border border-gray-800">
                <div
                  className="aspect-video relative rounded overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950 flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openLightbox('/screenshots/lynter-overview.png', 'Linter Plugin Overview')}
                >
                  <Image
                    src="/screenshots/lynter-overview.png"
                    alt="Linter Plugin Overview"
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-gray-950 p-6 rounded-lg border border-gray-800">
                  <div
                    className="aspect-video relative rounded overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950 flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openLightbox('/screenshots/lynter-issues.png', 'Linter Violations List')}
                  >
                    <Image
                      src="/screenshots/lynter-issues.png"
                      alt="Linter Violations List"
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block bg-accent-red text-black text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">
                  Step 2
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Surface Issues</h3>
                <p className="text-gray-300 text-lg" style={{lineHeight: 1.6}}>
                  Violations are surfaced with context: what's wrong, why it matters, and how to fix it. Issues are prioritized by severity.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-accent-red text-black text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">
                  Step 3
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">One-Click Fixes</h3>
                <p className="text-gray-300 text-lg" style={{lineHeight: 1.6}}>
                  For common issues like outdated component instances, designers click "Fix" and the plugin updates them automatically. Complex issues get guidance.
                </p>
              </div>
              <div className="bg-gray-950 p-6 rounded-lg border border-gray-800">
                <div
                  className="aspect-video relative rounded overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950 flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openLightbox('/screenshots/lynter-select-issue.png', 'Auto-Fix Interface')}
                >
                  <Image
                    src="/screenshots/lynter-select-issue.png"
                    alt="Auto-Fix Interface"
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes This Different */}
      <section className="py-32 px-8 border-b border-gray-800 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6" style={{letterSpacing: '-0.02em', lineHeight: 1.1}}>
              What Makes This Different
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Most Figma linters are limited to design files and treat all violations equally. This one doesn't.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg border-2 border-accent-red">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-accent-red rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Works in All Files</h3>
                  <p className="text-gray-300 text-lg mb-4">
                    Runs in design files, library files, community files—anywhere in Figma. No file type restrictions.
                  </p>
                  <p className="text-gray-300">
                    <strong className="text-accent-red">Why it matters:</strong> Library source files are where inconsistencies start. Catching issues there prevents them from spreading to hundreds of design files.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border-2 border-accent-red">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-accent-red rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl font-bold">⚡</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Severity-Based Prioritization</h3>
                  <p className="text-gray-300 text-lg mb-4">
                    Critical, Warning, Info—designers can filter by severity and tackle breaking issues before minor polish.
                  </p>
                  <p className="text-gray-300">
                    <strong className="text-accent-red">Why it matters:</strong> A list of 50 violations is overwhelming. A list of 3 critical issues is actionable. Severity scoring turns noise into signal.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border-2 border-accent-red">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-accent-red rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl font-bold">⚙️</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Zero Configuration Needed</h3>
                  <p className="text-gray-300 text-lg mb-4">
                    Works out of the box in any Figma file—no setup, no config files, no limitations.
                  </p>
                  <p className="text-gray-300">
                    <strong className="text-accent-red">Why it matters:</strong> No "this plugin doesn't support library files" errors. No onboarding friction. Just install and start catching issues.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border-2 border-accent-red">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-accent-red rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl font-bold">🔄</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Real-Time Feedback</h3>
                  <p className="text-gray-300 text-lg mb-4">
                    Catch issues during design, not during handoff. Shift quality left in the workflow.
                  </p>
                  <p className="text-gray-300">
                    <strong className="text-accent-red">Why it matters:</strong> Designers fix violations before review, eliminating rework loops and reducing time-to-ship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-32 px-8 border-b border-gray-800 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-16" style={{letterSpacing: '-0.02em', lineHeight: 1.1}}>
            Features That Scale
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Filter & Search */}
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
              <div
                className="aspect-video relative bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-8 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openLightbox('/screenshots/lynter-filter.png', 'Filter and search violations')}
              >
                <Image
                  src="/screenshots/lynter-filter.png"
                  alt="Filter and search violations"
                  fill
                  className="object-contain p-6"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Severity-Based Filtering</h3>
                <p className="text-gray-300">Critical, warning, or info—prioritize by severity so designers tackle high-impact issues first.</p>
              </div>
            </div>

            {/* Rule Documentation */}
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
              <div
                className="aspect-video relative bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-8 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openLightbox('/screenshots/lynter-rule-documentation.png', 'Inline rule documentation')}
              >
                <Image
                  src="/screenshots/lynter-rule-documentation.png"
                  alt="Inline rule documentation"
                  fill
                  className="object-contain p-6"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Embedded Education</h3>
                <p className="text-gray-300">Every rule includes documentation—learn why it matters and how to fix it.</p>
              </div>
            </div>

            {/* Settings */}
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
              <div
                className="aspect-video relative bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-8 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openLightbox('/screenshots/lynter-settings.png', 'Customizable settings')}
              >
                <Image
                  src="/screenshots/lynter-settings.png"
                  alt="Customizable settings"
                  fill
                  className="object-contain p-6"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Flexible Configuration</h3>
                <p className="text-gray-300">Toggle rules on/off, adjust severity levels—adapt the linter to your workflow.</p>
              </div>
            </div>

            {/* Dark Mode */}
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
              <div
                className="aspect-video relative bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-8 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openLightbox('/screenshots/lynter-darkmode.png', 'Dark mode interface')}
              >
                <Image
                  src="/screenshots/lynter-darkmode.png"
                  alt="Dark mode interface"
                  fill
                  className="object-contain p-6"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Theme Support</h3>
                <p className="text-gray-300">Light and dark modes—matches your Figma environment for reduced eye strain.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-32 px-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-4" style={{letterSpacing: '-0.02em', lineHeight: 1.1}}>
            Business Impact
          </h2>
          <p className="text-xl text-gray-300 mb-16 max-w-3xl">
            Still early days, but the strategic value is clear: shifting quality left and removing manual overhead.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-gray-900 p-8 rounded-lg border border-gray-800"
              >
                <div className="text-5xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-sm font-bold uppercase tracking-wide text-gray-300 mb-4">{metric.label}</div>
                <div className="text-gray-300 text-sm">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Technical Approach */}
      <section className="py-32 px-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-12" style={{letterSpacing: '-0.02em', lineHeight: 1.1}}>
            Built with AI Assistance
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-xl text-gray-300 mb-8" style={{lineHeight: 1.6}}>
                This plugin was built in 3 days using Claude AI as a coding partner—proving that strategic design tools don't require months of engineering cycles.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent-red rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Figma Plugin API</h4>
                    <p className="text-gray-300">Deep integration with Figma's node structure for comprehensive scanning</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent-red rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Custom Rules Engine</h4>
                    <p className="text-gray-300">Extensible architecture for adding new linting rules as the system evolves</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent-red rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Auto-Fix Capabilities</h4>
                    <p className="text-gray-300">Programmatic layer manipulation for one-click issue resolution</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent-red rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-bold mb-1">TypeScript + React</h4>
                    <p className="text-gray-300">Modern tech stack for rapid iteration and maintainability</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
              <h3 className="text-white font-bold text-xl mb-6">The Vibe-Coded Advantage</h3>
              <p className="text-gray-300 mb-6" style={{lineHeight: 1.6}}>
                By leveraging AI-assisted development, I was able to:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-accent-red">→</span>
                  <span>Go from concept to working prototype in hours, not weeks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-red">→</span>
                  <span>Focus on design decisions and UX refinement instead of boilerplate</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-red">→</span>
                  <span>Iterate rapidly on rule logic based on real designer feedback</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-red">→</span>
                  <span>Ship production-quality code without a dedicated engineering team</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-32 px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-16" style={{letterSpacing: '-0.02em', lineHeight: 1.1}}>
            Key Learnings
          </h2>

          <div className="space-y-8">
            <div className="border-l-4 border-accent-red pl-8">
              <h3 className="text-2xl font-bold text-white mb-4">Automation beats documentation</h3>
              <p className="text-xl text-gray-300" style={{lineHeight: 1.6}}>
                No amount of Confluence pages will match the effectiveness of automated, in-context feedback. If you want adoption, meet designers where they work.
              </p>
            </div>

            <div className="border-l-4 border-accent-red pl-8">
              <h3 className="text-2xl font-bold text-white mb-4">Speed to value matters</h3>
              <p className="text-xl text-gray-300" style={{lineHeight: 1.6}}>
                Three days from idea to deployment means we can test the hypothesis fast and iterate based on real usage. AI-assisted development unlocks this velocity.
              </p>
            </div>

            <div className="border-l-4 border-accent-red pl-8">
              <h3 className="text-2xl font-bold text-white mb-4">Start small, prove value</h3>
              <p className="text-xl text-gray-300" style={{lineHeight: 1.6}}>
                Rather than building a comprehensive linter with 50 rules, I shipped with 5 high-impact rules. Early adoption will inform what to build next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent-red">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8" style={{letterSpacing: '-0.02em'}}>
            Need help scaling your design system?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            I build tools and infrastructure that make design systems actually work in production.
          </p>
          <a
            href="mailto:koenlaenens@gmail.com?subject=Let's%20work%20together"
            className="btn btn-primary text-base inline-block"
          >
            Let's talk
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-bg-primary border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <Link href="/" className="text-gray-300 hover:text-white transition-colors">
            ← Back to Portfolio
          </Link>
        </div>
      </footer>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm cursor-pointer"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute top-8 right-8 text-white text-4xl hover:text-accent-red transition-colors z-10"
            aria-label="Close lightbox"
          >
            ×
          </button>
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
            <Image
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
          <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none">
            <p className="text-white/80 text-sm">Click anywhere or press ESC to close</p>
          </div>
        </div>
      )}
    </div>
  );
}
