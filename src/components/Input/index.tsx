import { Container } from "./styles";
import { TextInputProps } from "react-native";

//o useTheme permite que eu acesse o meu tema por outros lugares da minha aplicação. por exemplo, toda atribuição de algum valor do tema como fonte, cores e etc foram feitas até agora pelo meu arquivo styles.ts. com o useTheme eu consigo fazer o uso do meu tema fora de um componente do styled-component, dentro do styles.ts
import { useTheme } from "styled-components/native";

export function Input({ ...rest }: TextInputProps) {
  const { COLORS } = useTheme();

  return <Container placeholderTextColor={COLORS.GRAY_300} {...rest} />;
}
