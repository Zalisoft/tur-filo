import { twMerge } from "tailwind-merge";
import React from "react";

type Props = {
  text:
    | "Tüm Araçlar"
    | "Ekonomik Araçlar"
    | "Konfor Araçlar"
    | "Prestij Araçlar"
    | "Van"
    | "Ticari Araçlar"
    | "Lüks Araçlar";
  active: string;
  setActive: React.Dispatch<
    React.SetStateAction<
      | "Tüm Araçlar"
      | "Ekonomik Araçlar"
      | "Konfor Araçlar"
      | "Prestij Araçlar"
      | "Van"
      | "Ticari Araçlar"
      | "Lüks Araçlar"
    >
  >;
};

const CarFilterLink = (props: Props) => {
  const { text, active, setActive } = props;

  return (
    <button
      className={twMerge(
        ` mx-1 rounded-full px-2 py-2 text-center text-primary transition-all`,
        `hover:bg-primary hover:text-white`,
        `${active === text && "!bg-black !text-lg !font-bold !text-white"}`
      )}
      onClick={() => {
        setActive(text);
      }}
    >
      {text}
    </button>
  );
};

export default CarFilterLink;
