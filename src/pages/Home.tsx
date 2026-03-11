import {
  ShieldCheck,
  Layers,
  Cloud,
  Box,
  Coffee,
  Code2,
  MapPin,
  Mail,
  ArrowRight,
  GraduationCap,
  Award,
  BadgeCheck,
  TestTube,
  FileText,
  RefreshCw,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <span className="text-primary font-bold tracking-widest uppercase text-xs">Available for Hire</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2 tracking-tight text-white">Software Engineer</h1>
          <p className="mt-4 text-slate-400 text-lg leading-relaxed">
            Junior IT Professional specializing in clean architecture, scalable cloud systems, and disciplined development workflows. Committed to delivering production-grade code.
          </p>
        </div>
        <div className="flex items-center gap-4 bg-surface p-4 rounded-xl border border-border">
          <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
            <ShieldCheck className="text-primary w-6 h-6" />
          </div>
          <div>
            <p className="text-xs uppercase font-bold text-slate-400">Identity Verified</p>
            <p className="text-sm font-semibold text-white">Security Clearance Ready</p>
          </div>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Core Tech Stack */}
        <section className="md:col-span-8 bg-surface rounded-xl p-8 border border-border">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold flex items-center gap-2 text-white">
              <Layers className="text-primary w-6 h-6" /> Core Technical Stack
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { icon: Cloud, name: 'AWS' },
              { icon: Box, name: 'Docker' },
              { icon: Coffee, name: 'Java' },
              { icon: Code2, name: 'React' },
            ].map((tech) => (
              <div key={tech.name} className="flex flex-col items-center p-6 rounded-xl bg-bg-dark border border-border group hover:border-primary transition-colors">
                <tech.icon className="w-10 h-10 mb-3 text-slate-400 group-hover:text-primary transition-colors" strokeWidth={1.5} />
                <span className="font-semibold text-slate-200">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Profile Card */}
        <section className="md:col-span-4 bg-primary rounded-xl p-8 text-white flex flex-col justify-between">
          <div>
            <div className="w-16 h-16 rounded-full border-2 border-white/30 overflow-hidden mb-6">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBaDPGrU69ptvCVKKTIYkjEh6A4lLfHw-afpM7BbNq1onenZ3rqRGWMHnRZ5sfUD-zNh1dPufQfB_O03ESw7F8E9LkcRjDloRN7IDf1xQrrte_cMI5THsvQi9B8Le1gXxzoVg5EvFCM5sVda52OGS1Yw5jBXmXT-Ny7FWJkOY5Tc1U8GYFwG7hCkzE4mdYDH_DdAKDNWqPOvQzT9-0Q3kVBgIUSC4sZiXka7xFMFHsNpiH5nvOYXtRDHMW4aPyr60MfQjrs21ReBA" alt="Alex Chen" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-bold">Alex Chen</h3>
            <p className="text-white/80 mt-2">B.S. Computer Science</p>
          </div>
          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <MapPin className="w-4 h-4" />
              <span>San Francisco, CA (Open to Relocation)</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-4 h-4" />
              <span>alex.chen@it-professional.com</span>
            </div>
          </div>
        </section>

        {/* Featured Project */}
        <section className="md:col-span-7 bg-surface rounded-xl overflow-hidden border border-border flex flex-col">
          <div className="h-48 bg-slate-800 relative overflow-hidden shrink-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
            <div className="absolute bottom-4 left-6 bg-bg-dark/80 backdrop-blur-md px-3 py-1 rounded text-xs font-bold text-white uppercase tracking-wider">
              Production Build
            </div>
          </div>
          <div className="p-8 flex flex-col flex-grow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white">Microservice Auth System</h2>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded">SPRING BOOT</span>
                <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded">REDIS</span>
              </div>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed flex-grow">
              A high-availability authentication service designed for scale. Implements OAuth2/OIDC protocols with a focus on decoupling identity management from application logic.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-lg bg-bg-dark border border-border">
                <p className="text-xs text-slate-500 font-bold uppercase mb-1">Architecture</p>
                <p className="text-sm font-medium text-slate-200">Clean Hexagonal Design</p>
              </div>
              <div className="p-4 rounded-lg bg-bg-dark border border-border">
                <p className="text-xs text-slate-500 font-bold uppercase mb-1">Performance</p>
                <p className="text-sm font-medium text-slate-200">&lt;50ms Response Time</p>
              </div>
            </div>
            <Link to="/projects" className="w-full py-3 border border-border hover:border-primary text-primary font-bold rounded-lg transition-all flex items-center justify-center gap-2 group bg-bg-dark cursor-pointer">
              View Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* Education & Certs */}
        <section className="md:col-span-5 flex flex-col gap-6">
          <div className="bg-surface rounded-xl p-8 border border-border flex-1">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
              <GraduationCap className="text-primary w-6 h-6" /> Education
            </h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg text-slate-200">B.S. in Computer Science</h4>
                <p className="text-slate-500 text-sm">University of Washington | 2020 — 2024</p>
                <p className="mt-2 text-sm text-slate-400">Relevant Coursework: Data Structures, Distributed Systems, Cloud Computing.</p>
              </div>
            </div>
          </div>
          <div className="bg-surface rounded-xl p-8 border border-border flex-1 flex flex-col">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
              <Award className="text-primary w-6 h-6" /> Industry Certs
            </h2>
            <ul className="space-y-4 flex-grow">
              <li className="flex items-center gap-4">
                <div className="h-10 w-10 shrink-0 bg-bg-dark rounded flex items-center justify-center border border-border">
                  <BadgeCheck className="text-primary w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-sm text-slate-200">AWS Certified Cloud Practitioner</p>
                  <p className="text-xs text-slate-500">Validation ID: AWS-7729-110</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="h-10 w-10 shrink-0 bg-bg-dark rounded flex items-center justify-center border border-border">
                  <BadgeCheck className="text-primary w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-sm text-slate-200">Oracle Certified Java SE Programmer</p>
                  <p className="text-xs text-slate-500">Associate Level Foundation</p>
                </div>
              </li>
            </ul>
            <Link to="/certs" className="mt-6 text-sm text-primary font-semibold hover:underline flex items-center gap-1">
              View all certifications <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Professional Philosophy */}
        <section className="md:col-span-12 bg-surface/50 rounded-xl p-8 border border-border text-center">
          <h2 className="text-xl font-bold mb-8 text-white">Professional Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3 flex flex-col items-center">
              <TestTube className="text-primary w-8 h-8" />
              <h4 className="font-bold text-slate-200">Test-Driven Focus</h4>
              <p className="text-sm text-slate-400 max-w-xs">Prioritizing reliability through comprehensive unit and integration testing suites.</p>
            </div>
            <div className="space-y-3 flex flex-col items-center">
              <FileText className="text-primary w-8 h-8" />
              <h4 className="font-bold text-slate-200">Documentation First</h4>
              <p className="text-sm text-slate-400 max-w-xs">Clear API documentation and architecture diagrams for seamless team onboarding.</p>
            </div>
            <div className="space-y-3 flex flex-col items-center">
              <RefreshCw className="text-primary w-8 h-8" />
              <h4 className="font-bold text-slate-200">CI/CD Driven</h4>
              <p className="text-sm text-slate-400 max-w-xs">Automated deployment pipelines to ensure rapid, error-free production cycles.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
