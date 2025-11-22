# 📚 Base de Conhecimento de Tecnologias

Uma interface de busca simples e elegante para consultar informações sobre diversas linguagens de programação, frameworks e ferramentas de desenvolvimento. O projeto carrega os dados de um arquivo JSON e os exibe dinamicamente, permitindo que o usuário filtre os resultados em tempo real.

## ✨ Funcionalidades

- **Busca Dinâmica**: Filtre os cards de tecnologia pelo nome ou descrição.
- **Renderização Dinâmica**: O conteúdo é carregado a partir de um arquivo `data.json` e renderizado na página com JavaScript puro.
- **Design Responsivo**: A interface se adapta a diferentes tamanhos de tela, de desktops a dispositivos móveis.
- **Links Externos**: Cada card contém um link "Saiba mais" para a documentação ou site oficial da tecnologia.

---

## 🚀 Como Executar o Projeto

Como este projeto utiliza a API `fetch` do JavaScript para carregar um arquivo local (`data.json`), ele precisa ser executado a partir de um servidor web local para evitar erros de CORS (Cross-Origin Resource Sharing) nos navegadores modernos.

Siga uma das opções abaixo:

### 1. Usando a extensão Live Server (Visual Studio Code)

1.  Instale a extensão Live Server no VS Code.
2.  Abra a pasta do projeto no VS Code.
3.  Clique com o botão direito no arquivo `index.html`.
4.  Selecione "Open with Live Server".

### 2. Usando Python

Se você tem Python instalado, pode iniciar um servidor simples.

1.  Abra o terminal na pasta raiz do projeto.
2.  Execute um dos seguintes comandos:

    ```bash
    # Para Python 3
    python -m http.server

    # Para Python 2
    python -m SimpleHTTPServer
    ```
3.  Abra seu navegador e acesse `http://localhost:8000`.

### 3. Usando Node.js (com `serve`)

1.  Instale o pacote `serve` globalmente via npm:
    ```bash
    npm install -g serve
    ```
2.  Navegue até a pasta do projeto no terminal.
3.  Execute o comando:
    ```bash
    serve
    ```
4.  Abra o endereço fornecido no terminal (geralmente `http://localhost:3000`).

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da página.
- **CSS3**: Estilização moderna com Variáveis CSS, Flexbox e Media Queries para responsividade.
- **JavaScript (ES6+)**: Manipulação do DOM, consumo de dados com `async/await` e a API `Fetch`, e implementação da lógica de busca.

## 📂 Estrutura do Projeto

```
base_conhecimento/
├── 📄 index.html      # Estrutura principal da página
├── 🎨 style.css       # Folha de estilos
├── 📜 script.js       # Lógica da aplicação (busca e renderização)
└── 🗃️ data.json       # Banco de dados com as informações das tecnologias
```
