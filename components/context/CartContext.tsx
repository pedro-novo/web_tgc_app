import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { ProductsType, useDataContext } from "./DataContext";

type CartContextProviderProps = {
  children: JSX.Element;
};

type CartContextType = {
  cart: ProductsType;
  cartSet: React.Dispatch<React.SetStateAction<ProductsType>>;
  itemsInCart: number;
  itemsInCartSet: React.Dispatch<React.SetStateAction<number>>;
  cartTotal: number;
  cartTotalSet: React.Dispatch<React.SetStateAction<number>>;
  removeCartItem: (id: string) => void;
  handleRemoveQuantity: (id: string) => void;
  handleAddQuantity: (id: string) => void;
  addToCart: (id: string) => void;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  cartSet: () => undefined,
  itemsInCart: 0,
  itemsInCartSet: () => undefined,
  cartTotal: 0,
  cartTotalSet: () => undefined,
  removeCartItem: () => undefined,
  handleRemoveQuantity: () => undefined,
  handleAddQuantity: () => undefined,
  addToCart: () => undefined,
});

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cart, cartSet] = useState<ProductsType>([]);
  const [itemsInCart, itemsInCartSet] = useState<number>(0);
  const [cartTotal, cartTotalSet] = useState<number>(0);
  const { products } = useDataContext();

  const removeCartItem = (id: string) => {
    products.map((item) => {
      if (id === item.id) {
        item.quantity = 1;
      }
    });
    cartSet(cart.filter((item) => item.id !== id));
  };

  const handleRemoveQuantity = (id: string) => {
    cart.map((item) => {
      if (item.id === id && item.quantity > 1) {
        item.quantity -= 1;
        itemsInCartSet(itemsInCart - 1);
      }
    });
  };

  const handleAddQuantity = (id: string) => {
    cart.map((item) => {
      if (item.id === id) {
        item.quantity += 1;
        itemsInCartSet(itemsInCart + 1);
      }
    });
  };

  const addToCart = useCallback(
    (id: string) => {
      if (cart.some((item) => item.id === id)) {
        cart.map((item) => {
          if (item.id === id) {
            item.quantity += 1;
          }
        });
      } else {
        products.filter((item) => {
          if (item.id == id) {
            cart.push(item);
          }
        });
      }
      itemsInCartSet(itemsInCart + 1);
      console.log(cart);
    },
    [cart, itemsInCart, itemsInCartSet, products]
  );

  useEffect(() => {
    itemsInCartSet(
      cart.reduce((total, item) => {
        return (total += item.quantity);
      }, 0)
    );
    cartTotalSet(
      cart.reduce((total, item) => {
        return (total += item.price * item.quantity);
      }, 0)
    );
  }, [cart, itemsInCart, cartTotal]);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartSet,
        itemsInCart,
        itemsInCartSet,
        cartTotal,
        cartTotalSet,
        removeCartItem,
        handleRemoveQuantity,
        handleAddQuantity,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
