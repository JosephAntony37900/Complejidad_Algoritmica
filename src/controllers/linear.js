function linear(tuercas, tornillos) {
  let tabla = new Map();
  let pares = [];
  let cont = 0

  tuercas.forEach(tuerca => {
    tabla.set(tuerca.getSize(), tuerca)
    cont++
  });
  tornillos.forEach(tornillo => {
    let tuerca = tabla.get(tornillo.getSize())
    pares.push({ tuerca: tuerca, tornillo: tornillo })
    cont ++
  });

  console.log('Iteraciones de lineal', cont);
  
  return pares;
}

export default linear