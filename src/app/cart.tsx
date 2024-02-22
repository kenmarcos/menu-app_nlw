import { Button } from "@/components/button";
import { Header } from "@/components/header";
import { LinkButton } from "@/components/link-button";
import { ProductCard } from "@/components/product-card";
import { useCartStore } from "@/stores/cart-store";
import { formatCurrency } from "@/utils/functions/format-currency";
import { Feather } from "@expo/vector-icons";
import { FlatList, ScrollView, Text, View } from "react-native";

const Cart = () => {
  const cartStore = useCartStore();

  const totalPrice = cartStore.products.reduce((acc, cartProduct) => {
    return acc + cartProduct.price * cartProduct.quantity;
  }, 0);

  return (
    <View className="flex-1">
      <Header title="Seu carrinho" />

      <ScrollView className="px-5">
        {cartStore.products.length > 0 && (
          <View className="border-b border-b-slate-700 py-5 space-y-1">
            {cartStore.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </View>
        )}

        <View className="flex-row items-center justify-between pt-5">
          <Text className="text-white text-xl font-subtitle">Total:</Text>
          <Text className="text-lime-400 text-2xl font-heading">
            {formatCurrency(totalPrice)}
          </Text>
        </View>

        <View className="pt-5 gap-3">
          <Button>
            <Button.Text>Enviar pedido</Button.Text>
            <Button.Icon>
              <Feather name="arrow-right-circle" size={24} />
            </Button.Icon>
          </Button>

          <LinkButton href="/" title="Voltar para o menu" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Cart;
