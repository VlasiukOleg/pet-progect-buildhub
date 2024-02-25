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
} from './MaterialsCategoriesList.styled';

import products from '../../products/products.json';

import { useEffect, useState } from 'react';

import { OrderBar } from 'Components/OrderBar/OrderBar';

import { BiSolidDownArrow } from 'react-icons/bi';
import { BiSolidUpArrow } from 'react-icons/bi';

export const MaterialsCategoriesList = () => {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    setMaterials([...products]);
  }, []);

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

  const groupMaterials = materials.flatMap(material => material.materials);

  const totalWeight = groupMaterials.reduce((acc, value) => {
    return acc + value.weight * value.quantity;
  }, 0);

  const total = groupMaterials.reduce((acc, value) => {
    return acc + value.price * value.quantity;
  }, 0);

  const totalQuantity = groupMaterials.reduce((acc, value) => {
    return acc + value.quantity;
  }, 0);

  return (
    <>
      {totalQuantity > 0 && (
        <OrderBar weight={totalWeight} total={total.toFixed(2)} />
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
    </>
  );
};

// {
//         "image": "https://drive.google.com/file/d/1gMDEjO0Ma94DwzIFG9pLVSOE6gtAJGm5/preview",
//         "title": "Штукатурка Kreisel РМ51 (501) вапняно-цементна машинна",
//         "description": "Застосовується зовні та всередині будівель на стінах, зведених з блоків ніздрюватого бетону (піно- та газобетон), керамічних блоків, а також на бетонних основах. Може використовуватись як основа під декора-тивні штукатурки, фарби або подальше облицювання керамічною плиткою.",
//         "weight": 30,
//         "price": 250
//       }
