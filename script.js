function calcular() {

    let codigo = Number(document.getElementById("codigo").value);
    let quantidade = Number(document.getElementById("quantidade").value);

    let preco;

    if (codigo == 1) {
        preco = 5.00;
    } else if (codigo == 2) {
        preco = 3.50;
    } else if (codigo == 3) {
        preco = 4.80;
    } else if (codigo == 4) {
        preco = 8.90;
    } else if (codigo == 5) {
        preco = 7.32;
    } else {
        document.getElementById("resultado").innerHTML = "Código inválido";
        return;
    }

    let total = preco * quantidade;

    document.getElementById("resultado").innerHTML =
        "Valor a pagar: R$ " + total.toFixed(2);
}
