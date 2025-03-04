import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation } from 'react-query';
import { login ,register } from '../../services/authService';
import { registerPayload } from '../../types/auth.type';
 
 const loginValidationSchema = Yup.object({
  username: Yup.string().required('username is required'),
  password: Yup.string().min(8, 'Password must be at least 6 characters').required('Password is required'),
});

 
 
export const useLoginForm = () => {
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


 






const RegiisterValidationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 6 characters').required('Password is required'),
});

 
 
export const useRegisterForm = () => {
  const mutation = useMutation( (data: registerPayload) => register(data) );

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '', 
      email: '',
    },
    validationSchema:  RegiisterValidationSchema  ,
    onSubmit: async (values) => {
      try { 
          await mutation.mutateAsync({email:values.email ,username:values.username, password: values.password});
          alert('register Successful');
    
      
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
