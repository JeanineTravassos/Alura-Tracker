import Iprojeto from "./IProjeto";

export default interface ITarefa {
    duracaoEmSegundos: number,
    descricao: string,
    projeto: Iprojeto,
    id: number
}