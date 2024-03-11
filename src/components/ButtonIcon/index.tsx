import { TouchableOpacityProps } from "react-native";
import { ButtonIconTypeStypeProps, Container, Icon } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
  //se eu passar o icon como uma string somente, eu não terei o intellisense para me dar as opções disponíveis dos ícones que eu posso utilizar, por isso eu utilizo o glyphMap do materialicons, que me retorna os ícones disponíveis
  //github discussion https://github.com/expo/vector-icons/issues/153#issuecomment-752769305
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStypeProps;
};

export function ButtonIcon({ icon, type = "PRIMARY", ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  );
}
