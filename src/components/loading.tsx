import { ActivityIndicator, View } from "react-native";
import colors from "tailwindcss/colors";

// nesse caso a exportação não precisa ser `default` pois não é uma rota do expo-router
export function Loading() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-900">
      <ActivityIndicator color={colors.white} />
    </View>
  )
}
