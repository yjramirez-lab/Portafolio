import { useEffect, useState } from 'react';
import { LanguageProvider } from './context';
import { Header, ProfileCard, StackGrid, ProjectsGrid, SimulationsList, CredentialsList, SkillsModal, Footer } from './components';

function Dashboard() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    if (selectedCategoryId) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedCategoryId]);

  return (
    <div className="min-h-screen font-sans p-6 md:p-10 transition-colors">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 items-start">
        {/* Left Column */}
        <div className="flex flex-col order-2 lg:order-1">
          <StackGrid onSelect={setSelectedCategoryId} />
          <ProjectsGrid />
          <SimulationsList />
        </div>

        {/* Right Column */}
        <div className="flex flex-col order-1 lg:order-2">
          <ProfileCard />
          <CredentialsList />
        </div>
      </main>

      <Footer />

      {selectedCategoryId && (
        <SkillsModal
          categoryId={selectedCategoryId}
          onClose={() => setSelectedCategoryId(null)}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Dashboard />
    </LanguageProvider>
  );
}
