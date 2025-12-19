import Image from "next/image";

export const Projects = () => {
  return (
    <div>
      <div className="fixed top-20 left-20">
        <div className="w-[380px] h-52 rounded-xl overflow-hidden">
            <Image src={"/strato.png"} alt="pnf" fill className="rounded-xl"/>
        </div>
      </div>
      <div className="fixed bottom-50 right-50 flex flex-col">
        <div className="flex items-center gap-x-1">
          <div className="uppercase font-[200] text-sm text-neutral-500">
            My projects
          </div>
          <div className="h-[1.5px] w-80 bg-neutral-300" />
        </div>
        <div className="text-[40px] tracking-tighter leading-12 dark:text-neutral-500 text-neutral-800">
          <div className="cursor-pointer">Strato - All in one AI chat app</div>
          <div className="cursor-pointer">Nexus - Note taking app</div>
          <div className="cursor-pointer">Thoughts - Blogging Platform</div>
          <div className="cursor-pointer">Mars - Cool youtube clone</div>
          <div className="cursor-pointer">Gojo - Landing page</div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
