import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation } from 'react-query';
import { login  } from '../../services/authService';
 
const loginValidationSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

 
 
export const useAuthForm = () => {
  const mutation = useMutation( (data: { email: string, password: string }) => login(data.email, data.password) );

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '', 
    },
    validationSchema:  loginValidationSchema  ,
    onSubmit: async (values) => {
      try { 
          await mutation.mutateAsync({email:values.email, password: values.password});
          alert('Login Successful');
    
      
      } catch (error) {
        alert('An error occurred');
      }
    },
  });

  return {
    formik,
    isLoading: mutation.isLoading,
  };
};
