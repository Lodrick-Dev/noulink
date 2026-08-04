import { createContext, useContext, useState, type ReactNode } from "react";

export type CartItem = {
  restaurantId: string;
  specialityId: string;
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (specialityId: string, restaurantId: string) => void;
  removeFromCart: (specialityId: string, restaurantId: string) => void;
  getQuantity: (specialityId: string, restaurantId: string) => number;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (specialityId: string, restaurantId: string) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) =>
          item.specialityId === specialityId &&
          item.restaurantId === restaurantId,
      );

      if (existingItem) {
        return prev.map((item) =>
          item.specialityId === specialityId &&
          item.restaurantId === restaurantId
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      }

      return [
        ...prev,
        {
          specialityId,
          restaurantId,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (specialityId: string, restaurantId: string) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.specialityId === specialityId &&
          item.restaurantId === restaurantId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const getQuantity = (specialityId: string, restaurantId: string) => {
    return (
      cartItems.find(
        (item) =>
          item.specialityId === specialityId &&
          item.restaurantId === restaurantId,
      )?.quantity ?? 0
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        getQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart doit être utilisé à l'intérieur de CartProvider");
  }

  return context;
};
