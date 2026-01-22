import { NivelRisco } from "@/types/risco"

type Props = {
    risco: NivelRisco
}

const mapa = {
    Variável: "bg-white-900/40 text-white-400 border-white-800",
    Baixo: "bg-emerald-900/30 text-emerald-400 border-emerald-800",
    Médio: "bg-yellow-900/30 text-yellow-400 border-yellow-800",
    Alto: "bg-orange-900/30 text-orange-400 border-orange-800",
    Extremo: "bg-red-900/40 text-red-400 border-red-800",
}

export function SeloRisco({ risco }: Props) {
    return (
        <span
        className={`
            inline-block rounded border px-2 py-1 text-xs uppercase tracking-widest
            ${mapa[risco]}
        `}
        >
        RISCO {risco}
        </span>
    )
}
