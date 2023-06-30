const form = document.getElementById('form-formulario');

function validaNumero(numeroTotal) {
    const numeroComoArray = numeroTotal.split(' ');
    return numeroComoArray.length > numeroTotal
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const campoA = parseInt(document.getElementById('campo-a').value);
    const campoB = parseInt(document.getElementById('campo-b').value);

    function afereNumero(campoA, campoB) {
        if (campoA == campoB) {
            alert("Campo A é igual ao Campo B!");
            return false;
        } else if (campoA > campoB) {
            alert("Campo A é maior que o Campo B!");
            return true;
        } else if (campoA <campoB) {
            alert("Campo A é menor que o Campo B!");
            return false;
        }
    }

    formValido = afereNumero(campoA, campoB)
})