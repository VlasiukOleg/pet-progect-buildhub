import {
  MaterialsWrap,
  ImgWrap,
  InfoWrap,
  Price,
  QuantityWrap,
  DecreaseBtn,
  IncreaseBtn,
  Input,
  TotalPrice,
} from './MaterialsList.styled';

export const MaterialsList = ({
  image,
  title,
  description,
  price,
  quantity,
  index,
  ind,
  onChangeQuantity,
  handleChange,
  totalPrice,
}) => {
  const handleFocus = e => {
    let value = e.currentTarget.value.trim();

    // Видаляємо ведучі нулі, якщо значення дорівнює "0"
    if (value === '0') {
      e.currentTarget.value = '';
    }
  };

  const handleBlur = e => {
    let value = e.currentTarget.value.trim();

    // Перевіряємо, чи значення після видалення нулів не є порожнім рядком
    if (!value) {
      e.currentTarget.value = '0';
    }
  };

  return (
    <MaterialsWrap>
      <ImgWrap>
        <img src={image} alt={title} />
      </ImgWrap>

      <InfoWrap>
        <h2>{title}</h2>
        <p>{description}</p>
        <Price>Ціна: {price} грн.</Price>
      </InfoWrap>
      <QuantityWrap>
        <DecreaseBtn onClick={() => onChangeQuantity(index, ind, -1)}>
          -
        </DecreaseBtn>
        <Input
          type="number"
          name="quantity"
          value={quantity}
          min="1"
          onChange={e => handleChange(e, index, ind)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <IncreaseBtn onClick={() => onChangeQuantity(index, ind, 1)}>
          +
        </IncreaseBtn>
      </QuantityWrap>
      <TotalPrice>{totalPrice.toFixed(2)} грн.</TotalPrice>
    </MaterialsWrap>
  );
};
