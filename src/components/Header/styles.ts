import styled from "styled-components/native";
import { CaretLeft } from "phosphor-react-native";

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`;

//o flex faz com que o elemento ocupe todo o espaço disponível. como o meu logo está com um tamanho fixo, utilizo o flex para que ele pegue o restante, fazendo com que o logo seja jogado para a direita.
export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

//quando eu tenho um componente que não faz parte do styled-components, eu consigo estiliza-lo passando o styled como uma função e colocando o componente que eu quero estilizar como parametro e faço o resto normalmente. como eu consigo estilizar pelos atributos do componente CaretLeft, sigo a mesma lógica do componente de loading, de utilizar o attrs src\components\Loading\styles.ts
export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: 32,
}))``;
