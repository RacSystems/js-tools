function fixAmountMoney(amount: string): string {
  let amountFormatted = amount;
  const period = amount.indexOf(',');
  if (period > -1) {
    amountFormatted =
      amount.substring(0, period).replace(/\s|\D/g, '') +
      amount.substring(period + 1).replace(/\s|\D/g, '');
  }
  let len = amountFormatted.length;
  while (len < 3) {
    amountFormatted = `0${amountFormatted}`;
    len = amountFormatted.length;
  }
  amountFormatted = `${amountFormatted.substring(
    0,
    len - 2,
  )},${amountFormatted.substring(len - 2, len)}`;
  while (amountFormatted.length > 4 && amountFormatted[0] === '0') {
    amountFormatted = amountFormatted.substring(1);
  }
  if (amountFormatted[0] === ',') {
    amountFormatted = `0${amountFormatted}`;
  }
  return amountFormatted;
}

function money(value: string): string {
  const valueClean = value.replace(/[^0-9]/g, '');
  const n = valueClean[valueClean.length - 1];
  if (Number.isNaN(Number(n))) {
    const moneyTypingFormatted = valueClean.substring(0, valueClean.length - 1);
    return moneyTypingFormatted;
  }
  const moneyTypingFormatted = fixAmountMoney(valueClean);
  return moneyTypingFormatted;
}

export default money;
