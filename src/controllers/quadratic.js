import compare from "./compare.js";

function quadratic(tuercas, tornillos) {
  let n = tornillos.length
  let pares = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (compare(tuercas[i], tornillos[j]) === 0) {
        pares.push({tuerca: tuercas[i], tornillo: tornillos[j]});
        tornillos.splice(i, 1);
        
        j = n;
      }
    }
  }

  return pares;
}

export default quadratic