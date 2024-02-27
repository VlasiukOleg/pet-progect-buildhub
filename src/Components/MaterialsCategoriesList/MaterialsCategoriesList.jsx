import {
  CategoryWrap,
  CategoryNumber,
  CategoryTitle,
  CategoryInnerWrap,
  MaterialsWrap,
  ImgWrap,
  InfoWrap,
  Price,
  IncreaseBtn,
  DecreaseBtn,
  Input,
  QuantityWrap,
  TotalPrice,
  ToogleCategoryBtn,
  OrderBtnWrap,
} from './MaterialsCategoriesList.styled';

import { OrderButton } from 'Components/OrderBar/OrderBar.styled';

import products from '../../products/products.json';

import { useEffect, useState } from 'react';

import { OrderBar } from 'Components/OrderBar/OrderBar';

import { BiSolidDownArrow } from 'react-icons/bi';
import { BiSolidUpArrow } from 'react-icons/bi';
import { TbTruckDelivery } from 'react-icons/tb';
import { GiWeightLiftingUp } from 'react-icons/gi';

export const MaterialsCategoriesList = () => {
  const [materials, setMaterials] = useState([]);
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(false);
  const [isMovingOpen, setIsMovingOpen] = useState(false);
  const [deliveryPrice, setDelivery] = useState(0);
  const [totalMaterialsPrice, setTotalMaterialsPrice] = useState(0);

  const groupMaterials = materials.flatMap(material => material.materials);

  const total = groupMaterials.reduce((acc, value) => {
    return acc + value.price * value.quantity;
  }, 0);

  useEffect(() => {
    setMaterials([...products]);
    setTotalMaterialsPrice(prevState => prevState + total);
  }, [total]);

  const onDeliveryOpen = () => {
    setIsDeliveryOpen(prevState => !prevState);
  };

  const onMovingOpen = () => {
    setIsMovingOpen(prevState => !prevState);
  };

  const onAddMovingPrice = () => {};

  const onChangeQuantity = (index, ind, value) => {
    const updateQuantityField = [...materials];
    updateQuantityField[index].materials[ind].quantity =
      Number(updateQuantityField[index].materials[ind].quantity) + value;
    setMaterials(updateQuantityField);
  };

  const onCategoryOpen = index => {
    const updatedMaterials = [...materials];

    updatedMaterials[index].isCategoryOpen =
      !updatedMaterials[index].isCategoryOpen;

    setMaterials(updatedMaterials);
  };

  const handleChange = (e, index, ind) => {
    const updateQuantityField = [...materials];
    updateQuantityField[index].materials[ind].quantity = e.currentTarget.value;
    setMaterials(updateQuantityField);
  };

  const totalWeight = groupMaterials.reduce((acc, value) => {
    return acc + value.weight * value.quantity;
  }, 0);

  const onAddDeliveryToOrder = value => {
    setTotalMaterialsPrice(prevState => prevState + value);
  };

  const totalQuantity = groupMaterials.reduce((acc, value) => {
    return acc + value.quantity;
  }, 0);

  const deliveryCost = (value, weight) => {
    console.log(value.target.value);
    console.log(weight);
    if (weight > 0 && weight <= 2000) {
      setDelivery(800);
    } else if (weight > 2000 && weight <= 3000) {
      setDelivery(1200);
    } else if (weight > 3000 && weight <= 5000) {
      setDelivery(1500);
    } else if (weight > 5000 && weight <= 10000) {
      setDelivery(2000);
    } else {
      setDelivery('розраховується індивідуально');
    }
  };

  // deliveryCost(totalWeight);

  return (
    <>
      {totalQuantity > 0 && (
        <OrderBar
          quantity={totalQuantity}
          weight={totalWeight.toFixed(2)}
          total={totalMaterialsPrice.toFixed(2)}
        />
      )}
      {materials.map((product, index) => {
        console.log(product);
        return (
          <>
            <CategoryWrap>
              <CategoryInnerWrap>
                <CategoryNumber>{product.number}</CategoryNumber>
                <CategoryTitle>{product.categoryTitle}</CategoryTitle>
              </CategoryInnerWrap>
              <ToogleCategoryBtn
                onClick={() => onCategoryOpen(index)}
                type="button"
              >
                {!product.isCategoryOpen ? 'Розгорнути' : 'Згорнути'}
                {!product.isCategoryOpen ? (
                  <BiSolidDownArrow size="18px" />
                ) : (
                  <BiSolidUpArrow size="18px" />
                )}
              </ToogleCategoryBtn>
            </CategoryWrap>
            {product.isCategoryOpen &&
              product.materials.map((material, ind) => {
                const totalPrice = material.quantity * material.price;
                return (
                  <MaterialsWrap>
                    <ImgWrap>
                      <img src={material.image} alt={material.title} />
                    </ImgWrap>

                    <InfoWrap>
                      <h2>{material.title}</h2>
                      <p>{material.description}</p>
                      <Price>Ціна: {material.price} грн.</Price>
                    </InfoWrap>
                    <QuantityWrap>
                      <DecreaseBtn
                        onClick={() => onChangeQuantity(index, ind, -1)}
                        disabled={material.quantity === 0}
                      >
                        -
                      </DecreaseBtn>
                      <Input
                        type="text"
                        name="quantity"
                        value={material.quantity}
                        onChange={e => handleChange(e, index, ind)}
                      />
                      <IncreaseBtn
                        onClick={() => onChangeQuantity(index, ind, 1)}
                      >
                        +
                      </IncreaseBtn>
                    </QuantityWrap>
                    <TotalPrice>{totalPrice.toFixed(2)} грн.</TotalPrice>
                  </MaterialsWrap>
                );
              })}
          </>
        );
      })}
      <CategoryWrap>
        <CategoryInnerWrap>
          <CategoryNumber>
            <TbTruckDelivery size={16} color="#fff" />
          </CategoryNumber>
          <CategoryTitle>Доставка</CategoryTitle>
        </CategoryInnerWrap>
        <ToogleCategoryBtn onClick={onDeliveryOpen} type="button">
          {!isDeliveryOpen ? 'Розгорнути' : 'Згорнути'}
          {!isDeliveryOpen ? (
            <BiSolidDownArrow size="18px" />
          ) : (
            <BiSolidUpArrow size="18px" />
          )}
        </ToogleCategoryBtn>
      </CategoryWrap>
      {isDeliveryOpen && (
        <>
          <div>
            <label>
              Виберіть місто доставки
              <select
                name="city"
                onChange={e => {
                  deliveryCost(e, totalWeight);
                }}
              >
                <option value="Київ">Київ</option>
                <option value="Ірпінь">Ірпінь</option>
              </select>
            </label>
          </div>
          <div> Вартість доставки: {deliveryPrice} грн.</div>
          <button
            type="button"
            onClick={() => onAddDeliveryToOrder(deliveryPrice)}
          >
            Додати до замовлення
          </button>
        </>
      )}
      <CategoryWrap>
        <CategoryInnerWrap>
          <CategoryNumber>
            <GiWeightLiftingUp size={16} color="#fff" />
          </CategoryNumber>
          <CategoryTitle>Розвантаження</CategoryTitle>
        </CategoryInnerWrap>
        <ToogleCategoryBtn onClick={onMovingOpen} type="button">
          {!isDeliveryOpen ? 'Розгорнути' : 'Згорнути'}
          {!isDeliveryOpen ? (
            <BiSolidDownArrow size="18px" />
          ) : (
            <BiSolidUpArrow size="18px" />
          )}
        </ToogleCategoryBtn>
      </CategoryWrap>
      {isMovingOpen && (
        <>
          <div>Загальна вага замовлення - {totalWeight} кг.</div>
          <div>Вартість вантажників - {totalWeight * 0.6} грн.</div>
          <button type="button" onClick={onAddMovingPrice}>
            Додати до замовлення
          </button>
        </>
      )}
      {totalQuantity > 0 && (
        <OrderBtnWrap>
          <OrderButton to="/order" type="button">
            Переглянути та оформити замовлення
          </OrderButton>
        </OrderBtnWrap>
      )}
    </>
  );
};
