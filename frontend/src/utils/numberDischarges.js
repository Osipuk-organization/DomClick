export const numberDischarges = function (number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}