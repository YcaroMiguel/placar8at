const alunos = [
  { nome: "Aimê Laís", pontos: 125 },
  { nome: "Alice Feitosa", pontos: 115 },
  { nome: "Allanna Gabrielly", pontos: 93 },
  { nome: "Ana Clara", pontos: 92 },
  { nome: "Ana Sophia", pontos: 161 },
  { nome: "André Lucas", pontos: 39 },
  { nome: "Ashira Giovanna", pontos: 70 },
  { nome: "Bruna Vitória", pontos: 113 },
  { nome: "Cesar Miguel", pontos: 107 },
  { nome: "Elias Maia", pontos: 170 },
  { nome: "Emanuelly", pontos: 103 },
  { nome: "Felipe de Melo", pontos: 110 },
  { nome: "Gabriel Pinheiro", pontos: 40 },
  { nome: "Gustavo Luiz", pontos: 145 },
  { nome: "Hiel Alves", pontos: 110 },
  { nome: "Isabelly Lins", pontos: 112 },
  { nome: "João Lucas", pontos: 150 },
  { nome: "Júlio Cezar", pontos: 145 },
  { nome: "Kaira Vitória (NP)", pontos: 105 },
  { nome: "Luiz Gabriel", pontos: -11 },
  { nome: "Lyvia Emanuelly", pontos: 74 },
  { nome: "Maria Alice", pontos: 96 },
  { nome: "Maria Eduarda", pontos: 20 },
  { nome: "Marya Luiza", pontos: 80 },
  { nome: "Matheus Vitor", pontos: -53 },
  { nome: "Pedro Henrique", pontos: 70 },
  { nome: "Rebecca", pontos: 145 },
  { nome: "Samuel", pontos: 78 },
  { nome: "Sury de França", pontos: 121 },
  { nome: "Thais Lopez", pontos: 172 },
  { nome: "Ycaro Miguel", pontos: 162 }
];

function atualizarRanking() {
  const tbody = document.getElementById("ranking-body");

  alunos.sort((a, b) => {
    if (b.pontos !== a.pontos) return b.pontos - a.pontos;
    return a.nome.localeCompare(b.nome);
  });

  tbody.innerHTML = "";

  alunos.forEach((aluno, index) => {
    const tr = document.createElement("tr");
    let rankClass = "";
    let medalha = "";

    if (index === 0) {
      rankClass = "rank-1";
      medalha = "🥇";
    } else if (index === 1) {
      rankClass = "rank-2";
      medalha = "🥈";
    } else if (index === 2) {
      rankClass = "rank-3";
      medalha = "🥉";
    }

    tr.className = rankClass;
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td><a href="historico.html?aluno=${encodeURIComponent(aluno.nome)}">${medalha ? `<span class="medal">${medalha}</span>` : ""}${aluno.nome}</a></td>
      <td>${aluno.pontos}</td>
    `;
    tbody.appendChild(tr);
  });
}

window.onload = atualizarRanking;
