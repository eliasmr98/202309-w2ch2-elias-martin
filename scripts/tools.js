export const strictEquals = (a, b) => {
  if (isNaN(a) && isNaN(b)) {
    return false;
  }

  if (
    Object.is(a, b) ||
    (Object.is(a, -0) && Object.is(b, 0)) ||
    (Object.is(a, 0) && Object.is(b, -0))
  ) {
    return true;
  }

  if (!Object.is(a, b)) {
    return false;
  }
};
