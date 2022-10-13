import { ValidationError } from 'yup';

interface IErrors {
  [key: string]: string;
}

function getYupErrors(err: ValidationError): IErrors {
  const errors: IErrors = {};
  err.inner.forEach(error => {
    errors[String(error.path)] = error.message;
  });
  return errors;
}

export default getYupErrors;
