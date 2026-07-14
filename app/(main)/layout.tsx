import React from "react";
import { AppSidebar } from "@/components/navigation/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Container } from "@/components/container";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-neutral-100 dark:bg-[#121212] border">
        <div className="absolute top-2 left-2 z-10">
          <SidebarTrigger />
        </div>
        <Container>{children}</Container>
      </SidebarInset>
    </SidebarProvider>
  );
}
