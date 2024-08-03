import { caja } from "./dependencies.js";
import separateTornillosAndTuercas from "./separateTornillosAndTuercas.js";
import quadratic from "./quadratic.js";
import logarithm from "./logarithm.js";
import linear from "./linear.js";

let separados = separateTornillosAndTuercas(caja)

let tornillos = separados.tornillos
let tuercas = separados.tuercas

console.log('Tornillos: ', tornillos)
console.log('Tuercas:', tuercas);

function executeLog() {
  let timeLogStart = performance.now();

  let paresLog = logarithm(tuercas, tornillos)
  console.log('Resultado de algoritmo logrítmico', paresLog);

  let timeLogEnd = performance.now();

  console.log('Tiempo de ejecucion de la funcion Logaritmica: ', timeLogEnd - timeLogStart)
}
function executeQuad() {
  let timeQuadStart = performance.now();

  let paresQuad = quadratic(tuercas, tornillos)
  console.log('Resultado de algoritmo cuadratico', paresQuad);

  let timeQuadEnd = performance.now();

  console.log('Tiempo de ejecucion de la funcion cuadratica: ', timeQuadEnd - timeQuadStart)
}

function executeLine() {
  let timeLineStart = performance.now();

  let paresLine = linear(tuercas, tornillos)
  console.log('Resultado de algoritmo lineal', paresLine);

  let timeLineEnd = performance.now();

  console.log('Tiempo de ejecucion de la funcion lineal: ', timeLineEnd - timeLineStart)
}

executeLine()
executeLog()
executeQuad()