function calcularGramas (gramas) {
    try{
    let total = 0;
    let msg = '';


    if(gramas >= 1000) {
        total = (gramas / 100) * 3 
        msg = 'O total a pagar é R$' + total ;
    }
    else if(gramas <= 0 ) {
        msg = 'Peso inválido'
    }
    else{
        total = (gramas / 100 ) * 3.50
        msg='O total a pagar é R$' + total;
    }
    return msg;
    }
    catch(err) {
        return (err.message)
    }
}

 function seuSigno (dia, mes) {
        
    try {
    if(mes == 'Setembro' && dia >=23 || mes == 'Outubro' && dia <=22) {
        return('Sim :)')
    }
    else if (mes == 'setembro' && dia >=23 || mes == 'outubro' && dia <=22) {
        return('Sim :)')
    }
    else if (mes == 'SETEMBRO' && dia >=23 || mes == 'OUTUBRO' && dia <=22) {
        return('Sim :)')
    }
    else {
        return('Não :(')
    }
    }
    catch(err){
        return(err.message)
    }
}

function calcularAcai(qtdP, qtdM, qtdG, desc) {
    try {

        let total = qtdP * 13.50 + qtdM * 15 + qtdG * 17.50;
        let desconto = total * desc / 100;
        let final = total - desconto;

        let msg = 'O valor total é ' + final;

        if (qtdP < 0 || qtdM < 0 || qtdG < 0 || desc < 0) {
            msg = 'Valor inválido'
        }
        
        return(msg)
    }
    catch (err) {
        return(err.message)
    }
}


export { calcularGramas, seuSigno, calcularAcai }