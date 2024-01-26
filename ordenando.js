let valor = document.getElementById("valor");
let listaValores = document.getElementById("valores");
let valores = [];

swap = (vetor, pos1, pos2) => {
    [vetor[pos1], vetor[pos2]] = [vetor[pos2], vetor[pos1]]
}

shuffle = (vetor, trocas) => {
    vetor = vetor.reduce((arr, _) => {
        for (let i = 0; i < trocas; i++) {
            const pos1 = Math.floor(Math.random() * vetor.length);
            const pos2 = Math.floor(Math.random() * vetor.length);
            swap(vetor, pos1, pos2);
        }
        return arr;
    }, vetor);

    atualizaLista(vetor)
}

bubble_sort = (vetor) => {
    vetor = vetor.reduce((arr, _, index) => {
        for (let j = 0; j < arr.length - index - 1; j++) {
            if (Number(arr[j]) > Number(arr[j + 1])) {
                swap(arr, j, j + 1);
            }
        }
        return arr;
    }, vetor);

    atualizaLista(vetor)
}

selection_sort = (vetor) => {
    vetor = vetor.reduce((arr, _) => {
        for (let i = 0; i < vetor.length - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < vetor.length; j++) {
                if (vetor[j] < vetor[minIndex]) {
                    minIndex = j;
                }
            }
            swap(vetor, i, minIndex);
        }
        return arr;
    }, vetor);

    atualizaLista(vetor)
}

quick_sort = (vetor, esq, dir) => {
    if (esq < dir) {
        const pivotIndex = particionamento(vetor, esq, dir);
        quick_sort(vetor, esq, pivotIndex - 1);
        quick_sort(vetor, pivotIndex + 1, dir);
    }

    atualizaLista(vetor);
}

particionamento = (vetor, esq, dir) => {
    const pivot = vetor[dir];
    let i = esq - 1;

    for (let j = esq; j < dir; j++) {
        if (Number(vetor[j]) <= Number(pivot)) {
            i++;
            swap(vetor, i, j);
        }
    }

    swap(vetor, i + 1, dir);

    return i + 1;
};

function atualizaLista(lista) {
    let valoresMapeados = lista.map((i) => `<li>${i}</li>`);
    listaValores.innerHTML = valoresMapeados.join('')
}