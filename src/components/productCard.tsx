import { forwardRef } from "react";
import {
  Image,
  ImageProps,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

interface ProductDataProps {
  title: string;
  description: string;
  thumbnail: ImageProps;
  quantity?: number;
}

interface ProductCardProps extends TouchableOpacityProps {
  product: ProductDataProps;
}

export const ProductCard = forwardRef<TouchableOpacity, ProductCardProps>(
  ({ product, ...rest }, ref) => {
    return (
      <TouchableOpacity ref={ref} className="flex-row gap-3" {...rest}>
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
  }
);
