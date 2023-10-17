// ESTE ARCHIVO ES SIMPLEMENTE PARA TENER GUARDADA LA SOLUCIÓN ORIGINAL DEL EJERCICIO, NO LO HE HECHO YO
const strictEquals2 = function (a, b) {
  if (Object.is(a, b)) {
    if (Object.is(a, NaN)) {
      return false;
    }

    return true;
  }

  if (
    (Object.is(a, 0) && Object.is(b, -0)) ||
    (Object.is(a, -0) && Object.is(b, 0))
  ) {
    return true;
  }

  return false;
};

console.log(strictEquals2(1, 1));
console.log(strictEquals2(NaN, NaN));
console.log(strictEquals2(0, -0));
console.log(strictEquals2(-0, 0));
console.log(strictEquals2(1, '1'));
console.log(strictEquals2(true, false));
console.log(strictEquals2(false, false));
console.log(strictEquals2('water', 'oil'));
