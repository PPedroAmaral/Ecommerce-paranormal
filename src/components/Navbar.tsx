"use client"

import Link from "next/link"
import { useCart } from "@/context/CartContext"

export function Navbar() {
    const {itens} = useCart()

    const quantidadeTotal = itens.reduce(
        (acc, item) => acc + item.quantidade,
        0
    )

    return(
        <header className="mb-10 border-b border-neutral-800 bg-neutral-950">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
            href="/"
            className="text-lg font-bold tracking-widest text-neutral-100"
        >
            MEMBRANA<span className="text-red-600">.null</span>
        </Link>

        <Link
            href="/carrinho"
            className="relative text-sm tracking-widest text-neutral-300 hover:text-neutral-100"
        >
            CARRINHO

            {quantidadeTotal > 0 && (
            <span className="absolute -right-3 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-700 text-xs text-white">
                {quantidadeTotal}
            </span>
            )}
        </Link>
        </nav>
    </header>

    )
}