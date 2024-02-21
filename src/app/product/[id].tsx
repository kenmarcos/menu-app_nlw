import { Button } from "@/components/button";
import { LinkButton } from "@/components/linkButton";
import { PRODUCTS } from "@/utils/data/products";
import { Feather } from "@expo/vector-icons";
import { Redirect, useLocalSearchParams } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";

const ProductPage = () => {
  const { id } = useLocalSearchParams();

  const product = PRODUCTS.find((product) => product.id === id);

  if (!product) {
    return <Redirect href="/" />;
  }

  return (
    <View className="flex-1">
      <Image
        source={product.cover}
        className="w-full h-52"
        resizeMode="cover"
      />

      <ScrollView>
        <View className="p-5 flex-1">
          <Text className="text-white text-xl font-heading">
            {product.title}
          </Text>

          <Text className="text-lime-400 text-2xl font-heading my-2">
            {product.price}
          </Text>

          <Text className="text-slate-400 font-body text-sm leading-6 mb-6">
            {product.description}
          </Text>

          {product.ingredients.map((ingredient) => (
            <Text
              className="text-slate-400 font-body text-sm leading-6"
              key={ingredient}
            >
              {"\u2022"} {ingredient}
            </Text>
          ))}
        </View>
      </ScrollView>

      <View className="p-5 gap-3">
        <Button>
          <Button.Icon>
            <Feather name="plus-circle" size={20} />
          </Button.Icon>
          <Button.Text>Adicionar ao pedido</Button.Text>
        </Button>

        <LinkButton href="/" title="Voltar ao cardápio" />
      </View>
    </View>
  );
};

export default ProductPage;
