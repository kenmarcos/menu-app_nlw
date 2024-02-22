import { ProductProps } from "@/utils/data/products";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import * as cartInMemory from "./helpers/cart-in-memory";

export interface ProductCartProps extends ProductProps {
  quantity: number;
}

interface CartStoreProps {
  products: ProductCartProps[];
  add: (product: ProductProps) => void;
}

export const useCartStore = create(
  persist<CartStoreProps>(
    (set) => ({
      products: [],

      add: (product: ProductProps) =>
        set((state) => ({
          products: cartInMemory.add(state.products, product),
        })),
    }),
    {
      name: "nlw-expert: cart",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
