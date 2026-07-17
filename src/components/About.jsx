import { motion } from 'framer-motion';
import profileImg from '../assets/Perfil.png';

function About() {
  return (
    <section id="sobre" className="section-shell relative overflow-hidden">
      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-5 py-16 md:px-6 md:py-24 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.55 }}
          className="relative mx-auto flex w-full flex-col items-center md:max-w-sm"
        >
          <div className="relative w-28 md:w-full">
            {/* Brilhos contidos atrás do perfil */}
            <div className="pointer-events-none absolute -left-2 top-2 bottom-2 w-[55%] rounded-full bg-photo-red/50 blur-lg mix-blend-screen md:-left-4 md:blur-2xl" />
            <div className="pointer-events-none absolute -right-2 top-2 bottom-2 w-[55%] rounded-full bg-photo-cyan/50 blur-lg mix-blend-screen md:-right-4 md:blur-2xl" />

            <div className="absolute -left-2 -top-2 h-full w-full rounded-full border border-photo-red/25" />
            <div className="relative overflow-hidden rounded-full border border-white/10 bg-photo-panel">
              <img
                src={profileImg}
                alt="Foto de perfil de Eduardo"
                className="aspect-square w-full object-cover object-top opacity-90"
              />
            </div>
          </div>
          <p className="mx-auto mt-6 max-w-fit rounded-full border border-white/10 bg-black/30 px-4 py-1.5 text-center text-[10px] font-bold uppercase tracking-[0.22em] text-photo-cyan backdrop-blur-md md:mt-4 md:px-5 md:py-2 md:text-xs">
            Desenvolvedor Web
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.55 }}
          className="flex flex-col items-center space-y-6 md:items-start"
        >
          <div className="text-center md:text-left">
            <p className="eyebrow">Sobre Mim</p>
            <h2 className="mt-4 max-w-2xl text-2xl font-black leading-tight text-white md:text-4xl">
              Engenharia de Software e Desenvolvimento Full Stack.
            </h2>
          </div>
          <div className="space-y-4 text-justify text-base leading-7 text-zinc-300 md:space-y-5 md:text-left md:text-lg md:leading-8">
            <p>
              Sou estudante de Engenharia de Software com foco prático no ecossistema moderno de desenvolvimento web. Construo arquiteturas escaláveis do front-end ao back-end, priorizando performance, código limpo e a melhor experiência para o usuário final.
            </p>
            <p>
              Tenho forte domínio no ecossistema React (Next.js, Vite), estilização avançada com Tailwind CSS, além de construção e consumo de APIs robustas utilizando Node.js e TypeScript. Minha abordagem une sólidos fundamentos de engenharia com as melhores ferramentas de UI/UX.
            </p>
            <p>
              Atualmente, desenvolvo soluções reais para negócios, incluindo integrações complexas com Inteligência Artificial e plataformas voltadas para alta conversão.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
