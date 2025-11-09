"use client";

import React from "react";
import Avatar from "@mui/material/Avatar";
import Mark from "./Mark";
import { clearUser } from "@/app/localStorage/local_storage";

function Header() {
  const logout = () => {
    clearUser();
    window.location.href = "/login";
  };
  return (
    <div>
      <Mark />
      <div className="flex gap-5 justify-end p-3">
        <Avatar
          alt="Authorized by Simba"
          src="/img/dashboard/header1.png"
        ></Avatar>
        <div onClick={logout}>
          <Avatar
            alt="Authorized by Simba"
            src="/img/dashboard/header2.jpg"
          ></Avatar>
        </div>
      </div>
    </div>
  );
}

export default Header;
