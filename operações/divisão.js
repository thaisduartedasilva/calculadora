function div(){

    const numero1 = document.getElementById('numero1us').value;
    const numero2 = document.getElementById('numero2us').value;

    if (numero2 = 0){
        alert("Não é permitido dividir um número por zero!");

    }else{
        let div = Number(numero1) / Number(numero2);
        alert (div);
        
    }

}