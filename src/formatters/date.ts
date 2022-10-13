import { format, parseISO } from 'date-fns';

interface IDateOptions {
  defaultValue?: string;
  mask?: string;
}

function date(value?: string | null, options?: IDateOptions): string {
  const defaultValue = options?.defaultValue || '';
  if (!value) {
    return defaultValue;
  }
  const mask = options?.mask || 'dd/MM/yyyy';
  const dateFormatted = format(parseISO(value), mask);
  return dateFormatted;
}

export default date;
