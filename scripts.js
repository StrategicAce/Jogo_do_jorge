function exibir_pista_1(){
    let botao2 = document.getElementById('botao2').style.display = 'block';
    let pista1 = document.getElementById('pista1').style.display = 'block';
}

function exibir_pista_2(){
    let botao3 = document.getElementById('botao3').style.display = 'block';
    let pista2 = document.getElementById('pista2').style.display = 'block';
}

function exibir_pista_3(){
    let pista3 = document.getElementById('pista3').style.display = 'block';
    let enviar = document.getElementById('enviar').style.display = 'block';
}

function enviar_resposta(){
    let palpite = document.getElementById('palpite');
    let resposta = document.getElementById('resposta');
    let matue = document.getElementById('matue');

    if(palpite.value == 'matue'){
        resposta.style.display = 'block';
        matue.src = "https://i.ytimg.com/vi/CMFYQDHLEXs/hq2.jpg?sqp=-oaymwEoCOADEOgC8quKqQMcGADwAQH4Ad4DgALgA4oCDAgAEAEYZSBXKEUwDw==&rs=AOn4CLChDhPZNdXXG8UAUEWALa2VI0Dzpw";
        matue.style.display = 'block';
    }
    else{
        alert('Voce errou, tente denovo');
    }
}

