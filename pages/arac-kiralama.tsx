import Footer from "@/components/Footer";
import Header from "@/components/Header";
import VehliceCard from "@/components/VehliceCard";
import CarFilterLink from "../components/CarFilterLink";
import CarList from "@/lib/data/data.json";

const AracKiralama = () => {
  return (
    <>
      <Header />
      <nav className="hidden w-full grid-cols-7 bg-white md:grid">
        <CarFilterLink exact href="/arac-kiralama" text="Tüm Araçlar" />
        <CarFilterLink
          href="/arac-kiralama/_kategori-ekonomik/"
          text="Ekonomik Araçlar"
        />
        <CarFilterLink href="/arac-kiralama" text="Tüm Araçlar" />
        <CarFilterLink href="/arac-kiralama" text="Tüm Araçlar" />
        <CarFilterLink href="/arac-kiralama" text="Tüm Araçlar" />
        <CarFilterLink href="/arac-kiralama" text="Tüm Araçlar" />
        <CarFilterLink href="/arac-kiralama" text="Tüm Araçlar" />
      </nav>
      <section className="container mx-auto">
        <div className="my-12 grid grid-cols-2 md:grid-cols-4">
          {CarList.map((car) => (
            <VehliceCard
              category={car.category}
              marka={car.marka}
              model={car.model}
              img={car.img}
              fiyat={car.fiyat}
              yolcu={car.yolcu}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AracKiralama;
