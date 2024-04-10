class User{
    id;
    _nume;
    email;
    #varsta;
    constructor(id,nume,email, varsta){
        this.id = id;
        this._nume = nume;
        this.email = email;
        this.#varsta = varsta;
    }

    set nume(numeNou) {
        this._nume = numeNou;
    }
    get nume() {
        return this._nume;
    }

    set varsta(varstaNoua) {
        if (varstaNoua > 50 || varstaNoua < 16) {
            throw "Varsta incorecta";
        }
        this.#varsta = varstaNoua;
    }
    get varstaNoua() {
        return this.#varsta
    }

    mananca (claorii){
        console.log(`Mananca ${claorii} pe zi.`);
    }
    doarme(ore){
        console.log(`Doarme ${ore} ore pe zi`);
    }
}
export {User}