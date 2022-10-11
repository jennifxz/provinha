function calcularGramas(gramas) {
    try {
        let total = 0;
        let msg = '';


        if (gramas > 1000) {
            total = (gramas / 100) * 3
            msg = 'O total a pagar é R$' + total;
        }
        else if (gramas <= 0) {
            msg = 'Peso inválido'
        }
        else {
            total = (gramas / 100) * 3.50
            msg = 'O total a pagar é R$' + total;
        }
        return msg;
    }
    catch (err) {
        return (err.message)
    }
}

function seuSigno(dia, mes) {

    try {
        if (mes == 'Setembro' && dia >= 23 || mes == 'Outubro' && dia <= 22) {
            return ('Sim :)')
        }
        else if (mes == 'setembro' && dia >= 23 || mes == 'outubro' && dia <= 22) {
            return ('Sim :)')
        }
        else if (mes == 'SETEMBRO' && dia >= 23 || mes == 'OUTUBRO' && dia <= 22) {
            return ('Sim :)')
        }
        else {
            return ('Não :(')
        }
    }
    catch (err) {
        return (err.message)
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

        return (msg)
    }
    catch (err) {
        return (err.message)
    }
}

function SalarioLiq(salario, bonus, desc) {
    try {
        let sal = salario * bonus / 100;
        let total = salario + sal - desc;
        let msg = "seu salário liquído é de R$ " + total;

        if (salario < 0 || bonus < 0 || desc < 0) {
            msg = "Valor inválido"

        }
        return msg;

    }
    catch (err) {
        return (err.message)
    }
}

function Paradas(capac, consumo, dist) {
    try {
        let litros = dist / consumo;
        let qtdParadas = litros / capac;

        qtdParadas = Math.ceil(qtdParadas);

        let msg = "Você precisará fazer " + qtdParadas + " paradas para abastecer."
        if (capac <= 0 || consumo <= 0 || dist <= 0) {
            msg = "Valor inválido"
        }
        return msg;

    }
    catch (err) {
        return (err.message)
    }
}

function Febre(temperatura) {
    try {
        let msg = ""

        if(temperatura >= 41) {
            msg = "A situação para temperatura é Hipertermia"

        }
        else if(temperatura >= 39.6 && temperatura < 41) {
            msg = "A situação para sua temperatura é Febre Alta"
        }
        else if (temperatura >= 37.5 && temperatura < 39.6 ) {
            msg = "A situação para sua temperatura é Febre"
        }
        else if (temperatura >= 36 && temperatura < 37.5 )  {
            msg = "A situação para sua temperatura é Normal"
        }
        else {
            msg = "Hipotermia"
        }
        return msg;
    }
    catch (err) {
        return (err.message)
    }
}


export { calcularGramas, seuSigno, calcularAcai, SalarioLiq, Paradas, Febre }