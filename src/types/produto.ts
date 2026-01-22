import { NivelRisco } from "./risco"

export type Categoria = 0 | 1 | 2 | 3 | 4

export type TipoProduto =  
    | "arma"
    | "arma-amaldicoada"
    | "equipamento"
    | "equipamento-amaldicoado"
    | "ritual"
    | "explosivo"
    | "item-amaldiçoado"

export type Produto = {
    id: string
    nome: string
    descricao: string
    mecanica: string
    preco: number

    categoria: Categoria
    tipo: TipoProduto 

    risco: NivelRisco
    elemento?: string
    consequencias?: string
    mecanica2?: string

    imagem: string
}

