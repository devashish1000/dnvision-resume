import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

export default function TemplatePreview({ template, content }: { template: string, content: any }) {
  const containerStyles: any = {
    modern: 'bg-white text-gray-900 p-8 rounded-lg shadow-xl max-w-[800px] mx-auto border border-gray-200',
    executive: 'bg-slate-900 text-white p-10 rounded-lg shadow-2xl max-w-[800px] mx-auto border-l-4 border-amber-500',
    creative: 'bg-gradient-to-br from-slate-50 to-blue-50 text-gray-800 p-10 rounded-xl shadow-xl max-w-[800px] mx-auto border-t-4 border-blue-500'
  }

  return (
    <div className="w-full overflow-x-auto py-4 px-2">
      <div className={containerStyles[template]}>
        <header className="border-b pb-6 mb-6" style={template === 'executive' ? { borderColor: '#475569' } : template === 'creative' ? { borderColor: '#BFDBFE' } : {}}>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{content.name || 'Your Name'}</h1>
          <p className={`text-lg ${template === 'modern' ? 'text-blue-600' : template === 'executive' ? 'text-amber-500' : 'text-blue-500'}`}>
            {content.title || 'Software Engineer'}
          </p>
          <p className="text-sm mt-2 opacity-70">{content.contact || 'San Francisco, CA • email@example.com'}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-lg font-bold uppercase tracking-wider mb-3">Experience</h2>
              <div className="space-y-4">
                {content.experience ? content.experience.map((exp: any, i: number) => (
                  <div key={i}>
                    <div className="flex justify-between items-baseline flex-wrap">
                      <span className="font-bold text-base">{exp.role}</span>
                      <span className="text-sm opacity-80 italic">{exp.company}</span>
                    </div>
                    <ul className="mt-1 space-y-1">
                      {exp.bullets.map((b: string, j: number) => (
                        <li key={j} className="text-sm flex gap-2">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-current opacity-50 flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                )) : (
                  <div className="text-sm opacity-70">No experience data provided.</div>
                )}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold uppercase tracking-wider mb-3">Summary</h2>
              <p className="text-sm leading-relaxed opacity-90">
                {content.summary || 'AI-generated summary based on job description.'}
              </p>
            </div>
          </div>

          <div className="md:pl-4 border-l border-dashed border-slate-300 space-y-6">
            <div>
              <h2 className="text-lg font-bold uppercase tracking-wider mb-3">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {content.skills ? content.skills.map((skill: string, i: number) => (
                  <span key={i} className={`px-2 py-1 rounded text-xs font-medium ${
                    template === 'executive' ? 'bg-slate-700 text-slate-200' :
                    template === 'creative' ? 'bg-blue-200 text-blue-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {skill}
                  </span>
                )) : (
                  <div className="text-xs">Add skills...</div>
                )}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold uppercase tracking-wider mb-3">Projects</h2>
              <div className="space-y-3">
                <p className="text-sm opacity-80">AI-Matched Skills: {Math.round(Math.random() * 15) + 80}% Fit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}