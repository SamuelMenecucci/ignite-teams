import { Header } from "@components/Header";
import { Container, Form } from "./styles";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";

export function Players() {
  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />

      <Form>
        <Input
          placeholder="Nome da pessoa"
          //como o input é referente ao nome de uma pessoa, desabilito o autoCorrect para que não tenhamos problema com o corretor, no caso de algum apelido ou algo do tipo.
          autoCorrect={false}
        />
        <ButtonIcon icon="add" />
      </Form>
    </Container>
  );
}
