const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')

class game {
    constructor() {
        this.initialize()
    }

    initialize() {
        btnEmpezar.classList.add('hide')

    }
}

function startGame(){
alert("The game is about to start")
var game = new Game()
}