import { ContainerCategory, IconCategory, TextCategory } from "./styles";
import { ICategory } from "../../models/category";
import { SvgUri } from "react-native-svg";

function Category({ name, icon, value }: ICategory) {
  // value chama url
  return (
    <ContainerCategory>
      <IconCategory>
        <SvgUri
          width="30px"
          height="30px"
          uri={`https://un4tel6z.directus.app/assets/${icon}`}
        />
      </IconCategory>
      <TextCategory>{name}</TextCategory>
    </ContainerCategory>
  );
}

export default Category;
