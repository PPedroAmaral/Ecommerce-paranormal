import { Produto } from "@/types/produto";
import { isAltoRisco } from "@/lib/risco";

export function useRisco(produto?: Produto) {
    if (!produto) return {altoRisco: false}

    return {
        altoRisco: isAltoRisco(produto),
    }
}