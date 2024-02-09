import { ProductProps } from "@/utils/data/products";
import { create } from "zustand";
import * as cartInMemory from "./helpers/cart-in-memory";

// a lib `zustand` serve para criar estados globais, como os contextos do próprio react e a lib `redux`
export type ProductCartProps = ProductProps & {
  quantity: number;
}

type StateProps = {
  products: ProductCartProps[];
  add: (product: ProductProps) => void;
}

export const useCartStore = create<StateProps>((set) => ({
  products: [],

  add: (product: ProductProps) =>
    set((state) => ({
      products: cartInMemory.add(state.products, product),
    })),
}))
