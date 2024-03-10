// import { SafeAreaView } from "react-native";
//a SafeAreaView garante que todas as informações em tela serão exibidas somente em locais que não possuam nenhuma obstrução do próprio dispositivo, ou seja, se eu tenho um dispositivo que tenha uma camera ou algum ponto que nãop de para ver o que está em tela (exemplo: s10+, iphone com dynamic island). eu utilizo o SafeAreaView no lugar da View, quando eu preciso contornar esses pontos. existe o safeAreaView nativo do próprio react-native, mas como estamos utilizando rotas e esse react-native-safe-are-context é uma dependencia do react-navigation, iremos utiliza-lo.
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 18px;
`;
