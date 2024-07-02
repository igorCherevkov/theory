'use strict';

const user = {
    name: 20,
    sayHi() {
        console.log(this.name)
    },
    func: () => {
        console.log(this.name)
    },
    newFunc: function() {
        let funcWithThis = function() {
            console.log(this.name)
        };

        funcWithThis.apply(this);
    }
}

user.sayHi(); // 20
user.func(); // undefined
user.newFunc(); // 20, если бы apply не было, была бы ошибка

// newnewnewn
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert( this.step );
      return this;
    }
  };
  
  ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0