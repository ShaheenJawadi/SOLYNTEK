import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation } from 'react-query';
import { login  } from '../../services/authService';
 
const loginValidationSchema = Yup.object({
  username: Yup.string().required('username is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

 
 
export const useAuthForm = () => {
  const mutation = useMutation( (data: { username: string, password: string }) => login(data.username, data.password) );

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '', 
    },
    validationSchema:  loginValidationSchema  ,
    onSubmit: async (values) => {
      try { 
          await mutation.mutateAsync({username:values.username, password: values.password});
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
