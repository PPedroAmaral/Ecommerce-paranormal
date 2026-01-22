"use client"

import { useState } from "react"
import { useCart } from "@/context/CartContext"
import { isAltoRisco, temRiscoExtremo } from "@/lib/risco"
import { FalhaCritica } from "@/components/FalhaCritica"
import { Processando } from "@/components/Processando"

export default function CheckoutPage() {
    const {itens, limpar} = useCart()

    const temAltoRisco = itens.some(item => isAltoRisco(item.produto))

    const [status, setStatus] = useState< "idle" | "processando" | "falha" | "sucesso" > ("idle")

    function finalizarCompra () {
        setStatus("processando")

        setTimeout(() => {
            if (temAltoRisco) {
                setStatus("falha")
            } else {
                setStatus("sucesso") 
                limpar()
                
            }
        }, 3000)
    }

    return (
        <main className="mx-auto max-w-xl space-y-6 p-6">
            <h1 className="text-xl tracking-widest">FINALIZAÇÃO</h1>

            {temRiscoExtremo(itens) && (
                <p className="text-xs uppercase tracking-widest text-red-500">
                    ALERTA: RISCO CRÍTICO DETECTADO
                </p>
    )}

            {status === "idle" && (
            <button
            onClick={finalizarCompra}
            className="w-full rounded bg-neutral-800 py-3 hover:bg-neutral-700"
            >
                CONFIRMAR COMPRA
            </button>
            )}

            {status === "processando" && <Processando />}

            {status === "falha" && <FalhaCritica />}

            {status === "sucesso" && (
            <div className="rounded bg-emerald-900/20 p-4 text-emerald-400">
                Transação concluída com sucesso.
            </div>
            )}
    </main>
    )
}