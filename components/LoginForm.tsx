import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

type Inputs = {
  ad: string;
  soyad: string;
  tel: string;
  email: string;
  alış: Date;
  iade: Date;
  msg?: string;
};

const barStyle = "px-4 py-2 border-[1px] rounded";

export default function LoginForm() {
  const bireyselSchema = yup
    .object<Record<keyof Inputs, yup.AnySchema>>({
      ad: yup.number().required(),
      soyad: yup.string().required(),
      tel: yup.string().required(),
      email: yup.string().required(),
      alış: yup.date().required(),
      iade: yup.date().required(),
      msg: yup.string().notRequired(),
    })
    .required();

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
      <form
        className="grid grid-cols-2 gap-4"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
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
