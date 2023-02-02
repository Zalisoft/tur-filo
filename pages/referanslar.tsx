import CardHeader from "@/components/CardHeader";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Zalisoft from "@/public/icons/Zalisoft.png";
import Yılmar from "@/public/icons/Yılmar.png";
import Ergıda from "@/public/icons/Ergıda.png";
import Ermetal from "@/public/icons/Ermetal.png";

const referanslar = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <CardHeader h1="Referanslar" />
      <div className="container mx-auto my-12 grid grid-cols-2 md:my-52 md:flex md:flex-row md:items-center md:justify-around">
        <Image width={250} src={Zalisoft} alt="" />
        <Image width={250} src={Yılmar} alt="" />
        <Image width={250} src={Ermetal} alt="" />
        <Image width={250} src={Ergıda} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default referanslar;