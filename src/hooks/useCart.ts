import { useState, useEffect, useMemo } from "react";
import type { TGuitar, TCartItem } from "../types";
import db from "../data/db";

const useCart = () => {

  const initialCart = (): TCartItem[] => {
    const localStorageCart = localStorage.getItem("cart");
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const [data, setData] = useState<TGuitar[]>([]);
  const [cart, setCart] = useState(initialCart());

  useEffect(() => {
    setData(db);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(item: TGuitar) {
    const itemExist = cart.findIndex((guitar) => guitar.id === item.id);
    if (itemExist >= 0) {
      const updatedCart = cart.map((guitar) => {
        if (guitar.id === item.id) {
          return { ...guitar, quantity: guitar.quantity + 1 };
        }
        return guitar;
      });
      setCart(updatedCart);
    } else {
      const newItem = { ...item, quantity: 1 };
      setCart([...cart, newItem]);
    }
  }

  function increaseQuantity(id: number) {
    const updatedCart = cart.map((guitar) => {
      if (guitar.id === id) {
        return { ...guitar, quantity: guitar.quantity + 1 };
      }
      return guitar;
    });
    return setCart(updatedCart);
  }

  function decreaseQuantity(id: number) {
    const updatedCart = cart.map((guitar) => {
      if (guitar.id === id) {
        return { ...guitar, quantity: guitar.quantity - 1 };
      }
      return guitar;
    });

    const filteredCart = updatedCart.filter((guitar) => guitar.quantity > 0);

    return setCart(filteredCart);
  } 

  function removeFromCart(id: number) {
    const updatedCart = cart.filter((guitar) => guitar.id !== id);
    return setCart(updatedCart);
  }

  function voidCart() {
    setCart([]);
  }

  //state derivado
  const isEmpty = useMemo(() => cart.length === 0, [cart]);
  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.quantity * item.price, 0),
    [cart]
  );

  return {
    data,
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    voidCart,
    isEmpty,
    cartTotal,
  };
};

export default useCart;
