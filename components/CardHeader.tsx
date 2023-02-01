import Image from "next/image";
import BMW from "@/public/images/BMW.jpg";

type Props = { h1: string };

const CardHeader = (props: Props) => {
  const { h1 } = props;
  return (
    <header className="relative h-[45vh] w-full overflow-hidden">
      <h1 className="absolute z-10 h-full w-full bg-[rgba(0,0,0,.55)] py-44 text-center text-6xl font-bold text-white">
        {h1}
      </h1>
      <Image
        className="absolute w-full translate-y-[-15%] bg-cover"
        src={BMW}
        alt=""
      />
    </header>
  );
};

export default CardHeader;
