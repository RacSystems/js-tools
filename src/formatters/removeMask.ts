interface IRemoveMaskOptions {
  defaultValue?: string;
}

function removeMask(
  value?: string | null,
  options?: IRemoveMaskOptions,
): string {
  const defaultValue = options?.defaultValue || '';
  if (!value) {
    return defaultValue;
  }
  const removeMaskFormatted = value.replace(/[^0-9]/g, '');
  return removeMaskFormatted;
}

export default removeMask;
