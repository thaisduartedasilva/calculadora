function soma(){

    let numero1 = document.getElementById('numero1us').value;
    let numero2 = document.getElementById('numero2us').value;

    if (numero1 === "" || numero2 === "") {
        alert("Os campos estão vazios.");
        return;
    }

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Os valores não são números.");
        return;
    }

    let soma = Number(numero1) + Number(numero2);

    alert (soma);
    
}