import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, X, Send, Loader2, CheckCircle2 } from 'lucide-react';
import chatAvatar from '../assets/Chat.png';

// Envia a mensagem direto para o e-mail via FormSubmit (sem backend).
// Na primeira mensagem, o FormSubmit envia um e-mail de confirmação
// para ativar o endereço — basta clicar no link uma única vez.
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/eduardomelonunes2001@gmail.com';

function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const bodyRef = useRef(null);

  useEffect(() => {
    const openChat = () => setOpen(true);
    window.addEventListener('open-chat', openChat);
    return () => window.removeEventListener('open-chat', openChat);
  }, []);

  useEffect(() => {
    if (open && bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [open, status]);

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
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
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

  return (
    <>
      {/* Botão flutuante */}
      <motion.button
        type="button"
        aria-label="Abrir chat"
        onClick={() => setOpen((o) => !o)}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-photo-red text-white shadow-xl shadow-photo-red/30 transition hover:bg-photo-red-bright md:bottom-7 md:right-7"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={24} />
            </motion.span>
          ) : (
            <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle size={24} />
            </motion.span>
          )}
        </AnimatePresence>
        {!open && (
          <span className="absolute right-0 top-0 flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-photo-cyan opacity-75" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-photo-cyan" />
          </span>
        )}
      </motion.button>

      {/* Painel do chat */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed bottom-24 right-5 z-50 flex max-h-[70vh] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-white/10 bg-photo-panel shadow-2xl shadow-black/60 backdrop-blur-md md:bottom-28 md:right-7"
          >
            {/* Header */}
            <div className="relative flex items-center gap-3 border-b border-white/10 bg-black/40 px-4 py-4">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-photo-red via-photo-amber to-photo-cyan" />
              <img
                src={chatAvatar}
                alt="Foto de Eduardo Melo"
                className="h-10 w-10 shrink-0 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-sm font-bold text-white">Eduardo Melo</p>
                <p className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <span className="h-2 w-2 rounded-full bg-photo-cyan" />
                  Normalmente responde rápido
                </p>
              </div>
              <button
                type="button"
                aria-label="Fechar chat"
                onClick={() => setOpen(false)}
                className="-mr-1.5 flex h-11 w-11 items-center justify-center text-zinc-400 transition hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Corpo */}
            <div ref={bodyRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/[0.06] px-4 py-3 text-sm leading-relaxed text-zinc-200">
                Olá! Que bom ter você por aqui. Me conte sobre o projeto ou a oportunidade que você tem em mente e como eu posso ajudar. Sua mensagem chega direto no meu e-mail e eu retorno o quanto antes.
              </div>

              {status === 'sent' && (
                <motion.div
                  role="status"
                  aria-live="polite"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="ml-auto flex max-w-[85%] items-center gap-2 rounded-2xl rounded-tr-sm bg-photo-cyan/15 px-4 py-3 text-sm font-medium text-photo-cyan"
                >
                  <CheckCircle2 size={18} />
                  Mensagem enviada! Obrigado, logo entro em contato.
                </motion.div>
              )}
            </div>

            {/* Formulário */}
            {status !== 'sent' && (
              <form onSubmit={handleSubmit} className="space-y-2.5 border-t border-white/10 bg-black/30 p-4">
                <div className="grid grid-cols-2 gap-2.5">
                  <input
                    name="name"
                    aria-label="Seu nome"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome"
                    className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white placeholder:text-zinc-400 outline-none transition focus:border-photo-cyan/60"
                  />
                  <input
                    name="email"
                    type="email"
                    aria-label="Seu e-mail"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="Seu e-mail"
                    className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white placeholder:text-zinc-400 outline-none transition focus:border-photo-cyan/60"
                  />
                </div>
                <textarea
                  name="message"
                  aria-label="Sua mensagem"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  placeholder="Escreva sua mensagem..."
                  className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white placeholder:text-zinc-400 outline-none transition focus:border-photo-cyan/60"
                />

                {status === 'error' && (
                  <p role="alert" className="text-xs font-medium text-photo-error">
                    Não consegui enviar agora. Tente de novo ou me escreva em eduardomelonunes2001@gmail.com.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-photo-red px-4 py-3 text-sm font-bold text-white transition hover:bg-photo-red-bright active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
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

            {status === 'sent' && (
              <div className="border-t border-white/10 bg-black/30 p-4">
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-bold text-white transition hover:border-photo-cyan/60 hover:text-photo-cyan"
                >
                  Enviar outra mensagem
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ChatWidget;
