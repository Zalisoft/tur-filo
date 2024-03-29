import Link from "next/link";
import React from "react";
import { GrClose } from "react-icons/gr";
import Logo from "@/public/icons/Logo-white.png";
import NextImage from "./NextImage";
import CloseSVG from "@/public/icons/close-white.svg";

type Props = {
  bool: boolean;
  setBool: React.Dispatch<React.SetStateAction<boolean>>;
};

const SlideHeader = (props: Props) => {
  const { bool, setBool } = props;
  const classOfIt =
    "transition-all border-white border-2 text-white py-2 hover:font-bold hover:bg-white hover:text-primary";
  return (
    <>
      <div
        className="fixed h-full w-full bg-[rgba(0,0,0,.55)] transition-all"
        style={{
          opacity: `${bool ? "100" : "0"}`,
          zIndex: `${bool ? 60 : -1}`,
        }}
        onClick={() => {
          setBool(false);
        }}
      />
      <header
        className="fixed right-0 z-[99] h-screen w-[90vw] bg-primary transition-all"
        style={{ right: `${bool ? 0 : "-100vw"}` }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div
          className="p-2"
          onClick={() => {
            setBool(false);
          }}
        >
          <CloseSVG className="ml-auto mr-2 mt-2 h-5 w-5" />
        </div>
        <NextImage
          src={Logo}
          alt="logo"
          nextImageClassName="object-contain"
          className="absolute h-[90px] w-full translate-y-2"
        />
        <ul className="mt-[100px] grid gap-2 px-10 text-center">
          <Link
            onClick={() => {
              setTimeout("", 1000);
              setBool(false);
            }}
            className={classOfIt}
            href="/"
          >
            Anasayfa
          </Link>
          <Link
            onClick={() => {
              setTimeout("", 1000);
              setBool(false);
            }}
            className={classOfIt}
            href="/arac-kiralama"
          >
            Araç Kiralama
          </Link>
          <Link
            onClick={() => {
              setTimeout("", 1000);
              setBool(false);
            }}
            className={classOfIt}
            href="/hakkimizda"
          >
            Hakkımızda
          </Link>
          <Link
            onClick={() => {
              setTimeout("", 1000);
              setBool(false);
            }}
            className={classOfIt}
            href="/urunler-guvenceler"
          >
            Ürünler & Güvenceler
          </Link>
          <Link
            onClick={() => {
              setTimeout("", 1000);
              setBool(false);
            }}
            className={classOfIt}
            href="/referanslar"
          >
            Referanslar
          </Link>
          <Link
            onClick={() => {
              setTimeout("", 1000);
              setBool(false);
            }}
            className={classOfIt}
            href="/iletisim"
          >
            İletişim
          </Link>
        </ul>
      </header>
    </>
  );
};

export default SlideHeader;
