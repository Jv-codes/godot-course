const parallax = {

    id:"parallax",

    titulo:"Parallax Layers",

    descricao:
    "Crie cenários com efeito de profundidade.",

    icone: "🏞️",

    imagem:
    "assets/images/cards/parallax.jpg",


    passos:[


        {
            titulo: "📚 Material de apoio",

            conteudo: `
                <p>
                    Acesse o material desta aula e mantenha-o disponível durante a
                    realização das etapas.
                </p>

                <p>
                    Utilize o material para acompanhar as explicações e consultar
                    os procedimentos necessários conforme avança no desenvolvimento
                    do projeto.
                </p>

                <p>
                    Sempre que uma etapa solicitar uma nova tarefa, consulte o material
                    correspondente e aplique o que foi apresentado no seu projeto.
                </p>
            `,

            imagem: "",

            video: "",

            link: "https://canva.link/lb849gnrohmihpf"
        },


        {
            titulo: "🌄 Criando o ParallaxBackground",

            conteudo: `
                <p>
                    Na cena principal do seu projeto, crie um nó
                    <strong>ParallaxBackground</strong> e renomeie-o para
                    <strong>BG</strong>.
                </p>

                <p>
                    Esse nó será responsável por organizar as diferentes camadas
                    que formarão o cenário com efeito de profundidade.
                </p>
            `,

            imagem: "",

            video: "",

            link: ""
        },


        {
            titulo: "🗂️ Criando as camadas",

            conteudo: `
                <p>
                    Dentro do nó <strong>BG</strong>, adicione um
                    <strong>ParallaxLayer</strong> para cada camada que fará parte
                    do cenário.
                </p>

                <p>
                    Organize as camadas começando pela mais distante até chegar
                    à camada que ficará mais próxima do jogador.
                </p>
            `,

            imagem: "",

            video: "",

            link: ""
        },


        {
            titulo: "🖼️ Adicionando as imagens",

            conteudo: `
                <p>
                    Dentro de cada <strong>ParallaxLayer</strong>, adicione um
                    <strong>Sprite2D</strong>.
                </p>

                <p>
                    Em seguida, atribua a imagem correspondente à propriedade
                    <strong>Texture</strong> de cada Sprite2D.
                </p>

                <p>
                    Renomeie as camadas para facilitar a organização do cenário.
                </p>
            `,

            imagem: "",

            video: "",

            link: ""
        },


        {
            titulo: "📐 Ajustando as imagens",

            conteudo: `
                <p>
                    Selecione cada <strong>Sprite2D</strong> e desmarque a opção
                    <strong>Centered</strong>.
                </p>

                <p>
                    Depois, ajuste o <strong>Scale</strong> da imagem até que ela
                    consiga preencher corretamente a área visual da câmera.
                </p>
            `,

            imagem: "",

            video: "",

            link: ""
        },


        {
            titulo: "🔄 Configurando o Mirroring",

            conteudo: `
                <p>
                    Agora configure o <strong>Mirroring</strong> de cada
                    ParallaxLayer.
                </p>

                <p>
                    Utilize como referência a largura da imagem multiplicada
                    pelo seu valor de <strong>Scale</strong>.
                </p>

                <p>
                    Essa configuração permite que a camada seja repetida
                    continuamente durante a movimentação do cenário.
                </p>
            `,

            imagem: "",

            video: "",

            link: ""
        },


        {
            titulo: "🌌 Ajustando a profundidade",

            conteudo: `
                <p>
                    No <strong>Motion Scale</strong> de cada ParallaxLayer,
                    ajuste o valor de acordo com a distância da camada.
                </p>

                <p>
                    Utilize valores menores para as camadas mais distantes
                    e valores maiores para as camadas mais próximas.
                </p>

                <p>
                    Dessa forma, cada camada se movimentará em uma velocidade
                    diferente, criando a sensação de profundidade.
                </p>
            `,

            imagem: "",

            video: "",

            link: ""
        },


        {
            titulo: "🎮 Testando o Parallax",

            conteudo: `
                <p>
                    Salve a cena e execute o jogo.
                </p>

                <p>
                    Movimente o personagem e observe as diferentes camadas
                    do cenário se deslocando em velocidades diferentes.
                </p>

                <p>
                    Verifique se o cenário está preenchendo corretamente a
                    câmera e se o efeito de profundidade está funcionando.
                </p>
            `,

            imagem: "",

            video: "",

            link: ""
        }

    ]

};