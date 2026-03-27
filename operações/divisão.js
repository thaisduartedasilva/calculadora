function div() {

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

    if (numero2 === "0") {
        alert("Não é possível dividir por 0.");
        return;
    }

    let resultado = numero1 / numero2;

    alert(resultado);
}
