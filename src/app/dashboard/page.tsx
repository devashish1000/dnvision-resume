'use client'
import { TrendingUp, BarChart3, Users, DollarSign, Zap, Target, Eye, ArrowUpRight, Activity } from 'lucide-react'

export default function AdminDashboard() {
  // These will be populated from real data once deployed
  const stats = {
    visitors: 0,
    resumes: 0,
    revenue: '$0',
    cost: '$0.00',
  }

  return (
    <main className="min-h-screen bg-[#0a0e1a] text-white p-4 md:p-8">
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-sm font-bold">D</div>
          <div>
            <h1 className="text-2xl font-bold">DNVision — Command Center</h1>
            <p className="text-slate-400 text-sm">HireReady Business Intelligence Dashboard</p>
          </div>
        </div>
        <div className="mt-2 flex gap-2">
          <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-full flex items-center gap-1"><Activity size={10}/> Operational</span>
          <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">AI Cost: $0.00/day</span>
        </div>
      </header>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
        {[
          { label: 'Visitors Today', value: stats.visitors, icon: Eye, color: 'text-blue-400', bg: 'bg-blue-500/10', trend: 'Waiting...' },
          { label: 'Resumes Processed', value: stats.resumes, icon: BarChart3, color: 'text-green-400', bg: 'bg-green-500/10', trend: 'Waiting...' },
          { label: 'Revenue Today', value: stats.revenue, icon: DollarSign, color: 'text-yellow-400', bg: 'bg-yellow-500/10', trend: 'Waiting...' },
          { label: 'AI API Cost', value: stats.cost, icon: Zap, color: 'text-purple-400', bg: 'bg-purple-500/10', trend: 'FREE TIER ✓' },
        ].map((m, idx) => (
          <div key={idx} className="bg-[#151b2b] rounded-xl p-5 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="flex justify-between items-center mb-3">
              <span className="text-slate-400 text-sm font-medium">{m.label}</span>
              <div className={`${m.bg} p-2 rounded-lg`}><m.icon size={16} className={m.color} /></div>
            </div>
            <div className="text-3xl font-bold">{m.value}</div>
            <div className="text-xs text-slate-500 mt-2">{m.trend}</div>
          </div>
        ))}
      </div>

      {/* Charts and Funnel */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-8">
        {/* Revenue Chart Placeholder */}
        <div className="bg-[#151b2b] rounded-xl p-5 border border-slate-800">
          <div className="mb-6">
            <h2 className="text-lg font-semibold flex items-center gap-2"><TrendingUp size={18} className="text-blue-400" /> Revenue Trend</h2>
            <p className="text-xs text-slate-500 mt-1">Will appear once live traffic connects</p>
          </div>
          <div className="h-40 bg-slate-900 rounded-lg flex items-center justify-center text-slate-600">
            Chart will render here with real Vercel Analytics data
          </div>
        </div>

        {/* Conversion Funnel */}
        <div className="bg-[#151b2b] rounded-xl p-5 border border-slate-800">
          <h2 className="text-lg font-semibold flex items-center gap-2 mb-4"><Target size={18} className="text-green-400" /> Conversion Funnel</h2>
          <div className="space-y-4">
            {[['Visitors', '0', '0%'],['Resumes Uploaded', '0', '0%'],['Previews', '0', '0%'],['Downloads ($5)', '0', '0%']].map(([l, v, p], i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-400">{l}</span>
                  <span className="text-white font-medium">{v} <span className="text-slate-500">({p})</span></span>
                </div>
                <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full transition-all duration-500 ${i === 0 ? 'bg-blue-500' : i === 1 ? 'bg-blue-400' : i === 2 ? 'bg-yellow-400' : 'bg-green-500'}`} style={{ width: '0%' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 text-center text-xs text-slate-600">
        DNVision Command Center • Built for Devashish • All systems operational
      </div>
    </main>
  )
}