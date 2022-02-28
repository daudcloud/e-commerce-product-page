import Image from "next/image";
import React, { useState } from "react";

function Header({ menu, setMenu }) {
  return (
    <header className="flex justify-between px-6 py-5">
      <div className="flex items-center gap-4">
        <div onClick={() => setMenu(true)} className="">
          <Image src="/images/icon-menu.svg" width={16} height={16} />
        </div>
        <div>
          <Image src="/images/logo.svg" width={130} height={20} />
        </div>
        <div
          className={`transform ${
            menu ? "scale-x-100" : "scale-x-0"
          } fixed top-0 bottom-0 left-0 w-64 pt-6 pl-5 bg-white z-20 transition-transform origin-left`}
        >
          <Image
            src="/images/icon-close.svg"
            width={16}
            height={16}
            onClick={() => setMenu(false)}
          />
          <ul className="flex flex-col font-bold text-3 text-lg gap-5 mt-12">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div>
          <Image src="/images/icon-cart.svg" width={22} height={22} />
        </div>
        <div>
          <Image src="/images/image-avatar.png" width={24} height={24} />
        </div>
      </div>
    </header>
  );
}

export default Header;
