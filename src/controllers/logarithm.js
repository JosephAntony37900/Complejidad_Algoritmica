import compare from "./compare.js";

let cont = 0

function mergeSort(array) {
  if (array.length <= 1) return array

  const mid = Math.floor(array.length / 2)
  const left = mergeSort(array.slice(0, mid))
  const right = mergeSort(array.slice(mid))

  return merge(left, right)
}

function merge(left, right) {
  let result = [], leftIndex = 0, rightIndex = 0
  while (leftIndex < left.length && rightIndex < right.length) {
    cont++
    if (compare(left[leftIndex].getSize(), right[rightIndex].getSize()) < 0) {
      result.push(left[leftIndex])
      leftIndex++
    } else {
      result.push(right[rightIndex])
      rightIndex++
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

function logarithm(tuercas, tornillos) {
  let pares = []
  let tuercasOrdered = mergeSort(tuercas), tornillosOrdered = mergeSort(tornillos)

  for (let i = 0; i < tuercas.length; i++) {
    pares.push({ tuerca: tuercasOrdered[i], tornillo: tornillosOrdered[i] })
    cont++
  }
  console.log('Iteraciones de Logaritmica', cont);

  return pares
}

export default logarithm;