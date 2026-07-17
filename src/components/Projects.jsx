import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, Globe, MousePointer2 } from 'lucide-react';

const projects = [
  {
    title: 'Site Taxista',
    description: 'Site institucional criado para divulgação de serviços de transporte particular, com foco em contato rápido e experiência simples para o cliente.',
    tag: 'Institucional',
    highlights: ['Landing page', 'Contato rápido', 'Responsivo'],
    link: 'https://taxicostarica.vercel.app/',
    github: 'https://github.com/edum3lo/site-taxi_costa_rica',
    stack: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    specs: 'Desenvolvimento focado em performance, acessibilidade e SEO local. Interface otimizada para conversão mobile com botões de chamada rápida e integração direta via WhatsApp API.',
    theme: {
      glow: 'group-hover/flip:bg-photo-amber/20',
      bar: 'bg-photo-amber',
      border: 'border-photo-amber/20',
      bgTag: 'bg-photo-amber/10',
      text: 'text-photo-amber'
    }
  },
  {
    title: 'ContentFlow AI',
    description: 'Plataforma SaaS que usa IA para transformar catálogos de produtos em legendas, roteiros e artes prontas para redes sociais, com geração em lote, renderização de arte no servidor e exportação mobile-first.',
    tag: 'SaaS de IA',
    highlights: ['IA generativa', 'Geração em lote', 'Mobile-first'],
    link: 'https://contentflow-ia-one.vercel.app/?theme=light',
    github: 'https://github.com/edum3lo/ContentFlow-AI',
    stack: ['Next.js', 'TypeScript', 'Node.js', 'OpenAI'],
    specs: 'Plataforma full-stack complexa. Implementação de workers assíncronos para processamento em lote via OpenAI API e renderização de componentes React diretamente no servidor.',
    theme: {
      glow: 'group-hover/flip:bg-photo-cyan/20',
      bar: 'bg-photo-cyan',
      border: 'border-photo-cyan/20',
      bgTag: 'bg-photo-cyan/10',
      text: 'text-photo-cyan'
    }
  },
];

function Projects() {
  return (
    <section id="projetos" className="section-shell">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col items-center text-center md:mb-16"
        >
          <p className="eyebrow">Projetos</p>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-white md:text-4xl">
            Alguns dos meus projetos recentes
          </h2>
        </motion.div>

        <div className="flex flex-col gap-14 md:gap-24">
          {projects.map((project, index) => {
            const reversed = index % 2 === 1;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="group grid items-center gap-8 md:grid-cols-2 md:gap-12"
              >
                {/* Preview ao vivo e Card Traseiro (Flip 3D) */}
                <motion.div
                  initial={{ opacity: 0, x: reversed ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className={`relative group/flip [perspective:1000px] ${reversed ? 'md:order-2' : ''} cursor-pointer`}
                  tabIndex="0"
                >
                  {/* Brilho no hover ajustado por cor */}
                  <div className={`pointer-events-none absolute -inset-3 z-0 rounded-2xl bg-transparent opacity-0 blur-2xl transition-all duration-500 ${project.theme.glow} group-hover/flip:opacity-100`} />

                  <div className="relative z-10 aspect-[16/10] w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover/flip:[transform:rotateY(180deg)] group-focus/flip:[transform:rotateY(180deg)]">
                    
                    {/* Face Frontal (Iframe/Preview) */}
                    <div className="absolute inset-0 overflow-hidden rounded-xl border border-white/10 bg-photo-panel [backface-visibility:hidden]">
                      <div className="absolute inset-x-0 top-0 z-20 h-1 bg-gradient-to-r from-photo-red via-photo-amber to-photo-cyan" />

                      <div className="relative h-full w-full overflow-hidden bg-zinc-900">
                        {project.link ? (
                          <>
                            <div className="absolute inset-0 z-20 bg-transparent" />
                            <iframe
                              src={project.link}
                              title={project.title}
                              tabIndex={-1}
                              loading="lazy"
                              className="absolute left-0 top-0 h-[210%] w-[210%] origin-top-left scale-[0.476] border-none bg-transparent transition-transform duration-700 ease-out pointer-events-none"
                            />
                          </>
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-zinc-800 text-sm text-zinc-500">Sem prévia</div>
                        )}
                      </div>

                      {/* Dica de Hover (Face Frontal) */}
                      <div className="absolute bottom-3 right-3 z-30 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 backdrop-blur-md border border-white/10 text-xs font-medium text-zinc-300 shadow-xl">
                        <MousePointer2 size={14} className="text-photo-cyan animate-pulse" />
                        <span>Ver detalhes</span>
                      </div>
                    </div>

                    {/* Face Traseira (Specs e Stack) */}
                    <div className="absolute inset-0 flex flex-col justify-center overflow-hidden rounded-xl border border-white/10 bg-photo-panel p-6 sm:p-8 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <div className={`absolute inset-x-0 top-0 z-20 h-1 ${project.theme.bar}`} />
                      
                      <h4 className="mb-2 text-lg font-bold text-white md:text-xl">Especificações</h4>
                      <p className="mb-6 text-sm leading-relaxed text-zinc-400 md:text-base">
                        {project.specs}
                      </p>

                      <h4 className="mb-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Stack Principal</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map(tech => (
                          <span 
                            key={tech} 
                            className={`rounded-md border ${project.theme.border} ${project.theme.bgTag} px-2.5 py-1 text-xs font-semibold ${project.theme.text}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Conteúdo */}
                <div className={`relative ${reversed ? 'md:order-1' : ''}`}>
                  <span
                    className="pointer-events-none absolute -top-12 -z-0 select-none text-8xl font-black leading-none text-white/[0.04] transition-all duration-500 group-hover:text-white/[0.07] md:text-9xl"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="relative z-10">
                    <span className="inline-block rounded-md border border-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-photo-cyan">
                      {project.tag}
                    </span>

                    <h3 className="mt-4 text-2xl font-bold text-white md:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-4 max-w-lg text-base leading-relaxed text-zinc-400">
                      {project.description}
                    </p>

                    {project.highlights && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.highlights.map((item) => (
                          <span
                            key={item}
                            className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-zinc-300"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-7 flex flex-wrap items-center gap-3">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="group/btn inline-flex items-center gap-2 rounded-lg bg-photo-cyan/10 px-5 py-2.5 text-sm font-semibold text-photo-cyan transition hover:bg-photo-cyan hover:text-black"
                        >
                          <Globe size={16} />
                          Acessar site
                          <ArrowUpRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                        >
                          <Code2 size={16} />
                          Ver código
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
