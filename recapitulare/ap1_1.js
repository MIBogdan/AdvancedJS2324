class Employee {
    constructor(nume) {
        this.nume = nume;
    }

    sayHello() {
        console.log(`Salut ${this.nume}`);
    }
}
class Manager extends Employee {
    constructor(nume, prenume) {
        super(nume);
        this.prenume = prenume;
      }
      sayHello() {
        console.log(`Salut ${this.nume} ${this.prenume}`);
    }
}

const ang = new Employee("Popescu");
ang.sayHello()

const man = new Manager("Dan", "Dumitrescu");
man.sayHello()