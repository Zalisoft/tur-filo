import Image from "next/image";
import Logo from "@/public/icons/Logo-white.png";
import React from "react";
import { BsFacebook, BsInstagram, BsFillTelephoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center justify-center bg-primary py-5">
      <Image className="mx-auto mt-5 mb-12" src={Logo} alt="" />
      <div className="flex justify-around gap-10 px-12 text-white md:px-0">
        <div className="flex flex-col">
          <h1 className="mb-5 text-xl font-bold">Navigasyon</h1>
          <Link
            href="/hakkimizda"
            className="cursor-pointer transition-all hover:text-[rgba(255,255,255,0.7)]"
          >
            Hakkımızda
          </Link>
          <Link
            href="/iletişim"
            className="cursor-pointer transition-all hover:text-[rgba(255,255,255,0.7)]"
          >
            İletişim
          </Link>
          <Link
            href="/referanslar"
            className="cursor-pointer transition-all hover:text-[rgba(255,255,255,0.7)]"
          >
            Referans
          </Link>
          <Link
            href="/urunler-guvenceler"
            className="hover:text- cursor-pointer transition-all"
          >
            Ürünler & Güvenceler
          </Link>
        </div>
        <div className="flex flex-col">
          <h1 className="mx-auto mb-5 text-xl font-bold">Adres</h1>
          <h4>
            Beşevler Mahallesi Yıldırım Caddesi Özkök Sokak Yıldız İş Merkezi No
            5/4
          </h4>
        </div>
        <div className="flex flex-col">
          <h1 className="mb-5 text-xl font-bold">İletişim</h1>
          <div className="flex gap-2">
            <BsFillTelephoneFill />
            <p>0532 399 39 16</p>
          </div>
          <div className="flex gap-2">
            <SiGmail />
            <p>Turfilo08@gmail.com</p>
          </div>
          <div className="my-3 flex gap-3">
            <a
              className="transition-all hover:text-[rgba(255,255,255,0.55)]"
              href=""
            >
              <BsFacebook size={30} />
            </a>
            <a
              className="transition-all hover:text-[rgba(255,255,255,0.55)]"
              href=""
            >
              <BsInstagram size={30} />
            </a>
          </div>
        </div>
      </div>
      <h6 className="my-10 text-[rgba(255,255,255,0.55)] ">
        Copyright @ 2022|Zalisoft
      </h6>
    </footer>
  );
};

export default Footer;
