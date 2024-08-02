export default class Pieza {
    #type
    #size

    constructor(type, size = 1){
        this.#type = type
        this.#size = size
    }

    getType(){
        return this.#type
    }

    getSize(){
        return this.#size
    }
}