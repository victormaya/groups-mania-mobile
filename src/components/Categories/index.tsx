import { useState } from "react";
import { ICategory } from "../../models/category";
import Category from "../Category";
import {
  ContainerCategories,
  CategoriesText,
  Ball,
  Icon,
  FlatListCategory,
} from "./styles";

function Categories({data}: {data: ICategory[]}) {
  const [opened, setOpened] = useState(false);

  return (
    <ContainerCategories onPress={() => setOpened(!opened)}>
      <CategoriesText>Categorias</CategoriesText>
      {opened && data.length && (
        <FlatListCategory
          data={data}
          renderItem={({ item }: any) => (
            <Category
              name={item.name}
              value={item.value}
              id={item.id}
              icon={item.icon}
            />
          )}
        />
      )}
      <Ball>
        <Icon opened={opened} />
      </Ball>
    </ContainerCategories>
  );
}

export default Categories;
