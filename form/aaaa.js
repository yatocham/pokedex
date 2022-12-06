//  Utilizando 1 matriz e 1 vetor, faça uma função principal que declara a matriz e o vetor, e que chame as 
// seguintes funções para (crie estas funções também):
// 1) cadastrar no vetor 4 nomes de estádios de futebol, e para cada estádio, informar em uma matriz a nota do 
// estádio para cada uma dos 5 especialistas que avaliam estádios de futebol.
// 2) calcular e mostrar a média de notas de cada estádio, informando o nome do estádio
// 3) calcular e mostrar o nome do estádio com maior nota em cada avaliação
// 4) calcular e mostrar qual especialista deu a maior média de notas 
function principal() {
    let opcao;
    let estadios = [];
    let notas = [];
    do {
        opcao = Number(prompt(`Escolha\n 1. Cadastrar 1 Album\n 2. Cadastrar 1 Figurinha\n `));
        switch (opcao) {
            case 1: cadastra(estadios, notas)
                console.log(notas)
                break;
            case 2: calculaMedia(notas)
                break;
            case 3: maiorNotaAvaliacao(notas, estadios)
                break;
            default:
                console.log('uai');
                break;
        }
    } while (opcao != 6);
}

function cadastra(estadios, notas) {
    for (let i = 0; i < 4; i++) {
        let name = prompt(`Digite o nome do estádio: `);
        estadios.push(name);
    }

    estadios.forEach((estadio, index) => {
        let notasEstadio = []
        for (let j = 0; j < 5; j++) {
            notasEstadio.push(Number(prompt(`Digite a nota do ${index + 1}º estádio`)))
        }

        notas.push(notasEstadio)
    });

}

// 2) calcular e mostrar a média de notas de cada estádio, informando o nome do estádio
function calculaMedia(notas) {
    let medias = [];
    notas.forEach(notasEstadio => {

        let maiorNota = Math.max(...notasEstadio);

        console.log(notasEstadio);

        console.log("maior nota  " + maiorNota);

        let total = notasEstadio.reduce(
            (accumulator, currentValue) => accumulator + currentValue);
        let media = total / 5;
        console.log("a media" + media);
        medias.push(media);
    });
    return medias;
}

// let notas = [[6, 4, 3, 2, 1]];

// 3) calcular e mostrar o nome do estádio com maior nota em cada avaliação
function calculaMedia(notas) {
    let medias = [];
    notas.forEach(notasEstadio => {

        let maiorNota = Math.max(...notasEstadio);

        console.log(notasEstadio);

        console.log("maior nota  " + maiorNota);
        alert("maior nota  " + maiorNota);

        let total = notasEstadio.reduce(
            (accumulator, currentValue) => accumulator + currentValue);
        let media = total / 5;
        console.log("a media" + media);
        alert("a media" + media);
        medias.push(media);
    });
    return medias;
}

principal();

