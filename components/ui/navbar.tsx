import { Dock, DockIcon } from "../magicui/dock";
import { RiHome2Line } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./button";
import { Separator } from "./separator";



export const NavBar = () => {

  const DATA = {
    navbar: [
      {
        icon: <RiHome2Line />,
        label: "Home",
        href: "#",
      },
      {
        icon: <FiGithub />,
        label: "Github",
        href: "#",
      },
      {
        icon: <FaXTwitter />,
        label: "X",
        href: "#",
      },
      {
        icon: <AiOutlineMail />,
        label: "Mail",
        href: "#",
      },
    ],
  };



  return (
    <TooltipProvider>
      <Dock direction="middle">
        {DATA.navbar.map((item) => (
          <DockIcon key={item.label}>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  href={item.href}
                  aria-label={item.label}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full"
                  )}

                >{item.icon}</Link>
              </TooltipTrigger>
              <TooltipContent><p>{item.label}</p></TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical"/>
      </Dock>
    </TooltipProvider>
  );
};
