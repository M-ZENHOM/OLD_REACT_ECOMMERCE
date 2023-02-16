import { createContext, useContext, useEffect, useState } from "react";

const ShoppingCartContext = createContext({});

const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [bestSeller, setBestSeller] = useState([]);
  const apiAddress = `https://dummyjson.com/products`;
  const apiAddressCat = `https://dummyjson.com`;
  const getAllProducts = () => {
    fetch(`${apiAddress}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  };
  const getAllCategoryProducts = (catName) => {
    fetch(`${apiAddressCat}/products/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  };

  useEffect(() => {
    fetch(`${apiAddress}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
    //-------------------------------------------------------
    fetch(`${apiAddress}`)
      .then((res) => res.json())
      .then((data) => setBestSeller(data.products));
    //-------------------------------------------------------
    fetch(`${apiAddressCat}/products/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, [apiAddress, apiAddressCat]);

  const getItemsQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  const increaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.filter((item) => item.id === id) == null) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            if (item.quantity > 0) {
              return { ...item, quantity: item.quantity - 1 };
            }
          } else {
            return item;
          }
          return item;
        });
      }
    });
  };
  const removeItemFromCart = (id) => {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  };
  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        getItemsQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeItemFromCart,
        products,
        setProducts,
        categories,
        getAllCategoryProducts,
        getAllProducts,
        bestSeller,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
export default ShoppingCartProvider;

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
