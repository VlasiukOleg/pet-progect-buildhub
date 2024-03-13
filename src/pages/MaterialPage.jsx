import { MaterialsCategoriesList } from 'Components/CategoriesList/CategoriesList';
import { Container } from 'Components/Container/Container';
import { useEffect } from 'react';

import { Title } from './HomePage.styled';

export default function MaterialsPage({ materials, onChangeQuantity }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Title>Замовлення матеріалів для ручної та машинної штукатурки</Title>
      <MaterialsCategoriesList
        materials={materials}
        onChangeQuantity={onChangeQuantity}
      />
    </Container>
  );
}
