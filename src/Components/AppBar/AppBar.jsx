import { Navigation } from 'Components/Navigation/Navigation';
import { Header } from './AppBar.styled';

import { useSelector } from 'react-redux';
import { getMaterials } from '../../redux/selectors';

export const AppBar = () => {
  const materials = useSelector(getMaterials);
  const groupMaterials = materials.flatMap(material => material.materials);
  const totalQuantity = groupMaterials.reduce((acc, value) => {
    return acc + value.quantity;
  }, 0);

  return (
    <Header total={totalQuantity}>
      <Navigation />
    </Header>
  );
};
