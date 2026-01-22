export const falhas = [
    "Interferência de entidade não catalogada",
    "Artefato recusou o vínculo",
    "Contrato de ligação inválido",
    "Instabilidade na membrana local",
    "Risco existencial acima do permitido"
]

export function falhaAleatoria() {
    return falhas[Math.floor(Math.random() * falhas.length)]
}
