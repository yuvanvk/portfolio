"use client";

export const Navbar = () => {

  const pages = [{
    name: "home",
  }]
  return (
    <div className="fixed w-full z-10 top-8">
      <div className="flex items-center justify-center gap-x-4 backdrop-blur-md tracking-tighter max-w-3xl mx-auto" >
        <div className="flex items-center gap-x-1 hover:bg-neutral-900 p-2 rounded-lg cursor-pointer">
          <span className="text-sm">Home</span>
          <span className="size-4 hidden border border-white items-center justify-center px-1 text-xs md:flex rounded-sm">
            H
          </span>
        </div>

        <div className="flex items-center gap-x-1 text-neutral-700 hover:bg-neutral-900 p-2 rounded-lg cursor-pointer">
          <span className="text-sm">About</span>
          <span className="size-4 hidden border border-neutral-700 items-center justify-center px-1 text-xs md:flex rounded-sm">
            A
          </span>
        </div>

        <div className="flex items-center gap-x-1 text-neutral-700 hover:bg-neutral-900 p-2 rounded-lg cursor-pointer">
          <span className="text-sm">Projects</span>
          <span className="size-4 hidden border border-neutral-700 items-center justify-center px-1 text-xs md:flex rounded-sm">
            P
          </span>
        </div>

        <div className="flex items-center gap-x-1 text-neutral-700 hover:bg-neutral-900 p-2 rounded-lg cursor-pointer">
          <span className="text-sm">Contact</span>
          <span className="size-4 hidden border border-neutral-700 items-center justify-center px-1 text-xs md:flex rounded-sm">
            C
          </span>
        </div>

        <div className="flex items-center gap-x-1 text-neutral-700 hover:bg-neutral-900 p-2 rounded-lg cursor-pointer">
          <span className="text-sm">Agency</span>
          <span className="size-4 hidden border border-neutral-700 items-center justify-center px-1 text-xs md:flex rounded-sm">
            Y
          </span>
        </div>

        <div className="rounded-full flex items-center justify-between gap-x-2 tracking-tighter text-xs font-mono bg-neutral-900 border px-3 py-1">
          <div className="size-2 bg-lime-500 rounded-full" />
          <div>13:11</div>
          <div>GMT+5: 30</div>
        </div>
      </div>
    </div>
  );
};
