import CardHeader from "@/components/CardHeader";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
const Hakkımızda = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <CardHeader h1="Hakkımızda" />
      <div className="container mx-auto my-12 md:my-52">
        <h1 className="my-3 text-lg font-[500]">Faaliyetlerimiz:</h1>
        <p className="mb-10">
          2017 yılında kurulan Bursa bölgesinin öncü filo kiralama şirketi
          olarak müşterilerimizin ihtiyaç doğrultusuna göre bireysel, kurumsal
          ve operasyonel filo araç kiralama hizmeti sunuyoruz. Geniş araç,
          marka, model seçeneklerimiz ile hizmet vermekteyiz.
        </p>
        <h1 className="my-3 text-lg font-[500]">Vizyonumuz:</h1>
        <p className="mb-10">
          Araç kiralama sektörüne yeni bir soluk ve özelleştirilmiş hizmetler
          sunmak.
        </p>
        <h1 className="my-3 text-lg font-[500]">
          Kalite ve Müşteri Politikamız:
        </h1>
        <p>Mutlu, güvenli ve kaliteli hizmet. </p>
      </div>
      <Footer />
    </div>
  );
};

export default Hakkımızda;
