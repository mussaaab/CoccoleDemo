import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  email: yup.string().email('Inserisci un indirizzo e-mail valido'),
  password: yup
    .string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
      'message error',
    ),
});
