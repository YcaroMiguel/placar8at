// Lista de alunos com seus pontos iniciais
let alunos = [
    { nome: "Aimê Laís", pontos: 0 },
    { nome: "Alanna Gabrielly", pontos: 0 },
    { nome: "Alice Feitosa", pontos: 0 },
    { nome: "Ana Clara", pontos: 0 },
    { nome: "Ana Sophia", pontos: 0 },
    { nome: "André Lucas", pontos: 0 },
    { nome: "Ashira Giovanna", pontos: 0 },
    { nome: "Bruna Vitória", pontos: 0 },
    { nome: "Cesar Miguel", pontos: 0 },
    { nome: "Elias Maia", pontos: 0 },
    { nome: "Emanuelly Ester", pontos: 0 },
    { nome: "Felipe de Melo", pontos: 0 },
    { nome: "Gabriel Pinheiro", pontos: 0 },
    { nome: "Hiel Alves", pontos: 0 },
    { nome: "Isabelly Lins", pontos: 0 },
    { nome: "João Lucas", pontos: 0 },
    { nome: "Júlio Cezar", pontos: 0 },
    { nome: "Kaira Vitória", pontos: 0 },
    { nome: "Luiz Gabriel", pontos: 0 },
    { nome: "Lyvia Emanuelly", pontos: 0 },
    { nome: "Maria Alice", pontos: 0 },
    { nome: "Maria Eduarda", pontos: 0 },
    { nome: "Marya Luiza", pontos: 0 },
    { nome: "Matheus Vitor", pontos: 0 },
    { nome: "Pedro Henrique", pontos: 0 },
    { nome: "Rebecca Silva", pontos: 0 },
    { nome: "Samuel Asafe", pontos: 0 },
    { nome: "Sury de França", pontos: 0 },
    { nome: "Thais Lopez", pontos: 0 },
    { nome: "Ycaro Miguel", pontos: 0 }
];

// Atualiza a tabela no HTML
function atualizarTabela() {
    let tabela = document.getElementById("ranking");
    tabela.innerHTML = ""; // Limpa antes de recriar

    alunos.sort((a, b) => b.pontos - a.pontos); // Ordena por pontos

    alunos.forEach((aluno, index) => {
        let linha = document.createElement("tr");

        linha.innerHTML = `
            <td>${aluno.nome}</td>
            <td>${aluno.pontos}</td>
            <td>
                <button class="add" onclick="alterarPontos(${index}, 10)">+10</button>
                <button class="add" onclick="alterarPontos(${index}, 20)">+20</button>
                <button class="add" onclick="alterarPontos(${index}, 50)">+50</button>
                <button class="remove" onclick="alterarPontos(${index}, -10)">-10</button>
                <button class="remove" onclick="alterarPontos(${index}, -20)">-20</button>
                <button class="remove" onclick="alterarPontos(${index}, -50)">-50</button>
            </td>
        `;

        tabela.appendChild(linha);
    });
}

// Modifica os pontos do aluno
function alterarPontos(index, quantidade) {
    alunos[index].pontos += quantidade;
    atualizarTabela();
}

// Inicializa a tabela
atualizarTabela();
