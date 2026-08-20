const animacoes = {

    id: "animacoes",

    titulo: "Animações",

    descricao:
        "Crie animações utilizando AnimatedSprite2D e controle seus estados pelo script.",

    icone: "🎬",

    imagem:
        "assets/images/cards/animacoes.jpg",

    passos: [

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

            link: "https://canva.link/4r670a2symz3v7w"
        },


        {
            titulo: "🎬 Configure o AnimationPlayer",

            conteudo: `
                <p>
                    Adicione um nó <strong>AnimationPlayer</strong> dentro do Player
                    e renomeie-o para <strong>Animator</strong>.
                </p>

                <p>
                    Mantenha o <strong>AnimatedSprite2D</strong> fora do Animator,
                    como um nó irmão.
                </p>
            `,

            imagem: "",

            video: "",

            link: ""
        },


        {
            titulo: "🏃 Crie a animação de corrida",

            conteudo: `
                <p>
                    No <strong>AnimatedSprite2D</strong>, crie uma nova animação
                    chamada <strong>run</strong>.
                </p>

                <p>
                    Adicione os frames da corrida utilizando o Sprite Sheet e
                    ajuste o FPS até que o movimento fique natural.
                </p>
            `,

            imagem: "",

            video: "",

            link: ""
        },


        {
            titulo: "🦘 Crie a animação de pulo",

            conteudo: `
                <p>
                    Crie uma nova animação chamada <strong>jump</strong>.
                </p>

                <p>
                    Adicione os frames correspondentes ao pulo e ajuste a
                    velocidade da animação.
                </p>
            `,

            imagem: "",

            video: "",

            link: ""
        },


        {
            titulo: "💻 Conecte as animações ao script",

            conteudo: `
                <p>
                    No script do Player, crie uma referência para o
                    <strong>AnimatedSprite2D</strong>.
                </p>

                <p>
                    Utilize <strong>animation.play()</strong> para executar
                    as animações de acordo com o estado do personagem.
                </p>
            `,

            imagem: "",

            video: "",

            link: ""
        },


        {
            titulo: "↔️ Faça o personagem mudar de direção",

            conteudo: `
                <p>
                    Utilize a direção do movimento para alterar o
                    <strong>scale.x</strong> do personagem.
                </p>

                <p>
                    Dessa forma, o personagem será invertido automaticamente
                    ao andar para a esquerda ou para a direita.
                </p>
            `,

            imagem: "",

            video: "",

            link: ""
        },


        {
            titulo: "🦘 Controle a animação do pulo",

            conteudo: `
                <p>
                    Crie uma variável <strong>is_jumping</strong> para identificar
                    quando o personagem está pulando.
                </p>

                <p>
                    Quando o pulo começar, altere seu valor para verdadeiro e
                    execute a animação <strong>jump</strong>.
                </p>

                <p>
                    Quando o personagem voltar ao chão, altere o valor novamente
                    para falso.
                </p>
            `,

            imagem: "",

            video: "",

            link: ""
        },


        {
            titulo: "🧪 Teste as animações",

            conteudo: `
                <p>
                    Execute o jogo e verifique se o personagem alterna
                    corretamente entre as animações.
                </p>

                <p>
                    Teste os movimentos para a esquerda e para a direita,
                    o estado parado e o pulo.
                </p>

                <p>
                    Caso alguma animação não seja executada corretamente,
                    consulte novamente o material de apoio e revise os passos.
                </p>
            `,

            imagem: "",

            video: "",

            link: ""
        }

    ]

};