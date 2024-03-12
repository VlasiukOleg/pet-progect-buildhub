import { Container } from 'Components/Container/Container';
import { Title } from './HomePage.styled';
import { OrderWrap } from './OrderPage.styled';

import { OrderList } from 'Components/OrderList/OrderList';
import { OrderForm } from 'Components/OrderForm/OrderForm';

export default function OrderPage() {
  return (
    <Container>
      <Title>Оформити замовлення</Title>
      <OrderWrap>
        <OrderList />
        <OrderForm />
      </OrderWrap>
    </Container>
  );
}
