import Footer from "@/components/Footer";
import Header from "@/components/Header";
import VehliceCard from "@/components/VehliceCard";
import CarFilterLink from "../components/CarFilterLink";
import CarList from "@/lib/data/data.json";
import { useState } from "react";

const AracKiralama = () => {
  const [categoryFilter, setCategoryFilter] = useState<string>("Tüm");
  const [nameFilter, setNameFilter] = useState<String>(""); //------------TODO: Araç filtresindeki search bar--------------
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(20000);
  const [markaFilter, setMarkaFilter] = useState<string>("Tüm");

  return (
    <div className="overflow-hidden">
      <Header />
      <nav className="hidden w-full grid-cols-7 bg-white px-36 py-6 md:grid">
        <CarFilterLink
          active={categoryFilter}
          setActive={setCategoryFilter}
          text="Tüm"
        />
        <CarFilterLink
          active={categoryFilter}
          setActive={setCategoryFilter}
          text="Ekonomik"
        />
        <CarFilterLink
          active={categoryFilter}
          setActive={setCategoryFilter}
          text="Konfor"
        />
        <CarFilterLink
          active={categoryFilter}
          setActive={setCategoryFilter}
          text="Prestij"
        />
        <CarFilterLink
          araç={false}
          active={categoryFilter}
          setActive={setCategoryFilter}
          text="Van"
        />
        <CarFilterLink
          active={categoryFilter}
          setActive={setCategoryFilter}
          text="Ticari"
        />
        <CarFilterLink
          active={categoryFilter}
          setActive={setCategoryFilter}
          text="Lüks"
        />
      </nav>
      <header
        className={`container fixed left-[50%] rounded border-2 border-gray-200 bg-white py-4 px-8 transition-all`}
        style={{ transform: `translate(-50% , 0)` }}
      >
        <form className="grid grid-cols-4 gap-3">
          <label className="flex flex-col">
            Marka
            <select
              onChange={(e) => {
                setMarkaFilter(e.target.value);
              }}
            >
              <option value="Tüm">-</option>
              <option value="Audi">Audi</option>
              <option value="BMW">BMW</option>
              <option value="Citroen">Citroen</option>
              <option value="Dacia">Dacia</option>
              <option value="Fiat">Fiat</option>
              <option value="Ford">Ford</option>
              <option value="Honda">Honda</option>
              <option value="Hyundai">Hyundai</option>
              <option value="Jeep">Jeep</option>
              <option value="Mercedes">Mercedes</option>
              <option value="Opel">Opel</option>
              <option value="Peugeot">Peugeot</option>
              <option value="Volkswagen">Volkswagen</option>
              <option value="Volvo">Volvo</option>
            </select>
          </label>
          <label className="mx-auto flex flex-col">
            Fiyat Aralığı
            <span className="absolute translate-x-[175%] text-sm text-gray-400">
              /günlük
            </span>
            <div>
              <input
                type="number"
                value={minPrice}
                onChange={(e) => {
                  setMinPrice(Number(e.target.value));
                }}
                className="w-[40%] border-2 border-gray-200"
              />
              -
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => {
                  setMaxPrice(Number(e.target.value));
                }}
                className="w-[40%] border-2 border-gray-200"
              />
            </div>
          </label>
          <label className="flex flex-col ">
            Ara
            <input className="border-2 border-gray-200 " />
          </label>
          <label className="flex flex-col text-white">
            -<button className="w-full bg-secondary text-black">Yenile</button>
          </label>
        </form>
      </header>
      <section className="container mx-auto flex">
        <div className="my-12 grid grid-cols-2 gap-3 md:mb-12 md:mt-36 md:grid-cols-4">
          {CarList.filter(
            (listItem) =>
              listItem.fiyat > minPrice &&
              listItem.fiyat < maxPrice &&
              (listItem.marka === markaFilter || markaFilter === "Tüm") &&
              (listItem.category === categoryFilter || categoryFilter === "Tüm")
          ).map((car, index) => (
            <VehliceCard
              key={index}
              category={car.category}
              marka={car.marka}
              model={car.model}
              fiyat={car.fiyat}
              yolcu={car.yolcu}
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AracKiralama;
