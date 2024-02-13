import { Container, Logo, BackButton, BackIcon } from "./styles";

//preciso criar dentro da pasta @types uma tipagem para que seja aceito a importação. crio o arquivo png.d.ts
import logoImg from "@assets/logo.png";

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
}
