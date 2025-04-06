    function atualizarRanking() {
      const tbody = document.getElementById("ranking-body");
      const rows = Array.from(tbody.querySelectorAll("tr"));

      const dados = rows.map(row => {
        const nome = row.children[1].textContent;
        const pontos = parseInt(row.children[2].textContent);
        return { nome, pontos };
      });

      dados.sort((a, b) => b.pontos - a.pontos);

      tbody.innerHTML = "";

      dados.forEach((aluno, index) => {
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
          <td>${medalha ? `<span class="medal">${medalha}</span>` : ""}${aluno.nome}</td>
          <td>${aluno.pontos}</td>
        `;
        tbody.appendChild(tr);
      });
    }

    window.onload = atualizarRanking;
