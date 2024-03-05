import { OrderBtnWrap } from './CategoriesList.styled';

import { OrderButton } from 'Components/OrderBar/OrderBar.styled';

import { CategoryBar } from 'Components/CategoryBar/CategoryBar';
import { MaterialsList } from 'Components/MaterialsList/MaterialsList';
import { Delivery } from 'Components/Delivery/Delivery';
import { Moving } from 'Components/Moving/Moving';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleCategory,
  changeQuantity,
  inputChangeQuantity,
} from '../../redux/materialsSlice';
import { getMaterials } from '../../redux/selectors';

import { OrderBar } from 'Components/OrderBar/OrderBar';

import { TbTruckDelivery } from 'react-icons/tb';
import { GiWeightLiftingUp } from 'react-icons/gi';

export const MaterialsCategoriesList = () => {
  const dispatch = useDispatch();
  const materials = useSelector(getMaterials);

  const [isDeliveryOpen, setIsDeliveryOpen] = useState(false);
  const [isMovingOpen, setIsMovingOpen] = useState(false);

  const groupMaterials = materials.flatMap(material => material.materials);

  const total = groupMaterials.reduce((acc, value) => {
    return acc + value.price * value.quantity;
  }, 0);

  const onChangeQuantity = (catIndex, matIndex, value) => {
    console.log('Click');
    const payload = { catIndex, matIndex, value };

    dispatch(changeQuantity(payload));
  };

  const onCategoryOpen = index => {
    if (index === 100) {
      setIsDeliveryOpen(prevState => !prevState);
      return;
    }
    if (index === 200) {
      setIsMovingOpen(prevState => !prevState);
      return;
    }

    dispatch(toggleCategory(index));
  };

  const handleChange = (e, catIndex, matIndex) => {
    let value = e.currentTarget.value.trim();
    value = Math.max(0, value);
    value = parseInt(value, 10);
    const payload = { catIndex, matIndex, value };
    dispatch(inputChangeQuantity(payload));
  };

  const totalWeight = groupMaterials.reduce((acc, value) => {
    return acc + value.weight * value.quantity;
  }, 0);

  const totalQuantity = groupMaterials.reduce((acc, value) => {
    return acc + value.quantity;
  }, 0);

  return (
    <>
      {totalQuantity > 0 && (
        <OrderBar
          quantity={totalQuantity}
          weight={totalWeight.toFixed(2)}
          total={total.toFixed(2)}
        />
      )}
      {materials.map((product, index) => {
        console.log(product);
        return (
          <>
            <CategoryBar
              number={product.number}
              title={product.categoryTitle}
              index={index}
              isCategoryOpen={product.isCategoryOpen}
              onCategoryOpen={onCategoryOpen}
            />
            {product.isCategoryOpen &&
              product.materials.map((material, ind) => {
                const totalPrice = material.quantity * material.price;
                return (
                  <MaterialsList
                    image={material.image}
                    title={material.title}
                    description={material.description}
                    price={material.price}
                    quantity={material.quantity}
                    index={index}
                    ind={ind}
                    totalPrice={totalPrice}
                    onChangeQuantity={onChangeQuantity}
                    handleChange={handleChange}
                  />
                );
              })}
          </>
        );
      })}
      <CategoryBar
        number={<TbTruckDelivery size={16} color="#fff" />}
        title={'Доставка'}
        index={100}
        isCategoryOpen={isDeliveryOpen}
        onCategoryOpen={onCategoryOpen}
      />
      {isDeliveryOpen && <Delivery weight={totalWeight} />}
      <CategoryBar
        number={<GiWeightLiftingUp size={16} color="#fff" />}
        title={'Розвантаження'}
        index={200}
        isCategoryOpen={isMovingOpen}
        onCategoryOpen={onCategoryOpen}
      />
      {isMovingOpen && <Moving totalWeight={totalWeight} />}
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
