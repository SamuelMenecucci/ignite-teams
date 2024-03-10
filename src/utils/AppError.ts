//classe criada para poder diferenciar os erros genericos da aplicação dos erros de feedback para o usuário
export class AppError {
  message: string;

  constructor(message: string) {
    this.message = message;
  }
}
