import { VscLinkExternal } from "react-icons/vsc";
import { FaCodeMerge } from "react-icons/fa6";

export const OSSCard = ({ PR, href }: { PR: string; href: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="w-full px-4 py-3 border bg-neutral-200/90 dark:bg-neutral-900 rounded-lg border-neutral-200 dark:border-neutral-800  font-normal flex justify-between items-center"
    >
      <div className="flex items-center gap-2">
        <FaCodeMerge size={20} className="text-purple-500" />
        <p className="text-sm font-medium">{PR}</p>
      </div>
      <VscLinkExternal size={18} />
    </a>
  );
};
