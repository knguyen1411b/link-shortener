import { notFound, redirect } from 'next/navigation'
import { connectDB } from '@/app/_lib/mongodb'
import Link from '@/app/_model/Link'

// Props type definition
type Props = { params: Promise<{ code: string }> }

/**
 * Dynamic redirect page.
 *
 * - Finds the original URL by short code
 * - Returns 404 if the link does not exist
 * - Redirects to the original URL if found
 *
 * This runs on the server (Node.js runtime).
 */
export default async function RedirectPage({ params }: Props) {
  await connectDB()

  const link = await Link.findOne({ shortCode: (await params).code })

  if (!link) return notFound()

  redirect(link.originalUrl)
}
