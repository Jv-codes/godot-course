const introducao = {

    id: "introducao",

    titulo: "Introdução ao Godot",

    descricao:
    "Conheça a Godot Engine, configure seu primeiro projeto e crie um personagem controlável.",

    icone: "🎮",

    passos: [

        {
            titulo: "📚 Material de apoio",
            
            conteudo: `
                <p>
                    Acesse o material disponibilizado para esta aula e utilize-o como
                    apoio durante a realização dos próximos passos.
                </p>

                <p>
                    Consulte o material sempre que necessário enquanto desenvolve
                    o seu projeto.
                </p>
            `,

            imagem: "",

            video: "",

            link: "LINK_DO_MATERIAL"
        },

        {
            titulo: "O que é a Godot Engine?",

            conteudo: `
                <p>
                    A Godot Engine é uma ferramenta gratuita e de código aberto
                    utilizada para o desenvolvimento de jogos 2D e 3D.
                </p>

                <p>
                    Neste curso, utilizaremos a Godot para criar um jogo de
                    plataforma 2D, aprendendo gradualmente os principais conceitos
                    necessários para construir um jogo completo.
                </p>

                <p>
                    Durante as aulas, aprenderemos sobre cenas, nós, personagens,
                    colisões, animações, plataformas, inimigos e muito mais.
                </p>
            `,

            imagem: "assets/Aulas/Introdução/Godot.png",

            video: "",

            link: ""
        },


        {
            titulo: "Baixando a Godot",

            conteudo: `
                <p>
                    Para começar, precisamos baixar a Godot Engine.
                </p>

                <p>
                    Acesse o site oficial e baixe a versão estável mais recente
                    disponível para o seu sistema operacional.
                </p>

                <p>
                    Para este curso, utilizaremos a versão padrão da Godot,
                    que já possui suporte ao GDScript e às principais ferramentas
                    necessárias para o desenvolvimento do jogo.
                </p>
            `,

            imagem: "assets/Aulas/Introdução/Site_Godot.png",

            video: "",

            link: "https://godotengine.org/download"
        },


        {
            titulo: "Conhecendo o Project Manager",

            conteudo: `
                <p>
                    Ao abrir a Godot, encontramos o Project Manager,
                    ou Gerenciador de Projetos.
                </p>

                <p>
                    É nessa tela que podemos criar, importar, executar e
                    organizar nossos projetos.
                </p>

                <p>
                    Para começar um novo jogo, utilizaremos a opção
                    <strong>New Project/Criar</strong>.
                </p>
            `,

            imagem: "assets/Aulas/Introdução/Project Manager.png",

            video: "",

            link: ""
        },


        {
            titulo: "Criando o primeiro projeto",

            conteudo: `
                <p>
                    Crie um novo projeto e escolha um nome para ele.
                </p>

                <p>
                    Em seguida, escolha uma pasta vazia para armazenar os arquivos
                    do projeto. Manter os arquivos organizados desde o início
                    facilita o desenvolvimento.
                </p>

                <p>
                    Para este projeto, utilizaremos o renderizador recomendado
                    pela Godot. Caso o computador tenha limitações gráficas,
                    também é possível utilizar uma opção de compatibilidade.
                </p>
            `,

            imagem: "",

            video: "",

            link: ""
        },


        {
            titulo: "Cenas e nós",

            conteudo: `
                <p>
                    Na Godot, os jogos são construídos utilizando cenas e nós.
                </p>

                <p>
                    Um nó representa um objeto ou componente do jogo.
                    Um personagem, uma câmera, uma área de colisão e até mesmo
                    um sistema de animação podem ser representados por nós.
                </p>

                <p>
                    As cenas são formadas pela organização desses nós em uma
                    estrutura hierárquica.
                </p>

                <p>
                    Para começar, crie uma cena 2D e renomeie o nó principal
                    para <strong>World</strong>.
                </p>
            `,

            imagem: "",

            video: "",

            link: ""
        },


        {
            titulo: "Criando o jogador",

            conteudo: `
                <p>
                    Agora vamos criar o personagem principal do jogo.
                </p>

                <p>
                    Para isso, adicionaremos um nó
                    <strong>CharacterBody2D</strong>.
                </p>

                <p>
                    Esse tipo de nó é utilizado para personagens controláveis,
                    permitindo trabalhar com movimentação e colisões.
                </p>

                <p>
                    Renomeie o nó para <strong>Player</strong>.
                </p>
            `,

            imagem: "",

            video: "",

            link: ""
        },


        {
            titulo: "Adicionando uma colisão",

            conteudo: `
                <p>
                    Para que o jogador possa interagir com o ambiente,
                    precisamos adicionar uma área de colisão.
                </p>

                <p>
                    Adicione um nó
                    <strong>CollisionShape2D</strong>
                    como filho do Player.
                </p>

                <p>
                    Em seguida, crie uma forma de colisão, como um retângulo,
                    ajustando-a ao tamanho do personagem.
                </p>

                <p>
                    A colisão será responsável por detectar o contato entre
                    o jogador e outros objetos do jogo.
                </p>
            `,

            imagem: "",

            video: "",

            link: ""
        },


        {
            titulo: "Adicionando os assets do jogo",

            conteudo: `
                <p>
                    Um jogo precisa de imagens, personagens, cenários e outros
                    elementos visuais. Esses arquivos são chamados de assets.
                </p>

                <p>
                    Para este projeto, utilizaremos sprites de pixel art do
                    <strong>GrafxKid</strong>, que disponibiliza diversos recursos
                    para projetos de jogos.
                </p>

                <p>
                    Acesse o material abaixo para encontrar os sprites que serão
                    utilizados durante o desenvolvimento do projeto.
                </p>
            `,

            imagem: "",

            video: "",

            link: "https://grafxkid.itch.io/"
        },


        {
            titulo: "Criando a animação do jogador",

            conteudo: `
                <p>
                    Para tornar o personagem mais interessante, podemos utilizar
                    diferentes imagens para criar uma animação.
                </p>

                <p>
                    Adicione um nó
                    <strong>AnimatedSprite2D</strong>
                    como filho do Player.
                </p>

                <p>
                    Em seguida, crie um recurso de
                    <strong>SpriteFrames</strong>
                    e adicione os frames da animação.
                </p>

                <p>
                    Começaremos criando uma animação de espera,
                    também conhecida como <strong>Idle</strong>.
                </p>
            `,

            imagem: "",

            video: "",

            link: ""
        },


        {
            titulo: "Configurando a janela do jogo",

            conteudo: `
                <p>
                    Antes de testar o jogo, podemos configurar o tamanho
                    da janela de visualização.
                </p>

                <p>
                    Para um jogo de plataforma 2D com estilo pixel art,
                    uma resolução menor pode ajudar a criar uma aparência
                    semelhante aos jogos clássicos.
                </p>

                <p>
                    A resolução utilizada pode variar de acordo com o projeto.
                    O importante é escolher uma configuração adequada ao estilo
                    do jogo.
                </p>
            `,

            imagem: "",

            video: "",

            link: ""
        },


        {
            titulo: "Criando o primeiro script",

            conteudo: `
                <p>
                    Para controlar o jogador, precisamos adicionar um script.
                </p>

                <p>
                    Na Godot, os scripts permitem programar o comportamento
                    dos objetos do jogo.
                </p>

                <p>
                    Neste projeto, utilizaremos o
                    <strong>GDScript</strong>, a linguagem de programação
                    própria da Godot.
                </p>

                <p>
                    O script será responsável por controlar a gravidade,
                    o movimento e o pulo do personagem.
                </p>
            `,

            imagem: "",

            video: "",

            link: ""
        },


        {
            titulo: "Criando o chão",

            conteudo: `
                <p>
                    Para testar o movimento do personagem, precisamos criar
                    uma superfície para ele pisar.
                </p>

                <p>
                    Adicione um nó
                    <strong>StaticBody2D</strong>
                    ao mundo.
                </p>

                <p>
                    Em seguida, adicione um
                    <strong>CollisionShape2D</strong>
                    e ajuste sua forma para representar o chão.
                </p>

                <p>
                    Agora, ao executar o projeto, o jogador poderá cair
                    e parar sobre essa superfície.
                </p>
            `,

            imagem: "",

            video: "",

            link: ""
        },


        {
            titulo: "Testando o jogador",

            conteudo: `
                <p>
                    Com o jogador, o script e o chão configurados,
                    já podemos testar o projeto.
                </p>

                <p>
                    O personagem deve sofrer a ação da gravidade, cair até
                    o chão e ser capaz de se movimentar e pular.
                </p>

                <p>
                    Este é o primeiro passo para a criação do nosso jogo
                    de plataforma. A partir daqui, adicionaremos novos elementos
                    e construiremos gradualmente o cenário e as mecânicas do jogo.
                </p>
            `,

            imagem: "",

            video: "",

            link: ""
        }

    ]

};