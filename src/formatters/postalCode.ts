interface IPostalCodeOptions {
  defaultValue?: string;
}

function postalCode(
  value?: string | number | null,
  options?: IPostalCodeOptions,
): string {
  const defaultValue = options?.defaultValue || '';
  if (!value) {
    return defaultValue;
  }
  const postalCodeFormatted = String(value)
    .replace(/[^0-9]/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1');
  return postalCodeFormatted;
}

export default postalCode;
