import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

//o expo tem opções de ícones que já vem por padrão no projeto. irei utiliza-los para esse componente. dentro do vector icons, vem as libs conhecidas de ícones, como o ant design, material icons, font awesome e etc.
//DOC https://github.com/oblador/react-native-vector-icons
// all icons https://oblador.github.io/react-native-vector-icons/
/*
para utilizar como componente o MaterialIcons por exemplo, eu passo o MaterialIcons como componente e utilizo uma propriedade "name", que recebe o nome do ícone que eu quero utilizar. 

<MaterialIcons name="home" size={56} />
*/

export type ButtonIconTypeStypeProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonIconTypeStypeProps;
};

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;

  justify-content: center;
  align-items: center;

  margin-left: 12px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
}))``;
