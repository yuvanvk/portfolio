import { NextJS } from "../svgs/nextjs";
import { Prisma } from "../svgs/prisma";
import { React } from "../svgs/react";
import { TailwindCSS } from "../svgs/tailwindcss";
import { TypeScript } from "../svgs/typesscript";
import { Badge } from "./badge";

export const HeroSection = () => (
  <div className="px-0.5 py-10 space-y-5">
    <p className="font-brico font-light leading-relaxed">
      I'm a developer who loves learning new things and building the stuff I enjoy using{" "}
      <Badge>
        <NextJS />
        Next.js
      </Badge>
      &#44; <Badge>
        <React />
        React
      </Badge>
      &#44; <Badge>
        <TailwindCSS />
        <span className="whitespace-nowrap">Tailwind CSS</span>
      </Badge>
      &#44; <Badge>
        <TypeScript />
        TypeScript
      </Badge>
      &#44; and <Badge>
        <Prisma />
        Prisma
      </Badge>
       &#46; Apart from tech I love playing games.
    </p>
  </div>
);