import CardHeader from "@/components/CardHeader";
import Image from "next/image";
import KışLastiği from "@/public/icons/KışLastiği.jpeg";
import Driver from "@/public/icons/Driver.jpeg";
import BebekKoltuğu from "@/public/icons/BebekKoltuğu.jpeg";

const ÜrünlerGüvenceler = () => {
  return (
    <div className="overflow-hidden">
      <CardHeader h1="Ürünler & Güvenceler" sm />
      <div className="container mx-auto my-12 px-5 md:my-52">
        <div className="rounded-xl bg-white shadow">
          <h1 className="w-full rounded-t-xl bg-primary py-4 text-center text-4xl font-bold text-white">
            Ek Ürünler
          </h1>
          <div className="grid grid-cols-1 gap-1 px-5 md:gap-3">
            <div className="my-2 mx-auto flex flex-col items-center justify-center rounded border-black px-2 md:border-[1px] md:py-4 md:px-12">
              <Image
                className="hidden md:inline"
                src={KışLastiği}
                alt=""
                width={250}
              />
              <h1 className="text-center text-lg font-bold text-primary md:pt-5">
                Kış Lastiği
              </h1>
              <p className=" text-center">
                Karlı ve Donmuş yollarda güvenli bir sürüş sağlayan bir ek
                hizmettir.
              </p>
            </div>
            <div className="my-2 mx-auto flex flex-col items-center justify-center rounded border-black px-2 md:border-[1px] md:py-4 md:px-12">
              <Image
                className="hidden md:inline"
                src={Driver}
                alt=""
                width={250}
              />
              <h1 className="text-center text-lg font-bold text-primary md:pt-5">
                Ek Sürücü
              </h1>
              <p className=" text-center">
                Aracı kiralayan kişi haricinde bir sürücü sağlayan bir ek
                hizmettir.
              </p>
            </div>
            <div className="my-2 mx-auto flex flex-col items-center justify-center rounded border-black px-2 md:border-[1px] md:py-4 md:px-12">
              <Image
                className="hidden md:inline"
                src={BebekKoltuğu}
                alt=""
                width={250}
              />
              <h1 className="text-center text-lg font-bold text-primary md:pt-5">
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
          <div className="border-b-[1px] border-black p-5 md:grid md:grid-cols-5">
            <h1 className="col-span-1 text-center text-xl font-bold text-primary md:text-right">
              Zorunlu trafik sigortası:
            </h1>
            <p className="col-span-4 pl-2 pb-10">
              Zorunlu Trafik Sigortası, devlet tarafından bütün motorlu araç
              sahiplerine yapılması zorunlu tutulmuş olan ve kaza sonucunda
              diğer araç veya üçüncü şahıslara verebileceğiniz zararlar için
              sizi güvence altına alan bir sigorta ürünüdür.
            </p>
          </div>
          <div className="border-b-[1px] border-black p-5 md:grid md:grid-cols-5">
            <h1 className="col-span-1 text-center text-xl font-bold text-primary md:text-right">
              Filo Kasko:
            </h1>
            <p className="col-span-4 pl-2 pb-10">
              İşletmenize ait araç filonuzun günlük operasyonlar sırasında
              yaşanabilecek kaza risklerine karşı ihtiyaçlarınız doğrultusunda
              uygun maliyetler ile toplu halde sigortalanabilmesi imkanı sağlar.
            </p>
          </div>
          <div className="p-5 md:grid md:grid-cols-5">
            <h1 className="col-span-1 text-center text-xl font-bold text-primary md:text-right">
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
    </div>
  );
};

export default ÜrünlerGüvenceler;
