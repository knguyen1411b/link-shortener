'use client'

import { Button } from '@heroui/button'
import { Input } from '@heroui/input'
import { addToast } from '@heroui/toast'

import { message } from '@/lib/message'

interface Props {
    shortUrl: string
    onClear: () => void
}

export default function ShortResult({ shortUrl, onClear }: Props) {
    if (!shortUrl) return null

    const copyToClipboard = () => {
        navigator.clipboard.writeText(shortUrl)
        addToast({
            title: message.copyButton,
            color: 'success'
        })
    }

    return (
        <>
            <Input
                value={shortUrl}
                isReadOnly
                endContent={
                    <Button size="sm" variant="flat" onPress={copyToClipboard}>
                        {message.copyButton}
                    </Button>
                }
            />

            <Button variant="flat" color="danger" onPress={onClear}>
                {message.clearButton}
            </Button>
        </>
    )
}
