import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login,register } from '../../store/auth.slice'; 
import { AppDispatch } from '../../store';


const loginValidationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  password: Yup.string().min(8, 'Password must be at least 6 characters').required('Password is required'),
});

export const useLoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '', 
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      try {
        await dispatch(login({ username: values.username, password: values.password })).unwrap();
        alert('Login Successful');
      } catch (error) {
        alert('An error occurred');
      }
    },
  });

  return {
    formik,
    isLoading: false,  
  };
};
 

const registerValidationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 6 characters').required('Password is required'),
});

export const useRegisterForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '', 
      email: '',
    },
    validationSchema: registerValidationSchema,
    onSubmit: async (values) => {
      try { 
        await dispatch(register({ email: values.email, username: values.username, password: values.password })).unwrap();
        alert('Registration Successful');
      } catch (error) {
        alert('An error occurred');
      }
    },
  });

  return {
    formik,
    isLoading: false, 
  };
};
