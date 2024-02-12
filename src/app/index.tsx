import { Header } from "@/components/header";
import { Text, View } from "react-native";

const Home = () => {
  return (
    <View className="flex-1 pt-8">
      <Header title="Faça seu pedido" />
      <Text className="text-red-500 text-4xl">Home Page</Text>
    </View>
  );
};

export default Home;
