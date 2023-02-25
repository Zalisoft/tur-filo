import Image from "next/image";
import NavLink from "../NavLink";
import Logo from "@/public/icons/Logo-white.png";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { twMerge } from "tailwind-merge";
import SlideHeader from "../SlideHeader";
import { useState } from "react";

const Header = () => {
  const [slider, setSlider] = useState(false);
  return (
    <>
      <SlideHeader bool={slider} setBool={setSlider} />

      <nav className="flex h-40 w-screen items-center bg-primary px-10">
        <Link href="/" className="mx-auto xl:w-[320px] xl:p-2">
          <Image src={Logo} alt="" />
        </Link>
        <ul className="hidden xl:container xl:mx-auto xl:flex xl:w-full xl:items-center xl:justify-center">
          <NavLink exact={true} text="Anasayfa" href="/" />
          <NavLink exact={true} text="Araç Kiralama" href="/arac-kiralama" />
          <NavLink exact={true} text="Hakkımızda" href="/hakkimizda" />
          <NavLink
            exact={true}
            text="Ürünler & Güvenceler"
            href="/urunler-guvenceler"
          />
          <NavLink exact={true} text="Referanslar" href="/referanslar" />
          <NavLink exact={true} text="İletişim" href="/iletisim" />
        </ul>
        <div className="hidden 2xl:inline 2xl:w-[320px]" />
        <GiHamburgerMenu
          className={twMerge(
            "ml-2 rounded border-2 p-4 text-white transition-all xl:hidden",
            "hover:bg-white hover:text-primary"
          )}
          onClick={() => {
            setSlider(true);
          }}
          size={60}
        />
        <a
          className="fixed right-8 bottom-8 z-[100] rounded-full bg-green-600 p-3"
          href="https://wa.me/905323993916"
          target="_blank"
        >
          <BsWhatsapp className="text-white" size={40} />
        </a>
      </nav>
    </>
  );
};

export default Header;
