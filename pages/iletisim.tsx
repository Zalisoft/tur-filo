import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { twMerge } from "tailwind-merge";

const İletişim = () => {
  const barStyle = "px-4 py-2 border-[1px] rounded";

  type Inputs = {
    ad: string;
    email: string;
    msg: string;
  };

  const bireyselSchema = yup
    .object<Record<keyof Inputs, yup.AnySchema>>({
      ad: yup.string(),
      email: yup.string(),
      msg: yup.string(),
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
    <div className="my-14 flex flex-col items-center overflow-hidden">
      <h1 className="text-[3rem] font-bold text-primary">Bize Ulaşın</h1>
      <form
        className="flex w-1/2 flex-col gap-4 max-md:w-4/5"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <input
          className={barStyle}
          {...register("ad")}
          placeholder="Ad Soyad"
          required
        />

        <input
          className={barStyle}
          {...register("email")}
          placeholder="E-Posta"
          type="email"
          required
        />

        <textarea
          className={twMerge(barStyle, "h-[15vh]")}
          {...register("msg")}
          placeholder="Konu"
        />
        <button
          type="submit"
          className=" col-span-2 bg-primary py-2 text-2xl text-white "
        >
          Gönder
        </button>
      </form>
    </div>
  );
};

export default İletişim;
