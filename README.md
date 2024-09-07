# Projeto de Busca de Jogos

Este projeto é uma página web simples que permite pesquisar e exibir jogos com base no título ou descrição. O sistema é alimentado por uma base de dados de jogos e permite filtrar os resultados de acordo com o termo de busca inserido pelo usuário.

## Funcionalidades

- **Pesquisa de Jogos**: Os usuários podem pesquisar por jogos digitando o título ou parte da descrição. Ao pressionar "Enter" ou clicar no botão "Pesquisar", os resultados são exibidos com a imagem do jogo, título, descrição, plataformas e ano de lançamento.
- **Exibição dos Resultados**: Cada resultado inclui:
  - Imagem do jogo (capa).
  - Título do jogo com um link para a página do jogo na Wikipédia.
  - Descrição do jogo.
  - Plataformas disponíveis.
  - Ano de lançamento.
- **Responsividade**: A página é responsiva e adapta-se a diferentes tamanhos de tela.

## Estrutura do Projeto

- **index.html**: Contém a estrutura da página web, incluindo o campo de pesquisa, botão de busca e a área onde os resultados são exibidos.
- **style.css**: Define o estilo da página, o layout das divs, imagens e texto.
- **app.js**: Lida com a lógica de busca. Ao pesquisar por um jogo, o script filtra os resultados e atualiza a interface dinamicamente.
- **dados.js**: Base de dados contendo informações sobre os jogos, como título, imagem, descrição, plataformas e ano de lançamento.

## Como Funciona

1. **Pesquisa**: O usuário digita um termo no campo de busca e pode pressionar "Enter" ou clicar no botão "Pesquisar".
2. **Filtragem**: O JavaScript compara o termo de pesquisa com os títulos e descrições dos jogos na base de dados.
3. **Exibição**: Se o termo de busca for encontrado, os resultados são exibidos na tela. Caso contrário, uma mensagem de "Nenhum resultado encontrado" é mostrada.

## Como Usar

1. Faça o download dos arquivos ou clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```
2. Abra o arquivo `index.html` em um navegador da web.
3. Utilize o campo de pesquisa para encontrar jogos com base em título ou descrição.

## Melhorias Futuras

- Adicionar mais jogos à base de dados.
- Melhorar o estilo e design da interface.
- Implementar paginação ou rolagem infinita nos resultados da pesquisa.
- Integração com APIs externas para expandir o conteúdo automaticamente.

---
