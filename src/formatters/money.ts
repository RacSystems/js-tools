interface IMoneyOptions {
  addPrefix?: boolean;
  defaultValue?: string;
}

function money(value?: number | null, options?: IMoneyOptions): string {
  const defaultValue = options?.defaultValue || '0,00';
  if (!value) {
    if (options?.addPrefix) {
      return `R$ ${defaultValue}`;
    }
    return defaultValue;
  }
  const moneyFormatted = value
    .toFixed(2)
    .replace('.', ',')
    .replace(/(\d)(\d{3}),/g, '$1.$2,')
    .replace(/(\d)(\d{3})\.(\d{3}),/g, '$1.$2.$3,');
  if (options?.addPrefix) {
    const moneyFormattedWithPrefix = `R$ ${moneyFormatted}`;
    return moneyFormattedWithPrefix;
  }
  return moneyFormatted;
}

export default money;
