import React, { useContext, useState } from "react";
import { RefreshControl } from "react-native";
import { GroupContext } from "../../context/GroupContext";
import { IGroup, IListCards, IListGroups } from "../../models/group";
import Card from "../Card";
import Loading from "../Loading";
import { ContainerCardsList } from "./styles";

function CardsList({ data }: { data: IGroup[] }) {
  const { getGroups, loading, setLoading } = useContext(GroupContext);

  const onRefresh = React.useCallback(() => {
    getGroups();
    setLoading(false);
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <ContainerCardsList
      data={data}
      contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
      renderItem={({ item }: any) => <Card data={item} />}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={() => [setLoading(true), onRefresh()]}
        />
      }
    />
  );
}

export default CardsList;
