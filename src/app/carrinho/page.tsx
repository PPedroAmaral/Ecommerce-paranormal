"use client"

import { useCart } from "@/context/CartContext"
import Link from "next/link"

export default function CarrinhoPage() {
    const {itens, remover, alterarQuantidade} = useCart()

    const total = itens.reduce(
        (acc, item) => acc + item.produto.preco * item.quantidade,
        0
    )

    if (itens.length === 0) {
        return (
            <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-widest">
            CARRINHO VAZIO
        </h1>

        <p className="text-neutral-400">
            Nenhum artefato autorizado para transporte.
        </p>

        <Link
            href="/"
            className="inline-block text-sm tracking-widest text-red-500 hover:text-red-400"
        >
            VOLTAR AO CATÁLOGO
        </Link>
        </div>
        )
    }

    return (
    <div className="space-y-10">
        <h1 className="text-3xl font-bold tracking-widest">
        ITENS AUTORIZADOS
        </h1>

        <div className="space-y-6">
        {itens.map(item => (
            <div
            key={item.produto.id}
            className="flex flex-col gap-4 rounded-lg border border-neutral-800 bg-neutral-950 p-4"
            >
            <div>
                <h2 className="text-lg font-semibold">
                {item.produto.nome}
                </h2>

                <p className="text-sm text-neutral-400">
                R$ {item.produto.preco.toFixed(2)}
                </p>
            </div>

            <div className="flex items-center gap-4">
                <button
                onClick={() =>
                    alterarQuantidade(
                    item.produto.id,
                    item.quantidade - 1
                    )
                }
                className="h-8 w-8 rounded border border-neutral-700 hover:bg-neutral-800"
                >
                −
                </button>

                <span className="w-6 text-center">
                {item.quantidade}
                </span>

                <button
                onClick={() =>
                    alterarQuantidade(
                    item.produto.id,
                    item.quantidade + 1
                    )
                }
                className="h-8 w-8 rounded border border-neutral-700 hover:bg-neutral-800"
                >
                +
                </button>

                <button
                onClick={() => remover(item.produto.id)}
                className="ml-auto text-sm text-red-500 hover:text-red-400"
                >
                Remover
                </button>
            </div>
            </div>
        ))}
        </div>

        <div className="flex items-center justify-between border-t border-neutral-800 pt-6">
        <strong className="text-lg">
            Total: R$ {total.toFixed(2)}
        </strong>

        <Link
            href="/checkout"
            className="rounded bg-neutral-800 px-6 py-3 text-sm tracking-widest text-neutral-400 hover:bg-neutral-700"
        >
            FINALIZAR COMPRA
        </Link>
        </div>
    </div>
    )
}