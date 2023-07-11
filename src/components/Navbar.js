import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  // underhood it subscribes to given state(cart) so that if anything change then it automatically fetch(new things) and re-render this Navbar component
  const items = useSelector((state) => state.cart);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span className="logo">REDUX TOOLKIT STORE</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">Cart items: {items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
