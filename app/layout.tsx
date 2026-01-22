import { Providers } from '@/app/providers'
import type { Metadata } from 'next'
import '@/app/globals.css'

/**
 * Global metadata for the application.
 * This metadata is used for SEO, browser tabs, and social previews.
 */
export const metadata: Metadata = {
  title: {
    default: 'Link Shortener',
    template: '%s | Link Shortener'
  },
  description: 'A simple and fast link shortener built with Next.js and MongoDB.',
  applicationName: 'Link Shortener',
  authors: [{ name: 'Khanh Nguyen' }],
  keywords: ['link shortener', 'short url', 'url shortener', 'nextjs', 'mongodb']
}

/**
 * Root layout of the application.
 * Wraps all pages with global providers and styles.
 */
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
