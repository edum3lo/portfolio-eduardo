import { motion } from 'framer-motion';
import { Palette, Smartphone } from 'lucide-react';

function ReactIcon({ className }) {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" aria-hidden="true" className={className || 'h-6 w-6'}>
      <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
      <g fill="none" stroke="#61dafb" strokeWidth="1">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

function VueIcon({ className }) {
  return (
    <svg viewBox="0 0 256 221" aria-hidden="true" className={className || 'h-6 w-6'}>
      <path fill="#41b883" d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0z" />
      <path fill="#35495e" d="M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0z" />
    </svg>
  );
}

function JavaScriptIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className || 'h-6 w-6'}>
      <path fill="#f7df1e" d="M2 2h28v28H2z" />
      <path fill="#111827" d="M20.8 24.5c.6 1 1.4 1.7 2.8 1.7 1.2 0 2-.6 2-1.5 0-1-.8-1.4-2.2-2l-.7-.3c-2.2-.9-3.6-2-3.6-4.4 0-2.2 1.7-3.8 4.3-3.8 1.9 0 3.2.6 4.2 2.3l-2.3 1.5c-.5-.9-1.1-1.2-1.9-1.2-.9 0-1.5.6-1.5 1.2 0 .9.6 1.2 1.9 1.8l.7.3c2.6 1.1 4 2.2 4 4.6 0 2.7-2.1 4.1-4.9 4.1-2.8 0-4.6-1.3-5.4-3l2.6-1.3Zm-10.5.3c.5.8 1 1.4 2 1.4 1 0 1.7-.4 1.7-2V14.4h3.2v9.9c0 3.3-1.9 4.8-4.8 4.8-2.6 0-4.1-1.3-4.8-3l2.7-1.3Z" />
    </svg>
  );
}

function HtmlIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className || 'h-6 w-6'}>
      <path fill="#e34f26" d="M5 3h22l-2 23-9 3-9-3L5 3Z" />
      <path fill="#ef652a" d="M16 5v21.8l7.3-2.4L25 5h-9Z" />
      <path fill="#fff" d="M9.5 8h13l-.2 2.7H12.4l.3 3h9.4l-.8 8-5.3 1.8-5.3-1.8-.4-4.1h2.7l.2 2 2.8.8 2.8-.8.3-3.2h-9l-.7-8.4Z" />
    </svg>
  );
}

function CssIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className || 'h-6 w-6'}>
      <path fill="#1572b6" d="M5 3h22l-2 23-9 3-9-3L5 3Z" />
      <path fill="#33a9dc" d="M16 5v21.8l7.3-2.4L25 5h-9Z" />
      <path fill="#fff" d="M9.5 8h13l-.2 2.7h-9.8l.2 2.8h9.4l-.8 8.2-5.3 1.8-5.3-1.8-.4-4.1H13l.2 2 2.8.8 2.8-.8.3-3.4h-9l-.7-8.2Z" />
    </svg>
  );
}

function TailwindIcon({ className }) {
  return (
    <svg viewBox="0 0 54 33" aria-hidden="true" className={className || 'h-6 w-6'}>
      <path
        fill="#38bdf8"
        d="M27 0C19.8 0 15.3 3.6 13.5 10.8c2.7-3.6 5.9-4.9 9.5-4 2.1.5 3.6 2 5.2 3.6 2.6 2.6 5.5 5.6 11.8 5.6 7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.9 4.9-9.5 4-2.1-.5-3.6-2-5.2-3.6C36.2 3 33.3 0 27 0ZM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.9-4.9 9.5-4 2.1.5 3.6 2 5.2 3.6 2.6 2.6 5.5 5.6 11.8 5.6 7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.9 4.9-9.5 4-2.1-.5-3.6-2-5.2-3.6-2.6-2.6-5.5-5.6-11.8-5.6Z"
      />
    </svg>
  );
}

function ViteIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className || 'h-6 w-6'}>
      <defs>
        <linearGradient id="vite-body" x1="3" y1="2" x2="15" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#41D1FF" />
          <stop offset="1" stopColor="#BD34FE" />
        </linearGradient>
        <linearGradient id="vite-bolt" x1="11" y1="2" x2="13" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFEA83" />
          <stop offset=".5" stopColor="#FFDD35" />
          <stop offset="1" stopColor="#FFA800" />
        </linearGradient>
      </defs>
      <path fill="url(#vite-body)" d="M23.4 3.6 12.5 23.2c-.2.4-.8.4-1 0L.6 3.6c-.2-.4.1-.9.6-.8l10.9 1.9c.1 0 .2 0 .3 0l10.7-1.9c.5-.1.9.4.7.8Z" />
      <path fill="url(#vite-bolt)" d="M17.5 1.6 9.4 3.2c-.1 0-.2.1-.2.3l-.5 8.4c0 .2.2.4.4.3l2.3-.5c.2 0 .4.1.3.4l-.7 3.3c-.1.2.1.4.4.3l1.4-.4c.2-.1.4.1.3.4l-1 5.1c-.1.3.3.5.5.2l.1-.1 5.3-10.6c.1-.2-.1-.5-.3-.4l-2.3.5c-.2.1-.4-.2-.3-.4l1.5-5.2c.1-.3-.2-.5-.5-.4Z" />
    </svg>
  );
}

function DockerIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" fill="#2496ED" className={className || 'h-6 w-6'}>
      <rect x="6" y="12" width="4" height="4" rx="0.4" />
      <rect x="10.5" y="12" width="4" height="4" rx="0.4" />
      <rect x="15" y="12" width="4" height="4" rx="0.4" />
      <rect x="10.5" y="7.5" width="4" height="4" rx="0.4" />
      <rect x="15" y="7.5" width="4" height="4" rx="0.4" />
      <path d="M29 15.2c-1-.7-2.5-.8-3.8-.5-.2-1.1-.9-2.1-1.9-2.7l-.6-.4-.4.6c-.5.9-.7 2-.4 3 .1.4.4.9.7 1.2-.5.3-1.5.6-2.7.6H3.1c-.2 1.6.2 3.2 1 4.5 1 1.5 2.5 2.5 4.5 2.5 4.3.1 8.4-1.9 10.4-6 1.3 0 2.7-.3 3.5-1.4.2-.3.6-.9.7-1.1z" />
    </svg>
  );
}

function SupabaseIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className || 'h-6 w-6'}>
      <defs>
        <linearGradient id="supa-a" x1="4" y1="2" x2="18" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#249361" />
          <stop offset="1" stopColor="#3ECF8E" />
        </linearGradient>
      </defs>
      <path
        fill="url(#supa-a)"
        d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12v8.959a.396.396 0 0 0 .716.233l9.081-12.261.401-.562a1.04 1.04 0 0 0-.836-1.66Z"
      />
    </svg>
  );
}

function GitGithubIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className || 'h-6 w-6'}>
      <path fill="#f05032" d="M12.7 2.6a2.1 2.1 0 0 1 3 0l13.7 13.7a2.1 2.1 0 0 1 0 3L15.7 33a2.1 2.1 0 0 1-3 0L-.9 19.3a2.1 2.1 0 0 1 0-3L12.7 2.6Z" transform="scale(.83) translate(5 -1)" />
      <path fill="#fff" d="M19.4 10.6a2.3 2.3 0 0 0-3 2.9l-3 3a2.3 2.3 0 1 0 1.5 1.5l3-3a2.3 2.3 0 0 0 1.4 0l2.7 2.7a2.3 2.3 0 1 0 1.5-1.5l-2.7-2.7c.2-.5.2-.9 0-1.4l2.3-2.3a2.3 2.3 0 1 0-1.5-1.5l-2.2 2.3Z" />
      <path fill="#111827" d="M22.4 20.4c-3.8 0-6.9 2.9-6.9 6.4 0 2.8 1.8 5.2 4.5 6 .3 0 .5-.1.5-.3v-1.3c-1.8.4-2.2-.8-2.2-.8-.3-.7-.7-.9-.7-.9-.6-.4 0-.4 0-.4.6 0 1 .7 1 .7.6 1 1.5.7 1.9.5.1-.4.2-.7.4-.9-1.5-.2-3-.7-3-3 0-.7.2-1.2.7-1.7-.1-.2-.3-.9.1-1.7 0 0 .6-.2 1.9.7.5-.2 1.1-.2 1.7-.2.6 0 1.2.1 1.7.2 1.3-.9 1.9-.7 1.9-.7.4.8.2 1.5.1 1.7.4.5.7 1 .7 1.7 0 2.3-1.5 2.8-3 3 .2.2.4.6.4 1.2v1.8c0 .2.2.4.5.3 2.7-.9 4.5-3.3 4.5-6 0-3.6-3.1-6.4-6.9-6.4Z" transform="translate(-1 -2) scale(.9)" />
    </svg>
  );
}

function FigmaIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className || 'h-6 w-6'}>
      <path fill="#f24e1e" d="M16 16H9a7 7 0 1 1 0-14h7v14Z" />
      <path fill="#ff7262" d="M16 2h7a7 7 0 1 1 0 14h-7V2Z" />
      <path fill="#a259ff" d="M16 30H9a7 7 0 0 1 0-14h7v14Z" />
      <path fill="#1abcfe" d="M16 16h7a7 7 0 1 1-7 7v-7Z" />
      <path fill="#0acf83" d="M16 16H9a7 7 0 1 1 7-7v7Z" transform="translate(0 7)" />
    </svg>
  );
}

function VercelIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className || 'h-6 w-6'}>
      <path fill="#fff" d="M16 5 30 29H2L16 5Z" />
    </svg>
  );
}

const skills = [
  { name: 'React', icon: ReactIcon },
  { name: 'Vue', icon: VueIcon },
  { name: 'JavaScript', icon: JavaScriptIcon },
  { name: 'HTML5', icon: HtmlIcon },
  { name: 'CSS3', icon: CssIcon },
  { name: 'Tailwind CSS', icon: TailwindIcon },
  { name: 'Vite', icon: ViteIcon },
  { name: 'Docker', icon: DockerIcon },
  { name: 'Supabase', icon: SupabaseIcon },
  { name: 'Git & GitHub', icon: GitGithubIcon },
  { name: 'Vercel', icon: VercelIcon },
  { name: 'Figma', icon: FigmaIcon },
  { name: 'UI Design', icon: Palette, color: 'text-pink-400' },
  { name: 'Responsividade', icon: Smartphone, color: 'text-emerald-400' },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 140, damping: 16 },
  },
};

function Skills() {
  return (
    <section id="habilidades" className="section-shell">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-col items-center text-center md:mb-14"
        >
          <p className="eyebrow">Ferramentas &amp; Tecnologias</p>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-white md:text-4xl">
            O que uso no dia a dia
          </h2>
          <p className="mt-4 max-w-2xl text-justify text-base leading-relaxed text-zinc-400 md:text-center md:text-lg">
            As principais tecnologias que utilizo para construir aplicações web modernas,
            do front-end ao deploy.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-4 gap-2 md:grid-cols-4 md:gap-4 lg:grid-cols-5"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                variants={item}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative flex flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-2 backdrop-blur-sm transition-colors duration-300 hover:border-photo-cyan/30 md:gap-3 md:p-5"
              >
                {/* brilho em gradiente ao passar o mouse */}
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-photo-red/10 via-transparent to-photo-cyan/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                {/* linha superior em gradiente que aparece no hover */}
                <span className="pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-photo-red to-photo-cyan transition-transform duration-300 group-hover:scale-x-100" />

                <div className="relative flex h-7 w-7 items-center justify-center transition-transform duration-300 group-hover:scale-110 md:h-11 md:w-11">
                  <Icon className={`h-full w-full ${skill.color || ''}`} />
                </div>
                <span className="relative text-center text-[9px] font-medium text-zinc-300 transition-colors duration-300 group-hover:text-white md:text-sm">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
