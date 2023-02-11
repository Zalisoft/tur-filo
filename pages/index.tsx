import type { NextPage } from "next";
import Image from "next/image";
import QR from "@/public/images/QR.jpeg";
import { FaCar, FaCarCrash, FaCaravan } from "react-icons/fa";
import { GiSpeedometer } from "react-icons/gi";
import Logo from "@/public/icons/Logo-white.png";
import Card from "@/components/Card";
import Driver from "@/public/images/Driver.jpg";
import Road from "@/public/images/Road.jpg";
import ComingSoon from "@/public/images/ComingSoon.jpg";
import LoginForm from "@/components/LoginForm";

const Home: NextPage = () => {
  return (
    <div className="overflow-hidden">
      {/* --Form-- */}
      <section
        className={`fixed-BG relative h-[76vh] w-full md:!bg-secondary md:p-8`}
      >
        <div className="relative mx-auto w-full">
          <h1 className="absolute left-[50%] translate-y-2 translate-x-[-50%] bg-primary px-12 py-4 text-5xl font-bold text-white md:translate-y-[-1.5rem]">
            Rezervasyon
          </h1>
          <LoginForm /> {/* TODO Hidrasyon Hatası sebebi */}
        </div>
      </section>
      {/* --Banner-- */}
      <div className="container mx-auto my-12 grid grid-cols-4 font-bold text-primary md:my-0">
        <div className="my-28 flex flex-col items-center border-r-[1px] border-primary px-4 md:px-20">
          <FaCar className="mx-auto" size={60} />
          <h1 className="text-center text-xs md:text-base">
            Güvenli Araç Kiralama
          </h1>
        </div>
        <div className="my-28 flex flex-col items-center border-r-[1px] border-primary px-4 md:px-20">
          <GiSpeedometer className="mx-auto" size={60} />
          <h1 className="text-center text-xs md:text-base">Hızlı Hizmet</h1>
        </div>
        <div className="my-28 flex flex-col items-center border-r-[1px] border-primary px-4 md:px-20">
          <FaCarCrash className="mx-auto" size={60} />
          <h1 className="text-center text-xs md:text-base">
            Sigorta ve Güvenceler
          </h1>
        </div>
        <div className="my-28 flex flex-col items-center px-4 md:px-20">
          <FaCaravan className="mx-auto" size={60} />
          <h1 className="text-center text-xs md:text-base">Karaven Kiralama</h1>
        </div>
      </div>
      {/* --QR Code-- */}
      <div className="flex w-full items-center justify-center bg-primary px-20 py-5">
        <Image className="hidden xl:inline" src={Logo} alt="" />
        <div className="mx-auto h-[250px] w-[500px] rounded-full bg-white">
          <Image className="mx-auto py-[20px]" src={QR} alt="" width={200} />
        </div>
        <Image className="hidden xl:inline" src={Logo} alt="" />
      </div>
      {/* --Cards-- */}
      <div className="mx-auto my-40 grid h-[62rem] grid-cols-1 gap-2 px-5 lg:flex lg:h-[30rem] lg:w-[80vw]">
        <Card
          img={Driver}
          h1="Şoförlü Kiralama"
          h2="Yapmanız Gereken Tek Şey Sürüşün Tadını Çıkarmak"
          link="/soforlu-kiralama/"
        />
        <Card
          img={Road}
          h1="Araç Kiralama Kampanyaları"
          h2="Koşula Bağlı Büyük İndirimler"
          link="/kampanyalar"
        />
        <Card
          img={ComingSoon}
          h1="Karavan Ve Elektrikli Araçlar"
          h2="YAKINDA!!!"
        />
      </div>
    </div>
  );
};

export default Home;
