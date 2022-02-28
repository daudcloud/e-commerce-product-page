import CartContext from "../context/CartContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <CartContext>
      <Component {...pageProps} />
    </CartContext>
  );
}

export default MyApp;
