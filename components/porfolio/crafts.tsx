import { CRAFTSINFO } from "@/lib/crafts";
import { Thumbnail } from "./thumbnail";

export const Crafts = () => {

  return (
    <div>
      <div className="px-2 font-mono text-neutral-800 dark:text-neutral-300 pb-4">Crafts</div>
      <div className="flex flex-col space-y-2">
        {CRAFTSINFO.map((c => (
          <div key={c.imageUrl}>
            <Thumbnail link={c.link} imageUrl={c.imageUrl}/>
          </div>
        )))}
      </div>  
    </div>
  )
};
