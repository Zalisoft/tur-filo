import CardHeader from "@/components/CardHeader";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Egea from "@/public/images/araçlar/Fiat Egea.png";
import Clio from "@/public/images/araçlar/Renault Clio.png";
import Tailant from "@/public/images/araçlar/Renault Tailant.png";
import Image from "next/image";

const Kampanyalar = () => {
  return (
    <section className="overflow-hidden">
      <Header />
      <CardHeader h1="Kampanyalar" />
      <div className="container mx-auto my-12 grid grid-cols-3 gap-5">
        <div className="flex flex-col items-center justify-center gap-10 bg-white p-5">
          <h1 className="text-center text-xl font-bold text-primary md:text-4xl">
            Fiat Egea
          </h1>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-center text-gray-500 line-through">
              550 TL + KDV/ Günlük
            </h3>
            <h2 className="text-center text-xl font-bold">
              450 TL + KDV/ Günlük
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-center text-gray-500 line-through">
              12.000 TL + KDV/ Aylık
            </h3>
            <h2 className="text-center text-xl font-bold">
              9.000 TL + KDV/ Aylık
            </h2>
          </div>
          <Image src={Egea} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center gap-10 bg-white p-5">
          <h1 className="text-center text-center text-xl font-bold text-primary md:text-4xl">
            Renault Clio
          </h1>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-center text-gray-500 line-through">
              550 TL + KDV/ Günlük
            </h3>
            <h2 className="text-center text-xl font-bold">
              450 TL + KDV/ Günlük
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-center text-gray-500 line-through">
              12.000 TL + KDV/ Aylık
            </h3>
            <h2 className="text-center text-xl font-bold">
              9.000 TL + KDV/ Aylık
            </h2>
          </div>
          <Image src={Clio} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center gap-10 bg-white p-5">
          <h1 className="text-center text-xl font-bold text-primary md:text-4xl">
            Renault Tailant
          </h1>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-center text-gray-500 line-through">
              500 TL + KDV/ Günlük
            </h3>
            <h2 className="text-center text-xl font-bold">
              450 TL + KDV/ Günlük
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-center text-gray-500 line-through">
              12.000 TL + KDV/ Aylık
            </h3>
            <h2 className="text-center text-xl font-bold">
              11.000 TL + KDV/ Aylık
            </h2>
          </div>
          <Image src={Tailant} alt="" />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Kampanyalar;
