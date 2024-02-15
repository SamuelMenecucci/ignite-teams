import { TouchableOpacity } from "react-native";

// https://styled-components.com/docs/api#css
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonTypeStyleProps;
};

//a tipagem que eu passar para o componente do styled-components será sempre possível de acessa-la na mesma função que eu tenho o theme como parametro, que aqui no caso é o type
export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};

  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

//como eu estou utilizando o tema mais de uma vez para fazer a estilização, posso utilizar um helper do próprio styled-component (css) para que eu obtenha o meu tema por na função uma vez só e possa utiliza-lo com mais facilidade.
export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
