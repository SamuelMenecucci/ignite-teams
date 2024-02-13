//para que eu possa utilizar o tema que eu criei para a aplicação, as configurações iniciais foram de criar o arquivo, e passar para o ThemeProvider do styled-components que fica no app. para que eu consiga utilizar esse thema dentro dos meus arquivos styles.ts, basta eu passar como value da key de estilização ${({theme}) => theme.prop}. porém dessa forma eu não tenho os valores que eu coloquei dentro do tema. para isso eu preciso fazer essa tipagem, para que o typescript entenda tudo o que o tema possui e possa me mostrar na hora de eu utilizar.
import "styled-components/native";
import theme from "../theme";

declare module "styled-components/native" {
  type ThemeType = typeof theme;
  //crio o nome da tipagem, aqui criei como ThemeType, e passo o typeof do tema que eu criei.

  //faço o extends do meu tipo (ThemeType) com o DefaultTheme que é o tema padrão do styled-components
  export interface DefaultTheme extends ThemeType {}
}
