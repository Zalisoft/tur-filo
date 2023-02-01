import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  href: string;
  text: string;
  exact?: boolean;
};

const NavLink = (props: Props) => {
  const { href, text, exact = false } = props;
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={twMerge(
        `mx-1 w-[10rem] py-6 text-center text-sm font-bold text-white`,
        `${isActive && "!bg-white !text-primary"}`,
        `hover:bg-white hover:bg-opacity-25`
      )}
    >
      {text}
    </Link>
  );
};

export default NavLink;
