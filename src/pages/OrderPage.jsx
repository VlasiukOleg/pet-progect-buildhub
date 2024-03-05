import { Container } from 'Components/Container/Container';
import { Title } from './HomePage.styled';

import { OrderList } from 'Components/OrderList/OrderList';

export default function OrderPage() {
  return (
    <Container>
      <Title>Оформити замовлення</Title>
      <OrderList />
    </Container>
  );
}
