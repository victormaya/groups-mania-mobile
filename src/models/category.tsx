export interface ICategory {
  name: string
  value: string
  icon?: string
  id: number
}
export interface ICategoryContext {
  categories: ICategory[]
  setCategories: React.Dispatch<React.SetStateAction<ICategory[]>>
}

export interface IListCategories {
  categories: ICategory[]
}
