function linear(tuercas, tornillos) {
  let tabla = new Map();
  let pares = [];

  tuercas.forEach(tuerca => tabla.set(tuerca.getSize(), []));
  tornillos.forEach(tornillo => {
    let tuerca = tabla.get(tornillo.getSize())
    tabla.set(tornillo.getSize(), [tuerca, tornillo]);
  });

  tabla.forEach((val) => {
    pares.push({ tuerca: val[0], tornillo: val[1] })
  });

  return pares;
}

export default linear