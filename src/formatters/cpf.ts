interface ICpfOptions {
  defaultValue?: string;
}

function cpf(value?: string | null, options?: ICpfOptions): string {
  const defaultValue = options?.defaultValue || '';
  if (!value) {
    return defaultValue;
  }
  const cpfFormatted = value
    .replace(/[^0-9]/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
  return cpfFormatted;
}

export default cpf;
