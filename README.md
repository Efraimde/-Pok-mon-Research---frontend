# Pokémon Research


## Descrição

O **Pokémon Research** é um projeto frontend que permite aos usuários pesquisar por Pokémon usando uma interface estilosa. O frontend faz uma requisição à API para buscar informações sobre o Pokémon solicitado e exibe os resultados, incluindo nome, imagem e tipo.

## Tecnologias

- **HTML5** e **CSS3** para a estrutura e o estilo da página.
- **Bootstrap 4** para a estilização e layout responsivo.
- **JavaScript** para interação e requisições à API.
- **PokeAPI** para obter dados dos Pokémon.

## Funcionalidades

- Interface amigável e estilosa com imagem de fundo.
- Campo de pesquisa onde o usuário pode digitar o nome do Pokémon.
- Exibição de detalhes do Pokémon, incluindo nome, imagem e tipo.
- Caso o Pokémon não seja encontrado, uma mensagem de erro será exibida.

## Endpoints da API

O frontend interage com a API do **PokeAPI** para obter as informações dos Pokémon. O endpoint utilizado é:

- **GET** `http://localhost:5001/pokemon/{name}`

  - **Parâmetros:**
    - `name` (string): Nome do Pokémon que você deseja pesquisar.

  - **Resposta:**
    ```json
    {
      "name": "bulbasaur",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "type": ["grass", "poison"]
    }
    ```

  - **Erro:**
    ```json
    {
      "error": "Pokémon não encontrado."
    }
    ```

## Como Rodar o Projeto

1. **Clonar o Repositório:**

   ```sh
   git clone https://github.com/efraimde/pokemon-research-frontend.git
