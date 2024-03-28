import { MaterialsCategoriesList } from 'Components/CategoriesList/CategoriesList';
import { useEffect } from 'react';

import { Title } from './HomePage.styled';

export default function MaterialsPage({ materials, onChangeQuantity }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Title>Замовлення матеріалів для ручної та машинної штукатурки</Title>
      <MaterialsCategoriesList
        materials={materials}
        onChangeQuantity={onChangeQuantity}
      />
    </>
  );
}
