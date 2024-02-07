import { SafeAreaView } from "react-native";
import { Slot } from "expo-router";
import { 
  useFonts,
  Inter_400Regular, 
  Inter_500Medium, 
  Inter_600SemiBold, 
  Inter_700Bold 
} from "@expo-google-fonts/inter";
import { Loading } from "@/components/loading";

// o arquivo `_layout.tsx` dentro de `app` é automaticamente reconhecido pelo expo como arquivo de config das rotas
// o `<Slot />` funciona como o `<Outlet />` do react-router-dom na web
export default function Layout() {
  // `useFonts` é usado para carregar fontes no dispositivo
  const [fontsLoaded] = useFonts({
    Inter_400Regular, 
    Inter_500Medium, 
    Inter_600SemiBold, 
    Inter_700Bold 
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <SafeAreaView className="flex-1 bg-slate-900">
      <Slot />
    </SafeAreaView>
  )
}
