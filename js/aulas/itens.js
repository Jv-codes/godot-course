const itens = {

    id:"itens",

    titulo:"Criando Itens",

    descricao:
    "Desenvolva itens colecionáveis.",

    icone: "🪙",

    imagem:
    "assets/images/cards/itens.jpg",


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

            link: "https://canva.link/4h2naj5owvyn0lz"
        },


        {
            titulo: "🪙 Crie a cena da moeda",

            conteudo: `
                <p>
                    Crie uma nova cena para representar o item coletável.
                    Utilize um nó <strong>Area2D</strong> como raiz e renomeie-o
                    para <strong>Coin</strong>.
                </p>

                <p>
                    A <strong>Area2D</strong> permitirá detectar quando o Player
                    entrar na área da moeda.
                </p>
            `,

            imagem: "",

            video: "",

            link: ""
        },


        {
            titulo: "🎞️ Crie a animação da moeda",

            conteudo: `
                <p>
                    Adicione um <strong>AnimatedSprite2D</strong> como filho da
                    moeda e crie uma animação chamada <strong>idle</strong>.
                </p>

                <p>
                    Adicione os frames da moeda e configure a animação para
                    representar o movimento de giro.
                </p>

                <p>
                    Ative as opções <strong>Loop</strong> e <strong>Autostart</strong>
                    para que a animação seja executada continuamente.
                </p>
            `,

            imagem: "",

            video: "",

            link: ""
        },


        {
            titulo: "⭕ Configure a colisão",

            conteudo: `
                <p>
                    Adicione um <strong>CollisionShape2D</strong> à moeda e
                    utilize uma forma circular.
                </p>

                <p>
                    Ajuste o tamanho da área de colisão para que ela fique
                    um pouco maior que o sprite da moeda.
                </p>
            `,

            imagem: "",

            video: "",

            link: ""
        },


        {
            titulo: "⚙️ Configure as camadas de colisão",

            conteudo: `
                <p>
                    Configure a <strong>Collision Layer</strong> e a
                    <strong>Collision Mask</strong> da moeda.
                </p>

                <p>
                    A moeda deve ser configurada para detectar apenas o
                    <strong>Player</strong>, evitando interações desnecessárias
                    com outros elementos do jogo.
                </p>
            `,

            imagem: "",

            video: "",

            link: ""
        },


        {
            titulo: "🗂️ Organize as moedas",

            conteudo: `
                <p>
                    Na cena principal, crie um nó <strong>Node2D</strong>
                    para organizar as moedas do cenário.
                </p>

                <p>
                    Renomeie esse nó para <strong>Coins</strong> e coloque
                    as instâncias da moeda dentro dele.
                </p>
            `,

            imagem: "",

            video: "",

            link: ""
        },


        {
            titulo: "🔗 Detecte a coleta da moeda",

            conteudo: `
                <p>
                    Conecte o sinal <strong>body_entered</strong> da
                    <strong>Area2D</strong> ao script da moeda.
                </p>

                <p>
                    Esse sinal será utilizado para detectar quando o
                    <strong>Player</strong> entrar na área de colisão da moeda.
                </p>
            `,

            imagem: "",

            video: "",

            link: ""
        },


        {
            titulo: "✨ Crie a animação de coleta",

            conteudo: `
                <p>
                    No <strong>AnimatedSprite2D</strong>, crie uma nova
                    animação chamada <strong>collect</strong>.
                </p>

                <p>
                    Adicione os frames correspondentes ao efeito de coleta
                    e desative o <strong>Loop</strong>, pois essa animação
                    deve ser executada apenas uma vez.
                </p>
            `,

            imagem: "",

            video: "",

            link: ""
        },


        {
            titulo: "💻 Execute a animação de coleta",

            conteudo: `
                <p>
                    No callback do sinal <strong>body_entered</strong>,
                    execute a animação de coleta utilizando:
                </p>

                <pre><code>$AnimatedSprite2D.play("collect")</code></pre>

                <p>
                    Dessa forma, quando o Player entrar na área da moeda,
                    o efeito de coleta será iniciado.
                </p>
            `,

            imagem: "",

            video: "",

            link: ""
        },


        {
            titulo: "🗑️ Remova a moeda após a coleta",

            conteudo: `
                <p>
                    Conecte o sinal <strong>animation_finished</strong> do
                    <strong>AnimatedSprite2D</strong> ao mesmo script.
                </p>

                <p>
                    No callback desse sinal, utilize
                    <strong>queue_free()</strong> para remover a moeda
                    depois que a animação de coleta terminar.
                </p>

                <pre><code>queue_free()</code></pre>
            `,

            imagem: "",

            video: "",

            link: ""
        },


        {
            titulo: "🧪 Teste a coleta",

            conteudo: `
                <p>
                    Execute o jogo e verifique se as moedas aparecem
                    corretamente no cenário.
                </p>

                <p>
                    Movimente o Player até uma moeda e confirme se a animação
                    de coleta é executada e se o item desaparece após o término
                    da animação.
                </p>

                <p>
                    Caso algo não funcione corretamente, revise as configurações
                    de colisão, os sinais e as animações realizadas nas etapas
                    anteriores.
                </p>
            `,

            imagem: "",

            video: "",

            link: ""
        }


    ]

};