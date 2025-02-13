import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

export function Header() {
  const { cartAmount } = useContext(CartContext);

  return (
    <header className="w-full px-1 bg-slate-200">
      <nav className="w-full max-w-7xl h-14 flex items-center justify-between px-5 mx-auto">
        <Link to="/" className="font-bold text-2xl">
          Dev Shop
        </Link>

        <Link to="/cart" className="relative">
          <FiShoppingCart size={24} color="#121212" />
          {cartAmount > 0 && (
            <span className="absolute -top-2 -right-3 bg-blue-400 text-white font-bold px-2 py-1 rounded-full text-xs">
              {cartAmount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}
