import {
  MaterialTitle,
  MaterialQuantity,
  MaterialPriceWrap,
  MaterialPrice,
  MaterialTotalPrice,
} from './OrderMaterial.styled';

export const OrderMaterial = ({ material }) => {
  return (
    <>
      <img src={material.image} width={50} height={50} alt={material.title} />
      <MaterialTitle>{material.title}</MaterialTitle>
      <MaterialQuantity>{material.quantity}</MaterialQuantity>
      <MaterialPriceWrap>
        <MaterialPrice>{material.price} грн.</MaterialPrice>
        <MaterialTotalPrice>
          {(material.quantity * material.price).toFixed(2)} грн.
        </MaterialTotalPrice>
      </MaterialPriceWrap>
    </>
  );
};
