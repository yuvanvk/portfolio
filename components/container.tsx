"use client"

import { cn } from "@/lib/utils"

export const Container = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return <div className={cn("max-w-2xl mx-auto w-full flex flex-col p-2.5", className)}>
        {children}
    </div>
}