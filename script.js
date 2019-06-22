const blue = document.getElementById('blue')
const violet = document.getElementById('violet')
const orange = document.getElementById('orange')
const green = document.getElementById('green')
const btnEmpezar = document.getElementById('btnEmpezar')
const finalLevel = 10


class Game {
    constructor() {
        this.initialize = this.initialize.bind(this)
        this.initialize()
        this.generateSequence()
        setTimeout(this.nextLevel, 500)
        
    }

    initialize(){
        this.nextLevel = this.nextLevel.bind(this)
        this.chooseColor = this.chooseColor.bind(this)
        this.toggleBtnEmpezar()
        this.level = 1
        this.colors = {
            blue, 
            violet,
            orange,
            green
        }
    }

    toggleBtnEmpezar(){
        if(btnEmpezar.classList.contains('hide')){
            btnEmpezar.classList.remove('hide')
        } else {
            btnEmpezar.classList.add('hide')
        }
    }

    generateSequence() {
        this.sequence = new Array(finalLevel).fill(0).map(n => Math.floor(Math.random() * 4))
    }

    nextLevel(){
        this.sublevel = 0
        this.iluminateSequence()
        this.agregarEventsClick()
    }

    transformNumber(number){
        switch(number) {
            case 0:
                return 'blue'
            case 1:
                return 'violet'
            case 2:
                return 'orange'
            case 3: 
                return 'green'
        }
    }
    transformColor(color){
        switch(color) {
            case 'blue':
                return 0
            case 'violet':
                return 1
            case 'orange':
                return 2
            case 'green': 
                return 3
        }
    }

    iluminateSequence(){
        for (let i = 0; i < this.level; i++){
            const color = this.transformNumber(this.sequence[i])
            setTimeout(() => this.iluminateColor(color), 1000 * i) 
        }
    }

    iluminateColor(color){
        this.colors[color].classList.add('light')
        setTimeout(() => this.turnOffColor(color), 350)
    }

    turnOffColor(color){
        this.colors[color].classList.remove('light')
    }

    agregarEventsClick(){
        this.colors.blue.addEventListener('click', this.chooseColor)
        this.colors.violet.addEventListener('click', this.chooseColor)
        this.colors.orange.addEventListener('click', this.chooseColor)
        this.colors.green.addEventListener('click', this.chooseColor)
    }

    removeEventsClick(){
        this.colors.blue.removeEventListener('click', this.chooseColor)
        this.colors.violet.removeEventListener('click', this.chooseColor)
        this.colors.orange.removeEventListener('click', this.chooseColor)
        this.colors.green.removeEventListener('click', this.chooseColor) 
    }

    chooseColor(ev){ 
        const colorName = ev.target.dataset.color
        const colorNumber = this.transformColor(colorName)
        this.iluminateColor(colorName)
        if (colorNumber === this.sequence[this.sublevel]){
            this.sublevel++
            if (this.sublevel === this.level){
                this.level++   
                this.removeEventsClick() 
                if (this.level ===(finalLevel + 1)) {
                    this.ganoElJuego();
                    this.toggleBtnEmpezar();
                  } else {
                    setTimeout(this.nextLevel.bind(this), 1500);
        }
    }
 }
    else {
        this.perdioElJuego();
        this.toggleBtnEmpezar();
    }
}
    ganoElJuego(){
        swal("Congratulations!", "You win!", "success")

}
          
    perdioElJuego(){
        swal("Ups!", "Sorry, you are a looser!", "error")
    }
}
           

function startGame(){
   window.game = new Game()
}