import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Groups } from "@screens/Groups";
import { Players } from "@screens/Players";
import { NewGroup } from "@screens/NewGroup";

const { Navigator, Screen } = createNativeStackNavigator();

//O approutes ´é feito como um componente e utilizado dentro do index de routes.
export function AppRoutes() {
  return (
    <Navigator
      //o Navigator tras várias opções dentro de screenOptions. por padrão, o react navigation trás um header nas telas. esse header é estilizavel caso eu queria fazer a estilização dele. aqui eu irei desabilitar ele, passando o headerShown como false.
      screenOptions={{ headerShown: false }}

      //o carregamento das rotas aqui no Navigator funciona por ordem. ou seja, ele irá carregar primeiro o groups,depois new e depois players. se eu quiser, posso utilizar o initialRouteName, para declarar a rota inicial da aplicação
      // initialRouteName="groups"
    >
      <Screen name="groups" component={Groups} />
      <Screen name="new" component={NewGroup} />
      <Screen name="players" component={Players} />
    </Navigator>
  );
}
