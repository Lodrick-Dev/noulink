import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import axios from "axios";
import { io, type Socket } from "socket.io-client";
import { Dynamic } from "./ContextDynamique";
import { useAccount } from "./AccountContext";
import { toast } from "react-toastify";
import newOrderSound from "../assets/sounds/notification.mp3";

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
type CustomerInfo = {
  pseudo: string;
  ville: string;
  road: string;
  contact: string;
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
  customerInfo: CustomerInfo;
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

  useEffect(() => {
    if (!token) {
      return;
    }

    const socket: Socket = io(import.meta.env.VITE_APP_API, {
      auth: {
        token,
      },
    });

    socket.on("connect", () => {
      console.log("🟢 Socket.IO connecté :", socket.id);
    });

    socket.on("connect_error", (error) => {
      console.error("🔴 Erreur Socket.IO :", error.message);
    });

    socket.on("disconnect", (reason) => {
      console.log("🟠 Socket.IO déconnecté :", reason);
    });

    socket.on("newOrder", (newOrder: Order) => {
      console.log("🆕 Nouvelle commande reçue :", newOrder);

      setOrders((currentOrders) => {
        const alreadyExists = currentOrders.some(
          (order) => order._id === newOrder._id,
        );

        if (alreadyExists) {
          return currentOrders;
        }

        return [newOrder, ...currentOrders];
      });

      const audio = new Audio(newOrderSound);

      audio.play().catch((error) => {
        console.warn("Impossible de jouer le son de notification :", error);
      });

      toast.success(
        `Nouvelle commande reçue ! ${newOrder.total.toLocaleString("fr-FR", {
          style: "currency",
          currency: "EUR",
        })}`,
      );
    });

    socket.on("orderStatusUpdated", (updatedOrder: Order) => {
      console.log("🔄 Statut de commande mis à jour :", updatedOrder);

      setOrders((currentOrders) =>
        currentOrders.map((order) =>
          order._id === updatedOrder._id ? updatedOrder : order,
        ),
      );

      const statusMessages: Record<OrderStatus, string> = {
        waiting: "Votre commande est en attente.",
        preparing: "Votre commande est en préparation.",
        ready: "Votre commande est prête !",
        delivered: "Votre commande a été livrée !",
        refused: "Votre commande a été refusée.",
        cancelled: "Votre commande a été annulée.",
      };

      const message = statusMessages[updatedOrder.status];

      if (
        updatedOrder.status === "refused" ||
        updatedOrder.status === "cancelled"
      ) {
        toast.error(message);
      } else if (updatedOrder.status === "delivered") {
        toast.success(message);
      } else {
        toast.info(message);
      }
    });

    return () => {
      socket.off("connect");
      socket.off("connect_error");
      socket.off("disconnect");
      socket.off("newOrder");
      socket.off("orderStatusUpdated");

      socket.disconnect();
    };
  }, [token]);
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
