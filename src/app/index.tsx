import { CategoryButton } from "@/components/category-button";
import { Header } from "@/components/header";
import { ProductCard } from "@/components/product-card";
import { useCartStore } from "@/stores/cart-store";
import { CATEGORIES, MENU } from "@/utils/data/products";
import { Link } from "expo-router";
import { useState } from "react";
import { FlatList, SectionList, Text, View } from "react-native";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);

  const cartStore = useCartStore();

  const cartItemsQuantity = cartStore.products.reduce((acc, cartProduct) => {
    return acc + cartProduct.quantity;
  }, 0);

  const handleCategorySelection = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <View className="flex-1">
      <Header title="Faça seu pedido" cartItemsQuantity={cartItemsQuantity} />

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            onPress={() => handleCategorySelection(item)}
            isSelected={item === selectedCategory}
          />
        )}
        horizontal
        className="max-h-10 mt-5 mb-3"
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      />

      <SectionList
        sections={MENU}
        keyExtractor={(item) => item.id}
        renderSectionHeader={({ section: { title } }) => (
          <Text className="text-white font-heading text-xl mb-3 mt-8">
            {title}
          </Text>
        )}
        renderItem={({ item }) => (
          <Link asChild href={`/product/${item.id}`} className="mb-4">
            <ProductCard product={item} />
          </Link>
        )}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        className="flex-1 px-5"
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
};

export default Home;
