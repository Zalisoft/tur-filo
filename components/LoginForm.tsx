import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

type Inputs = {
  kurum: string;
  ad: string;
  soyad: string;
  tel: string;
  email: string;
  araçSay: number;
  alış: Date;
  iade: Date;
  msg?: string;
};

const barStyle = "px-4 py-2 border-[1px] rounded";

export default function LoginForm() {
  const bireyselSchema = yup
    .object<Record<keyof Inputs, yup.AnySchema>>({
      kurum: yup.string().notRequired(),
      ad: yup.number().required(),
      soyad: yup.string().required(),
      tel: yup.string().required(),
      email: yup.string().required(),
      araçSay: yup.number().notRequired(),
      alış: yup.date().required(),
      iade: yup.date().required(),
      msg: yup.string().notRequired(),
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
    console.log({ data });
    reset();
  };
  return (
    <>
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
          {...register("alış")}
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
        <input
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
    </>
  );
}
