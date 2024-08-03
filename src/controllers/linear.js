function linear(tuercas, tornillos) {
  let tabla = new Map();
  let pares = [];

  tuercas.forEach(tuerca => tabla.set(tuerca.getSize(), tuerca));
  tornillos.forEach(tornillo => {
    let tuerca = tabla.get(tornillo.getSize())
    pares.push({ tuerca: tuerca, tornillo: tornillo })
  });

  return pares;
}

export default linear