'use server'

import { headers } from 'next/headers'

import { nanoid } from 'nanoid'

import { connectDB } from '@/lib/mongodb'
import Link from '@/models/Link'

/**
 * Get the base URL of the current request.
 *
 * - Automatically resolves the correct protocol and host
 * - Works for local, Vercel preview, and production environments
 *
 * Note:
 * - `headers()` is synchronous in Next.js App Router
 * - Do NOT use `await` with `headers()`
 */
const getBaseUrl = async () => {
    const h = await headers()

    return `${h.get('x-forwarded-proto') ?? 'http'}://${h.get('x-forwarded-host') ?? h.get('host')}`
}

/**
 * Create a shortened URL.
 *
 * Flow:
 * 1. Ensure database connection
 * 2. Generate a unique short code
 * 3. Store the mapping in MongoDB
 * 4. Return the full shortened URL
 *
 * This function runs on the server only (Server Action).
 *
 * @param url - The original URL to be shortened
 * @param demoMode - If true, may apply demo-specific logic (not implemented here)
 * @returns The full shortened URL (e.g. https://domain.com/abc123)
 */
export const shortenUrl = async (url: string, demoMode: boolean = false) => {
    await connectDB()

    const shortCode = nanoid(7)

    if (!demoMode)
        await Link.create({
            originalUrl: url,
            shortCode
        })

    return `${await getBaseUrl()}/${shortCode}`
}
