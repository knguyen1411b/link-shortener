'use client'

import { HeroUIProvider } from '@heroui/system'
import { ToastProvider } from '@heroui/toast'
import { X } from 'lucide-react'

/**
 * Global Providers wrapper for the application.
 *
 * - HeroUIProvider: provides theme, styles, and context for HeroUI components
 * - ToastProvider: handles global toast notifications
 *
 * This component should be mounted once at the root layout.
 */
export function Providers({ children }: { children: React.ReactNode }) {
    const toastConfig = {
        placement: 'top-right' as const,
        maxVisibleToasts: 1,
        toastOffset: 10,
        toastProps: {
            timeout: 3000,
            shouldShowTimeoutProgress: true,
            closeIcon: <X size={24} />,
            classNames: {
                closeButton: 'opacity-100 absolute right-4 top-1/2 -translate-y-1/2'
            }
        }
    }
    return (
        <HeroUIProvider>
            {children}
            <ToastProvider {...toastConfig} />
        </HeroUIProvider>
    )
}
