const containerCards = document.querySelector("#cards");


function criarCard(aula) {

    const card = document.createElement("article");

    card.classList.add("card");


    card.innerHTML = `

        <div class="card-icon">

            ${aula.icone}

        </div>


        <div class="card-content">

            <h3>
                ${aula.titulo}
            </h3>


            <p>
                ${aula.descricao}
            </p>


            <button class="btn-card">

                Iniciar Aula

            </button>

        </div>

    `;


    const botao = card.querySelector(".btn-card");


    botao.addEventListener("click", () => {

        abrirAula(aula.id);

    });


    return card;

}


function renderizarCards() {

    containerCards.innerHTML = "";


    aulas.forEach(aula => {

        containerCards.appendChild(
            criarCard(aula)
        );

    });

}


function abrirAula(id) {

    window.location.href =
    `pages/aula.html?aula=${id}`;

}


renderizarCards();