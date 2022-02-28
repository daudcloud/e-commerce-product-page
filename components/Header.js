import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header className="flex justify-between px-6 py-5">
      <div className="flex items-center gap-4">
        <Image src="/images/icon-menu.svg" width={16} height={16} />
        <Image src="/images/logo.svg" width={130} height={20} />
      </div>
      <div className="flex items-center gap-5">
        <Image src="/images/icon-cart.svg" width={22} height={22} />
        <Image src="/images/image-avatar.png" width={24} height={24} />
      </div>
    </header>
  );
}

export default Header;
