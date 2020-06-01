class Machine {
    constructor(vat) {
        this.vat = vat
        
}

setwather(value) {
    this.wather = value
    
}

start() {
if(this.water) {
    console.log('start');
    this.timerId = setTimeout(this.stop, 2000);
    return;
}
}

stop = () => {
if(this.start) {
    console.log('stop');
    clearTimeout(this.timerId);
    return;
}
}
}
const machine = new Machine(100)



class Codemacine extends Machine {
    constructor(vat) {
        super(vat);
    }


    sayHi() {
        if(this.stop){
            console.log('drink your coffe')
 
} 
}
}



const codemachine = new Codemacine(100)











