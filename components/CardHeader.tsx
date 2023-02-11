import Image from "next/image";
import BMW from "@/public/images/Nissan.jpg";

type Props = { h1: string; sm?: boolean };

const CardHeader = (props: Props) => {
  const { h1 } = props;
  return (
    <header className="relative h-[20vh] w-full overflow-hidden md:h-[45vh]">
      <h1
        className={`absolute z-10 h-full w-full bg-[rgba(0,0,0,.55)] py-14 text-center ${
          props.sm ? "text-3xl" : "text-6xl"
        } font-bold text-white md:py-44`}
      >
        {h1}
      </h1>
      <Image className="absolute bg-cover" src={BMW} alt="" />
    </header>
  );
};

export default CardHeader;
