import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

//o ActivityIndicator é um componente de loading do react native. posso usa-lo como base e estiliza-lo como eu queira.
//Eu consigo acessar um atributo color dentro do próprio ActivityIndicator no index.tsx, mas eu posso acessa-lo de uma outra forma por aqui, e também consigo puxar o meu tema para fazer essa estilização.
//Para isso basta eu colocar o .attrs e passo uma função dentro dele que desestruturo o theme e essa função retorna um objetoe dentro dele todos os atributos que ele possui os atributos disponíveis.
export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_700,
}))``;
