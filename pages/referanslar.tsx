import CardHeader from "@/components/CardHeader";
import Image from "next/image";
import Zalisoft from "@/public/icons/Zalisoft.png";
import Yılmar from "@/public/icons/Yılmar.png";
import Ergıda from "@/public/icons/Ergıda.png";
import Ermetal from "@/public/icons/Ermetal.png";

const referanslar = () => {
  const textClass = "text-center text-xl font-[500]";
  return (
    <div className="overflow-hidden">
      <CardHeader h1="Referanslar" />
      <div className="container mx-auto my-12 grid grid-cols-2 md:my-52 md:flex md:h-[300px] md:flex-row md:items-center md:justify-around">
        <div className="flex h-full flex-col justify-between">
          <Image className="px-5" width={225} src={Zalisoft} alt="" />
          <h1 className={textClass}>Zalisoft</h1>
        </div>
        <div className="flex h-full flex-col justify-between">
          <Image className="px-5" width={225} src={Yılmar} alt="" />
          <h1 className={textClass}>Yılmar</h1>
        </div>
        <div className="flex h-full flex-col justify-between">
          <Image className="px-5 pt-10" width={225} src={Ermetal} alt="" />
          <h1 className={textClass}>Ermetal</h1>
        </div>
        <div className="flex h-full flex-col justify-between">
          <Image className="px-5" width={225} src={Ergıda} alt="" />
          <h1 className={textClass}>Ergıda</h1>
        </div>
      </div>
    </div>
  );
};

export default referanslar;
