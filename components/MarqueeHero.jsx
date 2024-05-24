import Marquee from "react-fast-marquee";

const Components = () => {
  return (
    <>
      <h1 className="font-protest text-7xl lg:text-9xl xl:text-[160px] 2xl:text-[180px] px-6 font-extrabold text-secondary/50 text-outline tracking-widest shadow-sm uppercase opacity-20">
        sparshh
      </h1>
      <h1 className="font-protest text-7xl lg:text-9xl xl:text-[160px] 2xl:text-[180px] px-6 font-extrabold text-secondary/50 text-outline tracking-widest shadow-sm uppercase opacity-20">
        sparshh
      </h1>
      <h1 className="font-protest text-7xl lg:text-9xl xl:text-[160px] 2xl:text-[180px] px-6 font-extrabold text-secondary/50 text-outline tracking-widest shadow-sm uppercase opacity-20">
        sparshh
      </h1>
    </>
  );
};

const MarqueeHero = () => {
  return (
    <div className="absolute -top-6 left-0 w-full h-[45vh] md:h-[55vh] xl:h-[65vh] flex flex-col items-start gap-2.5 overflow-hidden">
      <Marquee autoFill speed={20} className="!overflow-y-hidden !h-auto">
        <Components />
      </Marquee>
      <Marquee
        autoFill
        speed={22}
        direction="right"
        className="!overflow-y-hidden !h-auto"
      >
        <Components />
      </Marquee>
      <Marquee autoFill speed={24} className="!overflow-y-hidden !h-auto">
        <Components />
      </Marquee>
      <Marquee
        autoFill
        speed={22}
        className="!overflow-y-hidden !h-auto"
        direction="right"
      >
        <Components />
      </Marquee>
    </div>
  );
};

export default MarqueeHero;
