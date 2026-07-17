import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Loader2, CheckCircle2, ArrowUpRight } from 'lucide-react';

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/eduardomelonunes2001@gmail.com';

// Logos de marca (o Lucide não inclui ícones de marca nesta versão)
function LinkedinIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .78 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .78 23.2 0 22.22 0z" />
    </svg>
  );
}

function GithubIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58 0-.28-.01-1.03-.02-2.02-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.94 0-1.31.47-2.39 1.24-3.23-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.92 1.23 3.23 0 4.61-2.8 5.63-5.48 5.93.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
    </svg>
  );
}

const socials = [
  { name: 'LinkedIn', handle: 'in/oeduardomnunes', icon: LinkedinIcon, href: 'https://www.linkedin.com/in/oeduardomnunes/' },
  { name: 'Email', handle: 'eduardomelonunes2001@gmail.com', icon: Mail, href: 'mailto:eduardomelonunes2001@gmail.com' },
  { name: 'GitHub', handle: 'github.com/edum3lo', icon: GithubIcon, href: 'https://github.com/edum3lo' },
];

const listStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const listItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Nova mensagem de ${form.name || 'visitante'} pelo portfólio`,
          _template: 'table',
        }),
      });
      const data = await res.json();
      if (data.success === 'true' || data.success === true) {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full rounded-lg border border-white/12 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-500 focus:border-photo-cyan focus:bg-white/[0.06]';

  return (
    <section id="contato" className="section-shell">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Coluna esquerda: texto + redes */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.55 }}
          >
            <div className="text-center lg:text-left">
              <p className="eyebrow">Contato</p>
              <h2 className="mt-4 text-2xl font-black leading-tight text-white lg:text-[1.75rem] xl:text-[2.2rem] whitespace-nowrap">
                Vamos trabalhar juntos?
              </h2>
            </div>
            <p className="mt-5 text-base leading-7 text-zinc-300 md:text-lg text-justify hyphens-auto">
              Estou disponível para oportunidades de estágio, posições efetivas e projetos
              freelance. Se a sua equipe procura um desenvolvedor comprometido com qualidade
              e com a experiência de quem usa, ficarei feliz em conversar. Envie uma mensagem
              e retorno o mais rápido possível.
            </p>

            <motion.div
              variants={listStagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              className="mt-8 flex flex-col gap-3"
            >
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    variants={listItem}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="group relative flex items-center gap-4 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-colors duration-300 hover:border-photo-cyan/50 hover:bg-photo-cyan/[0.06]"
                  >
                    {/* barra de destaque que cresce no hover */}
                    <span className="absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 bg-photo-cyan transition-transform duration-300 group-hover:scale-y-100" />

                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-photo-black text-zinc-300 transition-colors duration-300 group-hover:border-photo-cyan/60 group-hover:text-photo-cyan">
                      <Icon size={20} />
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold text-white">{social.name}</p>
                      <p className="truncate text-xs text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                        {social.handle}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-zinc-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-photo-cyan"
                    />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Coluna direita: formulário */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-photo-panel p-6 md:p-8 lg:col-span-7"
          >
            <div className="absolute inset-x-0 top-0 h-0.5 bg-photo-cyan/50" />

            {status === 'sent' ? (
              <motion.div
                role="status"
                aria-live="polite"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-[340px] flex-col items-center justify-center text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-photo-cyan/40 bg-photo-cyan/10 text-photo-cyan">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">Mensagem enviada</h3>
                <p className="mt-2 max-w-xs text-sm text-zinc-400">
                  Obrigado pelo contato. Retorno para você o mais rápido possível.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-6 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-photo-cyan/60 hover:text-photo-cyan"
                >
                  Enviar outra mensagem
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="c-name" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      Nome
                    </label>
                    <input
                      id="c-name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="c-email" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      E-mail
                    </label>
                    <input
                      id="c-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="voce@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="c-message" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Mensagem
                  </label>
                  <textarea
                    id="c-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Conte um pouco sobre o projeto ou a vaga..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === 'error' && (
                  <p role="alert" className="text-xs font-medium text-photo-error">
                    Não consegui enviar agora. Tente novamente ou escreva para eduardomelonunes2001@gmail.com.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-photo-red px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-photo-red/20 transition-all duration-300 hover:bg-photo-red-bright hover:shadow-photo-red/30 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Enviar mensagem
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
