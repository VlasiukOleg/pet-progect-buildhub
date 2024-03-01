import { MaterialsCategoriesList } from 'Components/CategoriesList/CategoriesList';
import { Container } from 'Components/Container/Container';
import { CityBtn } from './HomePage.styled';
import map from '../images/isometric-map-of-kyiv-oblast.jpg';

import { Title } from './HomePage.styled';

export default function Home({ materials, onChangeQuantity }) {
  return (
    <Container>
      <CityBtn type="button">Київ</CityBtn>
      <img src={map} alt="map of kiyvskiy region" width={500}></img>
      <Title>Замовлення матеріалів для ручної та машинної штукатурки</Title>
      <MaterialsCategoriesList
        materials={materials}
        onChangeQuantity={onChangeQuantity}
      />
    </Container>
  );
}
