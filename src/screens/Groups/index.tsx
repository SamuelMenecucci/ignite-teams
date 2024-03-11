import { useCallback, useState } from "react";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { Alert, FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { groupsGetAll } from "@storage/group/groupsGetAll";
import { Loading } from "@components/Loading";

// type RootParamList = {
//   //dentro do RootParamList eu coloco o nome da rota e se ela tem algum parametro. caso ela não tenha parametro eu passo como undefined, caso tenha, passo um objeto com os parametros que irei receber.
//   groups: undefined;
//   new: undefined;
//   players: {
//     group: string;
//   };
// };

// type Props = {
//   navigation: NativeStackNavigationProp<RootParamList, "groups">;
// };

//O NavigationContainer compartilha o navigation com a minha aplicação, então caso eu não queira utilizar o useNavigation eu consigo pegar o navigation pelas props do meu componente, mas, para ficar mais enxuto, irei utilizar o useNavigation, pois sem ele eu preciso fazer toda essa tipagem acima.
export function Groups() {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState([""]);

  const navigation = useNavigation();

  const handleNewGroup = () => {
    //as opções de rota aparecem por conta da tipagem e em @types/navigation.d.ts
    navigation.navigate("new");
  };

  async function fetchGroups() {
    try {
      setIsLoading(true);

      const fetched = await groupsGetAll();

      setGroups(fetched);

      setIsLoading(false);
    } catch (error) {
      Alert.alert("Turmas", "Não foi possível carregar as turmas.");
      console.log(error);
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate("players", { group });
  }

  //para fazer o fetch dos grupos que estão no device eu por padrão utilizaria o useEffect, que dispara uma função toda vez que o componente renderiza ou toda vez que algum dado que está dentro do array de dependencia muda. no react-native se eu utilizar o useeffect, ao voltar para a tela inicial ele não será disparado novamente, somente a primeira vez que o usuário abrir o app e entrar na tela em questão. isso ocorre pois a tela, após a primeira renderização ela não é renderizada novamente, mesmo que o usuário tenha ido para outra tela e voltado. para resolver isso, eu utilizo o useFocusEffect do @react-navigation/native". com ele eu tenho o disparo da função que é passada como primeiro parametro toda vez que essa tela estiver em foco novamente. um ponto importante é que eu preciso passar essa função que ele recebe como parametro dentro do useCallback. pois dessa forma irá evitar chamadas desnecessárias da função que ele está guardando.
  //DOC useFocusEffect https://reactnavigation.org/docs/use-focus-effect/
  //DOC useCallback https://react.dev/reference/react/useCallback
  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
          )}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => (
            <ListEmpty message="Que tal cadastrar a primeira turma?" />
          )}
          showsVerticalScrollIndicator={false}
        />
      )}

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
}
