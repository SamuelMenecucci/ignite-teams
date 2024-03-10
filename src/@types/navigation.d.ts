//para que o typescript reconheça as rotas que tenho disponíveis na aplicação, preciso fazer a tipagem delas. dessa forma, ao utilizar as funções de navegação, serão mostradas as sugestões das rotas que estão disponíveis também, além de corrigir o alerta que o typescript irá trazer por não termos as rotas tipadas

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      //dentro do RootParamList eu coloco o nome da rota e se ela tem algum parametro. caso ela não tenha parametro eu passo como undefined, caso tenha, passo um objeto com os parametros que irei receber.
      groups: undefined;
      new: undefined;
      players: {
        group: string;
      };
    }
  }
}
