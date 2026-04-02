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

                <button onClick={toggleLanguage} className="font-mono text-xs border border-[var(--border-color)] px-3 py-1.5 rounded text-[var(--text-main)] hover:bg-[var(--bg-card-hover)] transition-colors uppercase">
                    {language}
                </button>

                <button onClick={toggleTheme} className="p-2 border border-[var(--border-color)] rounded text-[var(--text-main)] hover:bg-[var(--bg-card-hover)] transition-colors flex items-center justify-center">
                    <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={16} />
                </button>
                <a href={data.personal.cvLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[var(--accent)] text-white px-4 py-2 rounded font-semibold text-sm hover:bg-blue-500 transition-colors shadow">
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
            <img src={data.personal.avatarUrl} alt="Profile" className="w-28 h-28 rounded-full border-4 border-white/20 mb-5 object-cover bg-[var(--bg-main)]" />
            <h1 className="text-2xl font-bold mb-1">{data.personal.name}</h1>
            <h2 className="text-sm text-white/80 mb-6 font-medium">{data.personal.title}</h2>
            <div className="w-full flex flex-col gap-3 text-sm text-white/90">
                <div className="flex items-center gap-2 justify-center">
                    <Icon name="map-pin" size={16} />
                    <span>{data.personal.location}</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                    <Icon name="mail" size={16} />
                    <a href={`mailto:${data.personal.email}`} className="hover:underline">{data.personal.email}</a>
                </div>
                <div className="mt-3">
                    <a href={data.personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-white/20 active:bg-white/30 text-white px-4 py-2.5 rounded font-semibold text-sm hover:bg-white/25 transition-colors w-full">
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
                {data.stackCategories.map(cat => (
                    <button
                        key={cat.id}
                        onClick={() => onSelect(cat.id)}
                        className="flex flex-col items-center gap-3 p-6 bg-[var(--bg-main)] border border-[var(--border-color)] rounded-lg text-[var(--text-muted)] hover:bg-[var(--bg-card-hover)] hover:-translate-y-1 hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all group"
                    >
                        <div className="group-hover:text-[var(--accent)] transition-colors"><Icon name={cat.icon} size={32} /></div>
                        <span className="font-mono text-sm font-semibold text-center">{cat.title}</span>
                    </button>
                ))}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.projects.map(proj => (
                    <div key={proj.id} className="flex flex-col bg-[var(--bg-main)] border border-[var(--border-color)] rounded-lg overflow-hidden hover:border-[var(--accent)] transition-colors group">
                        <img src={proj.thumbnail} alt={proj.title} className="w-full h-40 object-cover border-b border-[var(--border-color)] grayscale-[80%] brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-300" />
                        <div className="p-5 flex flex-col flex-grow">
                            <h3 className="text-lg text-[var(--text-light)] mb-2 font-semibold">{proj.title}</h3>
                            <p className="text-sm text-[var(--text-muted)] mb-5 flex-grow leading-relaxed">{proj.description}</p>

                            <div className="flex gap-4 mt-auto pt-4 mb-4 border-t border-dashed border-[var(--border-color)] flex-wrap">
                                {proj.links && proj.links.map((link, idx) => (
                                    <a key={idx} href={link.url} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-semibold text-[var(--text-main)] hover:text-[var(--accent)] transition-colors">
                                        <Icon name={link.icon} size={14} /> {link.title}
                                    </a>
                                ))}
                            </div>

                            <div className="flex gap-2 flex-wrap font-mono">
                                {proj.tech.map((t, index) => {
                                    let badgeColors = "bg-blue-500/10 text-blue-400 border border-blue-500/20";
                                    if (t.class === 'tag-data') badgeColors = "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20";
                                    if (t.class === 'tag-ai') badgeColors = "bg-violet-500/10 text-violet-400 border border-violet-500/20";
                                    if (t.class === 'tag-tools') badgeColors = "bg-orange-500/10 text-orange-400 border border-orange-500/20";

                                    return <span key={index} className={`text-[0.7rem] px-2 py-1 rounded font-medium ${badgeColors}`}>{t.label}</span>
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
                                <img src={sim.logoUrl} alt={sim.company} className="w-10 h-10 object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all bg-white rounded" />
                                <div>
                                    <h3 className="text-[1.05rem] text-[var(--text-light)] font-semibold leading-tight">{sim.role}</h3>
                                    <div className="text-sm text-[var(--accent)] mt-0.5">{sim.company}</div>
                                </div>
                            </div>
                            <div className="font-mono text-xs text-[var(--text-muted)] bg-[var(--bg-card)] px-2 py-1 rounded border border-[var(--border-color)] hidden sm:block">{sim.period}</div>
                        </div>
                        <p className="text-sm text-[var(--text-muted)] mb-4">{sim.description}</p>
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
                                return <span key={index} className={`text-[0.7rem] px-2 py-1 rounded font-medium ${badgeColors}`}>{t.label}</span>
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
                    <a key={cert.id} href={cert.url} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-4 p-4 bg-[var(--bg-main)] border border-[var(--border-color)] rounded-lg hover:border-[var(--text-muted)] transition-colors group">
                        <div className="flex items-center gap-4">
                            <img src={cert.iconUrl} alt={`${cert.issuer} icon`} className="w-8 h-8 grayscale object-contain group-hover:grayscale-0 transition-all bg-white rounded p-1" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                            <div>
                                <h3 className="text-sm font-semibold text-[var(--text-light)]">{cert.title}</h3>
                                <div className="font-mono text-[11px] text-[var(--text-muted)] mt-1">{cert.issuer}</div>
                            </div>
                        </div>
                        <div className="font-mono text-[var(--accent)] text-xs hidden sm:block">{cert.date}</div>
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

                <div className="flex items-center gap-3 text-xl text-[var(--text-light)] font-bold mb-3 mt-2 md:mt-0">
                    <Icon name={selectedCategory.icon} size={28} className="text-[var(--accent)]" />
                    {selectedCategory.title}
                </div>
                <div className="text-sm text-[var(--text-muted)] mb-6 pb-6 border-b border-[var(--border-color)]">
                    {selectedCategory.description}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedCategory.skills.map((skill, index) => (
                        <div key={index} className="flex items-center gap-3 p-4 bg-[var(--bg-main)] border border-[var(--border-color)] rounded-lg">
                            <Icon name={skill.icon} size={20} className="text-[var(--accent)]" />
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
}
