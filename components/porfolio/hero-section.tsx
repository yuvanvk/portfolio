import { TextHighLighter } from "../ui/text-highlighter";

export const HeroSection = () => {
  return (
    <div className="text-center font-satoshi font-light">
      <div className="max-w-3xl text-3xl">
        i&apos;m <span className="font-satoshi font-bold">abhi,</span> i code.
      </div>
      <div className="text-sm my-5">20 year old, <TextHighLighter text="building full stack apps"/>, learning new stuff</div>
    </div>
  );
};
