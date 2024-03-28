import { Title } from './HomePage.styled';
import { OrderWrap } from './OrderPage.styled';

import { OrderList } from 'Components/OrderList/OrderList';
import { OrderForm } from 'Components/OrderForm/OrderForm';

export default function OrderPage() {
  return (
    <>
      <Title>Оформити замовлення</Title>
      <OrderWrap>
        <OrderList />
        <OrderForm />
      </OrderWrap>
    </>
  );
}
