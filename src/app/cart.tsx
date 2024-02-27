import { Button } from "@/components/button";
import { Header } from "@/components/header";
import { Input } from "@/components/input";
import { LinkButton } from "@/components/link-button";
import { ProductCard } from "@/components/product-card";
import { useCartStore } from "@/stores/cart-store";
import { ProductProps } from "@/utils/data/products";
import { formatCurrency } from "@/utils/functions/format-currency";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { useState } from "react";
import { Alert, Linking, ScrollView, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const PHONE_NUMBER = "5511942312965";

const Cart = () => {
  const [address, setAddress] = useState("");

  const cartStore = useCartStore();

  const navigation = useNavigation();

  const totalPrice = cartStore.products.reduce((acc, cartProduct) => {
    return acc + cartProduct.price * cartProduct.quantity;
  }, 0);

  const handleProductRemoval = (product: ProductProps) => {
    Alert.alert(
      "Remover",
      `Deseja remover um item do produto ${product.title} do carrinho?`,
      [
        { text: "Cancelar" },
        { text: "Remover", onPress: () => cartStore.remove(product.id) },
      ]
    );
  };

  const handleOrderSending = () => {
    if (address.trim().length === 0) {
      return Alert.alert("Pedido", "Informe o endereço de entrega.");
    }

    const products = cartStore.products
      .map((product) => `${product.title}........${product.quantity}x`)
      .join("\n");

    const message = `
      🍔 NOVO PEDIDO
      \nEntregar em: ${address.trim()}
      \n${products}
      \nValor total: ${formatCurrency(totalPrice)}
      `;

    Linking.openURL(
      `http://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${message}`
    );

    cartStore.clear();

    navigation.goBack();
  };

  return (
    <View className="flex-1">
      <Header title="Seu carrinho" />

      {cartStore.products.length === 0 && (
        <View className="flex-1 items-center justify-center">
          <Text className="text-white text-base font-subtitle text-center py-5">
            Seu carrinho esta vazio
          </Text>

          <LinkButton href="/" title="Voltar para o menu" />
        </View>
      )}

      {cartStore.products.length > 0 && (
        <>
          <KeyboardAwareScrollView>
            <ScrollView className="px-5">
              {cartStore.products.length > 0 && (
                <View className="py-5 border-b border-b-slate-700 space-y-1">
                  {cartStore.products.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onPress={() => handleProductRemoval(product)}
                    />
                  ))}
                </View>
              )}

              <View className="py-5 flex-row items-center justify-between">
                <Text className="text-white text-xl font-subtitle">Total:</Text>
                <Text className="text-lime-400 text-2xl font-heading">
                  {formatCurrency(totalPrice)}
                </Text>
              </View>

              <View className="mb-10">
                <Input
                  onChangeText={setAddress}
                  placeholder="Informe o endereço de entrega com rua, bairro, CEP, número e complemento..."
                />
              </View>
            </ScrollView>
          </KeyboardAwareScrollView>

          <View className="p-5 gap-3 bg-slate-800">
            <Button onPress={handleOrderSending}>
              <Button.Text>Enviar pedido</Button.Text>
              <Button.Icon>
                <Feather name="arrow-right-circle" size={24} />
              </Button.Icon>
            </Button>

            <LinkButton href="/" title="Voltar para o menu" />
          </View>
        </>
      )}
    </View>
  );
};

export default Cart;
