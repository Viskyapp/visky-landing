'use client'

import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError(true)
      setTimeout(() => setError(false), 2500)
      return
    }

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        setError(true)
        setTimeout(() => setError(false), 2500)
      }
    } catch {
      setError(true)
      setTimeout(() => setError(false), 2500)
    }
  }

  return (
    <>
      {/* NAV */}
      <nav style={styles.nav}>
        <span style={styles.logo}>VISKY</span>
        <span style={styles.navBadge}>Acesso antecipado — vagas limitadas</span>
      </nav>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroTag}>
          <span style={styles.dot} />
          EM BREVE
        </div>

        <h1 style={styles.h1}>
          Seu maior inimigo<br />
          no trade é{' '}
          <span style={styles.h1Accent}>você mesmo.</span>
        </h1>

        <p style={styles.heroSub}>
          O Visky foi criado pra te impedir de operar no emocional e proteger
          seu capital quando você perde o controle.
        </p>

        {/* PAIN BLOCK */}
        <div style={styles.pain}>
          <p style={styles.painText}>Você já entrou em uma operação que sabia que não devia?</p>
          <p style={styles.painText}>Ignorou o stop… só dessa vez?</p>
          <p style={styles.painText}>Tentou recuperar no impulso… e piorou tudo?</p>
          <p style={styles.painHighlight}>E no final do dia… não foi o mercado.</p>
          <p style={styles.painHighlight}>Foi você.</p>
          <p style={styles.painHighlight}>Não é falta de estratégia.</p>
          <p style={{ ...styles.painHighlight, fontWeight: 700 }}>É falta de controle quando mais importa.</p>
        </div>

        {/* FORM */}
        <div style={styles.formWrap}>
          {!submitted ? (
            <>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                placeholder={error ? 'Digite um email válido' : 'Digite seu melhor email'}
                style={{
                  ...styles.input,
                  borderColor: error ? '#ef4444' : 'rgba(255,255,255,0.1)',
                }}
              />
              <button style={styles.btnMain} onClick={handleSubmit}>
                Quero meu acesso antecipado →
              </button>
              <p style={styles.formNote}>
                Seja um dos primeiros a testar.{' '}
                <strong style={{ color: 'var(--accent)' }}>Preço de early access travado para sempre.</strong>
              </p>
            </>
          ) : (
            <div style={styles.successMsg}>
              <span style={{ fontSize: 40, display: 'block', marginBottom: 12 }}>🎯</span>
              <h3 style={styles.successTitle}>Você está na lista!</h3>
              <p style={styles.successText}>
                Te avisamos assim que o acesso antecipado abrir.<br />
                Fique de olho no seu email.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* FEATURES */}
      <section style={styles.features}>
        <p style={styles.sectionLabel}>O que você vai ter</p>
        <h2 style={styles.sectionTitle}>Sua estrutura de proteção</h2>
        <div style={styles.grid}>
          {[
            { icon: '🧮', title: 'Calculadora de Risco', desc: 'Saiba o tamanho certo da posição antes de entrar. Nunca mais arrisque mais do que pode perder.' },
            { icon: '🛡️', title: 'Sentinela do Dia', desc: 'Defina seus limites antes de operar. Quando bater o stop win ou o stop loss, o sistema te avisa para encerrar.' },
            { icon: '🧠', title: 'Check-in Emocional', desc: 'Responda 3 perguntas antes de operar. O Visky te diz se você está em condições de entrar no mercado.' },
            { icon: '⚡', title: 'Sistema de XP', desc: 'Ganhe pontos por disciplina. Respeitar o stop, fazer o check-in, manter streak — tudo vira recompensa real.' },
          ].map((f) => (
            <div key={f.title} style={styles.card}>
              <span style={{ fontSize: 28, display: 'block', marginBottom: 14 }}>{f.icon}</span>
              <h3 style={styles.cardTitle}>{f.title}</h3>
              <p style={styles.cardDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DIVIDER */}
      <div style={styles.divider}>
        <span style={styles.dividerLine} />
        <span style={styles.dividerText}>Acesso antecipado</span>
        <span style={styles.dividerLine} />
      </div>

      {/* CTA BOTTOM */}
      <section style={styles.ctaBottom}>
        <h2 style={styles.ctaTitle}>Pare de ser seu<br />próprio inimigo.</h2>
        <p style={styles.ctaSub}>Entre na lista e garanta seu o preço de early access — travado enquanto o produto não lançar.</p>
        <button
          style={styles.btnOutline}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Entrar na lista de espera
        </button>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <span style={styles.logo}>VISKY</span>
        <p style={{ fontSize: 13, color: 'var(--muted)' }}>© 2026 Visky — visky.app@gmail.com</p>
      </footer>
    </>
  )
}

const styles: Record<string, React.CSSProperties> = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '20px 48px',
    background: 'rgba(7,8,13,0.8)', backdropFilter: 'blur(12px)',
    borderBottom: '1px solid var(--border)',
  },
  logo: {
    fontFamily: "'Bebas Neue', sans-serif", fontSize: 28,
    letterSpacing: 3, color: 'var(--accent)',
  },
  navBadge: { fontSize: 12, fontWeight: 500, color: 'var(--muted)', letterSpacing: 0.5 },
  hero: {
    position: 'relative', zIndex: 1, minHeight: '100vh',
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    justifyContent: 'center', textAlign: 'center', padding: '120px 24px 80px',
  },
  heroTag: {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    background: 'rgba(240,165,0,0.08)', border: '1px solid var(--border)',
    borderRadius: 100, padding: '6px 16px', fontSize: 12, fontWeight: 600,
    color: 'var(--accent)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 32,
    animation: 'fadeUp 0.6s ease forwards',
  },
  dot: {
    width: 6, height: 6, background: 'var(--accent)', borderRadius: '50%',
    display: 'inline-block', animation: 'pulse 2s ease infinite',
  },
  h1: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 'clamp(56px, 10vw, 110px)', lineHeight: 0.95,
    letterSpacing: 2, color: 'var(--text)', maxWidth: 900,
    animation: 'fadeUp 0.7s ease forwards 0.2s', opacity: 0,
  },
  h1Accent: {
    background: 'linear-gradient(135deg, #f0a500, #e05c00)',
    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
  },
  heroSub: {
    marginTop: 24, fontSize: 'clamp(16px, 2.5vw, 20px)', fontWeight: 300,
    color: '#9ca3af', maxWidth: 560, lineHeight: 1.7,
    animation: 'fadeUp 0.7s ease forwards 0.4s', opacity: 0,
  },
  pain: {
    marginTop: 40, maxWidth: 560, width: '100%',
    background: 'var(--card)', border: '1px solid var(--border)',
    borderRadius: 16, padding: '28px 32px', textAlign: 'left',
    animation: 'fadeUp 0.7s ease forwards 0.6s', opacity: 0,
  },
  painText: { fontSize: 15, color: '#9ca3af', lineHeight: 1.7, marginBottom: 6 },
  painHighlight: { fontSize: 15, color: '#e8eaf0', fontWeight: 500, marginTop: 10, lineHeight: 1.7 },
  formWrap: {
    marginTop: 40, maxWidth: 480, width: '100%',
    display: 'flex', flexDirection: 'column', gap: 12,
    animation: 'fadeUp 0.7s ease forwards 0.8s', opacity: 0,
  },
  input: {
    width: '100%', background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10,
    padding: '16px 20px', fontSize: 15, color: 'var(--text)', outline: 'none',
    fontFamily: 'inherit', transition: 'border-color 0.2s',
  },
  btnMain: {
    width: '100%', background: 'linear-gradient(135deg, #f0a500, #e05c00)',
    border: 'none', borderRadius: 10, padding: '17px 24px',
    fontSize: 16, fontWeight: 600, color: '#07080d', cursor: 'pointer',
    fontFamily: 'inherit', letterSpacing: 0.3, transition: 'opacity 0.2s',
  },
  formNote: { textAlign: 'center', fontSize: 13, color: 'var(--muted)' },
  successMsg: {
    textAlign: 'center', padding: 24,
    background: 'rgba(240,165,0,0.06)', border: '1px solid var(--border)',
    borderRadius: 16,
  },
  successTitle: {
    fontFamily: "'Bebas Neue', sans-serif", fontSize: 28,
    letterSpacing: 2, color: 'var(--accent)',
  },
  successText: { fontSize: 14, color: 'var(--muted)', marginTop: 8 },
  features: {
    position: 'relative', zIndex: 1, maxWidth: 900,
    margin: '100px auto 0', padding: '0 24px',
  },
  sectionLabel: {
    fontSize: 11, fontWeight: 600, letterSpacing: 2,
    textTransform: 'uppercase', color: 'var(--accent)',
    textAlign: 'center', marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 'clamp(36px, 6vw, 60px)', letterSpacing: 2,
    textAlign: 'center', marginBottom: 48, color: 'var(--text)',
  },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 },
  card: {
    background: 'var(--card)', border: '1px solid var(--border)',
    borderRadius: 16, padding: '28px 24px', transition: 'border-color 0.2s',
  },
  cardTitle: { fontSize: 16, fontWeight: 600, color: 'var(--text)', marginBottom: 8 },
  cardDesc: { fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 },
  divider: {
    position: 'relative', zIndex: 1, maxWidth: 900,
    margin: '80px auto', padding: '0 24px',
    display: 'flex', alignItems: 'center', gap: 24,
  },
  dividerLine: { flex: 1, height: 1, background: 'var(--border)' },
  dividerText: { fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--muted)', whiteSpace: 'nowrap' },
  ctaBottom: { position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 24px 120px' },
  ctaTitle: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 'clamp(36px, 6vw, 64px)', letterSpacing: 2,
    color: 'var(--text)', marginBottom: 16,
  },
  ctaSub: { fontSize: 16, color: 'var(--muted)', marginBottom: 32 },
  btnOutline: {
    display: 'inline-block', border: '1px solid var(--accent)',
    borderRadius: 10, padding: '15px 36px', fontSize: 15, fontWeight: 600,
    color: 'var(--accent)', cursor: 'pointer', background: 'transparent',
    fontFamily: 'inherit', transition: 'background 0.2s, color 0.2s',
  },
  footer: {
    position: 'relative', zIndex: 1, borderTop: '1px solid var(--border)',
    padding: '32px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
}
