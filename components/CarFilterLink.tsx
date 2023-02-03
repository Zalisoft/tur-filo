import { twMerge } from "tailwind-merge";
import React from "react";

type Props = {
  araç?: boolean;
  text: string;
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
};

const CarFilterLink = (props: Props) => {
  const { araç = true, text, active, setActive } = props;

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
      {araç && " Araçlar"}
    </button>
  );
};

export default CarFilterLink;
