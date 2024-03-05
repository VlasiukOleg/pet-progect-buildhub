import {
  MaterialTitle,
  MaterialQuantity,
  MaterialPriceWrap,
} from './OrderMaterial.styled';

export const OrderMaterial = ({ material }) => {
  return (
    <>
      <img src={material.image} width={50} height={50} alt={material.title} />
      <MaterialTitle>{material.title}</MaterialTitle>
      <MaterialQuantity>{material.quantity}</MaterialQuantity>
      <MaterialPriceWrap>
        <p>{material.price}</p>
        <p>{(material.quantity * material.price).toFixed(2)}</p>
      </MaterialPriceWrap>
    </>
  );
};
