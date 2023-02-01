import Image, { StaticImageData } from "next/image";
import ABS from "@/public/icons/abs.jpeg";
import Airbag from "@/public/icons/Airbag.jpeg";
import Fuel from "@/public/icons/Fuel.jpeg";
import Passangers from "@/public/icons/Passangers.jpeg";
import Usage from "@/public/icons/Usage.jpeg";
import Vites from "@/public/icons/Vites.jpeg";

type Props = {
  category: "Ekonomik" | "Konfor" | "Lüx" | "Prestij" | "Van" | "Ticari";
  marka:
    | "Audi"
    | "Audi"
    | "BMW"
    | "Citroen"
    | "Dacia"
    | "Fiat"
    | "Ford"
    | "Honda"
    | "Hyundai"
    | "Jeep"
    | "Mercedes"
    | "Opel"
    | "Peugeot"
    | "Volkswagen"
    | "Volvo";
  model: string;
  img: StaticImageData;
  fiyat: number;
  yolcu: number;
};

const VehliceCard = (props: Props) => {
  const { category, marka, model, img, fiyat, yolcu } = props;
  return (
    <section className="flex h-[32rem] flex-col justify-between p-5 shadow-lg">
      <header className="flex items-center justify-between">
        <div>
          <h3 className="text-xs font-bold text-primary">
            {category} Kiralık Araçlar
          </h3>
          <h2 className="text-xl font-bold">
            {marka} {model}
          </h2>
        </div>
        <h1 className="text-2xl font-bold">{fiyat} TL/ gün</h1>
      </header>
      <Image className="w-full p-5" src={img} alt="" />
      <div className="grid grid-cols-2 gap-6">
        <h1 className="flex items-center gap-2">
          <Image width={30} src={Passangers} alt="" />
          {yolcu}
        </h1>
        <h1 className="flex items-center gap-2">
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
