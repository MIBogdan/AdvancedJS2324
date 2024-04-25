class Student2 {  
    public studCode: number;  
    protected studName: string; 
    private studYear: number; 
    constructor(code: number, name: string, year: number){  
        this.studCode = code;  
        this.studName = name;  
        this.studYear = year;
        }  
}  
class Person extends Student2 {  
    private department: string;  
  
    constructor(code: number, name: string, department: string, year: number) {  
        super(code, name, year);  
        this.department = department;  
    }  
    public getElevatorPitch() {  
        return (`My unique code: ${this.studCode}, my name: ${this.studName} and I am in ${this.department} Branch.`);  
    }  
}  
let joeRoot: Person = new Person(1, "Ion", "PS", 2);  // dar year nu o sa mearga din cauza ca este private si poate fi folosit doar in clasa respectiva.
console.log(joeRoot.getElevatorPitch());  