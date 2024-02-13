import { Container, Logo } from "./styles";

//preciso criar dentro da pasta @types uma tipagem para que seja aceito a importação. crio o arquivo png.d.ts
import logoImg from "@assets/logo.png";

export function Header() {
  return (
    <Container>
      <Logo source={logoImg} />
    </Container>
  );
}
