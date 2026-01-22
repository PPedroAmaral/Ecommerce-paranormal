/* eslint-disable @next/next/no-img-element */
"use client"

import { Produto } from "@/types/produto"
import { useCart } from "@/context/CartContext"
import Link from "next/link"
import { useRisco } from "@/hooks/useRisco"
import { SeloRisco } from "./SeloRisco"

type Props = {
    produto: Produto
}

export function ProductCard({ produto }: Props) {
    const {adicionar} = useCart()
    const { altoRisco } = useRisco(produto)

    return (
        <>
            <div className={`flex flex-col gap-4 rounded-xl border-2 p-4 shadow-lg transition
                ${
            altoRisco
            ? "border-red-800 bg-neutral-950 shadow-[0_0_30px_rgba(185,28,28,0.4)]"
            : "border-neutral-800 bg-neutral-950"
            }`}>
            <Link href={`/produto/${produto.id}`}>
            <img
            src={produto.imagem}
            alt={produto.nome}
            className="h-110 w-full rounded-md object-cover opacity-90"
            />
            </Link>
            

            <div className="space-y-1">
                <h3 className="text-lg font-semibold tracking-wide text-neutral-100">
                    {produto.nome}
                </h3>

                <p className="text-sm text-neutral-400">
                    {produto.descricao}
                </p>
            </div>
                
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-widest">
                <span className="rounded bg-neutral-800 px-2 py-1 text-neutral-300">
                    Categoria {produto.categoria}
                </span>

                <SeloRisco risco={produto.risco} />
            </div>

            <div className="mt-auto flex items-center justify-between">
                <span className="text-lg font-bold text-neutral-100">
                    R$ {produto.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>

                <button
                onClick={() => adicionar(produto)}
                className={`rounded px-4 py-2 text-sm tracking-widest transition ${
                altoRisco
                ? "bg-red-800 hover:bg-red-700"
                : "bg-neutral-800 hover:bg-neutral-700"
                }`}>
                    ADICIONAR
                </button>
            </div>
        </div>
    </>
    )
}