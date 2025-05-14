// components/FadeInSection.tsx
'use client'

import { ReactNode, useRef, useState, useEffect } from 'react'

type FadeInSectionProps = {
    children: ReactNode;
    className?: string;
    delay?: number;       // ← new
};

export default function FadeInSection({ children,
    className = '',
    delay = 0, }: FadeInSectionProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [isVisible, setVisible] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    obs.unobserve(el)
                }
            },
            { threshold: 0.1 }
        )

        obs.observe(el)
        return () => obs.disconnect()
    }, [])

    return (
        <div
            ref={ref}
            style={{ animationDelay: `${delay}ms` }}  // ← set delay
            className={`
          opacity-0 
          ${isVisible ? 'animate-fade-in' : ''}
          ${className}
        `}
        >
            {children}
        </div>
    )
}
