import { ProductProps } from "@/utils/data/products";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as cartInMemory from "./helpers/cart-in-memory";

// a lib `zustand` serve para criar estados globais, como os contextos do próprio react e a lib `redux`
// a lib `async-storage` serve para persistir os dados da aplicação, pois sem isso os dados são perdidos ao recarregar o app
// além da lib acima, é necessário o uso do `createJSONStorage` e `persist` do zustand para persistir os dados na aplicação
export type ProductCartProps = ProductProps & {
  quantity: number;
}

type StateProps = {
  products: ProductCartProps[];
  add: (product: ProductProps) => void;
  remove: (productId: string) => void;
  clear: () => void;
}

export const useCartStore = create(
  persist<StateProps>((set) => ({
  products: [],

  add: (product: ProductProps) =>
    set((state) => ({
      products: cartInMemory.add(state.products, product),
    })),

  remove: (productId: string) =>
    set((state) => ({
      products: cartInMemory.remove(state.products, productId)
    })),

  clear: () => set(() => ({ products: [] }))
}), {
  name: "nlw-expert:cart",
  storage: createJSONStorage(() => AsyncStorage)
}))
