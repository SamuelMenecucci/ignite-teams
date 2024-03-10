import { useNavigation } from "@react-navigation/native";
import { Container, Logo, BackButton, BackIcon } from "./styles";

//preciso criar dentro da pasta @types uma tipagem para que seja aceito a importação. crio o arquivo png.d.ts
import logoImg from "@assets/logo.png";

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  const navigation = useNavigation();

  function handleGoBack() {
    //o goBack sempre volta para a tela anterior. se eu quisesse voltar para a tela uma tela que fosse a minha tela home, independente de qual fluxo eu fiz e de quantas telas tenham sido abertas eu utilizo o navitate, que é o mesmo que eu utilizo para ir mudar a rota. a diferença entre voltar com o goBack e utilizar o navigate para isso é que o navigate ele irá descartar todas as telas anteriores, desfazendo toda a pilha de telas que tenham sido feitas. o useNavigation também oferece uma outra opção para voltarmos para a tela inicial da aplicação, basta utilizarmos o popToTop. DOC https://reactnavigation.org/docs/navigating#going-back
    navigation.goBack();
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
}
