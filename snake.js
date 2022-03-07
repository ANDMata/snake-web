'use stric'

window.addEventListener('load', () =>{
    var gameArea = document.querySelector('#gameArea');

    for(var y = 0; y < 20; y++){
        for(var x = 0; x < 20; x++){
            var cell = document.createElement('div');
            cell.setAttribute("class", "matriz");
            gameArea.append(cell);
            console.log("itera");
        }
    }

} );