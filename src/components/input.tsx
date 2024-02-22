import { TextInput, TextInputProps } from "react-native";
import colors from "tailwindcss/colors";

export const Input = ({ ...rest }: TextInputProps) => {
  return (
    <TextInput
      multiline
      textAlignVertical="top"
      placeholderTextColor={colors.slate[400]}
      className="bg-slate-800 h-32 p-4 text-white font-body rounded-md text-sm"
      {...rest}
    />
  );
};
