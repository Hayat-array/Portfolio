'use client';

import Image from 'next/image';
import { Section } from './section';

export function AboutProjects() {
    return (
        <Section id="about-projects" className="py-24 relative overflow-hidden bg-[#030014] border-y border-white/5">
            {/* Starlight/Nebula Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent -z-10" />
            <div className="absolute -top-24 -left-20 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute -bottom-24 -right-20 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '3s' }} />

            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-24 text-center">
                    <h2 className="text-6xl md:text-9xl font-black mb-8 font-headline tracking-tighter bg-gradient-to-b from-white via-white to-white/20 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(139,92,246,0.5)]">
                        Behind the Code
                    </h2>
                    <div className="h-2 w-48 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full mb-8 opacity-50" />
                    <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light tracking-widest uppercase italic">
                        The <span className="text-primary font-bold">Engineering</span> Narrative
                    </p>
                </div>

                <div className="space-y-32">
                    {/* Project 1: Bank Management System */}
                    <div className="flex flex-col lg:flex-row items-stretch gap-12 group perspective-1000">
                        <div className="flex-1 space-y-8 order-2 lg:order-1 flex flex-col justify-center">
                            <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl transition-all duration-700 group-hover:bg-white/[0.07] group-hover:border-primary/40 h-full flex flex-col justify-center relative overflow-hidden group/text">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                <span className="text-xs font-bold tracking-[0.3em] text-primary/60 uppercase mb-2">Systems Engineering</span>
                                <h3 className="text-4xl font-black text-white mb-6 tracking-tight group-hover:text-primary transition-colors duration-500">
                                    Bank Management <span className="text-primary/80">System</span>
                                </h3>

                                <div className="space-y-6">
                                    <p className="text-lg leading-relaxed text-slate-300 font-light">
                                        A sophisticated <span className="text-white font-medium">C++ Infrastructure</span> that redefines digital banking middleware. Architected with strict <span className="text-primary/90 italic">Object-Oriented principles</span> to manage high-velocity transaction data and secure user lifecycles.
                                    </p>
                                    <p className="text-lg leading-relaxed text-slate-400 font-light">
                                        Featuring military-grade file persistence and a dual-layer authentication protocol, ensuring data integrity across complex banking operations.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 relative order-1 lg:order-2">
                            {/* Deep Atmospheric backglow */}
                            <div className="absolute -inset-10 bg-primary/30 rounded-[60px] blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 animate-pulse" />

                            <div className="relative h-full rounded-3xl overflow-hidden border-2 border-white/10 transition-all duration-700 group-hover:scale-[1.05] group-hover:rotate-y-12 group-hover:rotate-x-2 group-hover:border-primary/60 shadow-[0_0_80px_-20px_rgba(139,92,246,0.4)] aspect-[16/10] lg:aspect-auto">
                                <Image
                                    src="/projects/banking-system.png"
                                    alt="Bank Management System Interface"
                                    fill
                                    className="object-cover contrast-[1.15] brightness-[1.1] saturate-[1.1]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent h-1/2 w-full -top-1/2 group-hover:animate-scan z-10" />
                                <div className="absolute inset-x-0 top-0 h-[200%] w-[150%] bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-[150%] -translate-y-[50%] group-hover:translate-x-[150%] transition-transform duration-1500 ease-in-out z-20" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-90" />

                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                                        <p className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-1">Architecture</p>
                                        <p className="text-sm text-white font-medium">Safe-Core Transaction Logic v2.0</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 2: Machine Learning Predictor */}
                    <div className="flex flex-col lg:flex-row-reverse items-stretch gap-12 group perspective-1000">
                        <div className="flex-1 space-y-8 flex flex-col justify-center">
                            <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl transition-all duration-700 group-hover:bg-white/[0.07] group-hover:border-violet-500/40 h-full flex flex-col justify-center relative overflow-hidden group/text">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                <span className="text-xs font-bold tracking-[0.3em] text-violet-400/60 uppercase mb-2">Artificial Intelligence</span>
                                <h3 className="text-4xl font-black text-white mb-6 tracking-tight group-hover:text-violet-400 transition-colors duration-500">
                                    ML <span className="text-violet-500/80">Intelligence</span> Predictor
                                </h3>

                                <div className="space-y-6">
                                    <p className="text-lg leading-relaxed text-slate-300 font-light">
                                        A data-driven engine powered by <span className="text-white font-medium">Python & Scikit-learn</span>. This model processes non-linear data sets to deliver predictive insights with high-precision accuracy.
                                    </p>
                                    <p className="text-lg leading-relaxed text-slate-400 font-light">
                                        Integrated with <span className="text-violet-400">OpenCV</span> for computer vision capabilities, the system bridges raw computational power with a modern, reactive interface.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 relative">
                            <div className="absolute -inset-10 bg-violet-600/30 rounded-[60px] blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 animate-pulse" />
                            <div className="relative h-full rounded-3xl overflow-hidden border-2 border-white/10 transition-all duration-700 group-hover:scale-[1.05] group-hover:-rotate-y-12 group-hover:rotate-x-2 group-hover:border-primary/60 shadow-[0_0_80px_-20px_rgba(139,92,246,0.4)] aspect-[16/10] lg:aspect-auto">
                                <Image
                                    src="/projects/ml-project.png"
                                    alt="Machine Learning Predictor Dashboard"
                                    fill
                                    className="object-cover contrast-[1.15] brightness-[1.1] saturate-[1.1]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/10 to-transparent h-1/2 w-full -top-1/2 group-hover:animate-scan z-10" />
                                <div className="absolute inset-x-0 top-0 h-[200%] w-[150%] bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-[150%] -translate-y-[50%] group-hover:translate-x-[150%] transition-transform duration-1500 ease-in-out z-20" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-90" />

                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                                        <p className="text-[10px] font-bold tracking-[0.2em] text-violet-400 uppercase mb-1">Algorithm</p>
                                        <p className="text-sm text-white font-medium">Non-Linear Prediction Matrix v1.4</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 3: Professional Portfolio */}
                    <div className="flex flex-col lg:flex-row items-stretch gap-12 group perspective-1000">
                        <div className="flex-1 space-y-8 order-2 lg:order-1 flex flex-col justify-center">
                            <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl transition-all duration-700 group-hover:bg-white/[0.07] group-hover:border-indigo-500/40 h-full flex flex-col justify-center relative overflow-hidden group/text">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                <span className="text-xs font-bold tracking-[0.3em] text-indigo-400/60 uppercase mb-2">Web Experience</span>
                                <h3 className="text-4xl font-black text-white mb-6 tracking-tight group-hover:text-indigo-400 transition-colors duration-500">
                                    Digital <span className="text-indigo-500/80">Portfolio</span> Engine
                                </h3>

                                <div className="space-y-6">
                                    <p className="text-lg leading-relaxed text-slate-300 font-light">
                                        The <span className="text-white font-medium">Next.js 14 Hub</span> where design meets absolute scalability. This system delivers a high-performance, cyber-aesthetic experience with <span className="text-indigo-400">MongoDB Atlas</span> powering real-time content delivery.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                                        <div className="bg-indigo-500/5 border border-indigo-500/20 p-4 rounded-xl backdrop-blur-md">
                                            <h4 className="text-indigo-400 font-bold text-sm mb-2 uppercase tracking-widest">Core Features</h4>
                                            <ul className="text-xs text-slate-400 space-y-2">
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-indigo-500 rounded-full" /> Dynamic Content Engine</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-indigo-500 rounded-full" /> Cyber-Premium Aesthetic</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-indigo-500 rounded-full" /> Interactive Framer Motion UI</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-indigo-500 rounded-full" /> Full Responsive Optimization</li>
                                            </ul>
                                        </div>
                                        <div className="bg-indigo-500/5 border border-indigo-500/20 p-4 rounded-xl backdrop-blur-md">
                                            <h4 className="text-indigo-400 font-bold text-sm mb-2 uppercase tracking-widest">Technical Stack</h4>
                                            <ul className="text-xs text-slate-400 space-y-2">
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-indigo-500 rounded-full" /> Next.js 14 (App Router)</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-indigo-500 rounded-full" /> MongoDB / Atlas</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-indigo-500 rounded-full" /> Tailwind CSS / Shadcn UI</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-indigo-500 rounded-full" /> Framer Motion</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <p className="text-lg leading-relaxed text-slate-400 font-light">
                                        A masterclass in modern frontend architecture, featuring server-side rendering and zero-client-bundle data mutations via Server Actions.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 relative order-1 lg:order-2">
                            {/* Deep Atmospheric backglow */}
                            <div className="absolute -inset-10 bg-indigo-600/30 rounded-[60px] blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 animate-pulse" />

                            <div className="relative h-full rounded-3xl overflow-hidden border-2 border-white/10 transition-all duration-700 group-hover:scale-[1.05] group-hover:rotate-y-12 group-hover:rotate-x-2 group-hover:border-primary/60 shadow-[0_0_80px_-20px_rgba(139,92,246,0.4)] aspect-[16/10] lg:aspect-auto">
                                <Image
                                    src="/projects/portfolio_engine_mockup.png"
                                    alt="Portfolio Structure and Backend"
                                    fill
                                    className="object-cover contrast-[1.15] brightness-[1.1] saturate-[1.1]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/10 to-transparent h-1/2 w-full -top-1/2 group-hover:animate-scan z-10" />
                                <div className="absolute inset-x-0 top-0 h-[200%] w-[150%] bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-[150%] -translate-y-[50%] group-hover:translate-x-[150%] transition-transform duration-1500 ease-in-out z-20" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-90" />

                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                                        <p className="text-[10px] font-bold tracking-[0.2em] text-indigo-400 uppercase mb-1">Stack</p>
                                        <p className="text-sm text-white font-medium">Next.js 14 / MongoDB Atlas Core</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project: TaskFlow - Professional Task Suite */}
                    <div className="flex flex-col lg:flex-row-reverse items-stretch gap-12 group perspective-1000">
                        <div className="flex-1 space-y-8 flex flex-col justify-center">
                            <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl transition-all duration-700 group-hover:bg-white/[0.07] group-hover:border-violet-500/40 h-full flex flex-col justify-center relative overflow-hidden group/text">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                <span className="text-xs font-bold tracking-[0.3em] text-violet-400/60 uppercase mb-2">Productivity Suite</span>
                                <h3 className="text-4xl font-black text-white mb-6 tracking-tight group-hover:text-violet-400 transition-colors duration-500">
                                    TaskFlow <span className="text-violet-500/80">Premium</span>
                                </h3>

                                <div className="space-y-6">
                                    <p className="text-lg leading-relaxed text-slate-300 font-light">
                                        A state-of-the-art, high-performance <span className="text-white font-medium">Task Management System</span> blending a clean, premium UI with a robust <span className="text-violet-400">Node.js & MongoDB</span> backend.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                                        <div className="bg-violet-500/5 border border-violet-500/20 p-4 rounded-xl backdrop-blur-md">
                                            <h4 className="text-violet-400 font-bold text-sm mb-2 uppercase tracking-widest">Core Functionalities</h4>
                                            <ul className="text-xs text-slate-400 space-y-2">
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-violet-500 rounded-full" /> Advanced Auth & Sessions</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-violet-500 rounded-full" /> Intelligent Todo CRUD</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-violet-500 rounded-full" /> Real-time Status Sync</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-violet-500 rounded-full" /> Privacy & Segregation</li>
                                            </ul>
                                        </div>
                                        <div className="bg-violet-500/5 border border-violet-500/20 p-4 rounded-xl backdrop-blur-md">
                                            <h4 className="text-violet-400 font-bold text-sm mb-2 uppercase tracking-widest">Deep Tech Stack</h4>
                                            <ul className="text-xs text-slate-400 space-y-2">
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-violet-500 rounded-full" /> React 18 / Vite / Tailwind</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-violet-500 rounded-full" /> Node.js / Express REST API</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-violet-500 rounded-full" /> MongoDB / Mongoose ODM</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-violet-500 rounded-full" /> JWT / Bcrypt Security</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <p className="text-lg leading-relaxed text-slate-400 font-light">
                                        Features a transition from local-first prototyping to a fully cloud-sovereign architecture, ensuring secure user onboarding and persistent data isolation.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 relative">
                            {/* Deep Atmospheric backglow */}
                            <div className="absolute -inset-10 bg-violet-600/30 rounded-[60px] blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 animate-pulse" />

                            <div className="relative h-full rounded-3xl overflow-hidden border-2 border-white/10 transition-all duration-700 group-hover:scale-[1.05] group-hover:rotate-y-12 group-hover:rotate-x-2 group-hover:border-violet-500/60 shadow-[0_0_80px_-20px_rgba(139,92,246,0.4)] aspect-[16/10] lg:aspect-auto">
                                <Image
                                    src="/projects/taskflow_dashboard_mockup.png"
                                    alt="TaskFlow Dashboard"
                                    fill
                                    className="object-cover contrast-[1.15] brightness-[1.1] saturate-[1.1]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/10 to-transparent h-1/2 w-full -top-1/2 group-hover:animate-scan z-10" />
                                <div className="absolute inset-x-0 top-0 h-[200%] w-[150%] bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-[150%] -translate-y-[50%] group-hover:translate-x-[150%] transition-transform duration-1500 ease-in-out z-20" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-90" />

                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                                        <p className="text-[10px] font-bold tracking-[0.2em] text-violet-400 uppercase mb-1">Architecture</p>
                                        <p className="text-sm text-white font-medium">MERN Stack / JWT / REST</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 4: Al Mukammal E-Commerce */}
                    <div className="flex flex-col lg:flex-row-reverse items-stretch gap-12 group perspective-1000">
                        <div className="flex-1 space-y-8 flex flex-col justify-center">
                            <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl transition-all duration-700 group-hover:bg-white/[0.07] group-hover:border-primary/40 h-full flex flex-col justify-center relative overflow-hidden group/text">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                <span className="text-xs font-bold tracking-[0.3em] text-primary/60 uppercase mb-2">Commerce Ecosystem</span>
                                <h3 className="text-4xl font-black text-white mb-6 tracking-tight group-hover:text-primary transition-colors duration-500">
                                    Al Mukammal <span className="text-primary/80">Premium</span>
                                </h3>

                                <div className="space-y-6">
                                    <p className="text-lg leading-relaxed text-slate-300 font-light">
                                        A flagship <span className="text-white font-medium">Full-Stack E-Commerce</span> solution meticulously built with <span className="text-primary">Next.js 14</span>. Featuring a high-security <span className="italic text-white">JWT Authentication</span> layer and a custom-engineered Admin Dashboard for massive inventory control.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                                        <div className="bg-violet-500/5 border border-violet-500/20 p-4 rounded-xl backdrop-blur-md">
                                            <h4 className="text-violet-400 font-bold text-sm mb-2 uppercase tracking-widest">Core Features</h4>
                                            <ul className="text-xs text-slate-400 space-y-2">
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-violet-500 rounded-full" /> User & Admin Roles</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-violet-500 rounded-full" /> Dynamic Product Browsing</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-violet-500 rounded-full" /> Persistent Shopping Cart</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-violet-500 rounded-full" /> Global Location Selector</li>
                                            </ul>
                                        </div>
                                        <div className="bg-violet-500/5 border border-violet-500/20 p-4 rounded-xl backdrop-blur-md">
                                            <h4 className="text-violet-400 font-bold text-sm mb-2 uppercase tracking-widest">Tech Stack</h4>
                                            <ul className="text-xs text-slate-400 space-y-2">
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-violet-500 rounded-full" /> Next.js 14 API Routes</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-violet-500 rounded-full" /> MongoDB / Mongoose</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-violet-500 rounded-full" /> JWT Authentication</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-violet-500 rounded-full" /> React Context API</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <p className="text-lg leading-relaxed text-slate-400 font-light">
                                        Scaling over 250 laptop configurations with dynamic location-aware logic across 200+ countries. Includes custom color management and bulk product operations.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 relative">
                            <div className="absolute -inset-10 bg-primary/40 rounded-[60px] blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 animate-pulse" />
                            <div className="relative h-full rounded-3xl overflow-hidden border-2 border-white/20 transition-all duration-700 group-hover:scale-[1.08] group-hover:-rotate-y-12 group-hover:rotate-x-4 group-hover:border-primary/80 shadow-[0_0_100px_-20px_rgba(139,92,246,0.5)] aspect-[16/10] lg:aspect-auto">
                                <Image
                                    src="/projects/almukammal_dashboard_mockup.png"
                                    alt="Al Mukammal E-Commerce Dashboard"
                                    fill
                                    className="object-cover contrast-[1.2] brightness-[1.1] saturate-[1.2]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent h-1/2 w-full -top-1/2 group-hover:animate-scan z-10" />
                                <div className="absolute inset-x-0 top-0 h-[300%] w-[200%] bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-[200%] -translate-y-[50%] group-hover:translate-x-[200%] transition-transform duration-2000 ease-in-out z-20" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-95" />

                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="text-center opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-500">
                                        <div className="bg-primary/90 text-white text-[10px] font-black tracking-[0.5em] px-10 py-5 rounded-full backdrop-blur-2xl border border-white/30 shadow-[0_0_50px_rgba(139,92,246,0.5)] uppercase">
                                            Premium Enterprise Hub
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project: JECRC Attendance App */}
                    <div className="flex flex-col lg:flex-row-reverse items-stretch gap-12 group perspective-1000">
                        <div className="flex-1 space-y-8 flex flex-col justify-center">
                            <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl transition-all duration-700 group-hover:bg-white/[0.07] group-hover:border-teal-500/40 h-full flex flex-col justify-center relative overflow-hidden group/text">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                <span className="text-xs font-bold tracking-[0.3em] text-teal-400/60 uppercase mb-2">Academic Management</span>
                                <h3 className="text-4xl font-black text-white mb-6 tracking-tight group-hover:text-teal-400 transition-colors duration-500">
                                    JECRC <span className="text-teal-500/80">Attendance App</span>
                                </h3>

                                <div className="space-y-6">
                                    <p className="text-lg leading-relaxed text-slate-300 font-light">
                                        A <span className="text-white font-medium">professional-grade College Portal</span> engineered with <span className="text-teal-400 font-bold">Next.js 16 & MongoDB</span>. From OTP-verified teacher onboarding to bulk CSV imports and a real-time bubble attendance UI — built for scale and speed.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                                        <div className="bg-teal-500/5 border border-teal-500/20 p-4 rounded-xl backdrop-blur-md">
                                            <h4 className="text-teal-400 font-bold text-sm mb-2 uppercase tracking-widest">Core Features</h4>
                                            <ul className="text-xs text-slate-400 space-y-2">
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-teal-500 rounded-full" /> OTP Email Verification</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-teal-500 rounded-full" /> Smart Bulk CSV Upload</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-teal-500 rounded-full" /> Bubble P/A Toggle UI</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-teal-500 rounded-full" /> Low-Attendance Alerts</li>
                                            </ul>
                                        </div>
                                        <div className="bg-teal-500/5 border border-teal-500/20 p-4 rounded-xl backdrop-blur-md">
                                            <h4 className="text-teal-400 font-bold text-sm mb-2 uppercase tracking-widest">Tech Stack</h4>
                                            <ul className="text-xs text-slate-400 space-y-2">
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-teal-500 rounded-full" /> Next.js 16 App Router</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-teal-500 rounded-full" /> MongoDB / Mongoose</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-teal-500 rounded-full" /> NextAuth.js (JWT)</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-teal-500 rounded-full" /> Nodemailer (Gmail OTP)</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <p className="text-lg leading-relaxed text-slate-400 font-light">
                                        Features multi-format report export (CSV, TXT, Excel-ready), a full monthly register grid, and protected deletion flows requiring roll-number confirmation.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 relative">
                            <div className="absolute -inset-10 bg-teal-500/30 rounded-[60px] blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 animate-pulse" />
                            <div className="relative h-full rounded-3xl overflow-hidden border-2 border-white/20 transition-all duration-700 group-hover:scale-[1.08] group-hover:-rotate-y-12 group-hover:rotate-x-4 group-hover:border-teal-500/60 shadow-[0_0_100px_-20px_rgba(20,184,166,0.5)] aspect-[16/10] lg:aspect-auto">
                                <Image
                                    src="/projects/attendance_app_mockup.png"
                                    alt="JECRC Attendance App Dashboard"
                                    fill
                                    className="object-cover contrast-[1.2] brightness-[1.1] saturate-[1.2]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/20 to-transparent h-1/2 w-full -top-1/2 group-hover:animate-scan z-10" />
                                <div className="absolute inset-x-0 top-0 h-[300%] w-[200%] bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-[200%] -translate-y-[50%] group-hover:translate-x-[200%] transition-transform duration-2000 ease-in-out z-20" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-95" />

                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="text-center opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-500">
                                        <div className="bg-teal-600/90 text-white text-[10px] font-black tracking-[0.5em] px-10 py-5 rounded-full backdrop-blur-2xl border border-white/30 shadow-[0_0_50px_rgba(20,184,166,0.5)] uppercase">
                                            Academic Portal
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project: NeuroGuard AI */}
                    <div className="flex flex-col lg:flex-row-reverse items-stretch gap-12 group perspective-1000">
                        <div className="flex-1 space-y-8 flex flex-col justify-center">
                            <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl transition-all duration-700 group-hover:bg-white/[0.07] group-hover:border-red-500/40 h-full flex flex-col justify-center relative overflow-hidden group/text">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                <span className="text-xs font-bold tracking-[0.3em] text-red-400/60 uppercase mb-2">Clinical AI · Hackathon Winner</span>
                                <h3 className="text-4xl font-black text-white mb-6 tracking-tight group-hover:text-red-400 transition-colors duration-500">
                                    NeuroGuard <span className="text-red-500/80">AI</span>
                                </h3>

                                <div className="space-y-6">
                                    <p className="text-lg leading-relaxed text-slate-300 font-light">
                                        A real-time <span className="text-white font-medium">Clinical Neuroinformatics Platform</span> built for Arya Verse 2.0 Hackathon. Detects epileptic seizures from raw EEG signals using a <span className="text-red-400 font-bold">3-layer hybrid deep learning ensemble</span> with ~98.3% accuracy and 0.9949 ROC-AUC.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                                        <div className="bg-red-500/5 border border-red-500/20 p-4 rounded-xl backdrop-blur-md">
                                            <h4 className="text-red-400 font-bold text-sm mb-2 uppercase tracking-widest">Platform Features</h4>
                                            <ul className="text-xs text-slate-400 space-y-2">
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-red-500 rounded-full" /> Real-Time EEG WebSocket Stream</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-red-500 rounded-full" /> 3D Brain Particle Visualization</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-red-500 rounded-full" /> Seizure Probability Gauge</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-red-500 rounded-full" /> Patient Dossier & Reports</li>
                                            </ul>
                                        </div>
                                        <div className="bg-red-500/5 border border-red-500/20 p-4 rounded-xl backdrop-blur-md">
                                            <h4 className="text-red-400 font-bold text-sm mb-2 uppercase tracking-widest">AI Architecture</h4>
                                            <ul className="text-xs text-slate-400 space-y-2">
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-red-500 rounded-full" /> CNN-BiLSTM-Attention (TensorFlow)</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-red-500 rounded-full" /> Ensemble: RF + XGBoost</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-red-500 rounded-full" /> DRL Adaptive Threshold (DQN)</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-red-500 rounded-full" /> Three.js + Chart.js Frontend</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <p className="text-lg leading-relaxed text-slate-400 font-light">
                                        Trained on the <span className="text-red-300 font-medium">Bonn University EEG dataset</span> (500 recordings, 5 classes). Sensitivity of ~93.5% ensures near-zero false negatives — because missing a real seizure can be life-threatening.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 relative">
                            <div className="absolute -inset-10 bg-red-500/30 rounded-[60px] blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 animate-pulse" />
                            <div className="relative h-full rounded-3xl overflow-hidden border-2 border-white/20 transition-all duration-700 group-hover:scale-[1.08] group-hover:-rotate-y-12 group-hover:rotate-x-4 group-hover:border-red-500/60 shadow-[0_0_100px_-20px_rgba(239,68,68,0.5)] aspect-[16/10] lg:aspect-auto">
                                <Image
                                    src="/projects/neuroguard_mockup.png"
                                    alt="NeuroGuard AI Clinical Dashboard"
                                    fill
                                    className="object-cover contrast-[1.2] brightness-[1.1] saturate-[1.2]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/20 to-transparent h-1/2 w-full -top-1/2 group-hover:animate-scan z-10" />
                                <div className="absolute inset-x-0 top-0 h-[300%] w-[200%] bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-[200%] -translate-y-[50%] group-hover:translate-x-[200%] transition-transform duration-2000 ease-in-out z-20" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-95" />

                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="text-center opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-500">
                                        <div className="bg-red-600/90 text-white text-[10px] font-black tracking-[0.5em] px-10 py-5 rounded-full backdrop-blur-2xl border border-white/30 shadow-[0_0_50px_rgba(239,68,68,0.5)] uppercase">
                                            98.3% Accuracy
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project: QR Studio */}
                    <div className="flex flex-col lg:flex-row items-stretch gap-12 group perspective-1000">
                        <div className="flex-1 space-y-8 order-2 lg:order-1 flex flex-col justify-center">
                            <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl transition-all duration-700 group-hover:bg-white/[0.07] group-hover:border-amber-500/40 h-full flex flex-col justify-center relative overflow-hidden group/text">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                <span className="text-xs font-bold tracking-[0.3em] text-amber-400/60 uppercase mb-2">Developer Tooling</span>
                                <h3 className="text-4xl font-black text-white mb-6 tracking-tight group-hover:text-amber-400 transition-colors duration-500">
                                    QR <span className="text-amber-500/80">Studio</span>
                                </h3>

                                <div className="space-y-6">
                                    <p className="text-lg leading-relaxed text-slate-300 font-light">
                                        A high-efficiency <span className="text-white font-medium">Professional QR Code Generator</span> engineered with <span className="text-amber-400 font-bold">Flask & Pillow</span>. Supports custom branding, center-logo embedding, and precision-tuned scanning parameters for flawless, branded QR output.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                                        <div className="bg-amber-500/5 border border-amber-500/20 p-4 rounded-xl backdrop-blur-md">
                                            <h4 className="text-amber-400 font-bold text-sm mb-2 uppercase tracking-widest">Core Features</h4>
                                            <ul className="text-xs text-slate-400 space-y-2">
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-amber-500 rounded-full" /> Custom Logo Embedding</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-amber-500 rounded-full" /> Color Customization</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-amber-500 rounded-full" /> Optimized Scan Parameters</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-amber-500 rounded-full" /> REST API Backend</li>
                                            </ul>
                                        </div>
                                        <div className="bg-amber-500/5 border border-amber-500/20 p-4 rounded-xl backdrop-blur-md">
                                            <h4 className="text-amber-400 font-bold text-sm mb-2 uppercase tracking-widest">Tech Stack</h4>
                                            <ul className="text-xs text-slate-400 space-y-2">
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-amber-500 rounded-full" /> Python Flask</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-amber-500 rounded-full" /> Pillow (Image Processing)</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-amber-500 rounded-full" /> qrcode Library</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-amber-500 rounded-full" /> REST API Design</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <p className="text-lg leading-relaxed text-slate-400 font-light">
                                        Generates high-resolution, print-ready QR codes with <span className="text-amber-300 font-medium">custom branding</span> in seconds — bridging the gap between functional and visually premium output.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 relative order-1 lg:order-2">
                            <div className="absolute -inset-10 bg-amber-500/30 rounded-[60px] blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 animate-pulse" />
                            <div className="relative h-full rounded-3xl overflow-hidden border-2 border-white/20 transition-all duration-700 group-hover:scale-[1.08] group-hover:rotate-y-12 group-hover:rotate-x-4 group-hover:border-amber-500/60 shadow-[0_0_100px_-20px_rgba(245,158,11,0.5)] aspect-[16/10] lg:aspect-auto">
                                <Image
                                    src="/projects/qr_studio_mockup.png"
                                    alt="QR Studio Interface"
                                    fill
                                    className="object-cover contrast-[1.2] brightness-[1.1] saturate-[1.2]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/20 to-transparent h-1/2 w-full -top-1/2 group-hover:animate-scan z-10" />
                                <div className="absolute inset-x-0 top-0 h-[300%] w-[200%] bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-[200%] -translate-y-[50%] group-hover:translate-x-[200%] transition-transform duration-2000 ease-in-out z-20" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-95" />

                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="text-center opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-500">
                                        <div className="bg-amber-600/90 text-white text-[10px] font-black tracking-[0.5em] px-10 py-5 rounded-full backdrop-blur-2xl border border-white/30 shadow-[0_0_50px_rgba(245,158,11,0.5)] uppercase">
                                            Flask / Pillow API
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project: Hayat Task App */}
                    <div className="flex flex-col lg:flex-row items-stretch gap-12 group perspective-1000">
                        <div className="flex-1 space-y-8 order-2 lg:order-1 flex flex-col justify-center">
                            <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl transition-all duration-700 group-hover:bg-white/[0.07] group-hover:border-pink-500/40 h-full flex flex-col justify-center relative overflow-hidden group/text">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                <span className="text-xs font-bold tracking-[0.3em] text-pink-400/60 uppercase mb-2">Workflow Management</span>
                                <h3 className="text-4xl font-black text-white mb-6 tracking-tight group-hover:text-pink-400 transition-colors duration-500">
                                    Hayat <span className="text-pink-500/80">Task App</span>
                                </h3>

                                <div className="space-y-6">
                                    <p className="text-lg leading-relaxed text-slate-300 font-light">
                                        A client-side <span className="text-white font-medium">Single Page Application</span> that mimics a robust enterprise system. Built with <span className="text-pink-400 font-bold">React & Vite</span>, it features distinct Admin and Employee dashboards with a dark mode aesthetic.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                                        <div className="bg-pink-500/5 border border-pink-500/20 p-4 rounded-xl backdrop-blur-md">
                                            <h4 className="text-pink-400 font-bold text-sm mb-2 uppercase tracking-widest">System Features</h4>
                                            <ul className="text-xs text-slate-400 space-y-2">
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-pink-500 rounded-full" /> Role-Based Access (RBAC)</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-pink-500 rounded-full" /> Workforce Performance Stats</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-pink-500 rounded-full" /> Auto-Credential Generation</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-pink-500 rounded-full" /> Task Kanban Board</li>
                                            </ul>
                                        </div>
                                        <div className="bg-pink-500/5 border border-pink-500/20 p-4 rounded-xl backdrop-blur-md">
                                            <h4 className="text-pink-400 font-bold text-sm mb-2 uppercase tracking-widest">Stack Architecture</h4>
                                            <ul className="text-xs text-slate-400 space-y-2">
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-pink-500 rounded-full" /> React 18 / Vite</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-pink-500 rounded-full" /> Context API State</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-pink-500 rounded-full" /> Local Storage DB</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-pink-500 rounded-full" /> Tailwind CSS</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <p className="text-lg leading-relaxed text-slate-400 font-light">
                                        Secure session management and data persistence are handled entirely client-side, demonstrating advanced React patterns and <span className="text-pink-300 font-medium">zero-backend</span> capability.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 relative order-1 lg:order-2">
                            <div className="absolute -inset-10 bg-pink-500/30 rounded-[60px] blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 animate-pulse" />
                            <div className="relative h-full rounded-3xl overflow-hidden border-2 border-white/20 transition-all duration-700 group-hover:scale-[1.08] group-hover:rotate-y-12 group-hover:rotate-x-4 group-hover:border-pink-500/60 shadow-[0_0_100px_-20px_rgba(236,72,153,0.5)] aspect-[16/10] lg:aspect-auto">
                                <Image
                                    src="/projects/hayat_task_app_mockup.png"
                                    alt="Hayat Task App Interface"
                                    fill
                                    className="object-cover contrast-[1.2] brightness-[1.1] saturate-[1.2]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/20 to-transparent h-1/2 w-full -top-1/2 group-hover:animate-scan z-10" />
                                <div className="absolute inset-x-0 top-0 h-[300%] w-[200%] bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-[200%] -translate-y-[50%] group-hover:translate-x-[200%] transition-transform duration-2000 ease-in-out z-20" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-95" />

                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="text-center opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-500">
                                        <div className="bg-pink-600/90 text-white text-[10px] font-black tracking-[0.5em] px-10 py-5 rounded-full backdrop-blur-2xl border border-white/30 shadow-[0_0_50px_rgba(236,72,153,0.5)] uppercase">
                                            Productivity Suite
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 5: FoodRush App */}
                    <div className="flex flex-col lg:flex-row items-stretch gap-12 group perspective-1000">
                        <div className="flex-1 space-y-8 order-2 lg:order-1 flex flex-col justify-center">
                            <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl transition-all duration-700 group-hover:bg-white/[0.07] group-hover:border-orange-500/40 h-full flex flex-col justify-center relative overflow-hidden group/text">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                <span className="text-xs font-bold tracking-[0.3em] text-orange-400/60 uppercase mb-2">Next-Gen Delivery</span>
                                <h3 className="text-4xl font-black text-white mb-6 tracking-tight group-hover:text-orange-400 transition-colors duration-500">
                                    FoodRush <span className="text-orange-500/80">Advanced Platform</span>
                                </h3>

                                <div className="space-y-6">
                                    <p className="text-lg leading-relaxed text-slate-300 font-light">
                                        A state-of-the-art, full-stack food delivery application designed to seamlessly connect customers, restaurants, and delivery partners. Built with <span className="text-white font-medium">Next.js 14</span> for performance and <span className="text-orange-400 font-bold">MongoDB</span> for real-time data management.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                                        <div className="bg-orange-500/5 border border-orange-500/20 p-4 rounded-xl backdrop-blur-md">
                                            <h4 className="text-orange-400 font-bold text-sm mb-2 uppercase tracking-widest">Core Features</h4>
                                            <ul className="text-xs text-slate-400 space-y-2">
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-orange-500 rounded-full" /> Dynamic Menu & Smart Cart</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-orange-500 rounded-full" /> Real-Time Order Tracking</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-orange-500 rounded-full" /> Three-Role Ecosystem</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-orange-500 rounded-full" /> Secure Payments (UPI/COD)</li>
                                            </ul>
                                        </div>
                                        <div className="bg-orange-500/5 border border-orange-500/20 p-4 rounded-xl backdrop-blur-md">
                                            <h4 className="text-orange-400 font-bold text-sm mb-2 uppercase tracking-widest">Tech Stack</h4>
                                            <ul className="text-xs text-slate-400 space-y-2">
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-orange-500 rounded-full" /> Next.js 14 (App Router)</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-orange-500 rounded-full" /> MongoDB / Mongoose</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-orange-500 rounded-full" /> NextAuth.js Security</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-orange-500 rounded-full" /> Zustand State Management</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <p className="text-lg leading-relaxed text-slate-400 font-light">
                                        Optimized with <span className="text-orange-300 font-medium">Shadcn UI</span> and Framer Motion. Features a robust Kitchen Display System (KDS) and a completely simulated UPI payment gateway for testing.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 relative order-1 lg:order-2">
                            <div className="absolute -inset-10 bg-orange-500/30 rounded-[60px] blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 animate-pulse" />
                            <div className="relative h-full rounded-3xl overflow-hidden border-2 border-white/20 transition-all duration-700 group-hover:scale-[1.08] group-hover:rotate-y-12 group-hover:rotate-x-4 group-hover:border-orange-500/60 shadow-[0_0_100px_-20px_rgba(249,115,22,0.5)] aspect-[16/10] lg:aspect-auto">
                                <Image
                                    src="/projects/foodrush-v2.png"
                                    alt="FoodRush Advanced Interface"
                                    fill
                                    className="object-cover contrast-[1.2] brightness-[1.1] saturate-[1.2]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/20 to-transparent h-1/2 w-full -top-1/2 group-hover:animate-scan z-10" />
                                <div className="absolute inset-x-0 top-0 h-[300%] w-[200%] bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-[200%] -translate-y-[50%] group-hover:translate-x-[200%] transition-transform duration-2000 ease-in-out z-20" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-95" />

                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="text-center opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-500">
                                        <div className="bg-orange-600/90 text-white text-[10px] font-black tracking-[0.5em] px-10 py-5 rounded-full backdrop-blur-2xl border border-white/30 shadow-[0_0_50px_rgba(249,115,22,0.5)] uppercase">
                                            Full-Stack Ecology
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 6: AI Assistant with Voice & Chat */}
                    <div className="flex flex-col lg:flex-row-reverse items-stretch gap-12 group perspective-1000">
                        <div className="flex-1 space-y-8 flex flex-col justify-center">
                            <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl transition-all duration-700 group-hover:bg-white/[0.07] group-hover:border-cyan-500/40 h-full flex flex-col justify-center relative overflow-hidden group/text">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                <span className="text-xs font-bold tracking-[0.3em] text-cyan-400/60 uppercase mb-2">Next-Gen AI</span>
                                <h3 className="text-4xl font-black text-white mb-6 tracking-tight group-hover:text-cyan-400 transition-colors duration-500">
                                    AI <span className="text-cyan-500/80">Voice & Chat</span> Assistant
                                </h3>

                                <div className="space-y-6">
                                    <p className="text-lg leading-relaxed text-slate-300 font-light">
                                        A groundbreaking <span className="text-white font-medium">Multimodal AI Interface</span> powered by <span className="text-cyan-400 font-bold">Flask, Python, and MongoDB</span>. This system seamlessly integrates <span className="italic text-white">Push-to-Talk & Conversation Mode</span> for a natural, voice-driven user experience.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                                        <div className="bg-cyan-500/5 border border-cyan-500/20 p-4 rounded-xl backdrop-blur-md">
                                            <h4 className="text-cyan-400 font-bold text-sm mb-2 uppercase tracking-widest">Core Capabilities</h4>
                                            <ul className="text-xs text-slate-400 space-y-2">
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-cyan-500 rounded-full" /> Perplexity Sonar Pro API</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-cyan-500 rounded-full" /> Real-time Voice-to-Text</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-cyan-500 rounded-full" /> Intelligent Context Retention</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-cyan-500 rounded-full" /> Enterprise-Grade Security</li>
                                            </ul>
                                        </div>
                                        <div className="bg-cyan-500/5 border border-cyan-500/20 p-4 rounded-xl backdrop-blur-md">
                                            <h4 className="text-cyan-400 font-bold text-sm mb-2 uppercase tracking-widest">Technical Stack</h4>
                                            <ul className="text-xs text-slate-400 space-y-2">
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-cyan-500 rounded-full" /> Python Flask Backend</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-cyan-500 rounded-full" /> MongoDB Persistence</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-cyan-500 rounded-full" /> WebSpeech API</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-cyan-500 rounded-full" /> Glassmorphism UI</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <p className="text-lg leading-relaxed text-slate-400 font-light">
                                        Featuring a premium, glassmorphism-inspired design with <span className="text-cyan-300 font-medium">syntax highlighting for 50+ languages</span> and rigorous markdown rendering.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 relative">
                            <div className="absolute -inset-10 bg-cyan-500/30 rounded-[60px] blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 animate-pulse" />
                            <div className="relative h-full rounded-3xl overflow-hidden border-2 border-white/10 transition-all duration-700 group-hover:scale-[1.05] group-hover:-rotate-y-12 group-hover:rotate-x-2 group-hover:border-cyan-500/60 shadow-[0_0_80px_-20px_rgba(6,182,212,0.4)] aspect-[16/10] lg:aspect-auto">
                                <Image
                                    src="/projects/neural-interface-1.jpg"
                                    alt="AI Assistant Voice Interface"
                                    fill
                                    className="object-cover contrast-[1.15] brightness-[1.1] saturate-[1.1]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent h-1/2 w-full -top-1/2 group-hover:animate-scan z-10" />
                                <div className="absolute inset-x-0 top-0 h-[200%] w-[150%] bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-[150%] -translate-y-[50%] group-hover:translate-x-[150%] transition-transform duration-1500 ease-in-out z-20" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-90" />

                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                                        <p className="text-[10px] font-bold tracking-[0.2em] text-cyan-400 uppercase mb-1">Engine</p>
                                        <p className="text-sm text-white font-medium">Flask / Perplexity Sonar / MongoDB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 7: Gesture-Controlled Game */}
                    <div className="flex flex-col lg:flex-row items-stretch gap-12 group perspective-1000">
                        <div className="flex-1 space-y-8 order-2 lg:order-1 flex flex-col justify-center">
                            <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl transition-all duration-700 group-hover:bg-white/[0.07] group-hover:border-emerald-500/40 h-full flex flex-col justify-center relative overflow-hidden group/text">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                <span className="text-xs font-bold tracking-[0.3em] text-emerald-400/60 uppercase mb-2">HCI & Computer Vision</span>
                                <h3 className="text-4xl font-black text-white mb-6 tracking-tight group-hover:text-emerald-400 transition-colors duration-500">
                                    Gesture <span className="text-emerald-500/80">Command</span> Interface
                                </h3>

                                <div className="space-y-6">
                                    <p className="text-lg leading-relaxed text-slate-300 font-light">
                                        An innovative <span className="text-white font-medium">Human-Computer Interaction</span> project built with <span className="text-emerald-400 font-bold">Python, Mediapipe, and OpenCV</span>. This system processes real-time webcam telemetry to map complex hand gestures directly to Windows keyboard interrupts.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                                        <div className="bg-emerald-500/5 border border-emerald-500/20 p-4 rounded-xl backdrop-blur-md">
                                            <h4 className="text-emerald-400 font-bold text-sm mb-2 uppercase tracking-widest">Core Features</h4>
                                            <ul className="text-xs text-slate-400 space-y-2">
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full" /> Real-time Hand Tracking</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full" /> Sub-20ms Control Latency</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full" /> Dynamic FPS Monitoring</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full" /> Repeat-Key Prevention</li>
                                            </ul>
                                        </div>
                                        <div className="bg-emerald-500/5 border border-emerald-500/20 p-4 rounded-xl backdrop-blur-md">
                                            <h4 className="text-emerald-400 font-bold text-sm mb-2 uppercase tracking-widest">Tech Stack</h4>
                                            <ul className="text-xs text-slate-400 space-y-2">
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full" /> Python 3.8+ Runtime</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full" /> Mediapipe Landmarking</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full" /> PyDirectInput Hooks</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full" /> OpenCV Vision Core</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <p className="text-lg leading-relaxed text-slate-400 font-light">
                                        Architected specifically for high-speed gaming like <span className="italic text-emerald-400 font-medium">Hill Climb Racing</span>. Hand telemetry is mapped so the <span className="text-emerald-300">Right Hand</span> triggers acceleration and <span className="text-emerald-300">Left Hand</span> activates braking/reverse logic.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 relative order-1 lg:order-2">
                            {/* Deep Atmospheric backglow */}
                            <div className="absolute -inset-10 bg-emerald-600/30 rounded-[60px] blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 animate-pulse" />

                            <div className="relative h-full rounded-3xl overflow-hidden border-2 border-white/10 transition-all duration-700 group-hover:scale-[1.05] group-hover:rotate-y-12 group-hover:rotate-x-2 group-hover:border-emerald-500/60 shadow-[0_0_80px_-20px_rgba(16,185,129,0.4)] aspect-[16/10] lg:aspect-auto">
                                <Image
                                    src="/projects/gesture_game_thumb.png"
                                    alt="Gesture Control Interface"
                                    fill
                                    className="object-cover contrast-[1.15] brightness-[1.1] saturate-[1.1]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent h-1/2 w-full -top-1/2 group-hover:animate-scan z-10" />
                                <div className="absolute inset-x-0 top-0 h-[200%] w-[150%] bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-[150%] -translate-y-[50%] group-hover:translate-x-[150%] transition-transform duration-1500 ease-in-out z-20" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-90" />

                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                                        <p className="text-[10px] font-bold tracking-[0.2em] text-emerald-400 uppercase mb-1">Visual Telemetry</p>
                                        <p className="text-sm text-white font-medium">Mediapipe Hands / OpenCV Core 4.8</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 8: BitLinks URL Shortener */}
                    <div className="flex flex-col lg:flex-row-reverse items-stretch gap-12 group perspective-1000">
                        <div className="flex-1 space-y-8 flex flex-col justify-center">
                            <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl transition-all duration-700 group-hover:bg-white/[0.07] group-hover:border-violet-500/40 h-full flex flex-col justify-center relative overflow-hidden group/text">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                <span className="text-xs font-bold tracking-[0.3em] text-violet-400/60 uppercase mb-2">AI-Powered Infrastructure</span>
                                <h3 className="text-4xl font-black text-white mb-6 tracking-tight group-hover:text-violet-400 transition-colors duration-500">
                                    BitLinks <span className="text-violet-500/80">Analytics</span> Engine
                                </h3>

                                <div className="space-y-6">
                                    <p className="text-lg leading-relaxed text-slate-300 font-light">
                                        A production-grade <span className="text-white font-medium">URL Shortening Platform</span> engineered with <span className="text-violet-400 font-bold">Next.js and Claude AI</span>. This system delivers enterprise-level link management with real-time business intelligence.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                                        <div className="bg-violet-500/5 border border-violet-500/20 p-4 rounded-xl backdrop-blur-md">
                                            <h4 className="text-violet-400 font-bold text-sm mb-2 uppercase tracking-widest">Core Features</h4>
                                            <ul className="text-xs text-slate-400 space-y-2">
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-violet-500 rounded-full" /> Custom URL Shortening</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-violet-500 rounded-full" /> Real-Time Analytics Dashboard</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-violet-500 rounded-full" /> CTR & Click Tracking</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-violet-500 rounded-full" /> Secure User Accounts</li>
                                            </ul>
                                        </div>
                                        <div className="bg-violet-500/5 border border-violet-500/20 p-4 rounded-xl backdrop-blur-md">
                                            <h4 className="text-violet-400 font-bold text-sm mb-2 uppercase tracking-widest">AI Development</h4>
                                            <ul className="text-xs text-slate-400 space-y-2">
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-violet-500 rounded-full" /> Claude AI Code Generation</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-violet-500 rounded-full" /> Best Practices Enforcement</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-violet-500 rounded-full" /> Rapid Prototyping</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-violet-500 rounded-full" /> Component Logic Optimization</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <p className="text-lg leading-relaxed text-slate-400 font-light">
                                        Built with <span className="text-violet-300 font-medium">Tailwind CSS</span> for a polished, glassmorphism UI. The analytics dashboard provides key business metrics including <span className="italic text-violet-400">Total Clicks, CTR, and Active Links</span> in real-time.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 relative">
                            <div className="absolute -inset-10 bg-violet-600/30 rounded-[60px] blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 animate-pulse" />
                            <div className="relative h-full rounded-3xl overflow-hidden border-2 border-white/10 transition-all duration-700 group-hover:scale-[1.05] group-hover:-rotate-y-12 group-hover:rotate-x-2 group-hover:border-violet-500/60 shadow-[0_0_80px_-20px_rgba(139,92,246,0.4)] aspect-[16/10] lg:aspect-auto">
                                <Image
                                    src="/projects/bitlinks-dashboard.png"
                                    alt="BitLinks Analytics Dashboard"
                                    fill
                                    className="object-cover contrast-[1.15] brightness-[1.1] saturate-[1.1]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/10 to-transparent h-1/2 w-full -top-1/2 group-hover:animate-scan z-10" />
                                <div className="absolute inset-x-0 top-0 h-[200%] w-[150%] bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-[150%] -translate-y-[50%] group-hover:translate-x-[150%] transition-transform duration-1500 ease-in-out z-20" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-90" />

                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                                        <p className="text-[10px] font-bold tracking-[0.2em] text-violet-400 uppercase mb-1">AI-Assisted Development</p>
                                        <p className="text-sm text-white font-medium">Next.js 15 / Claude AI / Tailwind v4</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 9: Interactive Story Generator */}
                    <div className="flex flex-col lg:flex-row items-stretch gap-12 group perspective-1000">
                        <div className="flex-1 space-y-8 order-2 lg:order-1 flex flex-col justify-center">
                            <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl transition-all duration-700 group-hover:bg-white/[0.07] group-hover:border-pink-500/40 h-full flex flex-col justify-center relative overflow-hidden group/text">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                <span className="text-xs font-bold tracking-[0.3em] text-pink-400/60 uppercase mb-2">Creative Logic</span>
                                <h3 className="text-4xl font-black text-white mb-6 tracking-tight group-hover:text-pink-400 transition-colors duration-500">
                                    Interactive <span className="text-pink-500/80">Story</span> Engine
                                </h3>

                                <div className="space-y-6">
                                    <p className="text-lg leading-relaxed text-slate-300 font-light">
                                        A whimsical <span className="text-white font-medium">Browser-Based Application</span> that demonstrates the power of JavaScript string interpolation and randomized logic. Built entirely with <span className="text-pink-400">Vanilla JS</span> to showcase raw DOM manipulation skills without frameworks.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                                        <div className="bg-pink-500/5 border border-pink-500/20 p-4 rounded-xl backdrop-blur-md">
                                            <h4 className="text-pink-400 font-bold text-sm mb-2 uppercase tracking-widest">Key Mechanics</h4>
                                            <ul className="text-xs text-slate-400 space-y-2">
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-pink-500 rounded-full" /> Dynamic Text Replacement</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-pink-500 rounded-full" /> Random Template Selection</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-pink-500 rounded-full" /> Input Validation & Sanitization</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-pink-500 rounded-full" /> Instant DOM Updates</li>
                                            </ul>
                                        </div>
                                        <div className="bg-pink-500/5 border border-pink-500/20 p-4 rounded-xl backdrop-blur-md">
                                            <h4 className="text-pink-400 font-bold text-sm mb-2 uppercase tracking-widest">Pure Stack</h4>
                                            <ul className="text-xs text-slate-400 space-y-2">
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-pink-500 rounded-full" /> HTML5 Semantic Markup</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-pink-500 rounded-full" /> CSS3 Glassmorphism</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-pink-500 rounded-full" /> Google Fonts (Outfit)</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-pink-500 rounded-full" /> ES6+ JavaScript</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <p className="text-lg leading-relaxed text-slate-400 font-light">
                                        Features a glowing, neon-accented UI that proves complex aesthetics can be achieved with pure CSS3, requiring no external styling libraries.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 relative order-1 lg:order-2">
                            {/* Deep Atmospheric backglow */}
                            <div className="absolute -inset-10 bg-pink-600/30 rounded-[60px] blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 animate-pulse" />

                            <div className="relative h-full rounded-3xl overflow-hidden border-2 border-white/10 transition-all duration-700 group-hover:scale-[1.05] group-hover:rotate-y-12 group-hover:rotate-x-2 group-hover:border-pink-500/60 shadow-[0_0_80px_-20px_rgba(236,72,153,0.4)] aspect-[16/10] lg:aspect-auto">
                                <Image
                                    src="/projects/interactive_story_thumb.png"
                                    alt="Interactive Story Generator Interface"
                                    fill
                                    className="object-cover contrast-[1.15] brightness-[1.1] saturate-[1.1]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/10 to-transparent h-1/2 w-full -top-1/2 group-hover:animate-scan z-10" />
                                <div className="absolute inset-x-0 top-0 h-[200%] w-[150%] bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-[150%] -translate-y-[50%] group-hover:translate-x-[150%] transition-transform duration-1500 ease-in-out z-20" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-90" />

                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                                        <p className="text-[10px] font-bold tracking-[0.2em] text-pink-400 uppercase mb-1">Concept</p>
                                        <p className="text-sm text-white font-medium">User-Driven Narrative Logic</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 10: Pokemon Card Generator */}
                    <div className="flex flex-col lg:flex-row-reverse items-stretch gap-12 group perspective-1000">
                        <div className="flex-1 space-y-8 flex flex-col justify-center">
                            <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl transition-all duration-700 group-hover:bg-white/[0.07] group-hover:border-yellow-500/40 h-full flex flex-col justify-center relative overflow-hidden group/text">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                <span className="text-xs font-bold tracking-[0.3em] text-yellow-400/60 uppercase mb-2">API Integration</span>
                                <h3 className="text-4xl font-black text-white mb-6 tracking-tight group-hover:text-yellow-400 transition-colors duration-500">
                                    Pokémon <span className="text-yellow-500/80">Holo-Card</span> Generator
                                </h3>

                                <div className="space-y-6">
                                    <p className="text-lg leading-relaxed text-slate-300 font-light">
                                        A powerful <span className="text-white font-medium">Async Web App</span> that interfaces with the public PokéAPI. It programmatically generates themed cards based on creature types in real-time.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                                        <div className="bg-yellow-500/5 border border-yellow-500/20 p-4 rounded-xl backdrop-blur-md">
                                            <h4 className="text-yellow-400 font-bold text-sm mb-2 uppercase tracking-widest">Engineering Features</h4>
                                            <ul className="text-xs text-slate-400 space-y-2">
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-yellow-500 rounded-full" /> Asynchronous Data Fetching</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-yellow-500 rounded-full" /> Dynamic CSS Variable Mapping</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-yellow-500 rounded-full" /> Canvas Rendering (html2canvas)</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-yellow-500 rounded-full" /> Error Handling & Loading States</li>
                                            </ul>
                                        </div>
                                        <div className="bg-yellow-500/5 border border-yellow-500/20 p-4 rounded-xl backdrop-blur-md">
                                            <h4 className="text-yellow-400 font-bold text-sm mb-2 uppercase tracking-widest">Tech Stack</h4>
                                            <ul className="text-xs text-slate-400 space-y-2">
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-yellow-500 rounded-full" /> Vanilla JavaScript (ES6+)</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-yellow-500 rounded-full" /> REST API Consumption</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-yellow-500 rounded-full" /> CSS Grid/Flexbox</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-yellow-500 rounded-full" /> Google Fonts (Bangers)</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <p className="text-lg leading-relaxed text-slate-400 font-light">
                                        Includes a robust <span className="text-yellow-300 font-medium">Download Feature</span> that captures the DOM element and converts it to a high-quality PNG image for the user.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 relative">
                            <div className="absolute -inset-10 bg-yellow-600/30 rounded-[60px] blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 animate-pulse" />
                            <div className="relative h-full rounded-3xl overflow-hidden border-2 border-white/10 transition-all duration-700 group-hover:scale-[1.05] group-hover:-rotate-y-12 group-hover:rotate-x-2 group-hover:border-yellow-500/60 shadow-[0_0_80px_-20px_rgba(250,204,21,0.4)] aspect-[16/10] lg:aspect-auto">
                                <Image
                                    src="/projects/pokemon_generator_thumb.png"
                                    alt="Pokemon Card Generator Interface"
                                    fill
                                    className="object-cover contrast-[1.15] brightness-[1.1] saturate-[1.1]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/10 to-transparent h-1/2 w-full -top-1/2 group-hover:animate-scan z-10" />
                                <div className="absolute inset-x-0 top-0 h-[200%] w-[150%] bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-[150%] -translate-y-[50%] group-hover:translate-x-[150%] transition-transform duration-1500 ease-in-out z-20" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-90" />

                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                                        <p className="text-[10px] font-bold tracking-[0.2em] text-yellow-400 uppercase mb-1">Functionality</p>
                                        <p className="text-sm text-white font-medium">REST API / DOM-to-Image / Dynamic Styling</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Project 11: SecureChat */}
                    <div className="flex flex-col lg:flex-row items-stretch gap-12 group perspective-1000">
                        <div className="flex-1 space-y-8 order-2 lg:order-1 flex flex-col justify-center">
                            <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl transition-all duration-700 group-hover:bg-white/[0.07] group-hover:border-emerald-500/40 h-full flex flex-col justify-center relative overflow-hidden group/text">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                <span className="text-xs font-bold tracking-[0.3em] text-emerald-400/60 uppercase mb-2">Security Architecture</span>
                                <h3 className="text-4xl font-black text-white mb-6 tracking-tight group-hover:text-emerald-400 transition-colors duration-500">
                                    Secure<span className="text-emerald-500/80">Chat</span> Platform
                                </h3>

                                <div className="space-y-6">
                                    <p className="text-lg leading-relaxed text-slate-300 font-light">
                                        A production-grade, <span className="text-white font-medium">Real-Time Messaging System</span> engineered for absolute privacy. Features custom reversible encryption algorithms, OTP-based authentication, and a scalable WebSocket architecture for instant delivery.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                                        <div className="bg-emerald-500/5 border border-emerald-500/20 p-4 rounded-xl backdrop-blur-md">
                                            <h4 className="text-emerald-400 font-bold text-sm mb-2 uppercase tracking-widest">Security Core</h4>
                                            <ul className="text-xs text-slate-400 space-y-2">
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full" /> End-to-End Encryption</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full" /> SHA-256 Hashing</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full" /> OTP Verification</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full" /> Session Hijacking Protection</li>
                                            </ul>
                                        </div>
                                        <div className="bg-emerald-500/5 border border-emerald-500/20 p-4 rounded-xl backdrop-blur-md">
                                            <h4 className="text-emerald-400 font-bold text-sm mb-2 uppercase tracking-widest">Backend Tech</h4>
                                            <ul className="text-xs text-slate-400 space-y-2">
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full" /> Python Flask (Single-File)</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full" /> Socket.IO / WebSockets</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full" /> MongoDB (Atlas)</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full" /> Binary File Handling</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <p className="text-lg leading-relaxed text-slate-400 font-light">
                                        Demonstrates advanced backend concepts by condensing a full-stack real-time application into a highly portable, single-file server architecture.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 relative order-1 lg:order-2">
                            {/* Deep Atmospheric backglow */}
                            <div className="absolute -inset-10 bg-emerald-600/30 rounded-[60px] blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 animate-pulse" />

                            <div className="relative h-full rounded-3xl overflow-hidden border-2 border-white/10 transition-all duration-700 group-hover:scale-[1.05] group-hover:rotate-y-12 group-hover:rotate-x-2 group-hover:border-emerald-500/60 shadow-[0_0_80px_-20px_rgba(16,185,129,0.4)] aspect-[16/10] lg:aspect-auto">
                                <Image
                                    src="/projects/securechat_thumb.png"
                                    alt="SecureChat Encrypted Interface"
                                    fill
                                    className="object-cover contrast-[1.15] brightness-[1.1] saturate-[1.1]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent h-1/2 w-full -top-1/2 group-hover:animate-scan z-10" />
                                <div className="absolute inset-x-0 top-0 h-[200%] w-[150%] bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-[150%] -translate-y-[50%] group-hover:translate-x-[150%] transition-transform duration-1500 ease-in-out z-20" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-90" />

                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                                        <p className="text-[10px] font-bold tracking-[0.2em] text-emerald-400 uppercase mb-1">Architecture</p>
                                        <p className="text-sm text-white font-medium">Socket.IO / MongoDB / Cryptography</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 12: X (Twitter) Clone */}
                    <div className="flex flex-col lg:flex-row-reverse items-stretch gap-12 group perspective-1000">
                        <div className="flex-1 space-y-8 flex flex-col justify-center">
                            <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl transition-all duration-700 group-hover:bg-white/[0.07] group-hover:border-slate-500/40 h-full flex flex-col justify-center relative overflow-hidden group/text">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-500/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                <span className="text-xs font-bold tracking-[0.3em] text-slate-400/60 uppercase mb-2">Frontend Mastery</span>
                                <h3 className="text-4xl font-black text-white mb-6 tracking-tight group-hover:text-slate-200 transition-colors duration-500">
                                    X (Twitter) <span className="text-slate-500/80">UI Clone</span>
                                </h3>

                                <div className="space-y-6">
                                    <p className="text-lg leading-relaxed text-slate-300 font-light">
                                        A pixel-perfect <span className="text-white font-medium">Responsive Interface Replication</span> of the modern social media giant. Built with <span className="text-slate-400 font-bold">HTML5 & Tailwind CSS</span>, focusing on layout precision, component scalability, and fluid responsiveness.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                                        <div className="bg-slate-500/5 border border-slate-500/20 p-4 rounded-xl backdrop-blur-md">
                                            <h4 className="text-slate-400 font-bold text-sm mb-2 uppercase tracking-widest">Design Fidelity</h4>
                                            <ul className="text-xs text-slate-400 space-y-2">
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-slate-500 rounded-full" /> Authentic 3-Column Grid</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-slate-500 rounded-full" /> Mobile-First Adaptation</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-slate-500 rounded-full" /> Material Symbols Integration</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-slate-500 rounded-full" /> Dark Mode Optimization</li>
                                            </ul>
                                        </div>
                                        <div className="bg-slate-500/5 border border-slate-500/20 p-4 rounded-xl backdrop-blur-md">
                                            <h4 className="text-slate-400 font-bold text-sm mb-2 uppercase tracking-widest">Utility Stack</h4>
                                            <ul className="text-xs text-slate-400 space-y-2">
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-slate-500 rounded-full" /> HTML5 Semantic Structure</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-slate-500 rounded-full" /> Tailwind CSS Utility Classes</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-slate-500 rounded-full" /> Responsive Breakpoints</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-slate-500 rounded-full" /> SVG & Flexbox Layouts</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <p className="text-lg leading-relaxed text-slate-400 font-light">
                                        Demonstrates the ability to deconstruct complex UI patterns and rebuild them with cleaner, maintainable modern CSS utilities.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 relative">
                            {/* Deep Atmospheric backglow */}
                            <div className="absolute -inset-10 bg-slate-600/30 rounded-[60px] blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 animate-pulse" />

                            <div className="relative h-full rounded-3xl overflow-hidden border-2 border-white/10 transition-all duration-700 group-hover:scale-[1.05] group-hover:-rotate-y-12 group-hover:rotate-x-2 group-hover:border-slate-500/60 shadow-[0_0_80px_-20px_rgba(100,116,139,0.4)] aspect-[16/10] lg:aspect-auto">
                                <Image
                                    src="/projects/x_clone_thumb.png"
                                    alt="X Clone Interface"
                                    fill
                                    className="object-cover contrast-[1.15] brightness-[1.1] saturate-[1.1]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-500/10 to-transparent h-1/2 w-full -top-1/2 group-hover:animate-scan z-10" />
                                <div className="absolute inset-x-0 top-0 h-[200%] w-[150%] bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-[150%] -translate-y-[50%] group-hover:translate-x-[150%] transition-transform duration-1500 ease-in-out z-20" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-90" />

                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                                        <p className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-1">Styling Mastery</p>
                                        <p className="text-sm text-white font-medium">Tailwind CSS / Responsive Grid / UI Patterns</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 13: Budget Tracker */}
                    <div className="flex flex-col lg:flex-row items-stretch gap-12 group perspective-1000">
                        <div className="flex-1 space-y-8 order-2 lg:order-1 flex flex-col justify-center">
                            <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl transition-all duration-700 group-hover:bg-white/[0.07] group-hover:border-cyan-500/40 h-full flex flex-col justify-center relative overflow-hidden group/text">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                <span className="text-xs font-bold tracking-[0.3em] text-cyan-400/60 uppercase mb-2">Financial Management</span>
                                <h3 className="text-4xl font-black text-white mb-6 tracking-tight group-hover:text-cyan-400 transition-colors duration-500">
                                    Budget <span className="text-cyan-500/80">Tracker</span>
                                </h3>

                                <div className="space-y-6">
                                    <p className="text-lg leading-relaxed text-slate-300 font-light">
                                        A comprehensive <span className="text-white font-medium">Expense Management System</span> that enables real-time budget tracking and financial monitoring. Built with <span className="text-cyan-400">Vanilla JavaScript</span> and <span className="text-cyan-400">Tailwind CSS</span> for optimal performance and responsiveness.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                                        <div className="bg-cyan-500/5 border border-cyan-500/20 p-4 rounded-xl backdrop-blur-md">
                                            <h4 className="text-cyan-400 font-bold text-sm mb-2 uppercase tracking-widest">Core Features</h4>
                                            <ul className="text-xs text-slate-400 space-y-2">
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-cyan-500 rounded-full" /> Real-time Balance Calculation</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-cyan-500 rounded-full" /> Expense CRUD Operations</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-cyan-500 rounded-full" /> Dynamic Budget Updates</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-cyan-500 rounded-full" /> Input Validation & Error Handling</li>
                                            </ul>
                                        </div>
                                        <div className="bg-cyan-500/5 border border-cyan-500/20 p-4 rounded-xl backdrop-blur-md">
                                            <h4 className="text-cyan-400 font-bold text-sm mb-2 uppercase tracking-widest">Tech Stack</h4>
                                            <ul className="text-xs text-slate-400 space-y-2">
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-cyan-500 rounded-full" /> HTML5 Semantic Markup</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-cyan-500 rounded-full" /> Tailwind CSS Utilities</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-cyan-500 rounded-full" /> ES6+ JavaScript</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-cyan-500 rounded-full" /> Local State Management</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <p className="text-lg leading-relaxed text-slate-400 font-light">
                                        Demonstrates proficiency in DOM manipulation, event handling, and building interactive financial tools without external frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 relative order-1 lg:order-2">
                            {/* Deep Atmospheric backglow */}
                            <div className="absolute -inset-10 bg-cyan-600/30 rounded-[60px] blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 animate-pulse" />

                            <div className="relative h-full rounded-3xl overflow-hidden border-2 border-white/10 transition-all duration-700 group-hover:scale-[1.05] group-hover:rotate-y-12 group-hover:rotate-x-2 group-hover:border-cyan-500/60 shadow-[0_0_80px_-20px_rgba(6,182,212,0.4)] aspect-[16/10] lg:aspect-auto">
                                <Image
                                    src="/projects/budget_tracker_thumb.png"
                                    alt="Budget Tracker Interface"
                                    fill
                                    className="object-cover contrast-[1.15] brightness-[1.1] saturate-[1.1]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent h-1/2 w-full -top-1/2 group-hover:animate-scan z-10" />
                                <div className="absolute inset-x-0 top-0 h-[200%] w-[150%] bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-[150%] -translate-y-[50%] group-hover:translate-x-[150%] transition-transform duration-1500 ease-in-out z-20" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-90" />

                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                                        <p className="text-[10px] font-bold tracking-[0.2em] text-cyan-400 uppercase mb-1">Financial Tool</p>
                                        <p className="text-sm text-white font-medium">Real-time Tracking / CRUD / Vanilla JS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 14: Code With H-Square */}
                    <div className="flex flex-col lg:flex-row-reverse items-stretch gap-12 group perspective-1000">
                        <div className="flex-1 space-y-8 flex flex-col justify-center">
                            <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl transition-all duration-700 group-hover:bg-white/[0.07] group-hover:border-red-500/40 h-full flex flex-col justify-center relative overflow-hidden group/text">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                <span className="text-xs font-bold tracking-[0.3em] text-red-400/60 uppercase mb-2">Educational Repository</span>
                                <h3 className="text-4xl font-black text-white mb-6 tracking-tight group-hover:text-red-400 transition-colors duration-500">
                                    Code With <span className="text-red-500/80">H-Square</span>
                                </h3>

                                <div className="space-y-6">
                                    <p className="text-lg leading-relaxed text-slate-300 font-light">
                                        A comprehensive <span className="text-white font-medium">DSA Learning Platform</span> designed for students and placement aspirants. Features structured tutorials, algorithm implementations, and side-by-side <span className="text-red-400">C++ & Java</span> code examples for mastering data structures and algorithms.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                                        <div className="bg-red-500/5 border border-red-500/20 p-4 rounded-xl backdrop-blur-md">
                                            <h4 className="text-red-400 font-bold text-sm mb-2 uppercase tracking-widest">Learning Features</h4>
                                            <ul className="text-xs text-slate-400 space-y-2">
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-red-500 rounded-full" /> Structured DSA Sheet</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-red-500 rounded-full" /> Concept-based Explanations</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-red-500 rounded-full" /> Beginner-Friendly Flow</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-red-500 rounded-full" /> Placement Preparation</li>
                                            </ul>
                                        </div>
                                        <div className="bg-red-500/5 border border-red-500/20 p-4 rounded-xl backdrop-blur-md">
                                            <h4 className="text-red-400 font-bold text-sm mb-2 uppercase tracking-widest">Tech Coverage</h4>
                                            <ul className="text-xs text-slate-400 space-y-2">
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-red-500 rounded-full" /> C++ Implementations</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-red-500 rounded-full" /> Java Code Examples</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-red-500 rounded-full" /> Algorithm Analysis</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-red-500 rounded-full" /> Backend Concepts</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <p className="text-lg leading-relaxed text-slate-400 font-light">
                                        A personal coding handbook inspired by industry-standard learning approaches, providing a single comprehensive resource for DSA mastery.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 relative">
                            {/* Deep Atmospheric backglow */}
                            <div className="absolute -inset-10 bg-red-600/30 rounded-[60px] blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 animate-pulse" />

                            <div className="relative h-full rounded-3xl overflow-hidden border-2 border-white/10 transition-all duration-700 group-hover:scale-[1.05] group-hover:-rotate-y-12 group-hover:rotate-x-2 group-hover:border-red-500/60 shadow-[0_0_80px_-20px_rgba(239,68,68,0.4)] aspect-[16/10] lg:aspect-auto">
                                <Image
                                    src="/projects/code_h_square_thumb.png"
                                    alt="Code With H-Square DSA Platform"
                                    fill
                                    className="object-cover contrast-[1.15] brightness-[1.1] saturate-[1.1]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/10 to-transparent h-1/2 w-full -top-1/2 group-hover:animate-scan z-10" />
                                <div className="absolute inset-x-0 top-0 h-[200%] w-[150%] bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-[150%] -translate-y-[50%] group-hover:translate-x-[150%] transition-transform duration-1500 ease-in-out z-20" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-90" />

                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                                        <p className="text-[10px] font-bold tracking-[0.2em] text-red-400 uppercase mb-1">Learning Platform</p>
                                        <p className="text-sm text-white font-medium">DSA Sheet / C++ & Java / Algorithms</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 15: Get Me A Chai */}
                    <div className="flex flex-col lg:flex-row items-stretch gap-12 group perspective-1000">
                        <div className="flex-1 space-y-8 order-2 lg:order-1 flex flex-col justify-center">
                            <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl transition-all duration-700 group-hover:bg-white/[0.07] group-hover:border-orange-500/40 h-full flex flex-col justify-center relative overflow-hidden group/text">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                <span className="text-xs font-bold tracking-[0.3em] text-orange-400/60 uppercase mb-2">Crowdfunding Platform</span>
                                <h3 className="text-4xl font-black text-white mb-6 tracking-tight group-hover:text-orange-400 transition-colors duration-500">
                                    Get Me A <span className="text-orange-500/80">Chai ☕</span>
                                </h3>

                                <div className="space-y-6">
                                    <p className="text-lg leading-relaxed text-slate-300 font-light">
                                        A modern <span className="text-white font-medium">Creator-Support Platform</span> enabling financial contributions to content creators. Built with <span className="text-orange-400">Next.js 13+ App Router</span>, featuring scalable architecture, payment flow integration, and real-world product design principles.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                                        <div className="bg-orange-500/5 border border-orange-500/20 p-4 rounded-xl backdrop-blur-md">
                                            <h4 className="text-orange-400 font-bold text-sm mb-2 uppercase tracking-widest">Platform Features</h4>
                                            <ul className="text-xs text-slate-400 space-y-2">
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-orange-500 rounded-full" /> Creator Profile Pages</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-orange-500 rounded-full" /> Support Flow & Donations</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-orange-500 rounded-full" /> Supporter Messages</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-orange-500 rounded-full" /> Payment Gateway Ready</li>
                                            </ul>
                                        </div>
                                        <div className="bg-orange-500/5 border border-orange-500/20 p-4 rounded-xl backdrop-blur-md">
                                            <h4 className="text-orange-400 font-bold text-sm mb-2 uppercase tracking-widest">Tech Stack</h4>
                                            <ul className="text-xs text-slate-400 space-y-2">
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-orange-500 rounded-full" /> Next.js 13+ App Router</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-orange-500 rounded-full" /> React 18 Server Components</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-orange-500 rounded-full" /> Tailwind CSS</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-orange-500 rounded-full" /> Scalable Architecture</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <p className="text-lg leading-relaxed text-slate-400 font-light">
                                        Demonstrates modern Next.js patterns, SEO-friendly routing, and production-ready full-stack development practices.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 relative order-1 lg:order-2">
                            {/* Deep Atmospheric backglow */}
                            <div className="absolute -inset-10 bg-orange-600/30 rounded-[60px] blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 animate-pulse" />

                            <div className="relative h-full rounded-3xl overflow-hidden border-2 border-white/10 transition-all duration-700 group-hover:scale-[1.05] group-hover:rotate-y-12 group-hover:rotate-x-2 group-hover:border-orange-500/60 shadow-[0_0_80px_-20px_rgba(249,115,22,0.4)] aspect-[16/10] lg:aspect-auto">
                                <Image
                                    src="/projects/get_me_chai_thumb.png"
                                    alt="Get Me A Chai Platform"
                                    fill
                                    className="object-cover contrast-[1.15] brightness-[1.1] saturate-[1.1]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/10 to-transparent h-1/2 w-full -top-1/2 group-hover:animate-scan z-10" />
                                <div className="absolute inset-x-0 top-0 h-[200%] w-[150%] bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-[150%] -translate-y-[50%] group-hover:translate-x-[150%] transition-transform duration-1500 ease-in-out z-20" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-90" />

                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                                        <p className="text-[10px] font-bold tracking-[0.2em] text-orange-400 uppercase mb-1">Full Stack Platform</p>
                                        <p className="text-sm text-white font-medium">Next.js 13+ / Crowdfunding / Payment Flows</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 16: Simple Calculator */}
                    <div className="flex flex-col lg:flex-row items-stretch gap-12 group perspective-1000">
                        <div className="flex-1 relative">
                            {/* Deep Atmospheric backglow */}
                            <div className="absolute -inset-10 bg-yellow-600/30 rounded-[60px] blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 animate-pulse" />

                            <div className="relative h-full rounded-3xl overflow-hidden border-2 border-white/10 transition-all duration-700 group-hover:scale-[1.05] group-hover:-rotate-y-12 group-hover:rotate-x-2 group-hover:border-yellow-500/60 shadow-[0_0_80px_-20px_rgba(234,179,8,0.4)] aspect-[16/10] lg:aspect-auto">
                                <Image
                                    src="/projects/simple_calculator_thumb.png"
                                    alt="Simple Calculator Web App"
                                    fill
                                    className="object-cover contrast-[1.1] brightness-[1.1] saturate-[1.1]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/10 to-transparent h-1/2 w-full -top-1/2 group-hover:animate-scan z-10" />
                                <div className="absolute inset-x-0 top-0 h-[200%] w-[150%] bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-[150%] -translate-y-[50%] group-hover:translate-x-[150%] transition-transform duration-1500 ease-in-out z-20" />
                                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#030014] via-[#030014]/50 to-transparent opacity-90" />

                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                                        <p className="text-[10px] font-bold tracking-[0.2em] text-yellow-400 uppercase mb-1">Frontend Utility</p>
                                        <p className="text-sm text-white font-medium">HTML5 / CSS3 / JavaScript / math.js</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 space-y-8 flex flex-col justify-center">
                            <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl transition-all duration-700 group-hover:bg-white/[0.07] group-hover:border-yellow-500/40 h-full flex flex-col justify-center relative overflow-hidden group/text">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                <span className="text-xs font-bold tracking-[0.3em] text-yellow-400/60 uppercase mb-2">Mathematical Tool</span>
                                <h3 className="text-4xl font-black text-white mb-6 tracking-tight group-hover:text-yellow-400 transition-colors duration-500">
                                    Simple <span className="text-yellow-500/80">Calculator 🧮</span>
                                </h3>

                                <div className="space-y-6">
                                    <p className="text-lg leading-relaxed text-slate-300 font-light">
                                        A clean, responsive <span className="text-white font-medium">Simple Calculator</span> built with <span className="text-yellow-400">Vanilla JavaScript</span> and <span className="text-yellow-400">math.js</span>. Designed for accuracy and a premium user experience, featuring glassmorphism elements and smooth mathematical evaluations.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                                        <div className="bg-yellow-500/5 border border-yellow-500/20 p-4 rounded-xl backdrop-blur-md">
                                            <h4 className="text-yellow-400 font-bold text-sm mb-2 uppercase tracking-widest">Key Features</h4>
                                            <ul className="text-xs text-slate-400 space-y-2">
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-yellow-500 rounded-full" /> Arithmetic Operations</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-yellow-500 rounded-full" /> Precision Calculation</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-yellow-500 rounded-full" /> Error Handling</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-yellow-500 rounded-full" /> Responsive Design</li>
                                            </ul>
                                        </div>
                                        <div className="bg-yellow-500/5 border border-yellow-500/20 p-4 rounded-xl backdrop-blur-md">
                                            <h4 className="text-yellow-400 font-bold text-sm mb-2 uppercase tracking-widest">Technical details</h4>
                                            <ul className="text-xs text-slate-400 space-y-2">
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-yellow-500 rounded-full" /> math.js Evaluation</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-yellow-500 rounded-full" /> DOM Manipulation</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-yellow-500 rounded-full" /> CSS Grid Layout</li>
                                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-yellow-500 rounded-full" /> Safe Input Parsing</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <p className="text-lg leading-relaxed text-slate-400 font-light">
                                        Focuses on efficient event handling and safe mathematical parsing, avoiding risky evaluation methods while maintaining a high-frequency UI response.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <style jsx global>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                .rotate-y-12 {
                    transform: rotateY(12deg);
                }
                .-rotate-y-12 {
                    transform: rotateY(-12deg);
                }
                .rotate-x-2 {
                    transform: rotateX(2deg);
                }
                .rotate-x-4 {
                    transform: rotateX(4deg);
                }
                @keyframes scan {
                    from { top: -50%; }
                    to { top: 100%; }
                }
                .animate-scan {
                    animation: scan 3s linear infinite;
                }
            `}</style>
        </Section >
    );
}
