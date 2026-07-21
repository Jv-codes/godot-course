// =============================
// PEGAR AULA PELA URL
// =============================

const url = new URLSearchParams(window.location.search);

const aulaId = url.get("aula");


// =============================
// ENCONTRAR A AULA
// =============================

const aulaAtual = aulas.find(aula => aula.id === aulaId);


// =============================
// CASO NÃO ENCONTRE A AULA
// =============================

if (!aulaAtual) {

    document.querySelector(".lesson").innerHTML = `

        <h1>Aula não encontrada</h1>

        <a href="../index.html">
            Voltar para o início
        </a>

    `;

    throw new Error("Aula inexistente");

}


// =============================
// CASO A AULA NÃO TENHA PASSOS
// =============================

if (!aulaAtual.passos || aulaAtual.passos.length === 0) {

    document.querySelector(".lesson").innerHTML = `

        <h1>${aulaAtual.titulo}</h1>

        <p>
            Esta aula ainda não possui conteúdo.
        </p>

        <a href="../index.html">
            Voltar
        </a>

    `;

    throw new Error("Aula sem passos");

}


// =============================
// ELEMENTOS DA PÁGINA
// =============================

const tituloAula =
    document.getElementById("lessonTitle");

const descricaoAula =
    document.getElementById("lessonDescription");

const numeroAula =
    document.getElementById("lessonNumber");

const numeroPasso =
    document.getElementById("stepNumber");

const tituloPasso =
    document.getElementById("stepTitle");

const conteudoPasso =
    document.getElementById("stepContent");

const barraProgresso =
    document.getElementById("progressBar");

const botaoAnterior =
    document.getElementById("previousButton");

const botaoProximo =
    document.getElementById("nextButton");


// =============================
// CONTROLE DOS PASSOS
// =============================

let passoAtual = 0;


// =============================
// MOSTRAR PASSO
// =============================

function mostrarPasso() {


    const passo =
        aulaAtual.passos[passoAtual];


    // Informações da aula

    tituloAula.textContent =
        aulaAtual.titulo;


    descricaoAula.textContent =
        aulaAtual.descricao;


    // Número da aula

    const indiceAula =
        aulas.findIndex(
            aula => aula.id === aulaAtual.id
        ) + 1;


    numeroAula.textContent =
        `Aula ${indiceAula} de ${aulas.length}`;


    // Informações do passo

    numeroPasso.textContent =
        `Passo ${passoAtual + 1} de ${aulaAtual.passos.length}`;


    tituloPasso.textContent =
        passo.titulo;


    // Conteúdo

    renderizarConteudo(passo);


    // Progresso

    atualizarProgresso();


    // Botões

    atualizarBotoes();

}


// =============================
// RENDERIZAR CONTEÚDO
// =============================

function renderizarConteudo(passo) {


    let html = "";


    // Texto

    if (passo.conteudo) {

        html += passo.conteudo;

    }


    // Imagem

    if (passo.imagem) {

        html += `

            <img

                src="../${passo.imagem}"

                class="content-image"

                alt="${passo.titulo}">

        `;

    }


    // Vídeo

    if (passo.video) {

        html += `

            <div class="video-container">

                <iframe

                    src="${passo.video}"

                    frameborder="0"

                    allowfullscreen>

                </iframe>

            </div>

        `;

    }


    // Link

    if (passo.link) {

        html += `

            <a

                href="${passo.link}"

                target="_blank"

                class="content-link">

                🔗 Acessar conteúdo

            </a>

        `;

    }


    conteudoPasso.innerHTML =
        html;

}


// =============================
// BARRA DE PROGRESSO
// =============================

function atualizarProgresso() {


    const progresso =

        ((passoAtual + 1) /
            aulaAtual.passos.length) * 100;


    barraProgresso.style.width =
        `${progresso}%`;

}


// =============================
// ATUALIZAR BOTÕES
// =============================

function atualizarBotoes() {


    botaoAnterior.disabled =
        passoAtual === 0;


    if (
        passoAtual ===
        aulaAtual.passos.length - 1
    ) {

        botaoProximo.textContent =
            "Finalizar Aula ✓";


    } else {

        botaoProximo.textContent =
            "Próximo Passo →";

    }

}


// =============================
// PRÓXIMO PASSO
// =============================

botaoProximo.addEventListener(
    "click",
    () => {


        if (
            passoAtual <
            aulaAtual.passos.length - 1
        ) {


            passoAtual++;


            mostrarPasso();


        } else {


            finalizarAula();

        }

    }
);


// =============================
// PASSO ANTERIOR
// =============================

botaoAnterior.addEventListener(
    "click",
    () => {


        if (passoAtual > 0) {


            passoAtual--;


            mostrarPasso();

        }

    }
);


// =============================
// FINALIZAR AULA
// =============================

function finalizarAula() {


    const indiceAtual =
        aulas.findIndex(
            aula => aula.id === aulaAtual.id
        );


    const proximaAula =
        aulas[indiceAtual + 1];


    tituloPasso.textContent =
        "Aula concluída! 🎉";


    numeroPasso.textContent =
        "";


    conteudoPasso.innerHTML = `

        <h3>Parabéns!</h3>

        <p>
            Você concluiu todos os passos desta aula.
        </p>

        <p>
            Continue avançando no desenvolvimento
            de jogos com Godot.
        </p>

    `;


    barraProgresso.style.width =
        "100%";


    botaoAnterior.style.display =
        "none";


    if (proximaAula) {


        botaoProximo.textContent =
            `Próxima Aula: ${proximaAula.titulo} →`;


        botaoProximo.onclick =
            () => {


                window.location.href =
                    `aula.html?aula=${proximaAula.id}`;

            };


    } else {


        botaoProximo.textContent =
            "Voltar ao início";


        botaoProximo.onclick =
            () => {


                window.location.href =
                    "../index.html";

            };

    }

}


// =============================
// INICIAR SISTEMA
// =============================

mostrarPasso();