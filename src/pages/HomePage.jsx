import { Container } from 'Components/Container/Container';
import { StorageMap } from 'Components/StorageMap/StorageMap';

export default function Home({ materials, onChangeQuantity }) {
  return (
    <Container>
      <StorageMap />
    </Container>
  );
}
