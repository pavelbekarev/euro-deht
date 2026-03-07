export const priceFormatter = (price: number) => {
  const priceString = price.toString();

  const digit = Math.floor(price / 10 ** 3).toString();
  const tail = priceString.slice(
    priceString.length - (priceString.length - digit.toString().length),
    priceString.length,
  );

  return [digit, tail].join(" ");
};
