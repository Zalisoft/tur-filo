import Footer from "@/components/Footer";
import Header from "@/components/Header";
import VehliceCard from "@/components/VehliceCard";
import CarFilterLink from "../components/CarFilterLink";
import CarList from "@/lib/data/data.json";
import { useState } from "react";

const AracKiralama = () => {
  const [activeFilter, setActiveFilter] = useState<
    | "Tüm Araçlar"
    | "Ekonomik Araçlar"
    | "Konfor Araçlar"
    | "Prestij Araçlar"
    | "Van"
    | "Ticari Araçlar"
    | "Lüks Araçlar"
  >("Tüm Araçlar");
  return (
    <>
      <Header />
      <nav className="hidden w-full grid-cols-7 bg-white px-36 py-6 md:grid">
        <CarFilterLink
          active={activeFilter}
          setActive={setActiveFilter}
          text="Tüm Araçlar"
        />
        <CarFilterLink
          active={activeFilter}
          setActive={setActiveFilter}
          text="Ekonomik Araçlar"
        />
        <CarFilterLink
          active={activeFilter}
          setActive={setActiveFilter}
          text="Konfor Araçlar"
        />
        <CarFilterLink
          active={activeFilter}
          setActive={setActiveFilter}
          text="Prestij Araçlar"
        />
        <CarFilterLink
          active={activeFilter}
          setActive={setActiveFilter}
          text="Van"
        />
        <CarFilterLink
          active={activeFilter}
          setActive={setActiveFilter}
          text="Ticari Araçlar"
        />
        <CarFilterLink
          active={activeFilter}
          setActive={setActiveFilter}
          text="Lüks Araçlar"
        />
      </nav>
      <section className="container mx-auto">
        <div className="my-12 grid grid-cols-2 md:grid-cols-4">
          {CarList.filter((care) => care.category === activeFilter).map(
            (car) => (
              <VehliceCard
                category={car.category}
                marka={car.marka}
                model={car.model}
                fiyat={car.fiyat}
                yolcu={car.yolcu}
              />
            )
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AracKiralama;
