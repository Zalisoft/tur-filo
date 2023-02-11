import CardHeader from "@/components/CardHeader";
import Image from "next/image";
import Zalisoft from "@/public/icons/Zalisoft.png";
import Yılmar from "@/public/icons/Yılmar.png";
import Ergıda from "@/public/icons/Ergıda.png";
import Ermetal from "@/public/icons/Ermetal.png";

const referanslar = () => {
  return (
    <div className="overflow-hidden">
      <CardHeader h1="Referanslar" />
      <div className="container mx-auto my-12 grid grid-cols-2 md:my-52 md:flex md:flex-row md:items-center md:justify-around">
        <Image width={250} src={Zalisoft} alt="" />
        <Image width={250} src={Yılmar} alt="" />
        <h1 className="text-center">Zalisoft</h1>
        <h1 className="text-center">Yılmar</h1>
        <Image width={250} src={Ermetal} alt="" />
        <Image width={250} src={Ergıda} alt="" />
        <h1 className="text-center">Ermetal</h1>
        <h1 className="text-center">Ergıda</h1>
      </div>
    </div>
  );
};

export default referanslar;
