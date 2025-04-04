const alunos = [
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
    { nome: "Ycaro Miguel", pontos: 10 }
];

// Ordena por pontuação (do maior para o menor)
function atualizarRanking() {
    const tabela = document.querySelector("#ranking tbody");
    tabela.innerHTML = "";

    alunos.sort((a, b) => b.pontos - a.pontos);

    alunos.forEach((aluno, index) => {
        const tr = document.createElement("tr");

        // Adiciona classe especial para Top 3
        if (index === 0) tr.classList.add("top1");
        else if (index === 1) tr.classList.add("top2");
        else if (index === 2) tr.classList.add("top3");

        tr.innerHTML = `
            <td>${index + 1}º</td>
            <td>${aluno.nome}</td>
            <td>${aluno.pontos}</td>
        `;
        tabela.appendChild(tr);
    });
}

// Chama a função ao carregar a página
atualizarRanking();
