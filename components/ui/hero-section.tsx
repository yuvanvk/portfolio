import { TextHighLighter } from "./text-highlighter";

export const HeroSection = () => {
  return (
    <div className="text-center">
      <div className="max-w-3xl text-3xl">
        i'm <span className="font-bold">Abhi,</span> i code.
      </div>
      <div className="text-sm my-5">20 year old, <TextHighLighter text="building full stack apps"/>, learning new stuff</div>
    </div>
  );
};
