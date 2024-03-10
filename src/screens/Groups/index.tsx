import { useState } from "react";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

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
  const [groups, setGroups] = useState(["Nome da turma"]);

  const navigation = useNavigation();

  const handleNewGroup = () => {
    //as opções de rota aparecem por conta da tipagem e em @types/navigation.d.ts
    navigation.navigate("new");
  };

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
        showsVerticalScrollIndicator={false}
      />
      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
}
