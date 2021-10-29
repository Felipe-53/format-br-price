const allowedArgTypes = ['number', 'string'];

function formatPrice(price: number | string) {
  const argType = typeof price;

  if (!allowedArgTypes.includes(argType)) {
    throw Error(`The the argument '${price}'' of type ${argType} passed is not allowed`)
  }

  if (argType === 'string') {
    const originalInput = price;
    price = Number(price);
    if (Number.isNaN(price)) {
      throw Error(`${originalInput} is not a valid argument`);
    }
  }

  const formatedPriceString = price.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })

  return formatedPriceString;
}

export default formatPrice;
