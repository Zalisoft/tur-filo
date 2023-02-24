import VehliceCard from "@/components/VehliceCard";
import CarFilterLink from "../components/CarFilterLink";
import CarList from "@/lib/data/data.json";
import { useState } from "react";

const AracKiralama = () => {
  const [categoryFilter, setCategoryFilter] = useState<string>("Tüm");
  const [nameFilter, setNameFilter] = useState<string>("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2250);
  const [markaFilter, setMarkaFilter] = useState<string>("Tüm");

  return (
    <div className="overflow-hidden">
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
          active={categoryFilter}
          setActive={setCategoryFilter}
          text="Lüks"
        />
        <CarFilterLink
          active={categoryFilter}
          setActive={setCategoryFilter}
          text="Ticari"
        />
        <CarFilterLink
          araç={false}
          active={categoryFilter}
          setActive={setCategoryFilter}
          text="Van"
        />
      </nav>
      <header
        className={`container mx-auto rounded border-2 border-gray-200 bg-white py-4 px-8 transition-all`}
        style={{ transform: `translate(0 , 0)` }}
      >
        <form>
          <div className="grid grid-cols-3 gap-3 max-md:grid-cols-1">
            <label className="flex flex-col text-xs md:text-base">
              Marka
              <select
                className="border-2 border-gray-200"
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
            <label className="mx-auto flex flex-col text-xs md:text-base">
              Fiyat Aralığı
              <span className="absolute hidden text-xs text-gray-400 md:translate-x-[175%]">
                /günlük
              </span>
              <div>
                <input
                  type="number"
                  value={minPrice}
                  onChange={(e) => {
                    setMinPrice(Number(e.target.value));
                  }}
                  className="w-[45%] border-2 border-gray-200 px-2 max-md:w-[48.5%]"
                />
                -
                <input
                  type="number"
                  value={maxPrice}
                  onChange={(e) => {
                    setMaxPrice(Number(e.target.value));
                  }}
                  className="w-[45%] border-2 border-gray-200 px-2 max-md:w-[48.5%]"
                />
              </div>
            </label>
            <label className="flex flex-col text-xs md:text-base">
              Ara
              <input
                className="border-2 border-gray-200 px-2"
                value={nameFilter}
                onChange={(e) => {
                  setNameFilter(e.target.value);
                }}
              />
            </label>
          </div>
          <button className="my-2 w-full bg-primary py-2 text-base font-bold text-white">
            Yenile
          </button>
        </form>
      </header>
      <section className="container mx-auto flex">
        <div className="my-12 grid grid-cols-2 gap-3 px-5 md:grid-cols-4">
          {CarList.filter(
            (listItem) =>
              listItem.fiyat >= minPrice &&
              listItem.fiyat <= maxPrice &&
              (listItem.marka === markaFilter || markaFilter === "Tüm") &&
              (listItem.category === categoryFilter ||
                categoryFilter === "Tüm") &&
              (listItem.model
                .toLowerCase()
                .includes(nameFilter.toLowerCase()) ||
                listItem.marka
                  .toLowerCase()
                  .includes(nameFilter.toLowerCase()) ||
                nameFilter === "")
          ).map((car, index) => (
            <VehliceCard
              key={index}
              category={car.category}
              marka={car.marka}
              model={car.model}
              fiyat={car.fiyat}
              yolcu={car.yolcu}
              additive={car.additive}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AracKiralama;
