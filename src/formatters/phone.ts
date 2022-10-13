interface IPhoneOptions {
  defaultValue?: string;
}

function phone(
  value?: string | number | null,
  options?: IPhoneOptions,
): string {
  const defaultValue = options?.defaultValue || '';
  if (!value) {
    return defaultValue;
  }
  const valueClean = String(value).replace(/[^0-9]/g, '');
  if (valueClean.substring(0, 4) === '0800') {
    const specialPhoneFormatted = valueClean
      .replace(/[^0-9]/g, '')
      .replace(/(\d{4})(\d)/, '$1 $2')
      .replace(/(\d{4}) (\w+)/, '$1 $2')
      .replace(/(\d{4}) (\w+)(\d{4})/, '$1 $2 $3');
    return specialPhoneFormatted;
  }
  const commonPhoneFormatted = valueClean
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4,5})(\d{4})/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');
  return commonPhoneFormatted;
}

export default phone;
