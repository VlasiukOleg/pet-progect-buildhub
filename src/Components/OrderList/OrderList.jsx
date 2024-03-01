import { useSelector } from 'react-redux';
import { getMaterials } from '../../redux/selectors';

export const OrderList = () => {
  const materials = useSelector(getMaterials);

  const groupMaterials = materials.flatMap(material => material.materials);
  const filteredMaterialsByQuantity = groupMaterials.filter(
    material => material.quantity > 0
  );

  return (
    <>
      {filteredMaterialsByQuantity.map(material => {
        return (
          <img
            src={material.image}
            width={100}
            height={100}
            alt={material.title}
          />
        );
      })}
    </>
  );
};
