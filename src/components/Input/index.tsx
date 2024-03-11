import { Container } from "./styles";
import { TextInput, TextInputProps } from "react-native";

//o useTheme permite que eu acesse o meu tema por outros lugares da minha aplicação. por exemplo, toda atribuição de algum valor do tema como fonte, cores e etc foram feitas até agora pelo meu arquivo styles.ts. com o useTheme eu consigo fazer o uso do meu tema fora de um componente do styled-component, dentro do styles.ts
import { useTheme } from "styled-components/native";

type Props = {
  inputRef?: React.RefObject<TextInput>;
} & TextInputProps;

export function Input({ inputRef, ...rest }: Props) {
  const { COLORS } = useTheme();

  return (
    <Container
      //como o input é um componente e eu preciso passar o ref dele eu não consigo passar direto aonde o input é chamado, por isso eu crio uma nova prop, tipo ela com o React.RefObject e tipo com TextInput, passando esse inputRef para o atributo ref
      ref={inputRef}
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}
    />
  );
}
