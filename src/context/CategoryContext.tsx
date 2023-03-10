import React, { useEffect, useMemo, useState } from 'react'

import { ICategory, ICategoryContext } from '../models/category'

export const CategoryContext = React.createContext({} as ICategoryContext)

function CategoryContextProvider({ children }: any) {
  const [categories, setCategories] = useState([] as ICategory[])

  async function getTabs() {
    await fetch('https://un4tel6z.directus.app/items/categories')
      .then(async (response) => {
        console.log("🚀 ~ file: CategoryContext.tsx:13 ~ .then ~ response:", response)
        const { data }: { data: ICategory[] } = await response.json()
        setCategories(data)
      })
      .catch(() => {
        alert('error')
      })
  }

  useEffect(() => {
    getTabs()
  }, [])

  const data = useMemo(() => {
    return { categories, setCategories }
  }, [categories])

  return (
    <CategoryContext.Provider value={data}>{children}</CategoryContext.Provider>
  )
}

export { CategoryContextProvider }
