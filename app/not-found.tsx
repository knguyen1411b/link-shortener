'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@heroui/button'
import { Card } from '@heroui/card'
import { motion } from 'framer-motion'
import { Frown, Home } from 'lucide-react'

/**
 * Not Found Page Component
 *
 * @returns {JSX.Element} The Not Found page
 */
export default function NotFound() {
    const { push } = useRouter()

    return (
        <main
            className="min-h-screen flex items-center justify-center px-4"
            role="main"
            aria-labelledby="not-found-title"
        >
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="w-full max-w-lg"
            >
                <Card className="p-8 text-center space-y-6">
                    <div className="flex items-center justify-center text-9xl font-bold text-zinc-300">
                        4<Frown className="mx-1 mt-2 text-blue-500" size={100} />4
                    </div>

                    <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Oops! Page not found.</h1>

                    <p className="text-zinc-600 dark:text-zinc-400">
                        The page you are looking for does not exist or has been moved.
                    </p>

                    <div className="flex gap-3 justify-center pt-2">
                        <Button color="primary" startContent={<Home size={18} />} onPress={() => push('/')}>
                            Go to Home
                        </Button>
                    </div>
                </Card>
            </motion.div>
        </main>
    )
}
