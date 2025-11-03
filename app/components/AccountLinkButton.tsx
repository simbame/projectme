import React from "react";
import Link from "next/link";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Props {
  href: string;
  className: string;
  content: string;
  imageSrc: StaticImport;
}

function AccountLinkButton(props: Props) {
  return (
    <Link
      href={props.href}
      className={`${props.className} focus:underline text-gray-700 focus:text-green-900 font-bold`}
    >
      <div className="flex">
        <Image
          src={props.imageSrc}
          width="20"
          height="16"
          alt="Author is Simba"
        />
        <p>{props.content}</p>
      </div>
    </Link>
  );
}

export default AccountLinkButton;
