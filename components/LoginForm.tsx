import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { twMerge } from "tailwind-merge";
import { useRef, useState } from "react";
import emailJs from "@emailjs/browser";

type Inputs = {
  kurum: string;
  ad: string;
  soyad: string;
  tel: string;
  email: string;
  araçSay: number;
  take: Date;
  iade: Date;
  msg?: string;
};

const barStyle = "px-4 py-2 border-[1px] rounded";

export default function LoginForm() {
  const form = useRef<any>();

  const bireyselSchema = yup
    .object<Record<keyof Inputs, yup.AnySchema>>({
      kurum: yup.string(),
      ad: yup.string(),
      soyad: yup.string(),
      tel: yup.number(),
      email: yup.string(),
      araçSay: yup.number(),
      take: yup.date(),
      iade: yup.date(),
      msg: yup.string(),
    })
    .required();

  const [status, setStatus] = useState<"bireysel" | "kurumsal">("bireysel");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(bireyselSchema) });

  const onSubmitHandler = (data: any) => {
    data.preventDefault();

    //TODO: make the sending function
    emailJs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      form.current,
      "YOUR_PUBLIC_KEY"
    );
    reset();
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
      <form
        ref={form}
        className="grid grid-cols-2 gap-4"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <input
          className={twMerge(
            barStyle,
            `${status === "kurumsal" ? "scale-y-100" : "hidden scale-y-0"}`,
            "col-span-2"
          )}
          {...register("kurum")}
          placeholder="Kurum Adı"
          required={status === "kurumsal"}
        />
        <input
          className={barStyle}
          {...register("ad")}
          placeholder="Adınız"
          required
        />
        <input
          className={barStyle}
          {...register("soyad")}
          placeholder="Soyadınız"
          required
        />
        <input
          className={twMerge(barStyle, "col-span-2")}
          {...register("tel")}
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
          className={twMerge(
            barStyle,
            "col-span-2 transition-all",
            `${status === "kurumsal" ? "scale-y-100" : "hidden scale-y-0"}`
          )}
          {...register("araçSay")}
          placeholder="Araç Sayısı"
          type="number"
          required={status === "kurumsal"}
        />
        <input
          className={barStyle}
          {...register("take")}
          placeholder="Alış Tarihi"
          type="date"
          required
        />
        <input
          className={barStyle}
          {...register("iade")}
          placeholder="İade Tarihi"
          type="date"
          required
        />
        <textarea
          className={twMerge(barStyle, "col-span-2 pb-[50px]")}
          {...register("msg")}
          placeholder="Mesajınız ve Talepleriniz (Opsiyonel)"
        />
        <button
          type="submit"
          className=" col-span-2 bg-primary py-2 text-2xl text-white "
        >
          Rezervasyon Yap
        </button>
      </form>
    </div>
  );
}
