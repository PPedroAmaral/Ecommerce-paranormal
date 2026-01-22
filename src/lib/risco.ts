import { Produto } from "@/types/produto";
import { ItemCarrinho } from "@/types/carrinho"

export function isAltoRisco(produto: Produto) {
    return (
        produto.categoria >= 3 || produto.tipo.includes("amaldiçoado")
    )
}

export function temRiscoExtremo(itens: ItemCarrinho[]) {
    return itens.some(item => item.produto.risco === "Extremo")
}