import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="flex bg-violet-600 fixed w-full p-4 text-white items-center">
      <Link to="/" className="text-2xl font-bold flex items-center">
        <i className="fa-solid fa-truck-fast me-2"></i> E Cart
      </Link>
      <ul className="flex-1 flex justify-end items-center">
        <li className="list-none px-4">
          <input
            style={{ width: "300px" }}
            className="rounded p-2 text-black"
            placeholder="Search Products Here..."
            type="text"
          />
        </li>
        <li className="list-none px-4 flex items-center">
          <Link to={'/wishlist'}>
              <i className="fa-solid fa-heart text-red-600 me-1"></i> Wishlist{' '}
              <span className="rounded p-1 bg-black text-white ml-1">0</span>
          </Link>
        </li>
        <li className="list-none px-4 flex items-center">
          <Link to={'/cart'}>
              <i className="fa-solid fa-cart-shopping text-green-600 me-1"></i> Cart{' '}
              <span className="rounded p-1 bg-black text-white ml-1">0</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
