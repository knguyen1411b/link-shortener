'use client'

import { useState } from 'react'

import { Card } from '@heroui/card'
import { addToast } from '@heroui/toast'

import ShortResult from '@/components/ShortResult'
import UrlForm from '@/components/UrlForm'
import { message } from '@/lib/message'
import { shortenUrl } from '@/services/shorten'

export default function Home() {
    const [url, setUrl] = useState('')
    const [shortUrl, setShortUrl] = useState('')
    const [loading, setLoading] = useState(false)

    const handleShorten = async (inputUrl: string) => {
        setLoading(true)
        setShortUrl('')

        try {
            const short = await shortenUrl(inputUrl)
            setShortUrl(short)

            addToast({
                title: message.toastSuccess,
                color: 'success'
            })
        } catch (err: any) {
            addToast({
                title: err?.message || message.toastError,
                color: 'danger'
            })
        } finally {
            setLoading(false)
        }
    }

    const handleClear = () => {
        setUrl('')
        setShortUrl('')
    }

    return (
        <main className="min-h-screen flex items-center justify-center p-4">
            <Card className="max-w-md w-full p-6 space-y-4">
                <h1 className="text-2xl font-bold text-center">🔗 {message.title}</h1>

                <UrlForm url={url} setUrl={setUrl} loading={loading} onShorten={handleShorten} />

                <ShortResult shortUrl={shortUrl} onClear={handleClear} />
            </Card>
        </main>
    )
}
