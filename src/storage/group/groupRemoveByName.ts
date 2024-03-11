import AsyncStorage from "@react-native-async-storage/async-storage";
import { groupsGetAll } from "./groupsGetAll";
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig";

export async function groupRemoveByName(group: string) {
  try {
    const storedGroups = await groupsGetAll();

    const groups = storedGroups.filter((item) => item !== group);

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups));
    //além de remover o grupo eu removo a chave que guarda os players do grupo, mas a diferença é que eu utilizo o removeItem, pois pelo fluxo da aplicação, se não existe grupo, os itens que pertencem a ele pode ser removidos
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${group}`);
  } catch (error) {
    throw error;
  }
}
