'use client'

import { useMemo } from 'react'

import { Button } from '@heroui/button'
import { Input } from '@heroui/input'
import { Spinner } from '@heroui/spinner'
import isURL from 'validator/lib/isURL'

import { message } from '@/lib/message'

interface Props {
    url: string
    setUrl: (url: string) => void
    loading: boolean
    onShorten: (url: string) => void
}

export default function UrlForm({ url, setUrl, loading, onShorten }: Props) {
    const isValid = useMemo(
        () =>
            isURL(url, {
                require_protocol: true,
                protocols: ['http', 'https']
            }),
        [url]
    )

    const submit = () => {
        if (!isValid || loading) return
        onShorten(url)
    }

    return (
        <>
            <Input
                label={message.inputLabel}
                placeholder={message.inputPlaceholder}
                value={url}
                onValueChange={setUrl}
                isInvalid={!!url && !isValid}
                errorMessage={url && !isValid ? message.inputError : undefined}
            />

            <Button color="primary" isDisabled={!isValid || loading} onPress={submit} className="w-full">
                {loading ? <Spinner size="sm" /> : message.shortenButton}
            </Button>
        </>
    )
}
