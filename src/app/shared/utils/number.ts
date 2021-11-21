export const format = (number: string, fractionDigits: number = 2): string => {
  return parseFloat(number)
    .toFixed(fractionDigits)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const percentage = (number: number) => {
  return number.toFixed(2);
};
