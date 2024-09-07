function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o campo de pesquisa de itens e transforma em letras minúsculas
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    campoPesquisa = campoPesquisa.toLowerCase();
  
    // Inicializa strings vazias para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let desc = "";

    // Checa se há algum caracter que não sejam espaços
    if (!campoPesquisa.trim()) {
      section.innerHTML = "<p>Por favor, insira algum caracter para realizar a busca.</p>";
      return;
    }
  
    // Itera sobre cada jogo no array de jogos
    for (let jogo of jogos) {

      // transforma o titulo e descrição em minusculos para fins de compatibilidade com o texto da pesquisa
      titulo = jogo.titulo.toLowerCase();
      desc = jogo.descricao.toLowerCase();

      // Checa se os elementos existem em algum jogo
      if (titulo.includes(campoPesquisa) || desc.includes(campoPesquisa)) {
        // Constrói o HTML para cada jogo, incluindo título, descrição, plataformas, ano de lançamento e link para a Wikipédia
        resultados += `
        <div class="item-resultado">
          <div class="div-img">
            <img src="${jogo.imagem}" alt="Capa de ${jogo.titulo}" class="image">
          </div>
          <div class="div-txt">
            <h2>
              <a href="${jogo.linkWikipedia}" target="_blank">${jogo.titulo}</a>
            </h2>
            <p class="descricao-meta">${jogo.descricao}</p> <p class="descricao-meta">Plataformas: ${jogo.plataformas}</p>
            <p class="descricao-meta">Lançamento: ${jogo.anoLancamento}</p>
          </div>
        </div>`;
      }
    }

    if (!resultados) {
      resultados = "<p>Nenhum resultado encontrado</p>";
    }
  
    // Atribui a string com os resultados ao conteúdo da seção
    section.innerHTML = resultados;
  }