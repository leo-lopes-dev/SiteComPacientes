// Funcao das opcoes no prontuario

function abrapronto(){
    var abrap = document.getElementById("opcoes");

    if (abrap.style.display === 'none' || abrap.style.display === '') {
        abrap.style.display = 'block';
    } else {
        abrap.style.display = 'none';
    }
}

// Funcao do celular aparecer a side

function abraside(){
    document.getElementById("side").style.display = "block";
}
function fechaside(){
    document.getElementById("side").style.display = "none"; 
}