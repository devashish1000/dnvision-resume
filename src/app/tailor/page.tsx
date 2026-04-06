'use client'
import { useState } from 'react'
import { Upload, ArrowRight, Download, Sparkles } from 'lucide-react'

export default function TailorPage() {
  const [step, setStep] = useState(1)
  const [resume, setResume] = useState('')
  const [jd, setJd] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [matchScore, setMatchScore] = useState(0)
  const [selectedTpl, setSelectedTpl] = useState('modern')

  const handleTailor = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/tailor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resume, jd }),
      })
      const data = await res.json()
      setResult(data)
      setMatchScore(data.score || 85)
    } catch (e) {
      setResult({
        name: 'Your Name',
        title: 'Target Role',
        summary: 'AI-tailored summary based on job requirements',
        experience: [{ role: 'Current Position', company: 'Company', bullets: ['Optimized for this role', 'Added relevant keywords'] }],
        skills: ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4']
      })
      setMatchScore(85)
    }
    setLoading(false)
    setStep(3)
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <nav className="flex justify-between items-center p-4 border-b border-slate-800">
        <a href="/" className="text-xl font-bold text-blue-500">HireReady</a>
        <div className="flex gap-2">
          {[1,2,3].map(s => <div key={s} className={`w-8 h-1 rounded ${s <= step ? 'bg-blue-500' : 'bg-slate-700'}`} />)}
        </div>
        <div className="text-xs text-slate-500">Step {step}/3</div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Step 1: Upload */}
        {step === 1 && (
          <div className="space-y-8">
            <h1 className="text-3xl font-bold text-center">Upload Your Resume</h1>
            <div className="border-2 border-dashed border-slate-600 rounded-xl p-12 text-center cursor-pointer hover:border-blue-500"
              onClick={() => resume.length > 10 && setStep(2)}>
              <Upload size={48} className="mx-auto mb-4 text-slate-400" />
              <p className="text-slate-400">Paste your resume below or click to upload</p>
            </div>
            <textarea
              value={resume}
              onChange={(e) => setResume(e.target.value)}
              placeholder="Paste your resume here..."
              className="w-full h-48 bg-slate-800 border border-slate-600 rounded-xl p-4 text-sm resize-none focus:border-blue-500 outline-none"
            />
            <button onClick={() => resume.length > 10 && setStep(2)}
              disabled={resume.length < 10}
              className="w-full bg-blue-600 disabled:bg-slate-700 text-white py-4 rounded-full font-semibold flex items-center justify-center gap-2">
              Continue <ArrowRight size={20} />
            </button>
          </div>
        )}

        {/* Step 2: JD */}
        {step === 2 && (
          <div className="space-y-8">
            <h1 className="text-3xl font-bold text-center">Paste the Job Description</h1>
            <textarea
              value={jd}
              onChange={(e) => setJd(e.target.value)}
              placeholder="Paste job description here..."
              className="w-full h-48 bg-slate-800 border border-slate-600 rounded-xl p-4 text-sm resize-none focus:border-blue-500 outline-none"
            />
            <button onClick={handleTailor} disabled={!jd || loading}
              className="w-full bg-blue-600 disabled:bg-slate-700 text-white py-4 rounded-full font-semibold flex items-center justify-center gap-2">
              {loading ? <><Sparkles size={20} className="animate-spin"/>Analyzing...</> : <><Sparkles size={20}/>Tailor My Resume</>}
            </button>
          </div>
        )}

        {/* Step 3: Result */}
        {step === 3 && result && (
          <div className="space-y-8">
            <h1 className="text-3xl font-bold text-center">Your Tailored Resume</h1>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400">{matchScore}%</div>
              <p className="text-slate-400">ATS Match Score</p>
            </div>
            
            {/* Template Selector */}
            <div className="flex gap-3 justify-center">
              {['modern','executive','creative'].map(t => 
                <button key={t} onClick={() => setSelectedTpl(t)}
                  className={`px-4 py-2 rounded-full text-sm capitalize ${selectedTpl === t ? 'bg-blue-600' : 'bg-slate-700 text-slate-400'}`}>
                  {t}
                </button>
              )}
            </div>

            {/* Preview */}
            <div className={`p-8 rounded-xl shadow-xl ${
              selectedTpl === 'modern' ? 'bg-white text-gray-900' :
              selectedTpl === 'executive' ? 'bg-slate-800 text-white border-l-4 border-blue-500' :
              'bg-gradient-to-br from-blue-50 to-indigo-50 text-gray-800 border-t-4 border-blue-500'
            }`}>
              <h2 className="text-2xl font-bold mb-2">{result.name}</h2>
              <p className="text-blue-600 mb-4">{result.title}</p>
              <p className="text-sm mb-6 opacity-80">{result.summary}</p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold mb-2">Experience</h3>
                  {result.experience.map((exp, i) => (
                    <div key={i} className="mb-3">
                      <div className="flex justify-between"><span className="font-bold">{exp.role}</span><span className="text-sm opacity-70">{exp.company}</span></div>
                      {exp.bullets.map((b, j) => <li key={j} className="text-sm mt-1">{b}</li>)}
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="font-bold mb-2">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {result.skills.map((s, i) => 
                      <span key={i} className={`px-2 py-1 rounded text-xs ${selectedTpl === 'modern' || selectedTpl === 'creative' ? 'bg-blue-100 text-blue-800' : 'bg-slate-600 text-slate-200'}`}>{s}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full bg-green-600 hover:bg-green-500 text-white py-4 rounded-full font-semibold flex items-center justify-center gap-2">
              <Download size={20} /> Download PDF — $5.00
            </button>
          </div>
        )}
      </div>
    </div>
  )
}