function separateTornillosAndTuercas(array){
    let tornillos = []
    let tuercas = []
    for (let i = 0; i < array.length; i++) {
        if(array[i].getType() == 1){//1 para tornillos
            tornillos.push(array[i])
        }else{
            tuercas.push(array[i])
        }
    }

    return {tornillos: tornillos, tuercas: tuercas}
}

export default separateTornillosAndTuercas