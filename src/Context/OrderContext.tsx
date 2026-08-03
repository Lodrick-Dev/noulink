import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import axios from "axios";
import { Dynamic } from "./ContextDynamique";
import { useAccount } from "./AccountContext";

type OrderStatus =
  | "waiting"
  | "preparing"
  | "ready"
  | "delivered"
  | "refused"
  | "cancelled";

type OrderItem = {
  id: string;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  description?: string;
};

export type Order = {
  _id: string;
  restaurantId: string;
  customerId: string;
  restaurantSupabaseId: string;
  customerSupabaseId: string;
  total: number;
  delivery: boolean;
  status: OrderStatus;
  items: OrderItem[];
  createdAt?: string;
  updatedAt?: string;
};

type OrderContextType = {
  orders: Order[];
  loadingOrders: boolean;
  orderError: string | null;
  refreshOrders: () => Promise<void>;
  refreshSellerOrders: () => Promise<void>;
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

type OrderProviderProps = {
  children: ReactNode;
};

export const OrderProvider = ({ children }: OrderProviderProps) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loadingOrders, setLoadingOrders] = useState(false);
  const [orderError, setOrderError] = useState<string | null>(null);
  const { token } = Dynamic();
  const { accountType } = useAccount();

  const refreshOrders = useCallback(async () => {
    if (!token) {
      setOrders([]);
      return;
    }

    try {
      setLoadingOrders(true);
      setOrderError(null);

      const res = await axios({
        method: "get",
        url: `${import.meta.env.VITE_APP_API}order/my-orders`,
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.success) {
        setOrders(res.data.orders ?? []);
      } else {
        setOrders([]);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des commandes :", error);

      setOrderError("Impossible de récupérer vos commandes.");

      setOrders([]);
    } finally {
      setLoadingOrders(false);
    }
  }, [token]);

  const refreshSellerOrders = useCallback(async () => {
    if (!token) {
      setOrders([]);
      return;
    }

    try {
      setLoadingOrders(true);
      setOrderError(null);

      const res = await axios({
        method: "get",
        url: `${import.meta.env.VITE_APP_API}order/seller-orders`,
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.success) {
        console.log(res);
        setOrders(res.data.orders ?? []);
      } else {
        setOrders([]);
      }
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des commandes vendeur :",
        error,
      );

      setOrderError("Impossible de récupérer les commandes.");

      setOrders([]);
    } finally {
      setLoadingOrders(false);
    }
  }, [token]);

  useEffect(() => {
    if (!token) {
      setOrders([]);
      return;
    }

    if (accountType === "customer") {
      refreshOrders();
    }

    if (accountType === "restaurant") {
      refreshSellerOrders();
    }
  }, [token, accountType, refreshOrders, refreshSellerOrders]);

  return (
    <OrderContext.Provider
      value={{
        orders,
        loadingOrders,
        orderError,
        refreshOrders,
        refreshSellerOrders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error(
      "useOrder doit être utilisé à l'intérieur de OrderProvider",
    );
  }

  return context;
};
