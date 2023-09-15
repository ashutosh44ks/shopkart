import { useState, useEffect } from "react";
import navbarSeparatorIcon from "../assets/navbar-separator.svg";
import hamburgerMenuIcon from "../assets/hamburger-menu.svg";
import hamburgerMenuIconClose from "../assets/hamburger-menu-close.svg";

const Navbar = () => {
  const navbar = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    {
      name: "Our Products",
      id: "product",
      child: [
        { name: "Product 1", id: "p1" },
        { name: "Product 2", id: "p2" },
        { name: "Product 3", id: "p3" },
        { name: "Product 4", id: "p4" },
      ],
    },
    { name: "Contact Us", id: "contact" },
  ];
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    if (showMenu) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [showMenu]);
  return (
    <div className="navbar">
      <div className="flex justify-between items-end">
        <h1>ShopKart</h1>
        <div className="flex gap-2 cart hide-on-mobile">
          <span className="cursor-pointer">Wishlist (0)</span>
          <span className="cursor-pointer">Bag (0)</span>
        </div>
        <img
          src={showMenu ? hamburgerMenuIconClose : hamburgerMenuIcon}
          alt="hamburger-menu"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
          className="show-on-mobile cursor-pointer mb-2 z-10"
        />
      </div>
      <img src={navbarSeparatorIcon} alt="navbar-separator" />
      {showMenu && (
        <div className="menu show-on-mobile">
          {navbar.map((item) => (
            <div key={item.id} className="cursor-pointer">
              {item.name}
            </div>
          ))}
        </div>
      )}
      <div className="flex gap-12 sm:gap-16 md:gap-20 lg:gap-32 menu hide-on-mobile">
        {navbar.map((item) => (
          <div
            key={item.id}
            className={item.child ? "dropdown-container" : "cursor-pointer"}
          >
            <span>{item.name}</span>
            {item.child && (
              <div className="dropdown">
                {item.child.map((x) => (
                  <div>{x.name}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
