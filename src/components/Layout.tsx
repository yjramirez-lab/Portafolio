import { Terminal } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/certs', label: 'Certs' },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-bg-dark text-slate-100 font-sans selection:bg-primary/30">
      <header className="w-full max-w-6xl px-6 py-6 flex items-center justify-between border-b border-border">
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-primary p-2 rounded-lg">
            <Terminal className="text-white w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold tracking-tight">IT Portfolio</h2>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-primary' : 'text-slate-300 hover:text-primary'}`}
            >
              {link.label}
            </Link>
          ))}
          <a href="mailto:alex.chen@it-professional.com" className="text-sm font-medium text-slate-300 hover:text-primary transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer">
            Download CV
          </button>
        </div>
      </header>

      <main className="w-full max-w-6xl px-6 py-12 flex-grow">
        <Outlet />
      </main>

      <footer className="w-full py-8 border-t border-border mt-auto bg-surface text-center">
        <p className="text-slate-500 text-sm">© 2024 Corporate Portfolio. Ready for contribution.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="text-slate-400 hover:text-primary transition-colors text-sm font-medium">LinkedIn</a>
          <a href="#" className="text-slate-400 hover:text-primary transition-colors text-sm font-medium">GitHub</a>
          <a href="#" className="text-slate-400 hover:text-primary transition-colors text-sm font-medium">Behance</a>
        </div>
      </footer>
    </div>
  );
}
