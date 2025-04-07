📃 Título do projeto: Sabor & Arte

🖥️ Trabalho do Primeiro Bimestre para a matéria de Programação Front-End, 2025.

💭 A ideia é um site de comidas de um restaurante/lanchonete com o nome de Sabor & Arte, o site inclui produtos Salgados, Doces e opções Vegetarianas. 
Conta com um formulário para que os clientes possam entrar em contato com a equipe. 
Conta com barra de pesquisa na index, para facilitar a navegação.
Imagens em uma pasta diferente para maior organização e clareza.

👥 Autores: Letícia Marques, Lilian Beatriz e Glaubert Gian. Do curso de Análise e Desenvolvimento de Sistemas - Turma A. 

👨🏻‍🏫 Professor: José Carlos Domingues Flores

🔧 Instalação
Para visualização do código, utilizar de preferência IDEs como: VS Code ou PHPStorm
No navegador: usar o código da página gerado pelo Git

🛠️ As ferramentas usadas para o desenvolvimento do site foram:

- PhpStorm: IDE
- VS Code: IDE
- Bootstrap: framework de código aberto e gratuito para criar sites
- Font Awesome: para obtenção de ícones no site
- Freepik: site para obtenção de imagens e design em maior qualidade
- HTML, CSS, JavaScript: para construção geral do site

❔ O que tem em cada página?

INDEX:
🔗  Cabeçalho (head):
    - Define o título da página como Sabor & Arte.
    - Importa o CSS (styles.css)
    - Utiliza o tema United do Bootswatch para Bootstrap 5.3
    - Inclui a biblioteca de ícones Font Awesome 6.4.2 e Bootstrap Icons
    - Define um ícone (favicon) para a aba do navegador
    - Aplica estilos personalizados para botões e acessibilidade

🎠 Carrossel de Imagens:
    - Apresenta uma galeria de imagens da img/foto1.jpg a img/foto8.jpg
    - Possui botões de navegação para alterar entre as imagens

🌗 Controle de Tema (Light, Dark e Auto):
    - Um botão de alternância de tema permite escolher entre claro, escuro ou automático
    - Implementado como um menu suspenso (dropdown) do Bootstrap
    - Exibe um ícone correspondente ao tema selecionado
    - O botão utiliza ícones SVG (#circle-helf, #sun-fill, #moon-stars-fill) para representar os modos do tema
    - Quando o usuário escolhe um tema, um atributo data-bs-theme-value é alterado
    - O tema ativo recebe de configuração (#check2)
    - Se o usuário não escolher um tema, a página segue a configuração padrão do sistema operacional
    - O botão usa aria-label="Toggle theme (auto)" para ajudar usuários de leitores de tela

📃  Scripts Utilizados:
    - showDivs() e plusDivs(n): controlam a exibição das imagens no carrossel
    - Bootstrap JS (bootstrap.bundle.min.js): fornece funcionalidades do Bootstrap

📃 Páginas com os Produtos (salgados, doces, lanches, vegetarianos):
 Corpo da Página:
    - Body: 
     Lista de Produtos: Uma imagem(img), um título(h2), uma descrição(p), preço destacado(p class="price")

📬 Seção de Dúvidas
    - Define uma seção independente da página com ID contato e espaçamento vertivas (py-5)
    - Utiliza o layout do Bootstrap para responsividade e estilo
    - Formulário - nome: obrigatório com no mínimo 3 caracteres
    - Número para contato e WhatsApp: com máscara automática no formato (XX) XXXXX-XXXX
    - E-mail: validação básica de formato
    - Motivo do Contato: menu suspenso com opções como informações, sugestões e outros
    - Mensagem: no minimo 10 caracteres

📱 Máscara de Input para WhatsApp:
    - Um script aplica dinamicamente a formatação correta ao número de telefone conforme o usuário digita, aceitando apenas números e formatando automaticamente

🎉 Feedback de Sucesso:
    - Se todos os campos forem válidos, uma janela modal da biblioteca SweetAlert2 é exibida com a mensagem "Contato enviado com Sucesso!"

📩 Informações de Contato:

  📬 Se quiser conversar sobre o projeto ou tirar dúvidas, você pode nos encontrar em:

- E-mail: leticia-soares26@hotmail.com
- LinkedIn:[Letícia Marques] (https://linkedin.com/in/leticia-soares-298511177/)

- E-mail: lyllyan60@gmail.com

- E-mail: gianglauberth@gmail.com

---
Feito com 💜 e café!  
