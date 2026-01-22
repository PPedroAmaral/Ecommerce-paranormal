"use client"

import { produtos } from "@/data/produtos"
import { ProductCard } from "@/components/ProductCard"
import { useState } from "react"
import { ProductFilters } from "@/components/ProductFilters"
import { Categoria, TipoProduto } from "@/types/produto"

export default function Home() {
  const [tipo, setTipo] = useState<TipoProduto | "todos">("todos")
  const [categoria, setCategoria] = useState<Categoria | "todas">("todas")
  const [risco, setRisco] = useState<string | "todos">("todos")

  const produtosFiltrados = produtos.filter(produto => {
    if(tipo !== "todos" && produto.tipo !== tipo) return false
    if(categoria !== "todas" && produto.categoria !== categoria) return false
    if(risco !== "todos" && produto.risco !== risco) return false
    return true
  })

  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-widest">
          MEMBRANA<span className="text-red-600">.null</span>
        </h1>

        <p className="text-neutral-400 max-w-xl">
          Catálogo restrito de artefatos, armas e componentes cuja existência
          compromete a estabilidade da realidade.
        </p>
      </header>

      <ProductFilters
        tipo={tipo}
        setTipo={setTipo}
        categoria={categoria}
        setCategoria={setCategoria}
        risco={risco}
        setRisco={setRisco}
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {produtosFiltrados.map(produto => (
          <ProductCard key={produto.id} produto={produto} />
        ))}

        {produtosFiltrados.length === 0 && (
          <p className="text-neutral-400">
            Nenhum item corresponde aos filtros aplicados.
          </p>
        )}
      </div>
    </div>
  )
}