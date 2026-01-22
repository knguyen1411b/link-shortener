'use client'

import { message } from '@/app/_lib/message'
import { addToast } from '@heroui/toast'
import { Button } from '@heroui/button'
import { Input } from '@heroui/input'

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
