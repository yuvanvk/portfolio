"use client";

import { CRAFTSINFO } from "@/lib/crafts";
import { Thumbnail } from "./thumbnail";
import { motion } from "motion/react";

export const Crafts = () => {

  return (
    <div>
      <div className="px-2 font-mono  pb-4">Proof of work</div>
      <div className="flex flex-col gap-y-3 md:gap-y-5">
        {CRAFTSINFO.map((c => (
          <motion.div whileHover={{ scale: 1.02}} transition={{ duration: 0.3 }} key={c.imageUrl} className="cursor-pointer">
            <Thumbnail redirectLink={c.redirectLink} link={c.link} imageUrl={c.imageUrl}/>
          </motion.div>
        )))}
      </div>  
    </div>
  )
};
