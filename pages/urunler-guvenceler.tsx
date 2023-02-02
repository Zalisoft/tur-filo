import CardHeader from "@/components/CardHeader";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import KışLastiği from "@/public/icons/KışLastiği.jpeg";
import Driver from "@/public/icons/Driver.jpeg";
import BebekKoltuğu from "@/public/icons/BebekKoltuğu.jpeg";

const ÜrünlerGüvenceler = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <CardHeader h1="Ürünler & Güvenceler" />
      <div className="container mx-auto my-12 md:my-52">
        <div className="rounded-xl bg-white shadow">
          <h1 className="w-full rounded-t-xl bg-primary py-4 text-center text-4xl font-bold text-white">
            Ek Ürünler
          </h1>
          <div className="grid grid-cols-3 gap-1 px-5 md:gap-3">
            <div className="m-5 mx-auto flex flex-col items-center justify-center rounded border-[1px] border-black px-2 py-4 md:px-12">
              <Image src={KışLastiği} alt="" width={250} />
              <h1 className="pt-5 text-lg font-bold text-primary">
                Kış Lastiği
              </h1>
              <p className=" text-center">
                Karlı ve Donmuş yollarda güvenli bir sürüş sağlayan bir ek
                hizmettir.
              </p>
            </div>
            <div className="m-5 mx-auto flex flex-col items-center justify-center rounded border-[1px] border-black px-2 py-4 md:px-12">
              <Image src={Driver} alt="" width={250} />
              <h1 className="pt-5 text-lg font-bold text-primary">Ek Sürücü</h1>
              <p className=" text-center">
                Aracı kiralayan kişi haricinde bir sürücü sağlayan bir ek
                hizmettir.
              </p>
            </div>
            <div className="m-5 mx-auto flex flex-col items-center justify-center rounded border-[1px] border-black px-2 py-4 md:px-12">
              <Image src={BebekKoltuğu} alt="" width={250} />
              <h1 className="pt-5 text-lg font-bold text-primary">
                Bebek Koltuğu
              </h1>
              <p className=" text-center">
                Belirili bir yaş gurubunun altındaki çocuklar/bebekler için
                alınan bir ek hizmettir.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 rounded-xl bg-white shadow">
          <h1 className="w-full rounded-t-xl bg-primary py-4 text-center text-4xl font-bold text-white">
            Güvenceler
          </h1>
          <div className="grid grid-cols-5 border-b-[1px] border-black p-5">
            <h1 className="col-span-1 text-right text-xl font-bold text-primary">
              Zorunlu trafik sigortası:
            </h1>
            <p className="col-span-4 pl-2 pb-10">
              Zorunlu Trafik Sigortası, devlet tarafından bütün motorlu araç
              sahiplerine yapılması zorunlu tutulmuş olan ve kaza sonucunda
              diğer araç veya üçüncü şahıslara verebileceğiniz zararlar için
              sizi güvence altına alan bir sigorta ürünüdür.
            </p>
          </div>
          <div className="grid grid-cols-5 border-b-[1px] border-black p-5">
            <h1 className="col-span-1 text-right text-xl font-bold text-primary">
              Filo Kasko:
            </h1>
            <p className="col-span-4 pl-2 pb-10">
              İşletmenize ait araç filonuzun günlük operasyonlar sırasında
              yaşanabilecek kaza risklerine karşı ihtiyaçlarınız doğrultusunda
              uygun maliyetler ile toplu halde sigortalanabilmesi imkanı sağlar.
            </p>
          </div>
          <div className="grid grid-cols-5 p-5">
            <h1 className="col-span-1 text-right text-xl font-bold text-primary">
              Full rent a car kasko:
            </h1>
            <p className="col-span-4 pl-2 pb-10">
              Oto kiralama hizmeti veren şahıs ve şirketlerin araçlarını teminat
              altına almasına olanak tanıyan kasko türüdür. Bir nevi garanti
              hizmeti olan Rent A Car, olası bir kaza ve hasar durumunda aracın
              maddi hasarlarının ve manevi tazminatın ödemesini yapar.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ÜrünlerGüvenceler;
