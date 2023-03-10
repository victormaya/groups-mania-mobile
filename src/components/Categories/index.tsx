import { useState } from "react";
import { ContainerCategories, CategoriesText, Ball, Icon } from "./styles";


function Categories() {
  const [opened, setOpened] = useState(false);


  return (
    <ContainerCategories onPress={() => setOpened(!opened)}>
      <CategoriesText>Categorias</CategoriesText>
      <Ball>
        <Icon opened={opened} />
      </Ball>
    </ContainerCategories>
  );
}

export default Categories;
