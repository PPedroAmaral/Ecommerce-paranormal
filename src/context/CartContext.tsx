"use client"

import { ItemCarrinho } from "@/types/carrinho"
import { Produto } from "@/types/produto"
import { createContext, useContext, useEffect, useState } from "react"

type CartContextType = {
    itens: ItemCarrinho[]
    adicionar: (produto: Produto) => void
    remover: (id: string) => void
    alterarQuantidade: (id: string, quantidade: number) => void
    limpar: () => void
}

const CartContex = createContext<CartContextType | null>(null)

export function CartProvider({children}: {children: React.ReactNode}) {
    const [itens, setItens] = useState<ItemCarrinho[]>([])

    useEffect(() => {
        const data = localStorage.getItem("membrana_cart")
        // eslint-disable-next-line react-hooks/set-state-in-effect
        if (data) setItens(JSON.parse(data))
    }, [])

    useEffect(() => {
        localStorage.setItem("membrana_cart", JSON.stringify(itens))
    }, [itens])

    function adicionar(produto: Produto) {
        setItens(prev => {
            const existente = prev.find(i => i.produto.id === produto.id)

            if (existente) {
                return prev.map(i =>
                    i.produto.id === produto.id
                    ? {...i, quantidade: i.quantidade + 1}
                    : i
                )
            }
            return [...prev, {produto, quantidade: 1}]
        })
    }

    function remover(id: string) {
        setItens(prev => prev.filter(i => i.produto.id !== id))
    }

    function alterarQuantidade(id: string, quantidade: number) {
        if (quantidade <= 0 ) return remover(id)
        
        setItens(prev =>
            prev.map(i =>
            i.produto.id === id ? { ...i, quantidade } : i
            )
        )
    }

    function limpar() {
        setItens([])
    }

    return (
        <CartContex.Provider
        value={{ itens, adicionar, remover, alterarQuantidade, limpar }}>
            {children}
        </CartContex.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContex)
    if (!context) {
        throw new Error("useCart deve ser usado dentro do CartProvider")
    }
    return context
}