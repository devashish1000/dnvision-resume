import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HireReady — Free AI Resume Builder | Tailor Resume to Any Job',
  description: 'Free AI-powered resume builder. Paste any job description and get an ATS-optimized, perfectly tailored resume in seconds. No signup. No cost.',
  keywords: ['AI resume builder', 'free resume tailoring', 'ATS resume optimizer', 'resume maker online', 'job description matcher', 'resume keyword optimizer', 'free AI cover letter'],
  authors: [{ name: 'DNVision', url: 'https://dnvision.ai' }],
  creator: 'DNVision',
  publisher: 'DNVision',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dnvision-resume.vercel.app',
    siteName: 'HireReady',
    title: 'HireReady — Free AI Resume Builder',
    description: 'AI-tailored resumes that pass ATS and land interviews. Free, instant, no signup.',
    images: [{
      url: 'https://dnvision-resume.vercel.app/og-image.png',
      width: 1200,
      height: 630,
      alt: 'HireReady - AI Resume Builder',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HireReady — Free AI Resume Builder',
    description: 'AI-tailored resumes that pass ATS and land interviews. Free, instant, no signup.',
    creator: '@dnvision',
    images: ['https://dnvision-resume.vercel.app/og-image.png'],
  },
  alternates: {
    canonical: 'https://dnvision-resume.vercel.app',
  },
  category: 'productivity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}