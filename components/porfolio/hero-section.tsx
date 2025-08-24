import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const HeroSection = () => {
  return (
    <div className=" font-satoshi font-light px-3">
      <div className="max-w-3xl flex gap-8 items-center">
        <Avatar className="w-28 h-28">
          <AvatarImage  src="/ben.jpeg" alt="@abhi"/>
          <AvatarFallback>abhi</AvatarFallback>
        </Avatar>

        <div>
          <div className="text-3xl md:text-4xl font-bold font-satoshi lowercase">AbhiVignesh</div>
          <div className="text-sm">@abhiiscool</div>

          <div className="my-3 lowercase">
            <div className="dark:text-white font-medium text-sm">20 &middot; Full Stack Engineer</div>
          </div>
        </div>
      </div>
      
    </div>
  );
};
