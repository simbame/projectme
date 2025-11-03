import React from "react";
import Overview from "../../public/img/dashboard/overview.svg";
import Transactions from "../../public/img/dashboard/transactions.svg";
import Account from "../../public/img/dashboard/account.svg";
import Image from "next/image";
import Link from "next/link";

function AppBar() {
  return (
    <div className="flex gap-5 justify-center items-center py-2 border-t-2 border-b-2 border-dashed border-gray-200 max-sm:flex-col">
      {/* <nav> */}
      <Link href="/dashboard/overview">
        <Image
          src={Overview}
          width={140}
          height={48}
          alt="Picture of the author"
          className="hover:bg-[#E9F1EE]"
        />
      </Link>
      <Link href="/dashboard/transactions">
        <Image
          src={Transactions}
          width={164}
          height={48}
          alt="Picture of the author"
          className="hover:bg-[#E9F1EE]"
        />
      </Link>
      <Link href="/dashboard/account">
        <Image
          src={Account}
          width={133}
          height={48}
          alt="Picture of the author"
          className="hover:bg-[#E9F1EE]"
        />
      </Link>
      {/* </nav> */}
    </div>
  );
}

export default AppBar;
