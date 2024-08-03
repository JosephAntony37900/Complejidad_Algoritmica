export default class Pieza {
    #id
    #type //2 para tuercas, 1 para tornillos
    #size

    constructor(id, type, size = 1){
        this.#id = id
        this.#type = type
        this.#size = size
    }

    getId(){
        return this.#id
    }

    getType(){
        return this.#type
    }

    getSize(){
        return this.#size
    }
}