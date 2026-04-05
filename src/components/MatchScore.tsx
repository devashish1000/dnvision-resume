'use client'
import { TrendingUp, BarChart3, Users, DollarSign, Zap, Target, Eye } from 'lucide-react'

export default function MatchScore({ score }: { score: number }) {
  const color = score >= 85 ? 'text-green-500' : score >= 70 ? 'text-yellow-500' : 'text-red-500'
  const barColor = score >= 85 ? 'bg-green-500' : score >= 70 ? 'bg-yellow-500' : 'bg-red-500'
  
  return (
    <div className="bg-card border border-border rounded-xl p-6 text-center shadow-lg">
      <div className={`text-5xl md:text-6xl font-bold mb-2 ${color}`}>{score}%</div>
      <div className="w-48 mx-auto h-2 bg-slate-700 rounded-full overflow-hidden">
        <div className={`h-full ${barColor} rounded-full transition-all duration-1000`} style={{ width: `${score}%` }} />
      </div>
      <p className="text-slate-400 mt-4 text-sm">ATS Match Score</p>
      <p className="text-xs text-slate-500 mt-1">
        {score >= 85 ? 'Excellent match — ready to apply' : score >= 70 ? 'Strong match — minor tweaks needed' : 'Needs optimization — try tailoring further'}
      </p>
    </div>
  )
}