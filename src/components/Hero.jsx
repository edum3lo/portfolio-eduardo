import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, BriefcaseBusiness, FileText, Download, Eye, ChevronDown } from 'lucide-react';
import notebookImg from '../assets/notebook.png';
import curriculoPdf from '../assets/curriculo.pdf';

function Hero() {
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <section id="inicio" className="relative min-h-[100svh] overflow-hidden bg-photo-black">
      <img
        src={notebookImg}
        alt="Eduardo trabalhando em um notebook"
        className="absolute inset-x-0 top-0 h-[58svh] w-full object-cover object-[54%_top] brightness-110 md:inset-0 md:h-full md:object-[58%_22%]"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-photo-black/25 via-photo-black/5 to-photo-black md:bg-gradient-to-r md:from-photo-black md:via-photo-black/35 md:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-photo-black via-photo-black/40 to-transparent md:via-transparent md:to-photo-black/20" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(225,25,37,0.34),transparent_46%,rgba(16,212,208,0.24)_84%,transparent)] md:bg-[linear-gradient(105deg,rgba(225,25,37,0.32),transparent_40%,rgba(16,212,208,0.28)_80%,transparent)]" />

      <div className="hero-glow hero-glow--red left-[-12%] top-[16%] h-[55%] w-[60%] md:left-[-6%] md:top-1/4 md:h-[70%] md:w-[45%]" />
      <div className="hero-glow hero-glow--cyan bottom-[6%] right-[-14%] h-[55%] w-[60%] md:right-[-6%] md:top-[8%] md:h-[78%] md:w-[52%]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl items-end px-5 pb-7 pt-24 md:items-center md:px-6 md:pb-16 md:pt-28">
        <div className="w-full max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center text-4xl font-extrabold tracking-tight text-white md:-ml-[3px] md:text-left md:text-6xl"
          >
            Eduardo <span className="text-photo-red">Melo</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-4 text-center text-sm font-bold uppercase tracking-[0.1em] text-photo-cyan md:text-left md:text-base md:tracking-[0.28em]"
          >
            Desenvolvedor Web Full Stack
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-6 max-w-[30rem] text-base leading-relaxed text-zinc-300 text-justify hyphens-auto md:text-lg"
          >
            Transformo ideias em aplicações web completas e de alto desempenho. Meu foco é unir interfaces modernas e intuitivas com um código estruturado e eficiente, conectando a melhor experiência de usuário à sua regra de negócio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="mt-7 grid grid-cols-1 gap-3 min-[390px]:grid-cols-2 md:mt-10 md:flex md:flex-row md:items-center"
          >
            <a
              href="#projetos"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-photo-red px-5 py-3 font-bold text-white shadow-lg shadow-photo-red/20 transition-all duration-300 hover:bg-photo-red-bright hover:shadow-photo-red/30 active:scale-[0.97]"
            >
              Ver projetos
              <ArrowRight size={18} />
            </a>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent('open-chat'))}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.07] px-5 py-3 font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-photo-cyan/60 hover:bg-white/10 hover:text-photo-cyan active:scale-[0.97]"
            >
              <BriefcaseBusiness size={18} />
              Conversar
            </button>

            <div className="relative">
              <button
                type="button"
                onClick={() => setCvOpen((o) => !o)}
                aria-expanded={cvOpen}
                className="inline-flex w-full min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-black/40 px-5 py-3 font-bold text-zinc-200 backdrop-blur-md transition-all duration-300 hover:border-photo-cyan/60 hover:bg-white/[0.05] hover:text-photo-cyan active:scale-[0.97] md:w-auto"
              >
                <FileText size={18} />
                Currículo
                <ChevronDown size={16} className={`transition-transform duration-300 ${cvOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {cvOpen && (
                  <>
                    <div className="fixed inset-0 z-30" onClick={() => setCvOpen(false)} />
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.97 }}
                      transition={{ duration: 0.18 }}
                      className="absolute bottom-full left-0 z-40 mb-2 w-full overflow-hidden rounded-xl border border-white/10 bg-photo-panel shadow-2xl shadow-black/60 backdrop-blur-md md:bottom-auto md:top-full md:mb-0 md:mt-2 md:w-56"
                    >
                      <a
                        href={curriculoPdf}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => setCvOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-zinc-200 transition hover:bg-white/[0.06] hover:text-photo-cyan"
                      >
                        <Eye size={17} />
                        Visualizar
                      </a>
                      <a
                        href={curriculoPdf}
                        download="Currículo Eduardo Melo.pdf"
                        onClick={() => setCvOpen(false)}
                        className="flex items-center gap-3 border-t border-white/10 px-4 py-3 text-sm font-semibold text-zinc-200 transition hover:bg-white/[0.06] hover:text-photo-cyan"
                      >
                        <Download size={17} />
                        Baixar
                      </a>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
