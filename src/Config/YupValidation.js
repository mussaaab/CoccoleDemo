import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  email: yup.string().email('Inserisci un indirizzo e-mail valido'),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
      'message error',
    ),
});
