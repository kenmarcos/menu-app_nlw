import { ProductProps } from "@/utils/data/products";
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

interface ProductCardProps extends TouchableOpacityProps {
  product: ProductProps;
}

export const ProductCard = ({ product, ...rest }: ProductCardProps) => {
  return (
    <TouchableOpacity className="flex-row gap-3" {...rest}>
      <Image source={product.thumbnail} className="w-20 h-20 rounded-md" />

      <View className="flex-1">
        <Text className="text-slate-100 font-subtitle text-base flex-1">
          {product.title}
        </Text>

        <Text className="text-slate-400 text-xs" numberOfLines={2}>
          {product.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
