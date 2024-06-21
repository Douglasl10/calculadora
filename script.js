const calcular = document.getElementById('calcular');

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = +document.getElementById('altura').value;
    const peso = +document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !=='' && altura !== '' && peso !==''){
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificado = '';

        if(valorIMC < 18.5){
            classificado = 'abaixo do peso'
        }else if(valorIMC < 25){
            classificado = 'com peso ideal. Parabens!!!';
        }else if(valorIMC < 30){
            classificado = 'Pouco acima do peso';
        }else if(valorIMC < 35){
            classificado = 'com obesidade grau I.';
        }else if(valorIMC < 40){
            classificado = 'com obesidade grau II.';
        }else{
            classificado = 'com obesidade grau III. ALERTA!!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificado}`;

    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }
}

calcular.addEventListener('click', imc);