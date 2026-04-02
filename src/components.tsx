import React from 'react';
import * as LucideIcons from 'lucide-react';
import { useLanguage } from './context';
import { portfolioData } from './data';
import { motion } from 'motion/react';

export const Icon = ({ name, size = 24, className = "" }: { name: string, size?: number, className?: string }) => {
    const toPascalCase = (str: string) => str.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');
    const iconName = toPascalCase(name);
    const LucideIcon = (LucideIcons as any)[iconName];
    if (!LucideIcon) return null;
    return <LucideIcon size={size} className={className} />;
};

// Color map for stack categories
const colorMap: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
    blue: { bg: 'hover:bg-blue-500/10', border: 'hover:border-blue-500', text: 'group-hover:text-blue-400', iconBg: 'bg-blue-500/10', },
    emerald: { bg: 'hover:bg-emerald-500/10', border: 'hover:border-emerald-500', text: 'group-hover:text-emerald-400', iconBg: 'bg-emerald-500/10', },
    violet: { bg: 'hover:bg-violet-500/10', border: 'hover:border-violet-500', text: 'group-hover:text-violet-400', iconBg: 'bg-violet-500/10', },
};

export const Header = ({ theme, toggleTheme }: { theme: string, toggleTheme: () => void }) => {
    const { language, toggleLanguage } = useLanguage();
    const data = portfolioData[language];
    return (
        <header className="max-w-7xl mx-auto flex flex-wrap justify-between items-center py-6 border-b border-[var(--border-color)] mb-10 gap-4">
            <div className="flex items-center gap-3 text-xl font-semibold text-[var(--text-light)]">
                <Icon name="terminal" className="text-[var(--accent)]" size={24} />
                IT Portfolio
            </div>
            <nav className="flex items-center gap-4 sm:gap-6 ml-auto">
                <a href="#stack" className="hidden sm:block font-mono text-sm text-[var(--text-muted)] hover:text-[var(--text-light)] transition-colors">/stack</a>
                <a href="#projects" className="hidden sm:block font-mono text-sm text-[var(--text-muted)] hover:text-[var(--text-light)] transition-colors">/projects</a>
                <a href="#credentials" className="hidden md:block font-mono text-sm text-[var(--text-muted)] hover:text-[var(--text-light)] transition-colors">/credentials</a>

                <button onClick={toggleLanguage} title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'} className="font-mono text-xs border border-[var(--border-color)] px-3 py-1.5 rounded text-[var(--text-main)] hover:bg-[var(--bg-card-hover)] transition-colors uppercase tracking-widest">
                    {language === 'es' ? '🇺🇸 EN' : '🇪🇸 ES'}
                </button>

                <button onClick={toggleTheme} className="p-2 border border-[var(--border-color)] rounded text-[var(--text-main)] hover:bg-[var(--bg-card-hover)] transition-colors flex items-center justify-center">
                    <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={16} />
                </button>
                <a href={data.personal.cvLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[var(--accent)] text-white px-4 py-2 rounded font-semibold text-sm hover:opacity-90 transition-opacity shadow">
                    <Icon name="download" size={16} /> {data.strings.cvButton}
                </a>
            </nav>
        </header>
    );
};

export const ProfileCard = () => {
    const { language } = useLanguage();
    const data = portfolioData[language];
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-[var(--bg-profile)] rounded-xl p-8 text-white flex flex-col items-center text-center mb-8 shadow-lg">
            {/* Avatar: inline style guarantees object-fit:contain regardless of Tailwind purging */}
            <div style={{ width: 140, height: 140, borderRadius: '50%', border: '4px solid rgba(255,255,255,0.3)', marginBottom: 20, overflow: 'hidden', flexShrink: 0, backgroundColor: '#1e3a6e' }}>
                <img
                    src={data.personal.avatarUrl}
                    alt={`${data.personal.name} profile photo`}
                    style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center' }}
                />
            </div>
            <h1 className="text-2xl font-bold mb-1">{data.personal.name}</h1>
            <h2 className="text-sm text-white/80 mb-6 font-medium tracking-wide">{data.personal.title}</h2>
            <div className="w-full flex flex-col gap-3 text-sm text-white/90">
                <div className="flex items-center gap-2 justify-center">
                    <Icon name="map-pin" size={16} />
                    <span>{data.personal.location}</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                    <Icon name="mail" size={16} />
                    <a href={`mailto:${data.personal.email}`} className="hover:underline truncate">{data.personal.email}</a>
                </div>
                <div className="mt-3">
                    <a href={data.personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-white/20 text-white px-4 py-2.5 rounded font-semibold text-sm hover:bg-white/30 transition-colors w-full">
                        <Icon name="linkedin" size={16} /> LinkedIn
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export const StackGrid = ({ onSelect }: { onSelect: (id: string) => void }) => {
    const { language } = useLanguage();
    const data = portfolioData[language];
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} id="stack" className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-6 mb-8 shadow-sm">
            <div className="flex items-center gap-2 text-base text-[var(--text-light)] font-semibold mb-6">
                <Icon name="layers" size={20} className="text-[var(--accent)]" />
                {data.strings.coreStack}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {data.stackCategories.map(cat => {
                    const colors = colorMap[cat.color] || colorMap.blue;
                    return (
                        <button
                            key={cat.id}
                            onClick={() => onSelect(cat.id)}
                            className={`flex flex-col items-center gap-3 p-6 bg-[var(--bg-main)] border border-[var(--border-color)] rounded-lg text-[var(--text-muted)] ${colors.bg} hover:-translate-y-1 ${colors.border} transition-all group cursor-pointer`}
                        >
                            <div className={`p-3 rounded-lg ${colors.iconBg} ${colors.text} transition-colors`}>
                                <Icon name={cat.icon} size={28} />
                            </div>
                            <span className={`font-mono text-sm font-semibold text-center ${colors.text} transition-colors`}>{cat.title}</span>
                        </button>
                    );
                })}
            </div>
        </motion.div>
    );
};

export const ProjectsGrid = () => {
    const { language } = useLanguage();
    const data = portfolioData[language];
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} id="projects" className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-6 mb-8 shadow-sm">
            <div className="flex items-center gap-2 text-base text-[var(--text-light)] font-semibold mb-6">
                <Icon name="folder-git-2" size={20} className="text-[var(--accent)]" />
                {data.strings.projectsDir}
            </div>
            <div className="flex flex-col gap-6">
                {data.projects.map(proj => (
                    // Card uses div + onClick to avoid nested <a> HTML error
                    <div
                        key={proj.id}
                        onClick={() => window.open(proj.notionUrl, '_blank', 'noreferrer')}
                        className="flex flex-col md:flex-row bg-[var(--bg-main)] border border-[var(--border-color)] rounded-xl overflow-hidden hover:border-[var(--accent)] hover:shadow-lg hover:-translate-y-0.5 transition-all group cursor-pointer"
                    >
                        {/* Thumbnail */}
                        <div className="w-full md:w-60 md:flex-shrink-0 overflow-hidden bg-black" style={{ height: 'auto', minHeight: '200px' }}>
                            <img
                                src={proj.thumbnail}
                                alt={proj.title}
                                className="w-full h-full object-cover brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-500"
                                style={{ objectPosition: '50% 40%', minHeight: '200px' }}
                            />
                        </div>
                        {/* Content */}
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-lg text-[var(--text-light)] font-bold mb-2 group-hover:text-[var(--accent)] transition-colors">{proj.title}</h3>
                            <p className="text-sm text-[var(--text-muted)] mb-5 flex-grow leading-relaxed">{proj.description}</p>

                            {/* Action buttons — stop propagation so they don't trigger the card's onClick */}
                            <div className="flex gap-3 mb-5 flex-wrap" onClick={(e) => e.stopPropagation()}>
                                {proj.links && proj.links.map((link, idx) => (
                                    <a
                                        key={idx}
                                        href={link.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${idx === 0
                                            ? 'bg-[var(--accent)] text-white hover:opacity-90 shadow'
                                            : 'border border-[var(--border-color)] text-[var(--text-main)] hover:border-[var(--accent)] hover:text-[var(--accent)]'
                                            }`}
                                    >
                                        <Icon name={link.icon} size={14} />
                                        {link.title}
                                    </a>
                                ))}
                            </div>

                            {/* Tech badges */}
                            <div className="flex gap-2 flex-wrap font-mono">
                                {proj.tech.map((t, index) => {
                                    let badgeColors = "bg-blue-500/10 text-blue-400 border border-blue-500/20";
                                    if (t.class === 'tag-data') badgeColors = "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20";
                                    if (t.class === 'tag-ai') badgeColors = "bg-violet-500/10 text-violet-400 border border-violet-500/20";
                                    if (t.class === 'tag-tools') badgeColors = "bg-orange-500/10 text-orange-400 border border-orange-500/20";
                                    return <span key={index} className={`text-[0.7rem] px-2 py-1 rounded font-medium ${badgeColors}`}>{t.label}</span>;
                                })}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export const SimulationsList = () => {
    const { language } = useLanguage();
    const data = portfolioData[language];
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} id="simulations" className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-6 mb-8 shadow-sm">
            <div className="flex items-center gap-2 text-base text-[var(--text-light)] font-semibold mb-6">
                <Icon name="activity" size={20} className="text-[var(--accent)]" />
                {data.strings.jobSimulations}
            </div>
            <div className="flex flex-col gap-4">
                {data.simulations.map(sim => (
                    <a key={sim.id} href={sim.link} target="_blank" rel="noreferrer" className="block bg-[var(--bg-main)] border border-[var(--border-color)] p-5 rounded-lg hover:bg-[var(--bg-card-hover)] hover:border-[var(--accent)] hover:-translate-y-0.5 transition-all group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <img src={sim.logoUrl} alt={sim.company} className="w-10 h-10 object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all bg-white rounded p-1" />
                                <div>
                                    <h3 className="text-[1.05rem] text-[var(--text-light)] font-semibold leading-tight">{sim.role}</h3>
                                    <div className="text-sm text-[var(--accent)] mt-0.5">{sim.company}</div>
                                </div>
                            </div>
                            <div className="font-mono text-xs text-[var(--text-muted)] bg-[var(--bg-card)] px-2 py-1 rounded border border-[var(--border-color)] hidden sm:block">{sim.period}</div>
                        </div>
                        <p className="text-sm text-[var(--text-muted)] mb-4 italic">{sim.description}</p>
                        <ul className="list-none mb-5 space-y-2">
                            {sim.features.map((f, index) => (
                                <li key={index} className="relative pl-5 text-sm text-[var(--text-muted)]">
                                    <span className="absolute left-0 text-[var(--accent)] font-mono">{'>'}</span> {f}
                                </li>
                            ))}
                        </ul>
                        <div className="flex gap-2 flex-wrap pt-4 border-t border-dashed border-[var(--border-color)] font-mono">
                            {sim.tech.map((t, index) => {
                                let badgeColors = "bg-blue-500/10 text-blue-400 border border-blue-500/20";
                                if (t.class === 'tag-data') badgeColors = "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20";
                                if (t.class === 'tag-ai') badgeColors = "bg-violet-500/10 text-violet-400 border border-violet-500/20";
                                if (t.class === 'tag-tools') badgeColors = "bg-orange-500/10 text-orange-400 border border-orange-500/20";
                                return <span key={index} className={`text-[0.7rem] px-2 py-1 rounded font-medium ${badgeColors}`}>{t.label}</span>;
                            })}
                        </div>
                    </a>
                ))}
            </div>
        </motion.div>
    );
};

export const CredentialsList = () => {
    const { language } = useLanguage();
    const data = portfolioData[language];
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} id="credentials" className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-6 mb-8 shadow-sm">
            <div className="flex items-center gap-2 text-base text-[var(--text-light)] font-semibold mb-6">
                <Icon name="shield-check" size={20} className="text-[var(--accent)]" />
                {data.strings.secureCredentials}
            </div>
            <div className="flex flex-col gap-3">
                {data.education.map(cert => (
                    <a key={cert.id} href={cert.url} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-4 p-4 bg-[var(--bg-main)] border border-[var(--border-color)] rounded-lg hover:border-[var(--accent)] transition-colors group">
                        <div className="flex items-center gap-4">
                            <img src={cert.iconUrl} alt={`${cert.issuer} icon`} className="w-8 h-8 grayscale object-contain group-hover:grayscale-0 transition-all bg-white rounded p-1 flex-shrink-0" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                            <div>
                                <h3 className="text-sm font-semibold text-[var(--text-light)]">{cert.title}</h3>
                                <div className="font-mono text-[11px] text-[var(--text-muted)] mt-1">{cert.issuer}</div>
                            </div>
                        </div>
                        <div className="font-mono text-[var(--accent)] text-xs hidden sm:block flex-shrink-0">{cert.date}</div>
                    </a>
                ))}
            </div>
        </motion.div>
    );
};

export const SkillsModal = ({ categoryId, onClose }: { categoryId: string | null, onClose: () => void }) => {
    const { language } = useLanguage();
    const data = portfolioData[language];
    const selectedCategory = data.stackCategories.find(c => c.id === categoryId);
    if (!selectedCategory) return null;

    const colors = colorMap[selectedCategory.color] || colorMap.blue;

    return (
        <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl w-full max-w-xl p-8 relative shadow-2xl"
            >
                <button onClick={onClose} className="absolute top-5 right-5 text-[var(--text-muted)] hover:text-[var(--text-light)] bg-transparent transition-colors p-1 rounded-md">
                    <Icon name="x" size={24} />
                </button>
                <div className={`flex items-center gap-3 text-xl text-[var(--text-light)] font-bold mb-3 mt-2 md:mt-0`}>
                    <div className={`p-2 rounded-lg ${colors.iconBg} ${colors.text}`}>
                        <Icon name={selectedCategory.icon} size={24} />
                    </div>
                    {selectedCategory.title}
                </div>
                <div className="text-sm text-[var(--text-muted)] mb-6 pb-6 border-b border-[var(--border-color)]">
                    {selectedCategory.description}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedCategory.skills.map((skill, index) => (
                        <div key={index} className={`flex items-center gap-3 p-4 bg-[var(--bg-main)] border border-[var(--border-color)] rounded-lg ${colors.iconBg}`}>
                            <Icon name={skill.icon} size={20} className={colors.text.replace('group-hover:', '')} />
                            <span className="text-sm text-[var(--text-light)] font-medium">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export const Footer = () => {
    const { language } = useLanguage();
    const data = portfolioData[language];
    return (
        <footer className="text-center py-10 mt-10 border-t border-[var(--border-color)]">
            <p className="font-mono text-xs text-[var(--text-muted)]">{data.strings.systemLog}</p>
        </footer>
    );
};
