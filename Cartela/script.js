function gerarCartela() {
    // Limpa a cartela existente
    document.getElementById("cartelasContainer").innerHTML = "";

    // Obtém o nome do usuário
    const nomeUsuario = document.getElementById("nome").value;

    // Cria um cabeçalho para exibir o nome do usuário
    const nomeHeader = document.createElement("h2");
    nomeHeader.textContent = nomeUsuario;
    document.getElementById("cartelasContainer").appendChild(nomeHeader);

    // Cria uma tabela para a cartela
    const cartelaTable = document.createElement("table");

    // Cria o cabeçalho da tabela (thead)
    const thead = document.createElement("thead");
    const bingoRow = document.createElement("tr");
    const letras = ["B", "I", "N", "G", "O"];
    letras.forEach(letra => {
        const th = document.createElement("th");
        th.textContent = letra;
        bingoRow.appendChild(th);
    });
    thead.appendChild(bingoRow);
    cartelaTable.appendChild(thead);

    const numeros = gerarNumeros();

    // Adiciona 5 linhas à cartela
    for (let j = 0; j < 5; j++) {
        const linha = document.createElement("tr");

        // Adiciona 5 números à linha
        for (let k = 0; k < 5; k++) {
            const celula = document.createElement("td");
            celula.textContent = numeros[j * 5 + k];
            celula.classList.add("numero");
            linha.appendChild(celula);
        }

        cartelaTable.appendChild(linha);
    }

    // Adiciona a cartela à div de cartelas
    document.getElementById("cartelasContainer").appendChild(cartelaTable);
}

function gerarNumeros() {
    const numeros = [];
    while (numeros.length < 25) {
        const numero = Math.floor(Math.random() * 75) + 1;
        if (!numeros.includes(numero)) {
            numeros.push(numero);
        }
    }
    return numeros;
}
