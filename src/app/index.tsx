import { CategoryButton } from "@/components/categoryButton";
import { Header } from "@/components/header";
import { CATEGORIES } from "@/utils/data/products";
import { useState } from "react";
import { FlatList, Text, View } from "react-native";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);

  const handleCategorySelection = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <View className="flex-1 pt-8">
      <Header title="Faça seu pedido" />

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
        className="max-h-10 mt-5"
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      />
    </View>
  );
};

export default Home;
