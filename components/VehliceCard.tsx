import Image from "next/image";
import ABS from "@/public/icons/abs.jpeg";
import Airbag from "@/public/icons/Airbag.jpeg";
import Fuel from "@/public/icons/Fuel.jpeg";
import Passangers from "@/public/icons/Passangers.jpeg";
import Vites from "@/public/icons/Vites.jpeg";

type Props = {
  category: string;
  marka: string;
  model: string;
  additive?: string;
  fiyat: number;
  yolcu: number;
};

const VehliceCard = (props: Props) => {
  const { category, marka, model, fiyat, yolcu, additive } = props;
  let clasdas = "flex items-center gap-2";
  return (
    <section className="flex h-[32rem] flex-col justify-between bg-white p-5 shadow-lg">
      <header className="grid grid-cols-2">
        <h3 className="text-xs font-bold text-primary">
          {category} Kiralık Araçlar
        </h3>
        <h2 className="row-span-2 text-left text-lg font-bold">
          {marka} {model} {additive && additive}
        </h2>
        <h1 className="font-bold md:text-base lg:text-2xl ">{fiyat} TL/ gün</h1>
      </header>
      <Image
        className="w-full p-5"
        src={require(`../public/images/araçlar/${category}/${marka} ${model}.png`)}
        alt=""
      />
      <div className="grid grid-cols-2 gap-6">
        <h1 className="flex items-center gap-2">
          <Image width={30} src={Passangers} alt="" />
          {yolcu}
        </h1>
        <h1 className={clasdas}>
          <Image width={30} src={Airbag} alt="" />
          Airbag
        </h1>
        <h1 className="flex items-center gap-2">
          <Image width={30} src={ABS} alt="" />
          ABS
        </h1>
        <h1 className="flex items-center gap-2">
          <Image width={30} src={Fuel} alt="" />
          Dizel, Benzin
        </h1>
        <h1 className="flex items-center gap-2">
          <Image width={30} src={Vites} alt="" />
          Otomatik, Manuel
        </h1>
        <button className="bg-primary text-lg font-bold text-white">
          Hemen Kirala
        </button>
      </div>
    </section>
  );
};

export default VehliceCard;
