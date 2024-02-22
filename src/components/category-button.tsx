import clsx from "clsx";
import { Pressable, PressableProps, Text } from "react-native";

interface CategoryButtonProps extends PressableProps {
  title: string;
  isSelected?: boolean;
}

export const CategoryButton = ({
  title,
  isSelected = false,
  ...rest
}: CategoryButtonProps) => {
  return (
    <Pressable
      {...rest}
      className={clsx(
        "bg-slate-800 rounded-md justify-center px-4 h-10",
        isSelected && "border-2 border-lime-300"
      )}
    >
      <Text className="text-slate-100 font-subtitle text-sm">{title}</Text>
    </Pressable>
  );
};
