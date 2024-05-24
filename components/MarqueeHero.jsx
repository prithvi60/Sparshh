import Marquee from "react-fast-marquee";

const data = ["sparshh", "sparshh", "sparshh"];

const Components = () => {
  return (
    <>
      {data.map((item, idx) => (
        <h1
          className="font-protest text-7xl lg:text-9xl xl:text-[160px] 2xl:text-[180px] px-4 sm:px-6 font-extrabold bg-clip-text text-transparent tracking-widest shadow-xl uppercase opacity-25 goldenColor" 
          key={idx}
        >
          {item}
        </h1>
      ))}
    </>
  );
};

const MarqueeHero = () => {
  return (
    <div className="absolute -top-6 left-0 w-full h-[45vh] md:h-[55vh] xl:h-[65vh] flex flex-col items-start gap-1 sm:gap-2.5 overflow-hidden">
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
