import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import Card from "../../components/Card";
import CardsList from "../../components/CardsList";
import ContainerDefault from "../../components/ContainerDefault/Index";
import TitlePage from "../../components/TitlePage";
import { GroupContext } from "../../context/GroupContext";
import { IGroup } from "../../models/group";

function Home() {
  const { groups } = useContext(GroupContext);
  return (
    <ContainerDefault>
      <TitlePage title="Adicionados recentemente" />
      {groups && groups.length > 0 && <CardsList data={groups} />}
    </ContainerDefault>
  );
}

export default Home;
