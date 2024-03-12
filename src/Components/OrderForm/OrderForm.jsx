import { Form } from './OrderForm.styled';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const phoneRegex = /^(0\d{2}) (\d{3}) (\d{2}) (\d{2})$/;

const orderValidationSchema = Yup.object({
  firstName: Yup.string().required("Ім'я обов'язкове"),
  email: Yup.string().required('Введіть  email').email('Не правильний email'),
  phone: Yup.string()
    .matches(phoneRegex, 'не правильний телефон')
    .required('Введіть номер телефону'),
  address: Yup.string().required('Введіть адресу доставки'),
});

export const OrderForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(orderValidationSchema) });

  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="outlined"
        label="Ім'я"
        size="small"
        margin="normal"
        name="firstName"
        {...register('firstName')}
      />
      <p>{errors.firstName?.message}</p>
      <TextField
        id="outlined"
        label="Email"
        size="small"
        margin="normal"
        name="email"
        {...register('email')}
      />
      <p>{errors.email?.message}</p>
      <TextField
        id="outlined"
        label="Телефон (формат 068 888 88 88)"
        size="small"
        margin="normal"
        name="phone"
        {...register('phone')}
      />
      <p>{errors.phone?.message}</p>
      <TextField
        id="outlined"
        label="Адреса доставки"
        size="small"
        margin="normal"
        type="text"
        name="address"
        {...register('address')}
      />
      <p>{errors.address?.message}</p>
      <Button
        variant="contained"
        type="submit"
        size="medium"
        margin="normal"
        color="success"
        sx={{
          mt: 4,
        }}
      >
        Оформити замовлення
      </Button>
    </Form>
  );
};
