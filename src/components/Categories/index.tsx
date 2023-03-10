import { useContext, useState } from "react";
import { FlatList } from "react-native";
import { CategoryContext } from "../../context/CategoryContext";
import Category from "../Category";
import {
  ContainerCategories,
  CategoriesText,
  Ball,
  Icon,
  FlatListCategory,
} from "./styles";

function Categories() {
  const [opened, setOpened] = useState(false);
  const { categories } = useContext(CategoryContext);
  return (
    <ContainerCategories onPress={() => setOpened(!opened)}>
      <CategoriesText>Categorias</CategoriesText>
      {opened && (
        <FlatListCategory
          data={categories}
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
