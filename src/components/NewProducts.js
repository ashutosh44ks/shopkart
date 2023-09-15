import { useState, useEffect } from "react";
import axios from "axios";
import separatorIcon from "../assets/new-prods-separator.svg";
import arrowNext from "../assets/arrow-next.svg";
import extLink from "../assets/external-link-img.svg";

const NewProducts = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const getCategories = async () => {
    try {
      const { data } = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      setCategories(data);
      setActiveCategory(data[0]);
    } catch (err) {
      const categories = ["Apparel", "Accessories", "Best sellers", "50% off"];
      console.log(err);
      setCategories(categories);
      setActiveCategory(categories[0]);
    }
  };
  const [allProducts, setAllProducts] = useState([]);
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setAllProducts(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCategories();
    getAllProducts();
  }, []);

  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    if (allProducts.length > 0) {
      const filteredProducts = allProducts.filter(
        (prod) => prod.category === activeCategory
      );
      setFilteredProducts(filteredProducts);
    }
  }, [allProducts, activeCategory]);

  return (
    <section className="new-prods">
      <div className="flex justify-between items-center px-8 xs:px-16 py-8 2xl:py-16 pb-0">
        <div>
          <h2 className="px-4">New products</h2>
          <img src={separatorIcon} alt="separator" className="separator" />
        </div>
        <div className="flex gap-8 hide-on-mobile">
          <img src={arrowNext} alt="arrow prev" className="arrow-prev" />
          <img src={arrowNext} alt="arrow next" className="arrow-next" />
        </div>
      </div>
      <ul className="categories">
        {categories.map((cat, index) => (
          <li
            key={index}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>
      <div className="items">
        {filteredProducts.map((prod) => (
          <div className="card" key={prod.id}>
            <div className="relative">
              <img src={prod.image} alt="item" />
              <img
                src={extLink}
                alt="external link"
                className="external-link-img"
              />
            </div>
            <h4 title={prod.title}>{prod.title}</h4>
            <p title="Click to see more">{prod.description}</p>
            <h4>${prod.price}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewProducts;
