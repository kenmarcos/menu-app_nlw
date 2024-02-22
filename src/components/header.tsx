import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import colors from "tailwindcss/colors";

interface HeaderProps {
  title: string;
  cartItemsQuantity?: number;
}

export const Header = ({ title, cartItemsQuantity = 0 }: HeaderProps) => {
  return (
    <View className="px-5 py-5 border-b border-b-slate-700 flex-row items-center justify-between">
      <View className="">
        <Image source={require("@/assets/logo.png")} className="h-6 w-32" />

        <Text className="text-white text-xl font-heading">{title}</Text>
      </View>

      {cartItemsQuantity > 0 && (
        <Link href="/cart" asChild>
          <TouchableOpacity className="relative" activeOpacity={0.7}>
            <Feather name="shopping-bag" size={24} color={colors.white} />

            <View className="bg-lime-300 w-5 h-5 rounded-full items-center justify-center absolute -top-2.5 -right-2.5">
              <Text className="text-xs text-slate-900 font-bold">
                {cartItemsQuantity}
              </Text>
            </View>
          </TouchableOpacity>
        </Link>
      )}
    </View>
  );
};
