//Navigation Container serve para criar um container/contexto de navegação. carregamos dentro desse contexto de navegação as rotas que queremos disponibilizar para a aplicação.
//iremos criar esse arquivo como um componente para utilizarmos dentro do app, pois é por onde a aplicação passa quando é executada
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { View } from "react-native";
import { useTheme } from "styled-components/native";

export function Routes() {
  const { COLORS } = useTheme();

  //ao trocarmos de rota conseguimos perceber um glitch na aplicação. ao troca a rota é nos mostrado um fundo branco enquanto a troca é feita. para minimizarmos esse glitch ao navegar pela aplicação iremos colcoar uma view por volta do navigation container e iremos colocar o background-color padrão da nossa aplicação, dessa forma minimizamos esse glitch.

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.GRAY_600 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}
