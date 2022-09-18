import * as yup from 'yup';
import { FORMS_MESSAGES } from '../../../../constants/forms';

export const validationSchema = yup.object().shape({
    email: yup.string().email(FORMS_MESSAGES.EMAIL).required(FORMS_MESSAGES.REQUIRED),
    password: yup.string().required(FORMS_MESSAGES.REQUIRED).matches(/^(?=.*[a-z])(?=.*\d)[a-z\d\w\W]{8,}$/, FORMS_MESSAGES.PASS_MATCHES),
  });