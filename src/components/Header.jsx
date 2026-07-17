import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Sobre', href: '#sobre', id: 'sobre' },
  { name: 'Projetos', href: '#projetos', id: 'projetos' },
  { name: 'Habilidades', href: '#habilidades', id: 'habilidades' },
  { name: 'Contato', href: '#contato', id: 'contato' },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'border-b border-white/10 bg-photo-black/95 py-3 backdrop-blur-xl' : 'py-5 md:py-6'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 md:px-6">
        <motion.a
          href="#inicio"
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-black tracking-tight text-white"
        >
          Eduardo<span className="text-photo-red">.</span>
        </motion.a>

        {/* Nav desktop — links limpos com sublinhado em gradiente */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, i) => {
            const active = activeId === link.id;
            return (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07 }}
                className="group relative py-1 text-sm font-medium tracking-wide"
              >
                <span className={`transition-colors duration-300 ${active ? 'text-white' : 'text-zinc-400 group-hover:text-white'}`}>
                  {link.name}
                </span>
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 w-full origin-left rounded-full bg-gradient-to-r from-photo-red to-photo-cyan transition-transform duration-300 ${
                    active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </motion.a>
            );
          })}
        </div>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMobileMenuOpen}
          className="flex h-11 w-11 items-center justify-center text-zinc-200 transition-colors hover:text-photo-cyan md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isMobileMenuOpen ? (
              <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <X size={24} />
              </motion.span>
            ) : (
              <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                <Menu size={24} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-3 overflow-hidden border-t border-white/10 bg-photo-black/95 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col px-6 py-2">
              {navLinks.map((link) => {
                const active = activeId === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group flex items-center gap-3 border-b border-white/5 py-4 font-semibold last:border-b-0"
                  >
                    <span className={`h-4 w-0.5 rounded-full bg-gradient-to-b from-photo-red to-photo-cyan transition-opacity duration-300 ${active ? 'opacity-100' : 'opacity-0'}`} />
                    <span className={`transition-colors ${active ? 'text-white' : 'text-zinc-300 group-hover:text-photo-cyan'}`}>
                      {link.name}
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
