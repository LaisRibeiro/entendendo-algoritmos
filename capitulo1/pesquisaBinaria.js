
/**
 * Pesquisa recursivamente o número da lista
 * @param {Array} lista Lista de dados array
 * @param {number} item Busca o item
 * @returns {(number|null)} Posição do array ou nulo caso não encontre
 */


function pesquisaBinario(lista, item) {
    let baixo = 0
    let alto = lista.length -1

    while (baixo <= alto) {
        const meio = Math.floor((baixo + alto) / 2)
        const chute = lista[meio]

        if (chute == item) {
            return console.log(meio);
        }
        if (chute > item) {
            alto = meio - 1;
        } else {
            baixo = meio + 1;
        }
    }

    return console.log(null)
}

minhaLista = [1, 3, 5, 7, 9]

pesquisaBinario(minhaLista, 3) // retorno 1
pesquisaBinario(minhaLista, -1) // retorno null