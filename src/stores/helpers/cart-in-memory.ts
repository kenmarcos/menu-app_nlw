import { ProductProps } from "@/utils/data/products";
import { ProductCartProps } from "../cart-store";

export const add = (products: ProductCartProps[], newProduct: ProductProps) => {
  const productExists = products.find(
    (product) => product.id === newProduct.id
  );

  if (productExists) {
    return products.map((product) => {
      if (product.id === newProduct.id) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }

      return product;
    });
  }

  return [
    ...products,
    {
      ...newProduct,
      quantity: 1,
    },
  ];
};

export const remove = (
  products: ProductCartProps[],
  removedProductId: string
) => {
  const updatedProducts = products.map((product) => {
    if (product.id === removedProductId) {
      return {
        ...product,
        quantity: product.quantity - 1,
      };
    }

    return product;
  });

  return updatedProducts.filter((product) => product.quantity > 0);
};
