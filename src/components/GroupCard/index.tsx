import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";

type Props = {
  title: string;
} & TouchableOpacityProps; //para que eu consiga utilizar todas as props/atributos que o TouchableOpacity possui

export function GroupCard({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
}
