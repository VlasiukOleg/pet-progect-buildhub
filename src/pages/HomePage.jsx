import { MaterialsCategoriesList } from "Components/MaterialsCategoriesList/MaterialsCategoriesList";
import { Container } from "Components/Container/Container";

export default function Home() {
    return (
      <Container>
        <h1>
          Замовлення матеріалів для ручної та машинної штукатурки
        </h1>
        <MaterialsCategoriesList/>
      </Container>
    );
  }