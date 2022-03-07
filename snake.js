'use stric'

window.addEventListener('load', () =>{
    var gameArea = document.querySelector('#gameArea');

    for(var y = 0; y < 20; y++){
        for(var x = 0; x < 20; x++){
            var cell = document.createElement('div');
            cell.setAttribute("class", "matriz");
            cell.setAttribute("id","x"+x+"y"+y);
            gameArea.append(cell);
            console.log("itera");
        }
    }

    var matriz = document.querySelectorAll(".matriz");
    coor();

    function coor() {
        var x = ['x0','x1','x2','x3','x4','x5','x6','x7','x8','x9','x10','x11','x12','x13','x14','x15','x16',
        'x17','x18','x19'];
        var y = ['y0','y1','y2','y3','y4','y5','y6','y7','y8','y9','y10','y11','y12','y13','y14','y15','y16','y17','y18','y19'];




    }


} );