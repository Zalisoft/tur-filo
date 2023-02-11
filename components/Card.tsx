import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";

type Props = {
  img: StaticImageData;
  h1: string;
  h2: string;
  link?: string | undefined;
};

const Card = (props: Props) => {
  const { img, h1, h2, link } = props;
  return (
    <div className="relative h-full w-full overflow-hidden border-[4px] border-black">
      <Image className="z-2 absolute h-full bg-black" src={img} alt="" />
      <div className="z-3 absolute h-full w-full bg-[rgba(0,0,0,.6)]">
        <h1 className="z-4 mt-[10rem] bg-primary py-2 px-2 text-sm font-bold text-white lg:mt-[15rem] lg:text-2xl">
          {h1}
        </h1>
        <h2 className="z-4 bg-black font-bold text-white">{h2}</h2>
        <Link
          className="z-4 absolute bottom-2 right-2 rounded bg-black px-6 py-3 text-xl font-bold text-white transition-all hover:bg-primary"
          href={link ? link : ""}
        >
          Detaylar
        </Link>
      </div>
    </div>
  );
};

export default Card;
