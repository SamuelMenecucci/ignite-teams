//Navigation Container serve para criarmos um container/contexto de navegação. carregamos dentro desse contexto de navegação as rotas que queremos disponibilizar para a aplicação.
//iremos criar esse arquivo como um componente para utilizarmos dentro do app, pois é por onde a aplicação passa quando é executada
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
