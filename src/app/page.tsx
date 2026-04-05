'use client'
import { useRouter } from 'next/navigation'
import { ArrowRight, Zap, Shield, Clock } from 'lucide-react'

export default function Home() {
  const router = useRouter()
  
  return (
    <main className="min-h-screen bg-dark text-white">
      {/* Navbar */}
      <nav className="w-full py-6 px-6 md:px-8 flex justify-between items-center border-b border-slate-800">
        <div className="text-2xl font-bold tracking-tighter text-blue-500">HireReady.</div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-4 py-20 md:py-28 text-center">
        <div className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4">AI-Powered Resume Builder</div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold max-w-4xl leading-tight">
          Your Resume,<br/><span className="text-blue-500">Perfectly Tailored.</span>
        </h1>
        <p className="mt-5 md:mt-6 text-base md:text-xl text-slate-400 max-w-2xl">
          Stop getting rejected by ATS bots. Our AI mirrors your resume to any job description in seconds.
        </p>
        <button
          onClick={() => router.push('/tailor')}
          className="mt-8 md:mt-10 bg-blue-600 hover:bg-blue-500 text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold flex items-center gap-2 transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)]"
        >
          Tailor My Resume <ArrowRight size={20} />
        </button>

        {/* Trust Signals */}
        <div className="mt-10 md:mt-12 flex flex-wrap justify-center gap-6 md:gap-8 text-slate-500 text-xs md:text-sm font-medium">
          <div className="flex items-center gap-2"><Zap size={16} className="text-blue-500" /> Free AI Analysis</div>
          <div className="flex items-center gap-2"><Shield size={16} className="text-blue-500" /> ATS-Friendly</div>
          <div className="flex items-center gap-2"><Clock size={16} className="text-blue-500" /> Download in 30s</div>
        </div>

        {/* Social Proof */}
        <div className="mt-12 text-slate-600 text-xs">
          Trusted by 2,400+ job seekers this month
        </div>
      </section>
    </main>
  )
}