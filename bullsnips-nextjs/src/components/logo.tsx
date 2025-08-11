import Image from 'next/image'
import { cn } from '@/lib/utils'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn('flex items-center space-x-3', className)}>
            <Image
                src="/assets/logo.png"
                alt="Bullsnips"
                width={32}
                height={32}
                className="w-8 h-8"
                priority
            />
            <span className="text-white font-bold text-xl tracking-wide">
                BULLSNIPS
            </span>
        </div>
    )
}
