import React, { useCallback, useEffect, useMemo, useState } from "react";

import { IGroup, IGroupContext } from "../models/group";

export const GroupContext = React.createContext({} as IGroupContext);

function GroupContextProvider({ children }: any) {
  const [groups, setGroups] = useState([] as IGroup[]);
  const [currentSlug, setCurrentSlug] = useState("home");
  const [loading, setLoading] = useState(false);

  const getGroups = useCallback(async () => {
    await fetch(
      currentSlug === "home"
        ? `https://un4tel6z.directus.app/items/groups?fields=*,category.name,category.value&filter[status][_eq]=published&limit=12&page=1&meta=*`
        : `https://un4tel6z.directus.app/items/groups?fields=*,category.name,category.value&filter[category][value][_eq]=${currentSlug}&filter[status][_eq]=published&limit=12&page=1&meta=*`
    )
      .then(async (response) => {
        const { data }: { data: IGroup[] } = await response.json();
        setGroups(data);
      })
      .catch(() => {
        alert("error");
      });
  }, [currentSlug]);

  useEffect(() => {
    getGroups();
  }, [getGroups]);

  const data = useMemo(() => {
    return {
      groups,
      setGroups,
      getGroups,
      currentSlug,
      setCurrentSlug,
      loading,
      setLoading,
    };
  }, [groups]);

  return <GroupContext.Provider value={data}>{children}</GroupContext.Provider>;
}

export { GroupContextProvider };
