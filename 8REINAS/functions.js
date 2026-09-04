var contador = 0;
    function cellclick(celda){
        if(window.getComputedStyle(celda).backgroundImage == "none"){

            if(contador < 8){
                celda.style = `background-image: url('img/reina.png');
                            background-size: 25px; /* Ajusta el tamaño de la imagen en el cuadro */
                            background-repeat: no-repeat;
                            background-position: center; `;
                            contador++;
                            document.getElementById("reinasContador").innerHTML = `Reinas Colocadas: ${contador}`
                            bloquear(celda);
                            if(contador == 8){
                                document.getElementById("reinasGanador").innerHTML = `¡Felicidades, has colocado las 8 reinas!`
                            }
                            
            }
                            
        }else{
                celda.style = `background-image: none; `;
                contador--;
                document.getElementById("reinasContador").innerHTML = `Reinas Colocadas: ${contador}`
                reiniciarBloqueo(celda);
                celda.onclick = function(){
                    cellclick(this);
                };
            }
            
    }
        
function cambiar (r, c){
  const tablero = document.getElementById("tablero");

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (i === r || j === c || Math.abs(i - r) === Math.abs(j - c)) {
        tablero.rows[i].cells[j].style.backgroundColor = "red";
      }
    }
  }
}

function reinicio() {
    var celda = document.getElementsByTagName("td");
    for (let i = 0; i < celda.length; i++) {
        celda[i].style.backgroundColor="";
    }
}

function bloquear(celda){
    const row = celda.parentNode.rowIndex;
    const col = celda.cellIndex;
    const tablero = document.getElementById("tablero")
    /* bloqueamos la columna y el renglón */
    for (let i = 0; i < 8; i++){

        // horizontal
        if (i !== col){
        tablero.rows[row].cells[i].onclick = null;
    }

        // vertical
        if (i !== row){
        tablero.rows[i].cells[col].onclick = null;
    }
}
    // diagonal
    for(let i = -7; i <= 7; i++){

        // diagonal principal
        if(row + i >= 0 && row + i < 8 && col + i >= 0 && col + i < 8 && i !== 0){
        tablero.rows[row+i].cells[col+i].onclick = null;
        }

        // diagonal secundaria
        if(row + i >= 0 && row + i < 8 && col - i >= 0 && col - i < 8 && i !== 0){
        tablero.rows[row+i].cells[col-i].onclick = null;
        }
}
}

function reiniciarBloqueo(celda){
    const row = celda.parentNode.rowIndex;
    const col = celda.cellIndex;
    const tablero = document.getElementById("tablero")
    /* desbloqueamos la columna y el renglón */
    for (let i = 0; i < 8; i++){

        // horizontal
        tablero.rows[row].cells[i].onclick = function(){
            cellclick(this);
        }

        // vertical
        tablero.rows[i].cells[col].onclick = function(){
            cellclick(this);
        }
    }

    // diagonal
    for(let i = -7; i <= 7; i++){

        // diagonal principal
        if(row + i >= 0 && row + i <= 8 && col + i >= 0 && col + i < 8 && i !== 0){
        tablero.rows[row+i].cells[col+i].onclick = function(){
            cellclick(this);
        }
        }

        // diagonal secundaria
        if(row + i >= 0 && row + i <= 8 && col - i >= 0 && col - i < 8 && i !== 0){
        tablero.rows[row+i].cells[col-i].onclick = function(){
            cellclick(this);
        }
        }
}
}





