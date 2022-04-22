import { ValidationError } from 'yup';

// usa dessa forma quando nao quer passar um valor, pode ser
// de qualquer tipo desde que seja string nesse caso
interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach((error) => {
    validationErrors[error.path as string] = error.message;
  });

  return validationErrors;
}
