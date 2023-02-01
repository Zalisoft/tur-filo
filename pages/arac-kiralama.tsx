import Footer from "@/components/Footer";
import Header from "@/components/Header";
import VehliceCard from "@/components/VehliceCard";
import React from "react";
import Egea from "@/public/images/araçlar/Fiat Egea.png";

const AracKiralama = () => {
  return (
    <>
      <Header />
      <section className="container mx-auto">
        <h1>Araçlar</h1>
        <div className="grid grid-cols-4">
          <VehliceCard
            category="Ekonomik"
            marka="Fiat"
            model="Egea"
            img={Egea}
            fiyat={21000}
            yolcu={12}
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AracKiralama;
