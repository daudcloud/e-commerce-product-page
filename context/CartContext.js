import { createContext, useContext, useState } from "react";

const CartProvider = createContext();
const CartUpdate = createContext();

export function useCart() {
  return [useContext(CartProvider), useContext(CartUpdate)];
}

function CartContext({ children }) {
  const [carts, setCarts] = useState([
    {
      id: Math.random(),
      image: "/images/image-product-1-thumbnail.jpg",
      name: "Fall Limited Edition Sneakers",
      price: 125,
      count: 3,
    },
    {
      id: Math.random(),
      image: "/images/image-product-1-thumbnail.jpg",
      name: "Fall Limited Edition Sneakers",
      price: 125,
      count: 3,
    },
  ]);

  return (
    <CartProvider.Provider value={carts}>
      <CartUpdate.Provider value={setCarts}>{children}</CartUpdate.Provider>
    </CartProvider.Provider>
  );
}

export default CartContext;
