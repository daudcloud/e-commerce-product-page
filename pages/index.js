import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Header from "../components/Header";

export default function Home() {
  const [page, setPage] = useState(1);
  const [menu, setMenu] = useState(false);

  const previousPage = () => {
    if (page === 1) return setPage(4);
    setPage((p) => p - 1);
  };
  const nextPage = () => {
    if (page === 4) return setPage(1);
    setPage((p) => p + 1);
  };

  return (
    <div className="scroll-smooth">
      <Head>
        <title>Frontend Mentor | E-commerce product page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      {menu ? <div className="fixed bg-7 opacity-75 inset-0 z-20"></div> : null}
      <Header menu={menu} setMenu={setMenu} />
      <section className="flex flex-col">
        <div className="h-72 sm:h-96 relative">
          <div
            className={`absolute w-full h-full transition-opacity ${
              page === 1 ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                priority
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                src="/images/image-product-1.jpg"
              />
            </div>
          </div>
          <div
            className={`absolute w-full h-full transition-opacity ${
              page === 2 ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                src="/images/image-product-2.jpg"
              />
            </div>
          </div>
          <div
            className={`absolute w-full h-full transition-opacity ${
              page === 3 ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                src="/images/image-product-3.jpg"
              />
            </div>
          </div>
          <div
            className={`absolute w-full h-full transition-opacity ${
              page === 4 ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                src="/images/image-product-4.jpg"
              />
            </div>
          </div>
          <div
            className="absolute w-10 h-10 rounded-full bg-white  top-1/2 transform -translate-y-1/2 mx-5 flex items-center justify-center"
            onClick={previousPage}
          >
            <img src="/images/icon-previous.svg" className="w-2" />
          </div>
          <div
            className="absolute w-10 h-10 rounded-full bg-white  right-0 top-1/2 transform -translate-y-1/2 mx-5 flex items-center justify-center"
            onClick={nextPage}
          >
            <img src="/images/icon-next.svg" className="w-2" />
          </div>
        </div>
        <div className="px-6 pt-5 pb-20">
          <h2 className="uppercase font-bold text-sm tracking-widest text-1">
            sneaker company
          </h2>
          <h1 className="text-3xl text-3 font-bold mt-3">
            Fall Limited Edition Sneakers
          </h1>
          <p className="text-4 text-md leading-6 mt-3">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className="flex justify-between items-center mt-6">
            <div className="flex items-center gap-3">
              <span className="text-3 font-bold text-3xl">$125.00</span>
              <span className="bg-2 text-1 font-bold px-2 py-0.5 rounded-md">
                50%
              </span>
            </div>
            <div>
              <span className="line-through text-5 font-bold">$250.00</span>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex justify-between items-center bg-6 px-5 py-4 rounded-md">
              <img src="/images/icon-minus.svg" className="w-3" />
              <span className="font-bold">0</span>
              <img src="/images/icon-plus.svg" className="w-3" />
            </div>
          </div>
          <div
            className="mt-4 bg-1 text-white font-bold flex items-center justify-center gap-3
          py-4 rounded-md shadow-lg shadow-1/50"
          >
            <img src="/images/icon-cart2.svg" />
            <span>Add to cart</span>
          </div>
        </div>
      </section>
    </div>
  );
}
