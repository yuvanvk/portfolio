import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
};


export const System = ({ size = 12, className, ...props }: IconProps) => (
    <svg
      data-testid="geist-icon"
      height={size}
      width={size}
      viewBox="0 0 16 16"
      strokeLinejoin="round"
      fill="currentColor"
      className={cn(className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 3.25C1 1.45507 2.45507 0 4.25 0H11.75C13.5449 0 15 1.45507 15 3.25V15.25V16H14.25H1.75H1V15.25V3.25ZM4.25 1.5C3.2835 1.5 2.5 2.2835 2.5 3.25V14.5H13.5V3.25C13.5 2.2835 12.7165 1.5 11.75 1.5H4.25ZM4 4C4 3.44772 4.44772 3 5 3H11C11.5523 3 12 3.44772 12 4V10H4V4ZM9 13H12V11.5H9V13Z"
      />
    </svg>
  );
  
  export const Yuvly = ({ size = 12, className, ...props }: IconProps) => {
    return <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        height={size}
        width={size}
        className={cn(className)}
        {...props}
      >
        <g transform="translate(100 100) scale(0.8233) translate(-100.05 -99.99)">
          <path
            d="M 141.2 59.545 C 177.007 64.647 202.034 77.317 202.084 100 C 202.025 122.681 177.003 135.351 141.203 140.459 C 135.936 175.587 123.01 200.091 100 200.116 C 76.985 200.114 64.048 175.621 58.776 140.48 C 22.999 135.35 -1.952 122.665 -1.978 100 C -1.961 77.334 22.995 64.648 58.779 59.523 C 64.05 24.383 76.983 -0.122 100 -0.131 C 123.012 -0.099 135.934 24.417 141.2 59.545 Z"
            fill="#60A5FA"
          />
        </g>
  
        {/* left eye */}
        <ellipse cx="86" cy="89" rx="6.5" ry="8" fill="#111" />
        {/* right eye */}
        <ellipse cx="114" cy="89" rx="6.5" ry="8" fill="#111" />
  
        {/* eye shines */}
        <circle cx="88.5" cy="85.5" r="2.2" fill="white" />
        <circle cx="116.5" cy="85.5" r="2.2" fill="white" />
  
        {/* nose */}
        <circle cx="100" cy="99" r="2.5" fill="#111" />
  
        {/* left blush */}
        <ellipse cx="79" cy="103" rx="8" ry="4.5" fill="#f4a0b0" opacity="0.8" />
        {/* right blush */}
        <ellipse cx="121" cy="103" rx="8" ry="4.5" fill="#f4a0b0" opacity="0.8" />
      </svg>
  }