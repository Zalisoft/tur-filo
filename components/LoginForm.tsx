import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { twMerge } from "tailwind-merge";
import { useRef, useState } from "react";
import ArrowSVG from "@/public/icons/arrow.svg";
import { sendMailIndividual, sendMailInstitutional } from "@/lib/data/contact";

type InstitutionalInputs = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  aracSayisi: number;
  alisTarihi: string;
  kiralamaSuresi: string;
  message?: string;
  companyName: string;
};

type IndividualInputs = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  message?: string;
  alisTarihi: string;
  iadeTarihi: string;
};

const barStyle = "px-4 py-2 border-[1px] rounded h-12";

export default function LoginForm() {
  const today = new Date().toLocaleDateString("tr-TR");
  const todayDefault = new Date().toISOString().substr(0, 10);
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("Kiralama Süresi");

  const options = ["6 Ay", "12 Ay", "18 Ay", "24 Ay", "36 Ay", "Diğer"];
  const form = useRef<any>();
  const date = new Date();
  console.log(date);

  const bireyselSchema = yup
    .object<Record<keyof IndividualInputs, yup.AnySchema>>({
      name: yup.string().required("isim alanı zorunludur"),
      surname: yup.string().required("soyad alanı zorunludur"),
      phone: yup.string().required("telefon alanı zorunludur"),
      email: yup.string().required("email alanı zorunludur"),
      message: yup.string().required("telefon numarası zorunludur"),
      alisTarihi: yup.string().required("iade tarihi zorunludur"),
      iadeTarihi: yup.string().required("iade tarihi zorunludur"),
    })
    .required();

  const kurumsalSchema = yup
    .object<Record<keyof InstitutionalInputs, yup.AnySchema>>({
      companyName: yup.string(),
      name: yup.string().required("Lütfen isminizi girin!"),
      surname: yup.string().required("Lütfen soyadınızı girin!"),
      phone: yup.number().required("Lütfen Telefon numaranızı girin!"),
      email: yup.string().required("Lütfen mail adresinizi girin!"),
      aracSayisi: yup.number().required("Lütfen araç sayısı giriniz"),
      alisTarihi: yup.string().required().required("Lütfen tarih belirtiniz"),
      kiralamaSuresi: yup.string().required("Lütfen iade tarihi giriniz"),
      message: yup.string(),
    })
    .required();

  const [status, setStatus] = useState<"bireysel" | "kurumsal">("bireysel");

  const {
    register: registerKurumsal,
    handleSubmit: handleSubmitKurumsal,
    reset: resetKurumsal,
    setValue: setValueKurumsal,
    formState: { errors: errorsKurumsal },
  } = useForm<InstitutionalInputs>({ resolver: yupResolver(kurumsalSchema) });

  const onSubmit: SubmitHandler<InstitutionalInputs> = (data) => {
    const formattedData = {
      ...data,
      alisTarihi: formatDate(data.alisTarihi),
    };
    sendMailInstitutional(formattedData);
    reset();
  };

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors: errors },
  } = useForm<IndividualInputs>({ resolver: yupResolver(bireyselSchema) });

  const onSubmitBireysel: SubmitHandler<IndividualInputs> = (data) => {
    const formattedData = {
      ...data,
      alisTarihi: formatDate(data.alisTarihi),
      iadeTarihi: formatDate(data.iadeTarihi),
    };

    sendMailIndividual(formattedData);
    reset();
  };

  const formatDate = (dateString: string): string => {
    const dateParts = dateString.split("-");
    const day = dateParts[2];
    const month = dateParts[1];
    const year = dateParts[0];
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="mx-auto w-full bg-secondary px-12 py-24 md:w-[50rem] md:rounded-xl md:py-24">
      <div className="flex w-full items-center justify-around">
        <button
          onClick={(e) => {
            e.preventDefault();
            setStatus("bireysel");
          }}
          className={`mb-5 w-[48%] text-center transition-all ${
            status === "bireysel"
              ? "bg-primary py-2 text-2xl font-bold text-white"
              : "bg-gray-200 text-xl text-gray-400"
          }`}
        >
          Bireysel
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setStatus("kurumsal");
          }}
          className={`mb-5 w-[48%] text-center transition-all ${
            status === "kurumsal"
              ? "bg-primary py-2 text-2xl font-bold text-white"
              : "bg-gray-200 text-xl text-gray-400"
          }`}
        >
          Kurumsal
        </button>
      </div>

      {status === "bireysel" ? (
        <form
          ref={form}
          className="grid grid-cols-2 gap-4"
          onSubmit={handleSubmit(onSubmitBireysel)}
        >
          <input
            className={barStyle}
            {...register("name")}
            placeholder="Adınız"
            required
          />
          <input
            className={barStyle}
            {...register("surname")}
            placeholder="Soyadınız"
            required
          />
          <input
            type="number"
            className={twMerge(barStyle, "col-span-2")}
            {...register("phone")}
            placeholder="Telefon Numaranız"
            required
          />
          <input
            className={twMerge(barStyle, "col-span-2")}
            {...register("email")}
            placeholder="Email"
            type="email"
            required
          />
          <input
            className={barStyle}
            placeholder="gg.aa.yyyy"
            {...register("alisTarihi")}
            defaultValue={new Date().toLocaleDateString("tr-TR")}
            min={todayDefault}
            type="date"
            required
          />
          <input
            className={barStyle}
            placeholder="gg.aa.yyyy"
            {...register("iadeTarihi")}
            min={todayDefault}
            defaultValue={new Date().toLocaleDateString("tr-TR")}
            type="date"
            required
          />
          <textarea
            className={twMerge(barStyle, "col-span-2 pb-[50px]")}
            {...register("message")}
            placeholder="Mesajınız ve Talepleriniz"
          />
          <button
            type="submit"
            className="col-span-2 bg-primary py-2 text-2xl text-white "
          >
            Rezervasyon Yap
          </button>
        </form>
      ) : (
        <form
          ref={form}
          className="grid grid-cols-2 gap-4"
          onSubmit={handleSubmitKurumsal(onSubmit)}
        >
          <input
            className={twMerge(barStyle, "col-span-2")}
            placeholder="Kurum Adı"
            {...registerKurumsal("companyName")}
            required
          />
          <input
            className={barStyle}
            placeholder="Adınız"
            {...registerKurumsal("name")}
            required
          />
          <input
            className={barStyle}
            {...registerKurumsal("surname")}
            placeholder="Soyadınız"
            required
          />
          <input
            type="number"
            className={twMerge(barStyle, "col-span-2")}
            {...registerKurumsal("phone")}
            placeholder="Telefon Numaranız"
            required
          />
          <input
            className={twMerge(
              barStyle,
              "col-span-2 text-gray-400 focus:text-black"
            )}
            {...registerKurumsal("email")}
            type="email"
            required
            defaultValue={"example@example.com"}
          />

          <input
            type="number"
            className={twMerge(barStyle, "col-span-2")}
            {...registerKurumsal("aracSayisi")}
            placeholder="Araç Sayısı"
            required
          />
          <input
            className={barStyle}
            placeholder="gg.aa.yyyy"
            {...registerKurumsal("alisTarihi")}
            min={today}
            defaultValue={new Date().toISOString().substr(0, 10)}
            type="date"
            required
          />
          <div className="relative">
            <div
              className="flex h-12 w-full cursor-pointer select-none flex-col items-center justify-center bg-white"
              onClick={(e) => setIsActive(!isActive)}
            >
              <div className="flex h-6 w-full flex-row items-center justify-around font-medium max-sm:text-sm">
                <span>{selected}</span>
                <div
                  className={`${
                    isActive ? "rotate-180 transition-all duration-300" : ""
                  }`}
                >
                  <ArrowSVG />
                </div>
              </div>
            </div>
            {isActive && (
              <div className="absolute z-10 mt-2 flex w-full flex-col gap-y-2 overflow-auto bg-white px-5 py-3">
                {options.map((option: any, e) => (
                  <div
                    key={e}
                    onClick={(e) => {
                      setSelected(option);
                      setIsActive(false);
                      setValueKurumsal("kiralamaSuresi", option);
                    }}
                    className="cursor-pointer hover:bg-gray-300"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
          <textarea
            className={twMerge(barStyle, "col-span-2 pb-[50px]")}
            {...registerKurumsal("message")}
            placeholder="Mesajınız ve Talepleriniz"
          />
          <button
            type="submit"
            className=" col-span-2 bg-primary py-2 text-2xl text-white "
          >
            Rezervasyon Yap
          </button>
        </form>
      )}
    </div>
  );
}
