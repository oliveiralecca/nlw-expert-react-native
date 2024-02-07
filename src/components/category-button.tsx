import { Text, Pressable, PressableProps } from "react-native";
import { clsx } from "clsx";

// Pressable: é a base do TouchableOpacity, é componente pra toque mas não tem o efeito de opacidade
// clsx: ferramenta para renderizar estilos condicionalmente, onde o primeiro param da função é o estilo padrão, e o segundo é o estilo condicional
type CategoryProps = PressableProps & {
  title: string;
  isSelected?: boolean;
}

export function CategoryButton({ title, isSelected, ...rest }: CategoryProps) {
  return (
    <Pressable 
      className={clsx(
        "bg-slate-800 px-4 justify-center rounded-md h-10", 
        isSelected && "border-2 border-lime-300"
      )}
      {...rest}
    >
      <Text className="text-slate-100 font-subtitle text-sm">{title}</Text>
    </Pressable>
  )
}
