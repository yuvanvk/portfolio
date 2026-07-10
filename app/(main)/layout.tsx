import React from "react";
import { AppSidebar } from "@/components/navigation/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
            <main className="p-2">
                {children}
            </main>
        </SidebarInset>
    </SidebarProvider>
}