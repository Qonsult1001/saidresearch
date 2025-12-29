'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Github, Twitter, Brain, Award, Zap, TrendingUp, CheckCircle, X, Trophy, ChevronLeft, ChevronRight } from 'lucide-react';

// Background Image Component - Subtle background only
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
      <div className="relative w-[90%] h-[90%] max-w-[1400px] max-h-[900px]">
        <Image
          src="/images/background.png?v=3"
          alt="Background"
          fill
          className="object-contain opacity-[0.15]"
          priority
          unoptimized
          style={{ zIndex: 0 }}
        />
      </div>
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
};

// Logo Component
const SaidLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={className}>
      <span className="text-xl font-bold text-white">
        .said
      </span>
    </div>
  );
};

export default function SaidHomePage() {
  const [modalImage, setModalImage] = React.useState<{ src: string; alt: string } | null>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  const openModal = (src: string, alt: string) => {
    setModalImage({ src, alt });
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const nextSlide = () => {
    setIsPaused(true);
    setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  };

  const prevSlide = () => {
    setIsPaused(true);
    setCurrentSlide((prev) => (prev === 1 ? 0 : 1));
  };

  const goToSlide = (slideIndex: number) => {
    setIsPaused(true);
    setCurrentSlide(slideIndex);
  };

  // Auto-slide carousel every 30 seconds (only if not paused)
  React.useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0)); // Toggle between 0 and 1 (2 slides total)
    }, 30000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Close modal on Escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    if (modalImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [modalImage]);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <AnimatedBackground />

      {/* Header */}
      <header className="relative z-20 py-4 px-6 border-b border-gray-800/50 backdrop-blur-sm bg-black/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <SaidLogo />
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#frontier"
              onClick={(e) => { e.preventDefault(); goToSlide(0); document.getElementById('frontier')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium"
            >
              Research
            </a>
            <a href="#lam" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium">LAM</a>
            <a
              href="#frontier"
              onClick={(e) => { e.preventDefault(); goToSlide(0); document.getElementById('frontier')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium"
            >
              SCA
            </a>
            <a
              href="#frontier"
              onClick={(e) => { e.preventDefault(); goToSlide(1); document.getElementById('frontier')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium"
            >
              The SAID Standard
            </a>
            <a
              href="#frontier"
              onClick={(e) => { e.preventDefault(); goToSlide(1); document.getElementById('frontier')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium"
            >
              The Future
            </a>
            {/* Read Paper button - hidden until paper is published */}
            {/* <a
              href="https://arxiv.org"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-lg transition-colors text-sm flex items-center gap-2"
            >
              Read Paper
              <ExternalLink className="w-3 h-3" />
            </a> */}
          </nav>
        </div>
      </header>

      {/* Hero Section - SAID Research with Background */}
      <section className="relative min-h-[90vh] flex flex-col px-6 py-20 z-10">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="relative w-[90%] h-[90%]">
            <Image
              src="/images/background.png?v=3"
              alt="Background"
              fill
              className="object-cover opacity-[0.35]"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col">
          {/* Heading at Top */}
          <div className="text-center mb-8">
            <h1 className="text-7xl md:text-8xl font-bold mb-4 tracking-tight leading-[1.05]">
              <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
                SAID Research
              </span>
            </h1>
          </div>

          {/* Content Center */}
          <div className="flex-1 flex items-center justify-center mt-20">
            <div className="text-center max-w-3xl">
              <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light leading-relaxed">
                Exploring the foundations of long-context AI, efficient reasoning models, and emergent semantic memory
              </p>
            </div>
          </div>

          {/* Slogan at Bottom */}
          <div className="text-center mt-auto pt-8">
            <p className="text-lg md:text-xl text-cyan-400/90 max-w-2xl mx-auto italic font-semibold">
              "The answer IS X. Because I Said so." — At ANY scale.
            </p>
          </div>
        </div>
      </section>

      {/* Research Frontier - LAM & SCA Timeline */}
      <section id="frontier" className="relative z-10 py-24 px-6 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-bold mb-4">Research Frontier</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-4">
              Advancing the state-of-the-art in linear attention and memory architectures
            </p>
            <p className="text-lg text-cyan-400/90 italic max-w-2xl mx-auto">
              "LAM replaces attention. SCA replaces memory"
            </p>
          </div>

          {/* Carousel Container with Arrows */}
          <div className="relative flex items-center gap-4 mb-12">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="flex-shrink-0 bg-black/70 hover:bg-black/90 backdrop-blur-sm rounded-full p-4 text-cyan-400 hover:text-cyan-300 transition-all border border-cyan-500/30 hover:border-cyan-400/50"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            {/* Carousel Container */}
            <div className="relative overflow-hidden flex-1">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {/* Slide 1: LAM and SCA */}
                <div className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* LAM - Current Frontier */}
                    <div className="bg-gray-900/40 border border-gray-800/50 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl" />
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6">
                          <span className="px-4 py-1.5 bg-green-500/20 border border-green-500/40 rounded-full text-green-400 text-xs font-semibold">
                            CURRENT FRONTIER
                          </span>
                          <div className="w-16 h-1 bg-green-500/30 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 rounded-full" style={{ width: '100%' }} />
                          </div>
                        </div>
                        <div className="mb-6 rounded-lg overflow-hidden border border-gray-800/50 cursor-pointer hover:opacity-90 transition-opacity bg-gray-900/50 flex items-center justify-center" style={{ width: '100%', height: '350px' }} onClick={() => openModal("/images/LAM.jpg?v=2", "LAM - Linear Attention Memory")}>
                          <Image
                            src="/images/LAM.jpg?v=2"
                            alt="LAM - Linear Attention Memory"
                            width={400}
                            height={350}
                            className="w-full h-full object-contain"
                            unoptimized
                          />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">LAM - Model</h3>
                        <p className="text-lg text-cyan-400 mb-4">Linear Attention Memory</p>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          The first linear attention architecture to achieve state-of-the-art embedding performance—establishing the world's most efficient long-context model.
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span>0.8190 Spearman Correlation</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span>74.96% LongEmbed Score (SOTA &lt; 200M)</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span>97% Matryoshka Retention (Efficient Truncation)</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span>SCA - Memory Architecture (BETA)</span>
                          </div>
                        </div>
                        <div className="mt-6 pt-6 border-t border-gray-800/50">
                          <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                            SCA - Current BETA Release: 32k Deterministic Window | Architecture Capacity: 1B+ Tokens
                          </p>
                          <p className="text-gray-400 text-xs mb-3 leading-relaxed">
                            Experience the zero-drift precision of Crystalline Attention in this initial release.
                          </p>
                          <div className="space-y-2 text-xs">
                            <p className="text-gray-300">
                              <span className="font-semibold text-cyan-400">Now:</span> 32,768 tokens of perfect, deterministic recall (Available Today).
                            </p>
                            <p className="text-gray-300">
                              <span className="font-semibold text-cyan-400">Next:</span> The architecture is proven for 1 Billion+ tokens (Internal Alpha).
                            </p>
                            <p className="text-gray-300">
                              <span className="font-semibold text-cyan-400">The Promise:</span> We are unlocking the door to infinite memory. This 32k Beta is just the first glimpse through the keyhole.
                            </p>
                          </div>
                        </div>
                        <div className="mt-6 pt-6 border-t border-gray-800/50">
                          <p className="text-xs text-gray-500 uppercase tracking-wider">Status</p>
                          <p className="text-green-400 font-semibold mt-1">✓ Released & Production Ready</p>
                        </div>
                      </div>
                    </div>

                    {/* SCA - Next Frontier */}
                    <div className="bg-gray-900/40 border border-cyan-500/30 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl" />
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6">
                          <span className="px-4 py-1.5 bg-cyan-500/20 border border-cyan-500/40 rounded-full text-cyan-400 text-xs font-semibold">
                            NEXT FRONTIER
                          </span>
                          <div className="w-16 h-1 bg-cyan-500/30 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: '93%' }}
                            />
                          </div>
                        </div>
                        <div className="mb-6 rounded-lg overflow-hidden border border-gray-800/50 cursor-pointer hover:opacity-90 transition-opacity bg-gray-900/50 flex items-center justify-center" style={{ width: '100%', height: '350px' }} onClick={() => openModal("/images/crystalline.png?v=2", "SCA - SAID Crystalline Attention")}>
                          <Image
                            src="/images/crystalline.png?v=2"
                            alt="SCA - SAID Crystalline Attention"
                            width={400}
                            height={350}
                            className="w-full h-full object-contain"
                            unoptimized
                          />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">SCA - Memory Architecture</h3>
                        <p className="text-lg text-cyan-400 mb-4">SAID Crystalline Attention</p>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          A deterministic attention paradigm that eliminates the "Probabilistic Drift" inherent in standard Transformers
                        </p>
                        <div className="mb-6">
                          <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                            SCA introduces a new class of Linear State Locking: instead of discarding context or relying on probability to "guess" previous tokens, SCA mathematically locks semantic signals into a crystallized, infinite-scale state. This allows the model to maintain signal fidelity whether processing 4k tokens or 1 Billion+ tokens.
                          </p>
                          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Key Properties</h4>
                          <div className="space-y-4">
                            <div>
                              <div className="flex items-center gap-2 text-sm text-gray-300 mb-1">
                                <div className="w-4 h-4 border-2 border-cyan-500 rounded-full flex items-center justify-center">
                                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                                </div>
                                <span className="font-semibold">Deterministic Coherence</span>
                              </div>
                              <p className="text-xs text-gray-400 ml-6">Eliminates hallucination in recall tasks by maintaining signal fidelity, regardless of sequence depth.</p>
                            </div>
                            <div>
                              <div className="flex items-center gap-2 text-sm text-gray-300 mb-1">
                                <div className="w-4 h-4 border-2 border-cyan-500 rounded-full flex items-center justify-center">
                                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                                </div>
                                <span className="font-semibold">Crystalline State Structure</span>
                              </div>
                              <p className="text-xs text-gray-400 ml-6">Utilizes a non-degrading linear update rule, allowing the model's state to expand indefinitely without memory fragmentation.</p>
                            </div>
                            <div>
                              <div className="flex items-center gap-2 text-sm text-gray-300 mb-1">
                                <div className="w-4 h-4 border-2 border-cyan-500 rounded-full flex items-center justify-center">
                                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                                </div>
                                <span className="font-semibold">Effectively Infinite Context</span>
                              </div>
                              <p className="text-xs text-gray-400 ml-6">Architecturally unbounded. Validated in extreme-scale stress tests exceeding 1 Billion tokens with zero precision loss, demonstrating a functional capacity that renders traditional context windows irrelevant.</p>
                            </div>
                            <div>
                              <div className="flex items-center gap-2 text-sm text-gray-300 mb-1">
                                <div className="w-4 h-4 border-2 border-cyan-500 rounded-full flex items-center justify-center">
                                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                                </div>
                                <span className="font-semibold">Model-Agnostic Integration</span>
                              </div>
                              <p className="text-xs text-gray-400 ml-6">Functions as a high-dimensional state layer compatible with any embedding system or LLM architecture (including LAM).</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 pt-6 border-t border-gray-800/50">
                          <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Launch Timeline</p>
                          <div className="flex items-center gap-3">
                            <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-300 rounded-full transition-all duration-1000 ease-out relative"
                                style={{ width: '93%' }}
                              >
                                <div className="absolute right-0 top-0 h-full w-1 bg-white/50 animate-pulse" />
                              </div>
                            </div>
                            <span className="text-cyan-400 font-bold text-sm">Alpha testing</span>
                          </div>
                          <p className="text-cyan-400/80 text-sm mt-2 font-semibold">93% Complete</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 2: The SAID Standard and The Future */}
                <div className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* The SAID Standard */}
                    <div className="bg-gray-900/40 border border-purple-500/30 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6">
                          <span className="px-4 py-1.5 bg-purple-500/20 border border-purple-500/40 rounded-full text-purple-400 text-xs font-semibold">
                            THE STANDARD
                          </span>
                          <div className="w-16 h-1 bg-purple-500/30 rounded-full overflow-hidden">
                            <div className="h-full bg-purple-500 rounded-full" style={{ width: '100%' }} />
                          </div>
                        </div>
                        <div className="mb-6 rounded-lg overflow-hidden border border-gray-800/50 cursor-pointer hover:opacity-90 transition-opacity bg-gray-900/50 flex items-center justify-center" style={{ width: '100%', height: '350px' }} onClick={() => openModal("/images/Standard.png?v=2", "The SAID Standard")}>
                          <Image
                            src="/images/Standard.png?v=2"
                            alt="The SAID Standard"
                            width={400}
                            height={350}
                            className="w-full h-full object-contain"
                            unoptimized
                          />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">The SAID Standard (v1.0)</h3>
                        <p className="text-lg text-purple-400 mb-4">Benchmark & Evaluation</p>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          The SAID Standard unifies the industry's most rigorous protocols—InfiniteBench, RULER, Kamradt, and Magic.dev—and scales them to the absolute limit: 1 Billion Tokens.
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-purple-400" />
                            <span>Absolute Truth</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-purple-400" />
                            <span>Needleverse Integrity</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-purple-400" />
                            <span>Zero Drift</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-purple-400" />
                            <span>Cross-Examination Protocols</span>
                          </div>
                        </div>
                        <div className="mt-6 pt-6 border-t border-gray-800/50">
                          <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Launch Timeline</p>
                          <div className="flex items-center gap-3">
                            <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300 rounded-full transition-all duration-1000 ease-out relative"
                                style={{ width: '98%' }}
                              >
                                <div className="absolute right-0 top-0 h-full w-1 bg-white/50 animate-pulse" />
                              </div>
                            </div>
                            <span className="text-purple-400 font-bold text-sm">Alpha testing</span>
                          </div>
                          <p className="text-purple-400/80 text-sm mt-2 font-semibold">98% Complete</p>
                        </div>
                      </div>
                    </div>

                    {/* The Future */}
                    <div className="bg-gray-900/40 border border-amber-500/30 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6">
                          <span className="px-4 py-1.5 bg-amber-500/20 border border-amber-500/40 rounded-full text-amber-400 text-xs font-semibold">
                            THE FUTURE
                          </span>
                          <div className="w-16 h-1 bg-amber-500/30 rounded-full overflow-hidden">
                            <div className="h-full bg-amber-500 rounded-full" style={{ width: '100%' }} />
                          </div>
                        </div>
                        <div className="mb-6 rounded-lg overflow-hidden border border-gray-800/50 cursor-pointer hover:opacity-90 transition-opacity bg-gray-900/50 flex items-center justify-center" style={{ width: '100%', height: '350px' }} onClick={() => openModal("/images/memory.png?v=2", "The .said Protocol")}>
                          <Image
                            src="/images/memory.png?v=2"
                            alt="The .said Protocol"
                            width={400}
                            height={350}
                            className="w-full h-full object-contain"
                            unoptimized
                          />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">The .said Protocol</h3>
                        <p className="text-lg text-amber-400 mb-4">Memory as a Service (MaaS)</p>
                        <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                          Current AI memory is architecturally siloed—trapped inside the specific weights of proprietary models or ephemeral context windows. When the session ends, the memory dies. When you switch models, you start from zero.
                        </p>
                        <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                          SAID Research is architecting the .said Protocol—the industrial standard for Portable, Crystalline Memory.
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-amber-400" />
                            <span>State Encapsulation</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-amber-400" />
                            <span>Universal Portability (The Cognitive Passport)</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-amber-400" />
                            <span>Model Agnostic</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-amber-400" />
                            <span>Zero-Loss Transfer</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-amber-400" />
                            <span>"Anti-Drift" Standard</span>
                          </div>
                        </div>
                        <div className="mt-6 pt-6 border-t border-gray-800/50">
                          <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Launch Timeline</p>
                          <div className="flex items-center gap-3">
                            <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300 rounded-full transition-all duration-1000 ease-out relative"
                                style={{ width: '15%' }}
                              >
                                <div className="absolute right-0 top-0 h-full w-1 bg-white/50 animate-pulse" />
                              </div>
                            </div>
                            <span className="text-amber-400 font-bold text-sm">7 months</span>
                          </div>
                          <p className="text-amber-400/80 text-sm mt-2 font-semibold">15% Complete</p>
                        </div>
                        <div className="mt-6 pt-6 border-t border-gray-800/50">
                          <p className="text-gray-300 text-sm italic leading-relaxed">
                            The future of AI is not just about processing power. It is about State Portability. The .said Protocol ensures that no matter where you go in the digital world, your memory arrives with you.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="flex-shrink-0 bg-black/70 hover:bg-black/90 backdrop-blur-sm rounded-full p-4 text-cyan-400 hover:text-cyan-300 transition-all border border-cyan-500/30 hover:border-cyan-400/50"
              aria-label="Next slide"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          </div>
        </div>
      </section>

      {/* Current Model: LAM - Detailed Section */}
      <section id="lam" className="relative z-10 py-24 px-6 border-t border-gray-800/50 bg-gray-950/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4">LAM — Linear Attention Memory</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The first linear attention architecture to achieve state-of-the-art embedding performance—establishing the world's most efficient long-context model
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <div className="text-center bg-gray-900/40 border border-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-cyan-400 mb-2">0.8190</div>
              <div className="text-gray-400 text-xs mb-1">Spearman Correlation</div>
              <div className="text-gray-500 text-xs">SOTA for Linear Models</div>
            </div>
            <div className="text-center bg-gray-900/40 border border-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-cyan-400 mb-2">74.96%</div>
              <div className="text-gray-400 text-xs mb-1">LongEmbed Score</div>
              <div className="text-gray-500 text-xs">SOTA &lt; 200M</div>
            </div>
            <div className="text-center bg-gray-900/40 border border-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-cyan-400 mb-2">32K</div>
              <div className="text-gray-400 text-xs mb-1">Token Context</div>
              <div className="text-gray-500 text-xs">O(n) Complexity</div>
            </div>
          </div>

          {/* World-First Achievement Highlight */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-cyan-600/10 border-l-4 border-cyan-500 rounded-r-xl p-6 mb-12 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <Trophy className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">World-First Achievement</h3>
                <div className="space-y-3 mb-3">
                  <p className="text-gray-300">
                    <span className="text-cyan-400 font-bold">•</span> LAM is the first linear attention model to break the 0.80 semantic barrier, achieving 0.8190 Spearman correlation on STS-B.
                  </p>
                  <p className="text-gray-300">
                    <span className="text-cyan-400 font-bold">•</span> It is the world's most efficient long-context model, delivering a 74.96 LongEmbed score (SOTA &lt; 200M) and 100% Recall accuracy at 32k tokens.
                  </p>
                  <p className="text-gray-300">
                    <span className="text-cyan-400 font-bold">•</span> Unlike standard architectures that require specialized nested supervision, LAM exhibits emergent Matryoshka properties without explicit training. The model naturally organizes information by semantic importance within its Orthogonal Memory, allowing for high-fidelity truncation to smaller dimensions (97% retention at 128d)—a capability previously thought to require dedicated Matryoshka training objectives.
                  </p>
                </div>
                <p className="text-gray-400 text-sm">
                  With just 31M parameters and 384 dimensions, LAM achieves Transformer-parity performance, competing directly with non-linear models 10x its size while guaranteeing <span className="font-mono">O(n)</span> linear complexity for infinite context scaling.
                </p>
              </div>
            </div>
          </div>

          {/* Row 1: Rank 1, 2, 3 */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {/* Rank 1: Bilinear Resonance Flux */}
            <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl font-bold text-cyan-400">1</span>
                <h3 className="text-lg font-semibold text-cyan-400">Bilinear Resonance Flux</h3>
              </div>
              <p className="text-xs text-gray-400 mb-2 italic">"The Brain" • (Novelty)</p>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                A physics-inspired meta-attention mechanism that dynamically decides what to store based on resonance, rather than static gating.
              </p>
              <div className="rounded-lg overflow-hidden border border-gray-800/50 mb-3 cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openModal("/images/Resonance Flux MEchanism.jpg", "Bilinear Resonance Flux Mechanism")}>
                <Image
                  src="/images/Resonance Flux MEchanism.jpg"
                  alt="Bilinear Resonance Flux Mechanism"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
            </div>

            {/* Rank 2: Emergent Matryoshka Learning */}
            <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl font-bold text-cyan-400">2</span>
                <h3 className="text-lg font-semibold text-cyan-400">Emergent Matryoshka Learning</h3>
              </div>
              <p className="text-xs text-gray-400 mb-2 italic">"The Structure" • (Efficiency)</p>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Solves the 2025 inference bottleneck by organizing data hierarchically, allowing elastic deployment without retraining.
              </p>
              <div className="rounded-lg overflow-hidden border border-gray-800/50 mb-3 cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openModal("/images/Matryoshka.jpg", "Emergent Dimensional Hierarchy")}>
                <Image
                  src="/images/Matryoshka.jpg"
                  alt="Emergent Dimensional Hierarchy"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
            </div>

            {/* Rank 3: Delta Rule Precision / Decay */}
            <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl font-bold text-cyan-400">3</span>
                <h3 className="text-lg font-semibold text-cyan-400">Delta Rule Precision / Decay</h3>
              </div>
              <p className="text-xs text-gray-400 mb-2 italic">"The Heart" • (The Engine)</p>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Combines Error Correction (rewriting incorrect memories) with BIBO Stability (native decay), enabling infinite context without crashing.
              </p>
              <div className="rounded-lg overflow-hidden border border-gray-800/50 mb-3 cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openModal("/images/delta.jpg", "Delta Rule Precision / Decay")}>
                <Image
                  src="/images/delta.jpg"
                  alt="Delta Rule Precision / Decay"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Row 2: Rank 4, 5, Empty */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Rank 4: Hierarchical Dual-State Architecture */}
            <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl font-bold text-cyan-400">4</span>
                <h3 className="text-lg font-semibold text-cyan-400">Hierarchical Dual-State Architecture</h3>
              </div>
              <p className="text-xs text-gray-400 mb-2 italic">"The Memory Itself"</p>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Instead of a single flat memory, the model maintains two distinct timelines (Fast/Slow), solving the Plasticity-Stability dilemma.
              </p>
              <div className="rounded-lg overflow-hidden border border-gray-800/50 mb-3 cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openModal("/images/Architecture Overview.jpg", "LAM Architecture Overview")}>
                <Image
                  src="/images/Architecture Overview.jpg"
                  alt="LAM Architecture Overview"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
            </div>

            {/* Rank 5: Cross-Timescale Coupling */}
            <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl font-bold text-cyan-400">5</span>
                <h3 className="text-lg font-semibold text-cyan-400">Cross-Timescale Coupling</h3>
              </div>
              <p className="text-xs text-gray-400 mb-2 italic">"The Synapse" • (The Bridge)</p>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                A flux-modulated connection that allows the Fast and Slow states to exchange information and consolidate patterns.
              </p>
              <div className="rounded-lg overflow-hidden border border-gray-800/50 mb-3 cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openModal("/images/Cross-Timescale Interaction.jpg", "Cross-Timescale Interaction")}>
                <Image
                  src="/images/Cross-Timescale Interaction.jpg"
                  alt="Cross-Timescale Interaction"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
            </div>

            {/* Empty slot for future feature */}
            <div className="bg-gray-900/20 border border-gray-800/30 rounded-xl p-6 backdrop-blur-sm opacity-50">
              {/* Reserved for future innovation */}
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 text-white hover:text-cyan-400 transition-colors p-2 bg-black/50 rounded-full hover:bg-black/70"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <Image
                src={modalImage.src}
                alt={modalImage.alt}
                width={1200}
                height={800}
                className="max-w-full max-h-full w-auto h-auto object-contain"
                unoptimized
                priority
              />
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 py-16 px-6 border-t border-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <SaidLogo />
              <p className="text-gray-300 text-base mt-4 font-semibold">
                "The answer IS X. Because I Said so." — At ANY scale.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Research</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#lam" className="text-gray-400 hover:text-cyan-400 transition-colors">LAM - Model</a></li>
                <li>
                  <a
                    href="#frontier"
                    onClick={(e) => { e.preventDefault(); goToSlide(0); document.getElementById('frontier')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    SCA - Architecture
                  </a>
                </li>
                <li>
                  <a
                    href="#frontier"
                    onClick={(e) => { e.preventDefault(); goToSlide(1); document.getElementById('frontier')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    The SAID Standard
                  </a>
                </li>
                <li>
                  <a
                    href="#frontier"
                    onClick={(e) => { e.preventDefault(); goToSlide(1); document.getElementById('frontier')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    The Future
                  </a>
                </li>
                {/* Papers link - hidden until ready */}
                {/* <li><a href="https://arxiv.org" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">Papers</a></li> */}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <a
                href="mailto:research@saidhome.ai"
                className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
              >
                research@saidhome.ai
              </a>
              {/* Social media icons - hidden until ready */}
              {/* <div className="flex items-center gap-4">
                <a
                  href="https://arxiv.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div> */}
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm border-t border-gray-800/50 pt-8">
            <p>© 2026 SAID Research. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

