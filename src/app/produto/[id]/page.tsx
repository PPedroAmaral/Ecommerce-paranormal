/* eslint-disable @next/next/no-img-element */
"use client"

import { useParams } from "next/navigation"
import { produtos } from "@/data/produtos"
import { useCart } from "@/context/CartContext"
import Link from "next/link"
import { useRisco } from "@/hooks/useRisco"


export default function produtoDetalhePage() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {id} = useParams()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {adicionar} = useCart()

    const produto = produtos.find(p => p.id === id)

    if (!produto) {
        return (
            <div className="space-y-4">
                <h1 className="text-2xl font-bold text-red-500">
                    ARTEFATO NÃO LOCALIZADO
                </h1>
                <Link href="/" className="text-sm text-neutral-400">
                    Retornar ao catálogo
                </Link>
            </div>
        )       
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { altoRisco } = useRisco(produto)
    

    return (
        <div
        className={`space-y-10 ${
        altoRisco ? "text-red-400" : "text-neutral-200"
        }`}
        >
      {/* HEADER */}
        <header className="space-y-4">
            <h1 className="text-4xl font-bold tracking-widest">
                {produto.nome}
            </h1>

            <p className=" text-neutral-400">
                {produto.mecanica}
            </p>
        </header>

      {/* IMAGEM */}
        <div className="flex justify-center">
        <img src={produto.imagem} alt={produto.nome} className=" h-150 w-180 rounded-xl object-cover"/>
        </div>

      {/* DADOS */}
        <section className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
            <p>
            <strong>Categoria:</strong> {produto.categoria}
            </p>
            <p>
            <strong>Elemento:</strong> {produto.elemento}
            </p>
            <p>
            <strong>Risco:</strong> {produto.risco} 
            </p>
        </div>

        <div className="space-y-2">
            <p className="uppercase tracking-widest text-sm text-red-500">
            Consequências
            </p>
            <p className="text-neutral-400">
            {produto.mecanica2}
            </p>
        </div>
        </section>

      {/* AÇÃO */}
        <div className="flex items-center justify-between border-t border-neutral-800 pt-6">
        <span className="text-2xl font-bold">
            R$ {produto.preco.toFixed(2)}
        </span>

        <button
            onClick={() => adicionar(produto)}
            className={`rounded px-6 py-3 text-sm tracking-widest ${
            altoRisco
                ? "bg-red-800 hover:bg-red-700"
                : "bg-neutral-800 hover:bg-neutral-700"
            }`}
        >
            ADICIONAR AO CARRINHO
        </button>
        </div>

        {altoRisco && (
            <div className="rounded border border-red-900 bg-red-900/10 p-4 text-sm text-red-400">
            Este item apresenta instabilidade crítica.
            O manuseio inadequado pode causar consequências irreversíveis.
            </div>
)}
    </div>
    )
}