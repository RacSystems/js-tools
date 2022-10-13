interface ICnpjOptions {
  defaultValue?: string;
}

function cnpj(value?: string | null, options?: ICnpjOptions): string {
  const defaultValue = options?.defaultValue || '';
  if (!value) {
    return defaultValue;
  }
  const cnpjFormatted = String(value)
    .replace(/[^0-9]/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
  return cnpjFormatted;
}

export default cnpj;
