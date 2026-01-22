export function FalhaCritica() {
    return (
        <div className="space-y-4 rounded border border-red-900 bg-red-950/40 p-6 text-red-400">
        <h2 className="tracking-widest text-red-300">
            FALHA CRÍTICA
        </h2>

        <p className="text-sm leading-relaxed">
            A transação foi interrompida por interferência anômala.
        </p>

        <ul className="list-disc space-y-2 pl-5 text-sm">
            <li>Resíduo amaldiçoado detectado</li>
            <li>Vínculo ritual instável</li>
            <li>Risco de contaminação extrapolado</li>
        </ul>

        <p className="text-xs uppercase tracking-widest text-red-500">
            Código do evento: MEMBRANA-Δ07
        </p>
        </div>
    )
}
