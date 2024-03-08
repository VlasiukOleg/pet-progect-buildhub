import { useSelector } from 'react-redux';
import {
  getMaterials,
  getDeliveryPrice,
  // getDeliveryType,
  getMovingPrice,
} from '../../redux/selectors';

import { OrderMaterial } from 'Components/OrderMaterial/OrderMaterial';

import {
  MaterialsOrderList,
  MaterialOrderItem,
  OrderListWrap,
  Delivery,
  Moving,
  Total,
} from './OrderList.styled';

export const OrderList = () => {
  const materials = useSelector(getMaterials);
  // const deliveryType = useSelector(getDeliveryType);
  const deliveryFee = useSelector(getDeliveryPrice);
  const movingFee = useSelector(getMovingPrice);

  const groupMaterials = materials.flatMap(material => material.materials);
  const filteredMaterialsByQuantity = groupMaterials.filter(
    material => material.quantity > 0
  );
  const total = groupMaterials.reduce((acc, value) => {
    return acc + value.price * value.quantity;
  }, 0);

  return (
    <OrderListWrap>
      <MaterialsOrderList>
        {filteredMaterialsByQuantity.map(material => {
          return (
            <MaterialOrderItem key={material.title}>
              <OrderMaterial material={material} />
            </MaterialOrderItem>
          );
        })}
      </MaterialsOrderList>
      <Delivery>Доставка: {deliveryFee} грн.</Delivery>
      <Moving>Розвантаження: {movingFee} грн. </Moving>
      <Total>
        Всього до оплати:{' '}
        <span>{(total + deliveryFee + movingFee).toFixed(2)} </span>грн.
      </Total>
    </OrderListWrap>
  );
};
