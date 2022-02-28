import Image from "next/image";
import React, { useState } from "react";
import { useCart } from "../context/CartContext";

function Header({ menu, setMenu }) {
  const [cartOpen, setCartOpen] = useState(false);
  const [carts, setCarts] = useCart();

  return (
    <header className="flex justify-between relative px-6 py-5">
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
        <div onClick={() => setCartOpen((c) => !c)}>
          <Image src="/images/icon-cart.svg" width={22} height={22} />
        </div>
        <div>
          <Image src="/images/image-avatar.png" width={24} height={24} />
        </div>
      </div>
      {cartOpen ? (
        <div className="bg-white absolute top-[115%] z-20 left-2 right-2 min-h-[250px] shadow-lg rounded-lg flex flex-col">
          <div className="px-6 py-5 border-b-[1px] border-slate-200 font-bold text-3 ">
            Cart
          </div>
          {carts.length === 0 ? (
            <div className="  flex-grow flex items-center justify-center text-4 font-bold">
              Your cart is empty.
            </div>
          ) : (
            <div className="px-6 py-5 ">
              <div className="flex flex-col gap-2">
                {carts.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center flex-auto justify-between text-4 text-md"
                  >
                    <div className="flex gap-3">
                      <div className="relative w-12 h-12 rounded-md overflow-hidden">
                        <Image
                          src={item.image}
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                      <div className="truncate">
                        <h1>{item.name}</h1>
                        <div className="flex gap-1">
                          <span>${item.price}</span>
                          <span>x</span>
                          <span>{item.count}</span>
                          <span className="text-3 font-bold">
                            ${item.count * item.price}
                          </span>
                        </div>
                      </div>
                    </div>
                    <img src="/images/icon-delete.svg" />
                  </div>
                ))}
              </div>
              <div className="bg-1 flex items-center justify-center p-4 text-white font-bold mt-6 rounded-lg">
                Checkout
              </div>
            </div>
          )}
        </div>
      ) : null}
    </header>
  );
}

export default Header;
