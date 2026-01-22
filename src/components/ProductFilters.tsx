"use client"

import { Categoria, TipoProduto } from "@/types/produto"

type Props = {
    tipo: TipoProduto | "todos"
    categoria: Categoria | "todas"
    risco: string | "todos"

    setTipo: (v: TipoProduto | "todos") => void
    setCategoria: (v: Categoria | "todas") => void
    setRisco: (v: string | "todos") => void
}

export function ProductFilters({
    tipo,
    categoria,
    risco,
    setTipo,
    setCategoria,
    setRisco,
}: Props) {
    return(
        <div className="flex flex-wrap gap-4 rounded-lg border border-neutral-800 bg-neutral-950 p-4">
      {/* TIPO */}
        <select
        value={tipo}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange={e => setTipo(e.target.value as any)}
        className="bg-neutral-900 border border-neutral-700 p-2 text-sm"
        >
            <option value="todos">Todos os tipos</option>
            <option value="arma">Armas</option>
            <option value="equipamento-amaldicoado">Equipamentos Amaldiçoados</option>
            <option value="ritual">Componentes Ritualísticos</option>
            <option value="explosivo">Explosivos</option>
            <option value="item-amaldiçoado">Itens Amaldiçoados</option>
        </select>

      {/* CATEGORIA */}
        <select
        value={categoria}
        onChange={e =>
            setCategoria(
            e.target.value === "todas"
                ? "todas"
                : (Number(e.target.value) as Categoria)
            )
        }
        className="bg-neutral-900 border border-neutral-700 p-2 text-sm"
        >
            <option value="todas">Todas categorias</option>
            <option value="1">Categoria 0</option>
            <option value="1">Categoria 1</option>
            <option value="2">Categoria 2</option>
            <option value="3">Categoria 3</option>
            <option value="4">Categoria 4</option>
        </select>

      {/* RISCO */}
        <select
        value={risco}
        onChange={e => setRisco(e.target.value)}
        className="bg-neutral-900 border border-neutral-700 p-2 text-sm"
        >
            <option value="todos">Todos os riscos</option>
            <option value="Baixo">Baixo</option>
            <option value="Médio">Médio</option>
            <option value="Alto">Alto</option>
            <option value="Extremo">Extremo</option>
        </select>
    </div>
    )
}