import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  href: string;
  text: string;
  exact?: boolean;
};

const CarFilterLink = (props: Props) => {
  const { href, text, exact = false } = props;
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={twMerge(
        `mx-1 px-2 py-2 text-center text-xs  text-primary`,
        `${isActive && "!bg-black !text-white"}`,
        `hover:bg-white hover:bg-opacity-25`
      )}
    >
      {text}
    </Link>
  );
};

export default CarFilterLink;
