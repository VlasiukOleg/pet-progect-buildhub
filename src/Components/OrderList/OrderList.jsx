import { useSelector } from 'react-redux';
import { getMaterials } from '../../redux/selectors';

import { OrderMaterial } from 'Components/OrderMaterial/OrderMaterial';

import { MaterialsOrderList, MaterialOrderItem } from './OrderList.styled';

export const OrderList = () => {
  const materials = useSelector(getMaterials);

  const groupMaterials = materials.flatMap(material => material.materials);
  const filteredMaterialsByQuantity = groupMaterials.filter(
    material => material.quantity > 0
  );

  return (
    <MaterialsOrderList>
      {filteredMaterialsByQuantity.map(material => {
        return (
          <MaterialOrderItem key={material.title}>
            <OrderMaterial material={material} />
          </MaterialOrderItem>
        );
      })}
    </MaterialsOrderList>
  );
};
