import { TouchableHighlightProps } from "react-native";
import { Container, Title, FilterStyleProps } from "./styles";

//junto tipagens diferentes para criar uma e utilizar no meu componente. aqui eu reaproveito o isActive do FilterStyleProps para que eu não precise declara-lo novamente.
type Props = TouchableHighlightProps &
  FilterStyleProps & {
    title: string;
  };

export function Filter({ title, isActive, ...rest }: Props) {
  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
