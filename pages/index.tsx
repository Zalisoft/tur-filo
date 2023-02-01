import type { NextPage } from "next";
import Header from "@/components/Header";
import Image from "next/image";
import QR from "@/public/images/QR.jpeg";
import Footer from "@/components/Footer";
import { FaCar, FaCarCrash, FaCaravan } from "react-icons/fa";
import { GiSpeedometer } from "react-icons/gi";
import Logo from "@/public/icons/Logo-white.png";
import Card from "@/components/Card";
import Driver from "@/public/images/Driver.jpg";
import Road from "@/public/images/Road.jpg";
import ComingSoon from "@/public/images/ComingSoon.jpg";
import LoginForm from "@/components/LoginForm";
import { useState } from "react";

const Home: NextPage = () => {
  const [status, setStatus] = useState<"bireysel" | "kurumsal">("bireysel");
  return (
    <div className="overflow-hidden">
      <Header />
      {/* --Form-- */}
      <section className="fixed-BG relative h-[65vh] w-full p-8">
        <div className="relative mx-auto w-full">
          <h1 className="absolute left-[50%] translate-x-[-50%] translate-y-[-1.5rem] bg-primary px-12 py-4 text-5xl font-bold text-white">
            Rezervasyon
          </h1>

          <form className="mx-auto h-[38rem] w-[50rem] rounded-xl bg-secondary py-24 px-12">
            <div className="flex w-full items-center justify-around">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setStatus("bireysel");
                }}
                className={`mb-5 w-[48%] text-center transition-all ${
                  status === "bireysel"
                    ? "bg-primary py-2 text-2xl font-bold text-white"
                    : "bg-gray-200 text-xl text-gray-400"
                }`}
              >
                Bireysel
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setStatus("kurumsal");
                }}
                className={`mb-5 w-[48%] text-center transition-all ${
                  status === "kurumsal"
                    ? "bg-primary py-2 text-2xl font-bold text-white"
                    : "bg-gray-200 text-xl text-gray-400"
                }`}
              >
                Kurumsal
              </button>
            </div>
            <LoginForm />
          </form>
        </div>
      </section>
      {/* --Banner-- */}
      <div className="flex justify-center font-bold text-primary">
        <div className="my-28 border-r-[1px] border-primary px-20">
          <FaCar className="mx-auto" size={60} />
          <h1>Güvenli Araç Kiralama</h1>
        </div>
        <div className="my-28 border-r-[1px] border-primary px-20">
          <GiSpeedometer className="mx-auto" size={60} />
          <h1>Hızlı Hizmet</h1>
        </div>
        <div className="my-28 border-r-[1px] border-primary px-20">
          <FaCarCrash className="mx-auto" size={60} />
          <h1>Sigorta ve Güvenceler</h1>
        </div>
        <div className="my-28 px-20">
          <FaCaravan className="mx-auto" size={60} />
          <h1>Karaven Kiralama</h1>
        </div>
      </div>
      {/* --QR Code-- */}
      <div className="flex w-full items-center justify-center bg-primary px-20 py-5">
        <Image src={Logo} alt="" />
        <div className="mx-auto h-[250px] w-[500px] rounded-full bg-white">
          <Image className="mx-auto py-[20px]" src={QR} alt="" width={200} />
        </div>
        <Image src={Logo} alt="" />
      </div>
      {/* --Cards-- */}
      <div className="mx-auto my-40 flex h-[400px] w-[80vw] gap-5">
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

      <Footer />
    </div>
  );
};

export default Home;
