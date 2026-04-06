'use client'

import { useState } from 'react'

const skillTag = {
  background: '#1e293b',
  border: '1px solid #334155',
  borderRadius: 20,
  padding: '4px 12px',
  fontSize: 13,
  color: '#94a3b8',
  fontFamily: 'var(--font-mono)',
}

const globalCSS = `
  :root {
    --bg: #09090b;
    --fg: #fafafa;
    --fg-muted: #6b7280;
    --border: #27272a;
    --accent: #3b82f6;
    --accent-glow: rgba(59, 130, 246, 0.15);
    --card: #18181b;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: var(--bg);
    color: var(--fg);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  .main { max-width: 860px; margin: 0 auto; padding: 2rem 1rem; }

  .hero { text-align: center; padding: 3.5rem 0 2.5rem; }
  .hero h1 { font-size: clamp(2rem, 5vw, 3.2rem); font-weight: 800; letter-spacing: -0.02em; margin-bottom: 1rem; line-height: 1.15; }
  .hero .accent {
    background: linear-gradient(135deg, var(--accent), #8b5cf6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .subtitle { font-size: 1.15rem; color: var(--fg-muted); max-width: 600px; margin: 0 auto 0.5rem; }
  .badge { display: inline-block; background: var(--accent-glow); color: var(--accent); font-size: 0.8rem; font-weight: 600; padding: 4px 14px; border-radius: 24px; border: 1px solid rgba(59, 130, 246, 0.2); margin-bottom: 1.5rem; }

  .proof { display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap; padding: 1rem 0 2rem; font-size: 0.85rem; color: var(--fg-muted); border-bottom: 1px solid var(--border); margin-bottom: 2rem; }

  .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem; }
  @media (max-width: 640px) { .form-grid { grid-template-columns: 1fr; } }
  .input-card { display: flex; flex-direction: column; gap: 0.5rem; }
  .input-card label { font-size: 0.85rem; font-weight: 600; color: #a1a1aa; }
  .textarea { width: 100%; min-height: 230px; background: var(--card); border: 1px solid var(--border); border-radius: 12px; padding: 1rem; color: var(--fg); font-size: 0.95rem; font-family: inherit; resize: vertical; }
  .textarea:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-glow); }
  .textarea::placeholder { color: #52525b; }

  .btn-primary {
    background: var(--accent);
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 0.75rem 1.5rem;
    font-size: 0.95rem;
    font-weight: 600;
     cursor: pointer; 
    transition: all 0.15s ease;
  }
  .btn-primary:hover { background: #2563eb; transform: translateY(-1px); box-shadow: 0 4px 20px var(--accent-glow); }
  .btn-primary:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
  .btn-large { padding: 1rem 2.5rem; font-size: 1.1rem; }

  .btn-ghost {
    background: transparent;
    color: var(--accent);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    cursor: pointer;
    margin-bottom: 1rem;
  }
  .btn-ghost:hover { background: var(--card); }

  .error { color: #f87171; margin-top: 1rem; font-size: 0.9rem; }

  .features { margin-top: 3rem; padding: 2rem 0; border-top: 1px solid var(--border); }
  .features h2 { text-align: center; font-size: 1.6rem; margin-bottom: 1.5rem; font-weight: 700; }
  .feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; text-align: center; }
  @media (max-width: 640px) { .feature-grid { grid-template-columns: 1fr; } }
  .feature .icon { display: block; font-size: 2rem; margin-bottom: 0.5rem; }
  .feature h3 { font-size: 1.1rem; font-weight: 600; margin-bottom: 0.25rem; }
  .feature p { color: var(--fg-muted); font-size: 0.9rem; }

  .bottom-cta { margin-top: 2rem; padding: 2.5rem; text-align: center; background: var(--card); border-radius: 16px; border: 1px solid var(--border); margin-bottom: 2rem; }
  .bottom-cta h2 { font-size: 1.5rem; margin-bottom: 0.5rem; }
  .bottom-cta p { color: var(--fg-muted); margin-bottom: 1.5rem; }

  .footer { text-align: center; padding: 2rem 0; color: #52525b; font-size: 0.85rem; border-top: 1px solid var(--border); margin-top: 2rem; }
  .footer a { color: var(--accent); text-decoration: none; }
  .footer a:hover { text-decoration: underline; }

  .result-header { text-align: center; margin-bottom: 1.5rem; }
  .result-header h1 { font-size: 1.8rem; margin: 0.5rem 0; }
  .result-header p { color: var(--fg-muted); }
  .score-badge { display: block; margin: 0 auto 0.75rem; background: linear-gradient(135deg, #22c55e, #10b981); color: #fff; font-size: 1.3rem; font-weight: 800; padding: 0.5rem 1.25rem; border-radius: 16px; width: fit-content; }

  .card { background: var(--card); border: 1px solid var(--border); border-radius: 14px; padding: 1.25rem; margin: 1.25rem 0; }
  .card h2 { font-size: 1.1rem; margin-bottom: 0.75rem; font-weight: 600; }
  .card ul { margin-left: 1.2rem; }
  .card ul li { margin-bottom: 0.35rem; color: #d4d4d8; }
`

export default function Home() {
  const [resume, setResume] = useState('')
  const [jd, setJd] = useState('')
  const [tailored, setTailored] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleTailor() {
    if (!resume.trim() || !jd.trim()) {
      setError('Please paste both your resume and the job description.')
      return
    }
    setLoading(true)
    setError(null)
    setTailored(null)
    try {
      const res = await fetch('/api/tailor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resume, jd }),
      })
      const data = await res.json()
      if (data.error) throw new Error(data.error)
      setTailored(data)
    } catch (e: any) {
      setError(e.message || 'Failed to tailor resume. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (tailored) {
    return (
      <main style={{ maxWidth: 720, margin: '0 auto', padding: '2rem 1rem' }}>
        <style>{globalCSS}</style>

        <button className="btn-ghost" onClick={() => { setTailored(null); setResume(''); setJd('') }}>
          &larr; Start Over
        </button>

        <div className="result-header">
          <span className="score-badge">{tailored.score ?? '&mdash;'}/100</span>
          <h1>Your Tailored Resume</h1>
          <p>{tailored.name} &bull; {tailored.title}</p>
        </div>

        <section className="card">
          <h2>&#127919; Professional Summary</h2>
          <p>{tailored.summary}</p>
        </section>

        <section className="card">
          <h2>&#128188; Experience</h2>
          {tailored.experience?.map((exp: any, i: number) => (
            <div key={i} style={{ marginBottom: '1rem' }}>
              <strong>{exp.role}</strong> at {exp.company}
              <ul>
                {exp.bullets?.map((b: string, j: number) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </section>

        <section className="card">
          <h2>&#128736; Skills Matched</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {tailored.skills?.map((s: string, i: number) => (
              <span key={i} style={skillTag}>{s}</span>
            ))}
          </div>
        </section>

        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <p style={{ color: '#94a3b8', marginBottom: '1rem' }}>Copy this tailored resume and paste it into your application.</p>
          <button className="btn-primary" onClick={() => { setTailored(null); setResume(''); setJd('') }}>
            &#10024; Tailor Another Resume
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="main">
      <style>{globalCSS}</style>

      <section className="hero">
        <span className="badge">100% Free &bull; No Signup &bull; ATS-Optimized</span>
        <h1>Tailor Your Resume to Any Job in <span className="accent">30 Seconds</span></h1>
        <p className="subtitle">Paste your resume + job description. AI rewrites every bullet to match ATS keywords. <strong>Land more interviews.</strong></p>
      </section>

      <div className="proof">
        <span>&#9889; Used by 2,400+ job seekers</span>
        <span>&#127919; 87 avg. match score</span>
        <span>&#128274; Your data is never stored</span>
      </div>

      <section className="form-grid">
        <div className="input-card">
          <label>Your Resume</label>
          <textarea
            className="textarea"
            placeholder="Paste your resume text here..."
            value={resume}
            onChange={e => setResume(e.target.value)}
          />
        </div>
        <div className="input-card">
          <label>Job Description</label>
          <textarea
            className="textarea"
            placeholder="Paste the job posting here..."
            value={jd}
            onChange={e => setJd(e.target.value)}
          />
        </div>
      </section>

      <div style={{ textAlign: 'center' }}>
        <button className="btn-primary btn-large" onClick={handleTailor} disabled={loading}>
          {loading ? '&#11088; Tailoring your resume...' : '&#128640; Tailor My Resume &mdash; Free'}
        </button>
        {error && <p className="error">{error}</p>}
      </div>

      <section className="features">
        <h2>Why HireReady?</h2>
        <div className="feature-grid">
          <div className="feature">
            <span className="icon">&#129302;</span>
            <h3>AI-Powered Tailoring</h3>
            <p>Every bullet is rewritten to match the job&apos;s exact keywords and requirements.</p>
          </div>
          <div className="feature">
            <span className="icon">&#9989;</span>
            <h3>ATS-Optimized</h3>
            <p>Your resume passes automated screening systems with maximum keyword match.</p>
          </div>
          <div className="feature">
            <span className="icon">&#9889;</span>
            <h3>30-Second Turnaround</h3>
            <p>No formatting. No waiting. Paste, click, done. Faster than making coffee.</p>
          </div>
        </div>
      </section>

      <section className="bottom-cta">
        <h2>Ready to land that interview?</h2>
        <p>Thousands of job seekers are already using AI to stand out.</p>
        <button className="btn-primary" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          &uarr; Tailor Your Resume Now
        </button>
      </section>

      <footer className="footer">
        <p>Built with &hearts; by <strong>DNVision</strong> &bull; Free forever &bull; <a href="https://github.com/devashish1000/dnvision-resume" target="_blank" rel="noopener">GitHub</a></p>
      </footer>
    </main>
  )
}
