class Machine {
  constructor(vat) {
    this.vat = vat;
    this.ready = false;

  }

  setwather(value) {
    this.water = value

  }

  start() {
    if (this.water) {
      console.log('start');
      this.timerId = setTimeout(this.stop, 2000);
      this.ready = true
    }
  }

  stop = () => {
    if (this.start) {
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
  if(this.ready) {
    console.log('drink your coffe')

  }
}
}



const coffeemachine = new Codemacine(100)
coffeemachine.setwather(298);











