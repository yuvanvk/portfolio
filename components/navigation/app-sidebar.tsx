"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { System, Yuvly } from "@/components/icons";
import { useTheme } from "next-themes";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

import { MoonStar, Sun } from "lucide-react";
import { RiHome9Fill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { IoVolumeMediumOutline } from "react-icons/io5";
import { BsFillFolderFill, BsFillPersonFill } from "react-icons/bs";
import { SiGitbook } from "react-icons/si";
import { usePathname, useRouter } from "next/navigation";

const THEME_OPTIONS = [
  { value: "system", icon: System, label: "System" },
  { value: "light", icon: Sun, label: "Light" },
  { value: "dark", icon: MoonStar, label: "Dark" },
] as const;

const NAV_ITEMS = [
  { icon: RiHome9Fill, label: "Home", route: "/" },
  { icon: BsFillFolderFill, label: "Projects", route: "/projects" },
  { icon: BsFillPersonFill, label: "About", route: "/about" },
  { icon: SiGitbook, label: "Blogs", route: "/blogs" },
];

const PRODUCT_ITEMS = [{ icon: Yuvly, label: "Yuvly" }];

const ICON_SIZE = 15;

function Toolbox() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  return (
    <div className="flex items-center gap-1.5 rounded-xl border bg-linear-to-b from-neutral-100 to-neutral-200 dark:from-neutral-950 dark:to-neutral-900 py-2 px-2">
      {THEME_OPTIONS.map(({ value, icon: Icon, label }) => {
        const isActive = theme === value;
        return (
          <Tooltip key={value}>
            <TooltipTrigger aschild="true">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setTheme(value);
                }}
                className="relative z-10 cursor-pointer rounded-full p-1"
              >
                {isActive && (
                  <motion.div
                    layoutId="theme-indicator"
                    className="absolute inset-0 rounded-full border bg-background dark:bg-neutral-800 dark:border-neutral-700 shadow-sm z-0"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon
                  size={ICON_SIZE}
                  className={cn(
                    "relative z-10 transition-colors",
                    isActive ? "text-foreground" : "text-neutral-500",
                  )}
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>{label}</TooltipContent>
          </Tooltip>
        );
      })}

      <Separator
        orientation="vertical"
        className="ml-1 bg-neutral-300 dark:bg-neutral-800"
      />
      <Button onClick={() => router.push("https://x.com/yuvanvk")} size="icon-sm" variant="ghost" className="text-neutral-500">
        <FaXTwitter />
      </Button>
      <Button onClick={() => router.push("https://github.com/yuvanvk")} size="icon-sm" variant="ghost" className="text-neutral-500">
        <IoLogoGithub />
      </Button>
      <Separator
        orientation="vertical"
        className="bg-neutral-300 dark:bg-neutral-800"
      />
      <Button
        size="icon-sm"
        variant="ghost"
        className="text-neutral-500 mx-auto"
      >
        <IoVolumeMediumOutline />
      </Button>
    </div>
  );
}

function WorkspaceHeader() {
  return (
    <div className="flex items-center gap-1.5 rounded-xl border bg-linear-to-b from-neutral-100 to-neutral-200 dark:from-neutral-950 dark:to-neutral-900 py-2 px-2">
      <div className="w-10 h-10 bg-blue-500 border border-blue-400 rounded-lg" />
      <div className="flex flex-col">
        <h1 className="tracking-tight text-[14px] font-medium">
          Yuvan Vignesh
        </h1>
        <h2 className="text-[12px] text-muted-foreground leading-4">
          Workspace
        </h2>
      </div>
    </div>
  );
}

export const AppSidebar = () => {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <Sidebar variant="inset">
      <SidebarHeader className="p-0">
        <WorkspaceHeader />
        <Toolbox />
      </SidebarHeader>

      <SidebarContent className="mt-4">
        <SidebarSeparator />

        <SidebarGroup className="space-y-2">
          <SidebarGroupLabel>Welcome</SidebarGroupLabel>
          {NAV_ITEMS.map(({ icon: Icon, label, route }) => (
            <SidebarMenuItem
              key={label}
              className={cn(
                route === pathName &&
                  "bg-linear-to-b from-neutral-100 to-neutral-200 dark:from-neutral-700 dark:to-neutral-800/90 rounded-lg border-neutral-200 dark:border-neutral-700 border",
              )}
            >
              <SidebarMenuButton
                onClick={() => router.push(route)}
                className="font-medium"
              >
                <Icon />
                {label}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>My Products</SidebarGroupLabel>
          {PRODUCT_ITEMS.map(({ icon: Icon, label }) => (
            <SidebarMenuItem key={label}>
              <SidebarMenuButton className="font-medium">
                <Icon />
                {label}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
