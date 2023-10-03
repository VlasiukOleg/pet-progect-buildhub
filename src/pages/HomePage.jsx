import { MaterialsCategoriesList } from "Components/MaterialsCategoriesList/MaterialsCategoriesList";
import { Container } from "Components/Container/Container";

import { Title } from "./HomePage.styled";

export default function Home() {
    return (
      <Container>
        <Title>
          Замовлення матеріалів для ручної та машинної штукатурки
        </Title>
        <MaterialsCategoriesList/>
      </Container>
    );
  }